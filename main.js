
$('#submitButton').click(function () {
  var form = $('#myForm');
  if (form[0].checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.addClass('was-validated');
});

var li_elements = document.querySelectorAll('.wrapper_left ul li');
var item_elements = document.querySelectorAll('.item');
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener('click', function () {
    li_elements.forEach(function (li) {
      li.classList.remove('active');
    });
    this.classList.add('active');
    var li_value = this.getAttribute('data-li');
    item_elements.forEach(function (item) {
      item.style.display = 'none';
    });
    if (li_value == 'terms') {
      document.querySelector('.' + li_value).style.display = 'block';
    } else if (li_value == 'rules') {
      document.querySelector('.' + li_value).style.display = 'block';
    } else if (li_value == 'faq') {
      document.querySelector('.' + li_value).style.display = 'block';
    } else {
      console.log('');
    }
  });
}
$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $('.collapse.show').each(function () {
    $(this).siblings('.card-header').find('.btn i').html('-');
    $(this).prev('.card-header').addClass('highlight');
  });

  // Toggle plus minus icon on show hide of collapse element
  $('.collapse')
    .on('show.bs.collapse', function () {
      $(this).parent().find('.card-header .btn i').html('-');
    })
    .on('hide.bs.collapse', function () {
      $(this).parent().find('.card-header .btn i').html('+');
    });

  // Highlight open collapsed element
  $('.card-header .btn').click(function () {
    $('.card-header').not($(this).parents()).removeClass('highlight');
    $(this).parents('.card-header').toggleClass('highlight');
  });
});
