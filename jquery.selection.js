/**
 * @project jquery.selection.js
 * @author Vinicius Stutz <http://www.vinicius-stutz.com/>
 * @version 1.0 of 29 Sep 2015
 * @license Under the MIT license <http://opensource.org/licenses/MIT>.
 * 
 * Description: Disabling or enabling text selection on web pages with jQuery.
 * 
 * Usage:
 * $('element').disableSelection(); to disable or
 * $('element').enableSelection(); to enable
 * 
 * Work with Firefox, Chrome, IE 8+, Opera and Safari.
 */

(function ($) {
    $.fn.disableSelection = function () {
        return this
        .attr('unselectable', 'on')
        .css('user-select', 'none')
        .css('-moz-user-select', 'none')
        .css('-khtml-user-select', 'none')
        .css('-webkit-user-select', 'none')
        .on('selectstart', false)
        .on('contextmenu', false)
        .on('keydown', false)
        .on('mousedown', false);
    };
    $.fn.enableSelection = function () {
        return this
        .attr('unselectable', '')
        .css('user-select', '')
        .css('-moz-user-select', '')
        .css('-khtml-user-select', '')
        .css('-webkit-user-select', '')
        .off('selectstart', false)
        .off('contextmenu', false)
        .off('keydown', false)
        .off('mousedown', false);
    };
})(jQuery);