<?php

namespace Biz\Goods\Entity;

use AppBundle\Common\ArrayToolkit;
use Biz\Course\CourseSetException;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\Course\Service\MemberService;
use VipPlugin\Biz\Vip\Service\LevelService;
use VipPlugin\Biz\Vip\Service\VipService;

/**
 * Class CourseEntity
 */
class CourseEntity extends BaseGoodsEntity
{
    public function getTarget($goods)
    {
        $product = $this->getProduct($goods['productId']);
        $courseSet = $this->getCourseSetService()->getCourseSet($product['targetId']);
        if (empty($courseSet)) {
            throw CourseSetException::NOTFOUND_COURSESET();
        }

        return $courseSet;
    }

    public function hitTarget($goods)
    {
        $product = $this->getProduct($goods['productId']);
        $this->getCourseSetService()->hitCourseSet($product['targetId']);
        $courseSet = $this->getCourseSetService()->getCourseSet($product['targetId']);

        return $courseSet['hitNum'];
    }

    public function getSpecsByTargetId($targetId)
    {
        $target = $this->getCourseService()->getCourse($targetId);
        if ($target['parentId'] > 0) {
            return null;
        }
        $product = $this->getProductService()->getProductByTargetIdAndType($target['courseSetId'], 'course');

        return $this->getGoodsService()->getGoodsSpecsByProductIdAndTargetId($product['id'], $targetId);
    }

    public function fetchTargets($goodses)
    {
        if (empty($goodses)) {
            return $goodses;
        }
        $productIds = ArrayToolkit::column($goodses, 'productId');
        $products = ArrayToolkit::index($this->getProductService()->findProductsByIds($productIds), 'id');
        $courseSetIds = ArrayToolkit::column($products, 'targetId');
        $courseSets = ArrayToolkit::index($this->getCourseSetService()->findCourseSetsByIds($courseSetIds), 'id');
        foreach ($goodses as &$goods) {
            $product = empty($products[$goods['productId']]) ? [] : $products[$goods['productId']];
            $courseSet = empty($courseSets[$product['targetId']]) ? [] : $courseSets[$product['targetId']];
            $goods['product'] = $product;
            $goods['courseSet'] = $courseSet;
        }

        return $goodses;
    }

    public function fetchSpecs($courses)
    {
        if (empty($courses)) {
            return $courses;
        }

        foreach ($courses as &$course) {
            $course['spec'] = $this->getSpecsByTargetId($course['id']);
            $course['goodsId'] = empty($course['spec']) ? 0 : $course['spec']['goodsId'];
            $course['specsId'] = empty($course['spec']) ? 0 : $course['spec']['id'];
        }

        return $courses;
    }

    public function canManageTarget($goods)
    {
        $courseSet = $this->getTarget($goods);

        return $this->getCourseSetService()->hasCourseSetManageRole($courseSet['id']);
    }

    public function buySpecsAccess($goods, $specs)
    {
        return $this->getCourseService()->canJoinCourse($specs['targetId']);
    }

    public function isSpecsStudent($goods, $specs, $userId)
    {
        return $this->getCourseMemberService()->isCourseStudent($specs['targetId'], $userId);
    }

    /**
     * @param $goods
     * @param $specs
     * @param $userId
     *
     * @return bool
     *              是否为老师
     */
    public function isSpecsTeacher($goods, $specs, $userId)
    {
        return $this->getCourseMemberService()->isCourseTeacher($specs['targetId'], $userId);
    }

    public function isSpecsMember($goods, $specs, $userId)
    {
        return $this->getCourseMemberService()->isCourseMember($specs['targetId'], $userId);
    }

    public function getVipInfo($goods, $specs, $userId)
    {
        if (!$this->isPluginInstalled('vip')) {
            return [null, null];
        }

        $vipUser = $this->getVipService()->getMemberByUserId($userId);
        if ($vipUser) {
            $vipUser['level'] = $this->getVipLevelService()->getLevel($vipUser['levelId']);
        }
        $course = $this->getCourseService()->getCourse($specs['targetId']);
        if ($course['vipLevelId']) {
            return [$this->getVipLevelService()->getLevel($course['vipLevelId']), $vipUser];
        }

        return [null, $vipUser];
    }

    public function canVipFreeJoin($goods, $specs, $userId)
    {
        if (!$this->isPluginInstalled('vip')) {
            return false;
        }

        $course = $this->getCourseService()->getCourse($specs['targetId']);
        $status = $this->getVipService()->checkUserInMemberLevel($userId, $course['vipLevelId']);

        return 'ok' === $status;
    }

    public function getSpecsTeacherIds($goods, $specs)
    {
        $course = $this->getCourseService()->getCourse($specs['targetId']);

        return $course['teacherIds'];
    }

    public function hasCertificate($goods, $specs)
    {
        return $this->getCourseService()->hasCertificate($specs['targetId']);
    }

    /**
     * @return CourseSetService
     */
    public function getCourseSetService()
    {
        return $this->biz->service('Course:CourseSetService');
    }

    /**
     * @return CourseService
     */
    public function getCourseService()
    {
        return $this->biz->service('Course:CourseService');
    }

    /**
     * @return MemberService
     */
    public function getCourseMemberService()
    {
        return $this->biz->service('Course:MemberService');
    }

    /**
     * @return LevelService
     */
    protected function getVipLevelService()
    {
        return $this->biz->service('VipPlugin:Vip:LevelService');
    }

    /**
     * @return VipService
     */
    protected function getVipService()
    {
        return $this->biz->service('VipPlugin:Vip:VipService');
    }
}
