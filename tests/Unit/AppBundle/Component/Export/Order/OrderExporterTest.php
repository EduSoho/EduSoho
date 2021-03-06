<?php

namespace Tests\Unit\AppBundle\Component\Export\Order;

use AppBundle\Component\Export\Order\OrderExporter;
use Biz\BaseTestCase;

class OrderExporterTest extends BaseTestCase
{
    public function testGetContent()
    {
        self::$appKernel->getContainer()->set('biz', $this->getBiz());
        $this->mockBiz(
            'Order:OrderService',
            [
                [
                    'functionName' => 'searchOrders',
                    'returnValue' => [
                        [
                            'id' => 1,
                            'sn' => 212,
                            'title' => '11',
                            'status' => 'paid',
                            'price_amount' => 1,
                            'pay_amount' => 1,
                            'paid_coin_amount' => 0,
                            'paid_cash_amount' => 1,
                            'payment' => 1,
                            'user_id' => 2,
                            'source' => 'system',
                            'created_time' => 1111,
                            'pay_time' => 1222,
                        ],
                    ],
                    'withParams' => [
                    ],
                ],
            ]
        );

        $this->mockBiz(
            'User:UserService',
            [
                [
                    'functionName' => 'findUsersByIds',
                    'returnValue' => [
                            2 => [
                                'id' => 2,
                                'nickname' => 'test',
                                'email' => 'test@edusoho.com',
                                'verifiedMobile' => '1303123',
                            ],
                        ],
                    'withParams' => [
                    ],
                ],
               [
                    'functionName' => 'findUserProfilesByIds',
                    'returnValue' => [
                        2 => [
                            'id' => 2,
                            'truename' => 'lalala',
                        ],
                    ],
                    'withParams' => [
                    ],
                ],
            ]
        );
        $expoter = new OrderExporter(self::$appKernel->getContainer(), [
        ]);

        $result = $expoter->getContent(0, 3);
        $this->assertEquals([
            '212	',
            '11',
            'paid',
            0.01,
            0,
            0.01,
            0,
            0.01,
            1,
            '--',
            'test',
            'lalala',
            'test@edusoho.com',
            '1303123',
            '1970-1-01 08:18:31',
            '1970-1-01 08:20:22',
        ], $result[0]);
    }

    public function testCanExport()
    {
        $expoter = new OrderExporter(self::$appKernel->getContainer(), [
        ]);
        $this->assertEquals(true, $expoter->canExport());

        $biz = $this->getBiz();
        $user = $biz['user'];
        $user->setPermissions([]);

        $this->assertEquals(false, $expoter->canExport());
    }

    public function testGetTitles()
    {
        $expoter = new OrderExporter(self::$appKernel->getContainer(), [
        ]);

        $title = ['order.id', 'order.product_name', 'order.status', 'order.product_price', 'order.deduct_amount', 'order.price', 'order.coin_amount', 'order.cash_amount', 'order.payment_pattern', 'order.source', 'order.buyer.username', 'order.buyer.true_name', 'order.buyer.email', 'order.buyer.contact', 'order.created_time', 'order.paid_time'];

        $title = $expoter->getTitles();

        $this->assertArrayEquals($expoter->getTitles(), $title);
    }

    public function testBuildCondition()
    {
        self::$appKernel->getContainer()->set('biz', $this->getBiz());
        $this->mockBiz(
            'User:UserService',
            [
                [
                    'functionName' => 'getUserByNickname',
                    'returnValue' => ['id' => 3],
                    'withParams' => [
                        'lalal',
                    ],
                ],
            ]
        );
        $expoter = new OrderExporter(self::$appKernel->getContainer(), [
        ]);

        $conditions = [
            'orderItemType' => 'course',
            'keywordType' => 'title',
            'keyword' => 'lala',
            'startDateTime' => '1991-10-21',
            'endDateTime' => '2991-10-21',
            'buyer' => 'lalal',
            'displayStatus' => 'paid',
        ];

        $result = $expoter->buildCondition($conditions);
        $this->assertEquals('course', $result['order_item_target_type']);
        $this->assertEquals('lala', $result['title']);
        $this->assertEquals('687974400', $result['start_time']);
        $this->assertEquals('32244969600', $result['end_time']);
        $this->assertEquals(['fail', 'paid', 'refunding', 'success'], $result['statuses']);
        $this->assertEquals(3, $result['user_id']);
    }
}
