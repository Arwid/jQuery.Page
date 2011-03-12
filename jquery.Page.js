/*!
 * jQuery.Page - Overly simple jQuery plugin to run per page Javascript
 *
 * Copyright 2011 Arwid Bancewicz
 * Licensed under the MIT lice
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * @date 23 Feb 2011
 * @author Arwid Bancewicz http://arwid.ca
 * @version 0.1
 */
 (function($) {
    var Page = {
        selector: "body",
        attr: "id",
        handlers: {}
    };
    Page.init = function(handlers) {
        Pages.addHandlers(handlers);
    }
    Page.addHandlers = function(handlers) {
        if (!this.handlers) this.handlers = {};
        $.extend(this.handlers, handlers);
    }
    Page.start = function(page) {
        if (!page) page = $(Page.selector).attr(Page.attr);
        if (this.handlers[page]) {
            this.handlers[page]();
        }
    };
    $.Page = Page;
})(jQuery);