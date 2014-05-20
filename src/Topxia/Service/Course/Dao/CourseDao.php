<?php

namespace Topxia\Service\Course\Dao;

interface CourseDao
{
    const TABLENAME = 'course';

    public function getCourse($id);

    public function findCoursesByIds(array $ids);

    public function findCoursesByTagIdsAndStatus(array $tagIds, $status, $start, $limit);

    public function findCoursesByAnyTagIdsAndStatus(array $tagIds, $orderBy, $status, $start, $limit);

	public function searchCourses($conditions, $orderBy, $start, $limit);

	public function searchCourseCount($conditions);

    public function addCourse($course);

    public function updateCourse($id, $fields);

    public function deleteCourse($id);

}