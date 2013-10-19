/*
 *  Project: jquery.textualLoader.js
 *  Description: A plugin that turns HTML elements into textual loaders
 *  Author: Jelle Kralt (jelle@jellekralt.nl)
 *  License: MIT
 */

;(function ( $, window, undefined ) {

    // Default settings
    var defaults = {
        onStart: function(){},
        onStop: function(){},
        classes: {
            loading: 'tl-loading'
        }
    };


    // Plugin constructor
    function TextualLoader(element, options) {
        this.element = element; // Selected DOM element
        this.$element = $(element); // Selected jQuery element

        // Extend the defaults with the passed options
        this.options = $.extend( {}, defaults, options);

        this.init();
    }

    /*
     * init
     * This function is called when the plugin loads
    **/
    TextualLoader.prototype.init = function () {
        var o = this;

       
    };

    

    /*
     * start
     * This function starts the loader
    **/
    TextualLoader.prototype.start = function(e, oTab, closeCurrent, stopRotation) {

    };

    /*
     * stop
     * This function stops the loader
    **/
    TextualLoader.prototype.stop = function(e, oTab) {

    };

    // Plugin wrapper
    $.fn.textualLoader = function ( options ) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'textual-loader')) {
                    $.data(this, 'textual-loader', new TextualLoader( this, options ));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'textual-loader');

                if (instance instanceof TextualLoader && typeof instance[options] === 'function') {
                    instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }

                // Allow instances to be destroyed via the 'destroy' method
                if (options === 'destroy') {
                    // TODO: destroy instance classes, etc
                    $.data(this, 'textual-loader', null);
                }
            });
        }
    };

}(jQuery, window));