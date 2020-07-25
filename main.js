$('#submitButton').click(function () {
  //Fetch form to apply custom Bootstrap validation
  var form = $('#myForm');
  //alert(form.prop('id')) //test to ensure calling form correctly

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
