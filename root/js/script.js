$(function(){
	$('#myList a').on('click', function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	  $(".list-group-item").removeClass('active');
	  $(this).addClass('active');
	})
})