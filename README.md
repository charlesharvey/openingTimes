#  Opening Times jQuery Plugin
### a jQuery plugin to show when your business or organisation is open. 

Let people know if your shop is open for business.  Fill in your opening times and a different message will appear to visitors of your site, depending on whether you are currently open or not.


## Usage
1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/openingTimes.jquery.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$('#open_or_closed').openingTimes({
		openString: "open",  // text to appear when shop is open
		closedString: "closed", // text to appear when shop is closed
		openClass: "open",  // class name added to element when shop is open
		closedClass: "closed",  // class name added to element when shop is closed
		openingTimes: {
			'Monday'    : ['08:00' , '17:00' ],
			'Tuesday'   : ['08:00' , '17:30' ],
			'Wednesday' : ['08:00' , '17:00' ],
			'Thursday'  : ['08:00' , '17:00' ],
			'Friday'    : ['09:00' , '16:30' ],
			'Saturday'  : ['09:00' , '12:00' ],
			'Sunday'    : ['09:00' , '12:00' ],
		}
	});
	```