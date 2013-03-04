/*
 * Form Toggler jQuery Plugin version 1.0
 * Chris Cook - chris@chris-cook.co.uk
 */

(function ($) {

	$.fn.formToggler = function (options) {

		var $form = $(this);

		$form.find('[data-ft-name]').hide();
		(function() {
			var $hiddenAreas = $form.find('[data-ft-name]');
			var $current;
			var i;
			for (i = 0; i < $hiddenAreas.length; i++) {
					$current = $($hiddenAreas[i]);
				if ($form.find('[name="' + $current.attr('data-ft-name') + '"]:checked').val() === $current.attr('data-ft-value')) {
					$current.show();
				}
			}
		})();
		$form.on('change keyup', 'input, select', function () {
			var $target = $(this);
			var $toToggle = $form.find('[data-ft-name="' + $target.attr('name') + '"]');
			var triggerValue = $toToggle.data('ft-value') + '';
			var inputType = null;
			var radioValue = null;
			function toggle(check) {
				check ? $toToggle.show() : $toToggle.hide();
			}
			if ($target.prop('tagName') === 'INPUT') {
				inputType = $target.attr('type');
			} else if ($target.prop('tagName') === 'SELECT') {
				inputType = 'select';
			}
			switch (inputType) {
				case 'radio':
					radioValue = $form.find('[name=' + $target.attr('name') + ']:checked').val() + '';
					toggle(radioValue === triggerValue);
					break;
				case 'checkbox':
					if ($target.val() === triggerValue) {
						toggle($target.is(':checked'));
					}
					break;
				default:
					toggle($target.val() === triggerValue);
					break;
			}
		});

		return this;

	};

})(jQuery);
