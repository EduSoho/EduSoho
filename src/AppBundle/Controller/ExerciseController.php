<?php

namespace AppBundle\Controller;

use Topxia\Service\Common\ServiceKernel;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Common\Exception\ResourceNotFoundException;

class ExerciseController extends BaseController
{
    public function startDoAction(Request $request, $lessonId, $exerciseId)
    {
        $exercise = $this->getTestpaperService()->getTestpaper($exerciseId);
        if (empty($exercise)) {
            throw new ResourceNotFoundException('exercise', $exerciseId);
        }

        list($course, $member) = $this->getCourseService()->tryTakeCourse($exercise['courseId']);

        $result = $this->getTestpaperService()->startTestpaper($exercise['id'], array('lessonId' => $lessonId, 'courseId' => $course['id']));

        if ($result['status'] == 'doing') {
            return $this->redirect($this->generateUrl('exercise_show', array(
                'resultId' => $result['id'],
            )));
        } else {
            return $this->redirect($this->generateUrl('exercise_result_show', array(
                'resultId' => $result['id'],
            )));
        }
    }

    public function doTestAction(Request $request, $resultId)
    {
        $result = $this->getTestpaperService()->getTestpaperResult($resultId);
        if (!$result) {
            throw new ResourceNotFoundException('exerciseResult', $resultId);
        }

        list($course, $member) = $this->getCourseService()->tryTakeCourse($result['courseId']);

        $exercise = $this->getTestpaperService()->getTestpaper($result['testId']);
        if (!$exercise) {
            throw new ResourceNotFoundException('exercise', $result['testId']);
        }

        $questions = $this->getTestpaperService()->showTestpaperItems($exercise['id'], $result['id']);

        $activity = $this->getActivityService()->getActivity($result['lessonId']);

        $exercise['itemCount'] = $this->getActureQuestionNum($questions);

        return $this->render('exercise/do.html.twig', array(
            'paper' => $exercise,
            'questions' => $questions,
            'course' => $course,
            'paperResult' => $result,
            'activity' => $activity,
            'showTypeBar' => 0,
            'showHeader' => 0,
        ));
    }

    public function showResultAction(Request $request, $resultId)
    {
        $exerciseResult = $this->getTestpaperService()->getTestpaperResult($resultId);

        $exercise = $this->getTestpaperService()->getTestpaper($exerciseResult['testId']);

        if (!$exercise) {
            throw $this->createResourceNotFoundException('exercise', $exerciseResult['testId']);
        }

        if (in_array($exerciseResult['status'], array('doing', 'paused'))) {
            return $this->redirect($this->generateUrl('exercise_show', array('resultId' => $exerciseResult['id'])));
        }

        $canLookExercise = $this->getTestpaperService()->canLookTestpaper($exerciseResult['id']);

        if (!$canLookExercise) {
            throw new AccessDeniedException($this->getServiceKernel()->trans('无权查看作业！'));
        }

        $builder = $this->getTestpaperService()->getTestpaperBuilder($exercise['type']);
        $questions = $builder->showTestItems($exercise['id'], $exerciseResult['id']);

        $student = $this->getUserService()->getUser($exerciseResult['userId']);

        $attachments = $this->getTestpaperService()->findAttachments($exercise['id']);

        $exercise['itemCount'] = $this->getActureQuestionNum($questions);

        return $this->render('exercise/do.html.twig', array(
            'questions' => $questions,
            'paper' => $exercise,
            'paperResult' => $exerciseResult,
            'student' => $student,
            'attachments' => $attachments,
            'action' => $request->query->get('action', ''),
        ));
    }

    public function submitAction(Request $request, $resultId)
    {
        $result = $this->getTestpaperService()->getTestpaperResult($resultId);

        if (!empty($result) && !in_array($result['status'], array('doing', 'paused'))) {
            return $this->createJsonResponse(array('result' => false, 'message' => '练习已提交，不能再修改答案！'));
        }

        if ($request->getMethod() == 'POST') {
            $formData = $request->request->all();

            $paperResult = $this->getTestpaperService()->finishTest($result['id'], $formData);

            $goto = $this->generateUrl('exercise_result_show', array('resultId' => $paperResult['id']));

            return $this->createJsonResponse(array('result' => true, 'message' => '', 'goto' => $goto));
        }
    }

    protected function getActureQuestionNum($questions)
    {
        $count = 0;
        array_map(function ($question) use (&$count) {
            if ($question['type'] == 'material') {
                $count += count($question['subs']);
            } else {
                $count += 1;
            }
        }, $questions);

        return $count;
    }

    protected function getTestpaperService()
    {
        return $this->createService('Testpaper:TestpaperService');
    }

    protected function getQuestionService()
    {
        return $this->createService('Question:QuestionService');
    }

    protected function getActivityService()
    {
        return $this->createService('Activity:ActivityService');
    }

    protected function getUserService()
    {
        return $this->createService('User:UserService');
    }

    protected function getCourseService()
    {
        return $this->createService('Course:CourseService');
    }

    protected function getServiceKernel()
    {
        return ServiceKernel::instance();
    }
}
