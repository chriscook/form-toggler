/*
 * Form Toggler jQuery Plugin version 1.13
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
				} else {
					$current.find('input, select, textarea').attr('disabled', 'disabled');
				}
			}
		})();
		$form.on('change keyup', 'input, select', function () {
			var $target = $(this);
			var $toToggle = $form.find('[data-ft-name="' + $target.attr('name') + '"]');
			var triggerValue = $toToggle.data('ft-value') + '';
			var inputType = null;
			var radioValue = null;
			var i;
			function toggle($element, check) {
				var $inputs = $element.find('input, select, textarea');
				if (check) {
					$element.show();
					$inputs.removeAttr('disabled');
				} else {
					$element.hide();
					$inputs.attr('disabled', 'disabled');
				}
			}
			if ($target.prop('tagName') === 'INPUT') {
				inputType = $target.attr('type');
			} else if ($target.prop('tagName') === 'SELECT') {
				inputType = 'select';
			}
			switch (inputType) {
				case 'radio':
					radioValue = $form.find('[name=' + $target.attr('name') + ']:checked').val() + '';
					for (i = 0; i < $toToggle.length; i++) {
						toggle($($toToggle[i]), radioValue === triggerValue);
					}
					break;
				case 'checkbox':
					if ($target.val() === triggerValue) {
						for (i = 0; i < $toToggle.length; i++) {
							toggle($($toToggle[i]), $target.is(':checked'));
						}
					}
					break;
				default:
					for (i = 0; i < $toToggle.length; i++) {
						toggle($($toToggle[i]), $target.val() === $($toToggle[i]).data('ft-value') + '');
					}
					break;
			}
		});

		return this;

	};

})(jQuery);
