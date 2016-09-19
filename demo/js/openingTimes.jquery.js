// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variables rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "openingTimes",
			defaults = {
				openString: "open",
				closedString: "closed",
				openClass: "open",
				closedClass: "closed",
				openingTimes: {}
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {

				this.weekdays = [ "Sunday",  "Monday",  "Tuesday",  "Wednesday",  "Thursday",  "Friday",  "Saturday"];
				this.date = new Date();
				this.current_day =  this.weekdays[this.date.getDay()]; // return current day of week
				this.current_hour = this.date.getHours();
				this.current_minute = this.date.getMinutes();
				this.place_is_open = false;

				if (typeof  this.settings.openingTimes[this.current_day] == 'object'  ) {

					this.open_unix_time_today = this.timeStringToDate( this.settings.openingTimes[this.current_day][0]  );
					this.close_unix_time_today = this.timeStringToDate( this.settings.openingTimes[this.current_day][1]  );

					// ONLY IF DATE INBETWEEN TWO TIMES DO YOU SET PLACEISOPEN AS TRUE
					if ( this.date <= this.close_unix_time_today && this.date >= this.open_unix_time_today   ) {
						this.place_is_open = true;
					}
				}	

				if (this.place_is_open) {
					$( this.element ).text( this.settings.openString ).addClass( this.settings.openClass );
				} else {
					$( this.element ).text( this.settings.closedString ).addClass( this.settings.closedClass );
				}

			},
			timeStringToDate: function( timeString ) {
				var date = new Date();
				var hour   = timeString.split(':')[0];
				var minute  =  timeString.split(':')[1];
				return date.setHours(hour, minute ,0,0);	

			}
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );