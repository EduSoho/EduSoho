<?php

namespace Tests\Activity\Dao;

use Tests\Base\BaseDaoTestCase;

class ActivityDaoTest extends BaseDaoTestCase
{

	protected function getDefaultMockFields() 
	{
		return array(
			'title' => 'activity',
			'mediaId' => 0,
			'mediaType' => 'text',
			'content' => '124',
			'fromCourseId' => 1,
			'fromCourseSetId' => 1,
			'fromUserId' => 1,
		);
	}

	protected function getCompareKeys()
	{
		$default = $this->getDefaultMockFields();
		return array_keys($default);
	} 

	public function testSearch()
	{
		$activity1 = $this->mockActivity(array('title' => 'activity 1'));
		$activity2 = $this->mockActivity(array('title' => 'activity 2', 'mediaType' => 'video'));

		$testConditons = array(
			array(
				'condition' => array('fromCourseId' => 1), 
				'results' => array($activity1, $activity2), 
				'countResult' => 2
			),
            array(
            	'condition' => array('mediaType' => 'text'), 
            	'results' => array($activity1), 
            	'countResult' => 1
            ),
            array(
            	'condition' => array('mediaType' => 'text', 'fromCourseId' => 1), 
            	'results' => array($activity1), 
            	'countResult' => 1
            ),
		);

		$this->searchTestUtil($this->getActivityDao(), $testConditons, $this->getCompareKeys());
	}

	public function testFindByCourseId()
	{
		$activity = $this->mockActivity(array('title' => 'activity 1'));
		$activities = $this->getActivityDao()->findByCourseId(1);
		$this->assertEquals(count($activities), 1);
		$this->assertArrayEquals($activity, $activities[0], $this->getCompareKeys());
	}

	public function testFindByIds()
	{
		$activity1 = $this->mockActivity(array('title' => 'activity 1'));
		$activity2 = $this->mockActivity(array('title' => 'activity 2'));
		$activity3 = $this->mockActivity(array('title' => 'activity 3'));

		$activities = $this->getActivityDao()->findByIds(array($activity1['id'], $activity2['id'], $activity3['id']));
		$this->assertEquals(count($activities), 3);

		$this->assertArrayEquals($activity1, $activities[0], $this->getCompareKeys());
		$this->assertArrayEquals($activity2, $activities[1], $this->getCompareKeys());
		$this->assertArrayEquals($activity3, $activities[2], $this->getCompareKeys());
	}

	private function mockActivity($fields)
	{
		$fields = array_merge($this->getDefaultMockFields(), $fields);
		return $this->getActivityDao()->create($fields);
	}

	protected function getActivityDao()
    {
        return $this->getBiz()->dao('Activity:ActivityDao');
    }
}