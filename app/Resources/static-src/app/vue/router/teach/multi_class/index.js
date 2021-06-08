export default [
  {
    path: '/',
    name: 'MultiClass',
    component: () => import('app/vue/views/teach/multi_class/index.vue')
  },
  {
    path: '/create',
    name: 'MultiClassCreate',
    component: () => import('app/vue/views/teach/multi_class/create/index.vue'),
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/create_course',
    name: 'MultiClassCreateCourse',
    component: () => import('app/vue/views/teach/multi_class/create_course/index.vue'),
  },
  {
    path: '/course_manage/:id',
    component: () => import('app/vue/views/teach/multi_class/course_manage/index.vue'),
    children: [
      {
        path: '',
        name: 'MultiClassCourseManage',
        component: () => import('app/vue/views/teach/multi_class/course_manage/class-info.vue'),
        meta: { current: 'class-info' }
      },
      {
        path: 'student_manage',
        name: 'MultiClassStudentManage',
        component: () => import('app/vue/views/teach/multi_class/course_manage/student-manage.vue'),
        meta: { current: 'student-manage' }
      },
      {
        path: 'homework_review',
        name: 'MultiClassHomewordReview',
        component: () => import('app/vue/views/teach/multi_class/course_manage/homework_review.vue'),
        meta: { current: 'homework-review' }
      },
      {
        path: 'data_preview',
        name: 'MultiClassDataPreview',
        component: () => import('app/vue/views/teach/multi_class/course_manage/data_preview.vue'),
        meta: { current: 'data-preview' }
      }
    ]
  },
  {
    path: '/course_manage/editor_lesson/:id',
    name: 'MultiClassEditorLesson',
    component: () => import('app/vue/views/teach/multi_class/course_manage/editor-lesson.vue')
  },
];
