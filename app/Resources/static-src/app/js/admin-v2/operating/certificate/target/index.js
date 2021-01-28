$('#search').on('click', function () {
  $.get($('#list-search').attr('action'), $('#list-search').serialize(), function (result) {
    $('.table-list').html(result);
  });
});

$('.table-list').on('click', '.pagination li', function () {
  let url = $(this).data('url');
  if (typeof (url) !== 'undefined') {
    $.get(url, $('#list-search').serialize(), function (data) {
      $('.table-list').html(data);
    });
  }
});

$('body').keydown(function (event) {
  if (event.keyCode === 13) {
    return false;
  }
});

$('.table-list').on('click', '.js-item-select', function () {
  $('.js-target-name').html($(this).data('title'));
  let targetId = $(this).parents('tr').find('.js-select').val();
  $('#targetId').val(targetId);
  $('#modal').modal('hide');
});

cd.popover({
  el: '[data-toggle="cd-popover"]',
  trigger: 'hover',
  title: 'TIP:',
});

