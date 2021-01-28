<?php

namespace Biz\Goods\Event;

use Biz\Classroom\Service\ClassroomService;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\Goods\Mediator\CourseSetGoodsMediator;
use Biz\Goods\Mediator\CourseSpecsMediator;
use Codeages\Biz\Framework\Event\Event;
use Codeages\PluginBundle\Event\EventSubscriber;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class GoodsEventSubscriber extends EventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            'classroom.course.delete' => 'onClassroomCourseDelete',
        ];
    }

    public function onClassroomCourseDelete(Event $event)
    {
        $classroom = $event->getSubject();
        $classroomId = $classroom['id'];
        $defaultCourseId = $event->getArgument('deleteCourseId');
        $course = $this->getCourseService()->getCourse($defaultCourseId);
        if (empty($course)) {
            return;
        }
        $courseSet = $this->getCourseSetService()->getCourseSet($course['courseSetId']);
        $this->getCourseSetGoodsMediator()->onCreate($courseSet);
        $this->getCourseSetGoodsMediator()->onUpdateNormalData($courseSet);
        $this->getCourseSpecsMediator()->onCreate($course);
        $this->getCourseSpecsMediator()->onUpdateNormalData($course);
    }

    /**
     * @return ClassroomService
     */
    private function getClassroomService()
    {
        return $this->getBiz()->service('Classroom:ClassroomService');
    }

    /**
     * @return CourseService
     */
    private function getCourseService()
    {
        return $this->getBiz()->service('Course:CourseService');
    }

    /**
     * @return CourseSetService
     */
    private function getCourseSetService()
    {
        return $this->getBiz()->service('Course:CourseSetService');
    }

    /**
     * @return CourseSpecsMediator
     */
    protected function getCourseSpecsMediator()
    {
        $biz = $this->getBiz();

        return $biz['specs.mediator.course'];
    }

    /**
     * @return CourseSetGoodsMediator
     */
    protected function getCourseSetGoodsMediator()
    {
        $biz = $this->getBiz();

        return $biz['goods.mediator.course_set'];
    }
}
