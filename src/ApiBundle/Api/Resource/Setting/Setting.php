<?php

namespace ApiBundle\Api\Resource\Setting;

use ApiBundle\Api\Annotation\ApiConf;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use ApiBundle\Api\Util\AssetHelper;
use AppBundle\Common\ArrayToolkit;
use AppBundle\Component\OAuthClient\OAuthClientFactory;
use Biz\Common\CommonException;
use Biz\OrderFacade\CoinCurrency;
use Biz\System\SettingException;
use Biz\User\UserException;

class Setting extends AbstractResource
{
    private $supportTypes = [
        'site', 'wap', 'register', 'payment', 'vip', 'magic', 'cdn', 'course', 'weixinConfig',
        'login', 'face', 'miniprogram', 'hasPluginInstalled', 'classroom', 'wechat', 'developer',
        'user', 'cloud', 'coin', 'coupon', 'mobile', 'appIm', 'cloudVideo', 'goods', 'backstage',
        'mail', 'openCourse', 'article', 'group',
    ];

    /**
     * @ApiConf(isRequiredAuth=false)
     */
    public function get(ApiRequest $request, $type)
    {
        $this->checkType($type);
        $method = "get${type}";

        return $this->$method($request);
    }

    /**
     * @ApiConf(isRequiredAuth=false)
     */
    public function search(ApiRequest $request)
    {
        $result = [];
        $types = $request->query->get('types', '');

        foreach ($types as $type) {
            $this->checkType($type);
        }

        foreach ($types as $type) {
            $result[$type] = $this->get($request, $type);
        }

        return $result;
    }

    public function getGoods()
    {
        $goodsSetting = $this->getSettingService()->get('goods_setting', []);

        return [
            'show_number_data' => empty($goodsSetting['show_number_data']) ? 'join' : $goodsSetting['show_number_data'],
            'show_review' => !isset($goodsSetting['show_review']) ? '1' : $goodsSetting['show_review'],
            'recommend_rule' => empty($goodsSetting['recommend_rule']) ? 'hot' : $goodsSetting['recommend_rule'],
        ];
    }

    public function getCloudVideo()
    {
        $storageSetting = $this->getSettingService()->get('storage');
        $fingerPrintSetting = [
            'video_fingerprint' => '0',
        ];
        $watermarkSetting = [
            'video_watermark' => '0',
        ];

        if (isset($storageSetting['video_watermark'])) {
            $storageSetting['video_watermark'] = strval($storageSetting['video_watermark']);
        }

        if (isset($storageSetting['video_fingerprint'])) {
            $storageSetting['video_fingerprint'] = strval($storageSetting['video_fingerprint']);
        }

        if (isset($storageSetting['video_fingerprint_time'])) {
            $storageSetting['video_fingerprint_time'] = strval($storageSetting['video_fingerprint_time']);
        }

        if (!empty($storageSetting)) {
            $fingerPrintSetting = ArrayToolkit::parts($storageSetting, [
                'video_fingerprint',
                'video_fingerprint_time',
            ]);

            $watermarkSetting = ArrayToolkit::parts($storageSetting, [
                'video_watermark',
                'video_watermark_image',
                'video_embed_watermark_image',
                'video_watermark_position',
            ]);

            foreach ($watermarkSetting as $key => &$value) {
                if (in_array($key, ['video_watermark_image', 'video_embed_watermark_image'])) {
                    $value = empty($value) ? '' : AssetHelper::getFurl($value);
                }
            }
        }

        return [
            'watermarkSetting' => $watermarkSetting,
            'fingerPrintSetting' => $fingerPrintSetting,
        ];
    }

    public function getAppIm($request)
    {
        $this->checkLogin();

        $appIm = $this->getSettingService()->get('app_im');

        return [
            'enabled' => empty($appIm['enabled']) ? 0 : $appIm['enabled'],
            'convNo' => empty($appIm['convNo']) ? null : $appIm['convNo'],
        ];
    }

    public function getMobile($request)
    {
        $mobileSetting = $this->getSettingService()->get('mobile', []);

        $splashs = [];
        for ($i = 1; $i < 6; ++$i) {
            if (!empty($mobileSetting['splash'.$i])) {
                $splashs[] = AssetHelper::uriForPath('/'.$mobileSetting['splash'.$i]);
            }
        }

        $defaultStudyCenter = [
            'liveScheduleEnabled' => '0',
            'historyLearningEnabled' => '1',
            'myCacheEnabled' => '1',
            'myQAEnabled' => '1',
        ];

        return [
            'enabled' => isset($mobileSetting['enabled']) ? (bool) $mobileSetting['enabled'] : true,
            'logo' => empty($mobileSetting['logo']) ? '' : AssetHelper::uriForPath('/'.$mobileSetting['logo']),
            'splashs' => $splashs,
            'appDiscoveryVersion' => $this->getH5SettingService()->getAppDiscoveryVersion(),
            'studyCenter' => empty($mobileSetting['studyCenter']) ? $defaultStudyCenter : array_merge($defaultStudyCenter, $mobileSetting['studyCenter']),
        ];
    }

    public function getUser($request = null)
    {
        $authSetting = $this->getSettingService()->get('auth');
        $loginSetting = $this->getSettingService()->get('login_bind');

        if (empty($loginSetting)) {
            SettingException::NOTFOUND_THIRD_PARTY_AUTH_CONFIG();
        }

        $result = [
            'auth' => [
                'register_mode' => $authSetting['register_mode'],
                'user_terms_enabled' => 'opened' == $authSetting['user_terms'] ? true : false,
                'privacy_policy_enabled' => 'opened' == $authSetting['privacy_policy'] ? true : false,
            ],
            'login_bind' => [
                'oauth_enabled' => (int) $loginSetting['enabled'] ? true : false,
                'weibo_enabled' => (int) $loginSetting['weibo_enabled'] ? true : false,
                'qq_enabled' => (int) $loginSetting['qq_enabled'] ? true : false,
                'weixinweb_enabled' => (int) $loginSetting['weixinweb_enabled'] ? true : false,
                'weixinmob_enabled' => (int) $loginSetting['weixinmob_enabled'] ? true : false,
            ],
        ];

        return $result;
    }

    public function getCloud($request = null)
    {
        $cloudSms = $this->getSettingService()->get('cloud_sms');

        $result = [
            'sms_enabled' => $cloudSms['sms_enabled'] ? true : false,
        ];

        return $result;
    }

    public function getCoin($request)
    {
        $coinSetting = $this->getSettingService()->get('coin');

        return [
            'name' => !empty($coinSetting['coin_name']) ? $coinSetting['coin_name'] : CoinCurrency::PREFIX,
            'cash_model' => !empty($coinSetting['cash_model']) ? $coinSetting['cash_model'] : 'none',
        ];
    }

    public function getHasPluginInstalled($request)
    {
        $pluginCodes = $request->query->get('pluginCodes', '');
        if (empty($pluginCodes)) {
            throw CommonException::ERROR_PARAMETER();
        }
        if (!is_array($pluginCodes)) {
            $pluginCodes = explode(',', $pluginCodes);
        }

        $results = [];
        foreach ($pluginCodes as $pluginCode) {
            $results[$pluginCode] = $this->isPluginInstalled($pluginCode) ? true : false;
        }

        return $results;
    }

    public function getSite($request = null)
    {
        $siteSetting = $this->getSettingService()->get('site');

        return [
            'name' => $siteSetting['name'],
            'analytics' => $siteSetting['analytics'],
            'url' => $request->getHttpRequest()->getSchemeAndHttpHost(),
            'logo' => empty($siteSetting['logo']) ? '' : $siteSetting['url'].'/'.$siteSetting['logo'],
        ];
    }

    public function getWeChat($request)
    {
        $weChatSetting = $this->getSettingService()->get('wechat', []);

        $result = [
            'enabled' => empty($weChatSetting['wechat_notification_enabled']) ? false : true,
            'official_qrcode' => empty($weChatSetting['account_code']) ? '' : $weChatSetting['account_code'],
        ];

        $filter = new WeChatSettingFilter();
        $filter->filter($result);

        return $result;
    }

    public function getWap($request = null)
    {
        $wapSetting = $this->getSettingService()->get('wap', ['version' => 0]);

        return [
            'version' => empty($wapSetting['version']) ? ['version' => 0] : $wapSetting['version'],
        ];
    }

    public function getRegister($request = null)
    {
        $registerSetting = $this->getSettingService()->get('auth', ['register_mode' => 'closed', 'email_enabled' => 'closed']);
        $registerMode = $registerSetting['register_mode'];
        $isEmailVerifyEnable = isset($registerSetting['email_enabled']) && 'opened' == $registerSetting['email_enabled'];
        $registerSetting = $this->getSettingService()->get('auth');
        $level = empty($registerSetting['register_protective']) ? 'none' : $registerSetting['register_protective'];
        $captchaEnabled = 'none' === $level ? false : true;

        return [
            'mode' => $registerMode,
            'level' => $level,
            'captchaEnabled' => $captchaEnabled,
            'emailVerifyEnabled' => $isEmailVerifyEnable,
        ];
    }

    /**
     * @return array
     * @ApiConf(isRequiredAuth=false)
     */
    public function getPayment($request = null)
    {
        $paymentSetting = $this->getSettingService()->get('payment', []);

        return [
            'enabled' => empty($paymentSetting['enabled']) ? false : true,
            'alipayEnabled' => empty($paymentSetting['alipay_enabled']) ? false : true,
            'wxpayEnabled' => empty($paymentSetting['wxpay_enabled']) ? false : true,
            'llpayEnabled' => empty($paymentSetting['llpay_enabled']) ? false : true,
        ];
    }

    public function getVip($request = null)
    {
        $vipSetting = $this->getSettingService()->get('vip', []);

        if (!empty($vipSetting['buyType'])) {
            switch ($vipSetting['buyType']) {
                case 10:
                    $buyType = 'year_and_month';
                    break;
                case 20:
                    $buyType = 'year';
                    break;
                case 30:
                    $buyType = 'month';
                    break;
                default:
                    $buyType = 'month';
                    break;
            }
        }

        return [
            'enabled' => empty($vipSetting['enabled']) ? false : true,
            'h5Enabled' => empty($vipSetting['h5Enabled']) ? false : true,
            'buyType' => empty($buyType) ? 'month' : $buyType,
            'upgradeMinDay' => empty($vipSetting['upgrade_min_day']) ? '30' : $vipSetting['upgrade_min_day'],
            'defaultBuyYears' => empty($vipSetting['default_buy_years']) ? '1' : $vipSetting['default_buy_years'],
            'defaultBuyMonths' => empty($vipSetting['default_buy_months']) ? '30' : $vipSetting['default_buy_months'],
        ];
    }

    public function getMagic($request = null)
    {
        $magicSetting = $this->getSettingService()->get('magic', []);
        $iosBuyDisable = isset($magicSetting['ios_buy_disable']) ? $magicSetting['ios_buy_disable'] : 0;
        $iosVipClose = isset($magicSetting['ios_vip_close']) ? $magicSetting['ios_vip_close'] : 0;

        return [
            'iosBuyDisable' => $iosBuyDisable,
            'iosVipClose' => $iosVipClose,
            'iosExchangeCouponClose' => isset($magicSetting['ios_exchange_coupon_close']) ? $magicSetting['ios_exchange_coupon_close'] : 0,
        ];
    }

    public function getCdn($request = null)
    {
        $cdn = $this->getSettingService()->get('cdn');

        return [
            'enabled' => empty($cdn['enabled']) ? false : true,
            'defaultUrl' => empty($cdn['defaultUrl']) ? '' : $cdn['defaultUrl'],
            'userUrl' => empty($cdn['userUrl']) ? '' : $cdn['userUrl'],
            'contentUrl' => empty($cdn['contentUrl']) ? '' : $cdn['contentUrl'],
        ];
    }

    public function getCourse($request = null)
    {
        $courseSetting = $this->getSettingService()->get('course', []);

        if (isset($courseSetting['show_student_num_enabled']) && 0 == $courseSetting['show_student_num_enabled']) {
            $showStudentNumEnabled = 0;
            $showHitNumEnabled = 0;
        } elseif (!empty($courseSetting['show_student_num_enabled']) && (isset($courseSetting['show_cover_num_mode'])) && ('hitNum' == $courseSetting['show_cover_num_mode'])) {
            $showStudentNumEnabled = 0;
            $showHitNumEnabled = 1;
        } else {
            $showStudentNumEnabled = 1;
            $showHitNumEnabled = 0;
        }

        return [
            'chapter_name' => empty($courseSetting['chapter_name']) ? '章' : $courseSetting['chapter_name'],
            'part_name' => empty($courseSetting['part_name']) ? '节' : $courseSetting['part_name'],
            'task_name' => empty($courseSetting['task_name']) ? '任务' : $courseSetting['task_name'],
            'show_student_num_enabled' => $showStudentNumEnabled,
            'show_hit_num_enabled' => $showHitNumEnabled,
            'show_review' => isset($courseSetting['show_review']) ? intval($courseSetting['show_review']) : 1,
            'show_question' => isset($courseSetting['show_question']) ? intval($courseSetting['show_question']) : 1,
            'show_discussion' => isset($courseSetting['show_discussion']) ? intval($courseSetting['show_discussion']) : 1,
            'show_note' => isset($courseSetting['show_note']) ? intval($courseSetting['show_note']) : 1,
            'allow_anonymous_preview' => isset($courseSetting['allowAnonymousPreview']) ? intval($courseSetting['allowAnonymousPreview']) : 1,
        ];
    }

    public function getFace($request = null)
    {
        $faceSetting = $this->getSettingService()->get('face', []);
        $featureSetting = $this->getSettingService()->get('feature', []);

        $settings = [
            'login' => [
                'enabled' => 0,
                'app_enabled' => 0,
                'pc_enabled' => 0,
                'h5_enabled' => 0,
            ],
        ];

        if (isset($featureSetting['face_enabled']) && 1 == $featureSetting['face_enabled']) {
            $settings['login']['enabled'] = isset($faceSetting['login']['enabled']) ? $faceSetting['login']['enabled'] : 0;
            $settings['login']['app_enabled'] = isset($faceSetting['login']['app_enabled']) ? $faceSetting['login']['app_enabled'] : 0;
            $settings['login']['pc_enabled'] = isset($faceSetting['login']['pc_enabled']) ? $faceSetting['login']['pc_enabled'] : 0;
            $settings['login']['h5_enabled'] = isset($faceSetting['login']['h5_enabled']) ? $faceSetting['login']['h5_enabled'] : 0;
        }

        return $settings;
    }

    public function getWeixinConfig($request = null)
    {
        $params = $request->query->all();
        if (empty($params['url'])) {
            return [];
        }
        $result = $this->container->get('web.twig.extension')->weixinConfig($params['url']);
        if (is_array($result) || empty($result)) {
            return $result;
        }

        return json_decode($result, true);
    }

    public function getMiniprogram($request = null)
    {
        $authorizations = $this->getMpService()->getAuthorization();

        return [
            'current_version' => empty($authorizations['current_version']) ? ['version' => '0.0.0'] : $authorizations['current_version'],
            'newest_version' => empty($authorizations['newest_version']) ? ['version' => '0.0.0'] : $authorizations['newest_version'],
        ];
    }

    public function getLogin()
    {
        $clients = OAuthClientFactory::clients();

        return $this->getLoginConnect($clients);
    }

    public function getClassroom()
    {
        $classroomSetting = $this->getSettingService()->get('classroom', []);

        return [
            'show_student_num_enabled' => isset($classroomSetting['show_student_num_enabled']) ? (bool) $classroomSetting['show_student_num_enabled'] : true,
            'show_review' => isset($classroomSetting['show_review']) ? (bool) $classroomSetting['show_review'] : true,
            'show_thread' => isset($classroomSetting['show_thread']) ? (bool) $classroomSetting['show_thread'] : true,
            'show_note' => isset($classroomSetting['show_note']) ? (bool) $classroomSetting['show_note'] : true,
        ];
    }

    public function getBackstage($request = null)
    {
        $backstage = $this->getSettingService()->get('backstage');

        return ['is_v2' => isset($backstage['is_v2']) ? (int) $backstage['is_v2'] : 0];
    }

    private function checkType($type)
    {
        if (!in_array($type, $this->supportTypes)) {
            throw CommonException::ERROR_PARAMETER();
        }
    }

    public function getCoupon()
    {
        $couponSetting = $this->getSettingService()->get('coupon', []);
        $default = [
            'enabled' => 1,
        ];
        $couponSetting = array_merge($default, $couponSetting);

        return $couponSetting;
    }

    public function getMail()
    {
        $cloudEmailCrm = $this->getSettingService()->get('cloud_email_crm', []);
        $mailer = $this->getSettingService()->get('mailer', []);

        return ['enabled' => (isset($cloudEmailCrm['status']) && 'enable' === $cloudEmailCrm['status']) || (isset($mailer['enabled']) && $mailer['enabled'])];
    }

    public function getOpenCourse()
    {
        $openCourseSetting = $this->getSettingService()->get('openCourse', []);

        return [
            'show_comment' => isset($openCourseSetting['show_comment']) ? intval($openCourseSetting['show_comment']) : 1,
        ];
    }

    public function getArticle()
    {
        $articleSetting = $this->getSettingService()->get('article', []);

        return [
            'show_comment' => isset($articleSetting['show_comment']) ? intval($articleSetting['show_comment']) : 1,
        ];
    }

    public function getGroup()
    {
        $groupSetting = $this->getSettingService()->get('group', []);

        return [
            'group_show' => isset($groupSetting['group_show']) ? intval($groupSetting['group_show']) : 1,
        ];
    }

    private function getLoginConnect($clients)
    {
        $default = $this->getDefaultLoginConnect($clients);
        $loginConnect = $this->getSettingService()->get('login_bind', []);
        $loginConnect = array_merge($default, $loginConnect);
        foreach ($clients as $type => $client) {
            if (isset($loginConnect["{$type}_secret"])) {
                unset($loginConnect["{$type}_secret"]);
            }
        }
        if (isset($loginConnect['weixinmob_mp_secret'])) {
            unset($loginConnect['weixinmob_mp_secret']);
        }

        return $loginConnect;
    }

    private function checkLogin()
    {
        $user = $this->getCurrentUser();
        if (empty($user) || 0 == $user['id']) {
            throw UserException::UN_LOGIN();
        }
    }

    private function getDefaultLoginConnect($clients)
    {
        $default = [
            'login_limit' => 0,
            'enabled' => 0,
            'verify_code' => '',
            'captcha_enabled' => 0,
            'temporary_lock_enabled' => 0,
            'temporary_lock_allowed_times' => 5,
            'ip_temporary_lock_allowed_times' => 20,
            'temporary_lock_minutes' => 20,
        ];

        foreach ($clients as $type => $client) {
            $default["{$type}_enabled"] = 0;
            $default["{$type}_key"] = '';
            $default["{$type}_set_fill_account"] = 0;
        }

        return $default;
    }

    /**
     * @return \Biz\System\Service\SettingService
     */
    private function getSettingService()
    {
        return $this->service('System:SettingService');
    }

    protected function getH5SettingService()
    {
        return $this->service('System:H5SettingService');
    }

    protected function getMpService()
    {
        return $this->service('Mp:MpService');
    }
}
