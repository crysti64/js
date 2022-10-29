//modal id setting
function fnShowModal(sGetModal) {
	var $layer = $("#" + sGetModal);
	$layer.fadeIn(300, function () {
		$(this).find('.modal').stop().animate({
			top: '0'
		}, 300);
	});

	// pre modal display:none
	$('.modal-out').one("click", function () {
		$(this).closest('.modal-wrap').hide();
	})
}
$(document).ready(function () {
	var $modalWrap = $('.modal-wrap');
	$modalWrap.hide();

	$('.modal-close').click(function () {
		$(this).parent().parent('.modal').stop().animate({
			top: '-100%'
		}, 300, function () {
			$(this).closest($modalWrap).fadeOut(500);
		});
	});

});