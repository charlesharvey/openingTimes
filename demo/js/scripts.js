jQuery(function() {



	jQuery('#open_or_closed').openingTimes({
		openString: "open",
		closedString: "closed",
		openClass: "open",
		closedClass: "closed",
		openingTimes: {
			'Monday'    : ['08:00' , '17:00' ],
			'Tuesday'   : ['08:00' , '17:30' ],
			'Wednesday' : ['08:00' , '17:00' ],
			'Thursday'  : ['08:00' , '12:00' ],
			'Friday'    : ['09:00' , '18:55' ],
			'Saturday'  : ['09:00' , '12:00' ]
		}
	});







});


