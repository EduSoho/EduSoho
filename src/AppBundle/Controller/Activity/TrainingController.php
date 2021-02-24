<?php

namespace AppBundle\Controller\Activity;

use Biz\Activity\ActivityException;
use Biz\Activity\Service\ActivityService;
use Biz\Course\Service\CourseDraftService;
use Biz\User\UserException;
use Symfony\Component\HttpFoundation\Request;
use Biz\TrainingPlatform\Data\CourseCorrelation;

class TrainingController extends BaseActivityController implements ActivityActionInterface
{
    public function showAction(Request $request, $activity)
    {
        if (empty($activity)) {
            $this->createNewException(ActivityException::NOTFOUND_ACTIVITY());
        }
        // 获取课程绑定资源
        $bindInfo = (new CourseCorrelation())->getCourseBindResources($activity["fromCourseId"], $activity["mediaId"]);
        return $this->render('activity/training/show.html.twig', array(
            'activity' => json_encode($activity),
            'bindInfo' => json_encode($bindInfo['body']),
        ));
    }

    public function previewAction(Request $request, $task)
    {
        $activity = $this->getActivityService()->getActivity($task['activityId']);

        if (empty($activity)) {
            $this->createNewException(ActivityException::NOTFOUND_ACTIVITY());
        }

        $text = $this->getActivityService()->getActivityConfig('text')->get($activity['mediaId']);

        if (empty($text)) {
            $this->createNewException(ActivityException::NOTFOUND_ACTIVITY());
        }

        return $this->render('activity/text/preview.html.twig', array(
            'activity' => $activity,
            'text' => $text,
        ));
    }

    public function editAction(Request $request, $id, $courseId)
    {
        // $user = $this->getCurrentUser();
        // $activity = $this->getActivityService()->getActivity($id);
        // $text = $this->getActivityService()->getActivityConfig('text')->get($activity['mediaId']);
        // $draft = $this->getCourseDraftService()->getCourseDraftByCourseIdAndActivityIdAndUserId($courseId, $activity['id'], $user->id);

        // return $this->render('activity/text/modal.html.twig', array(
        //     'activity' => $activity,
        //     'text' => $text,
        //     'courseId' => $courseId,
        //     'draft' => $draft,
        // ));
    }

    // public function autoSaveAction(Request $request, $courseId, $activityId = 0)
    // {
    //     $user = $this->getCurrentUser();
    //     if (!$user->isLogin()) {
    //         $this->createNewException(UserException::UN_LOGIN());
    //     }

    //     $content = $request->request->get('content', '');

    //     if (empty($content)) {
    //         return $this->createJsonResponse(true);
    //     }

    //     $draft = $this->getCourseDraftService()->getCourseDraftByCourseIdAndActivityIdAndUserId($courseId, $activityId,
    //         $user->getId());

    //     if (empty($draft)) {
    //         $draft = array(
    //             'activityId' => $activityId,
    //             'title' => '',
    //             'content' => $content,
    //             'courseId' => $courseId,
    //         );

    //         $this->getCourseDraftService()->createCourseDraft($draft);
    //     } else {
    //         $draft['content'] = $content;
    //         $this->getCourseDraftService()->updateCourseDraft($draft['id'], $draft);
    //     }

    //     return $this->createJsonResponse(true);
    // }

    public function createAction(Request $request, $courseId)
    {
        // $user = $this->getCurrentUser();
        // $draft = $this->getCourseDraftService()->getCourseDraftByCourseIdAndActivityIdAndUserId($courseId, 0, $user->id);

        // return $this->render('activity/text/modal.html.twig', array(
        //     'courseId' => $courseId,
        //     'draft' => $draft,
        // ));
    }

    public function finishConditionAction(Request $request, $activity)
    {
        // $media = $this->getActivityService()->getActivityConfig('text')->get($activity['mediaId']);

        // return $this->render('activity/text/finish-condition.html.twig', array(
        //     'media' => $media,
        // ));
    }


    //跳转渲染
    public function createEditorAction(Request $request, $activity)
    {
        $tags = [];

        // 获取关联信息
        if ($activity['id'] > 0) {
            $result = (new CourseCorrelation())->getCourseBindResources($activity['fromCourseSetId'], $activity['mediaId']);
        } else {
            $result['body'] = [
                "lab_type" => 0
            ];
        }
        return $this->render('@activity/training/resources/views/create_or_update_body.html.twig', [
            'tags' => $tags,
            'activity' => $activity,
            'info' => $result['body']
        ]);
    }

    /**
     * @return CourseDraftService
     */
    public function getCourseDraftService()
    {
        return $this->createService('Course:CourseDraftService');
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->createService('Activity:ActivityService');
    }
}
