let $saveBtn = $('.js-thread-setting-save-btn');
let validator = $('#user_content_control_thread').validate({
  rules: {},
  ajax: true,
  submitSuccess(data) {
    cd.message({type: 'success', message: Translator.trans('site.save_success_hint')});
    $saveBtn.button('reset');
  }
});

$saveBtn.on('click', (event) => {
  const $this = $(event.currentTarget);
  $this.button('loading');
  $('#user_content_control_thread').submit();
});

$('input[name="enable_thread"]').change((event) => {
  const $this = $(event.currentTarget);
  const $subManagement = $('.js-sub-management');
  if ($this.val() === '0') {
    $subManagement.addClass('hidden');
  } else if ($this.val() === '1') {
    $subManagement.removeClass('hidden');
  }
});