/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Contact form module

var contactForm = function contactForm() {
  console.log('contact form');
  $('#formContact, #formHero').submit(function (e) {
    e.preventDefault();

    var $this = e.target;

    $.ajax({
      data: $($this).serialize(),
      method: 'POST',
      url: 'https://formspree.io/www@deskandstudio.com', 
      dataType: 'json'
    }).done(function (response) {
      e.preventDefault();

      // Message shown if message is successfully submited
      alert('Your message has been sent.');

      // Clear the form
      $($this)[0].reset();

      // Reset background of inputs to show labels
      var formInputs = document.querySelectorAll('#formContact input, form textarea');

      formInputs.forEach(function (formInput) {
        formInput.style.background = 'transparent';
      });

      // Record conversion
      switch($this.id) {
        case 'formHero': 
          goog_report_conversion('TcBOCIjk3XMQpqSx3wM');
          break;
        case 'formContact': 
          goog_report_conversion('OBQICJTk3XMQpqSx3wM');
      }

    }).fail(function (data) {
      e.preventDefault();

      // Message shown if sending message failed
      alert('There was a problem with sending your message. Please try it again.');
      console.error(data);
    });
  });
};

exports.contactForm = contactForm;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Countdown module

var countdown = function countdown() {
  console.log('countdown');
  // Cache all countdown boxes into consts
  var countdown = document.querySelector('.js-countdown');
  var countdownDays = document.querySelector('.countdown__days .number');
  var countdownHours = document.querySelector('.countdown__hours .number');
  var countdownMinutes = document.querySelector('.countdown__minutes .number');
  var countdownSeconds = document.querySelector('.countdown__seconds .number');

  // Extract the deadline date from 'data' attribute and use it to create new date
  var deadline = countdown.dataset.deadline;
  var deadlineDate = new Date(deadline).getTime();

  // Update the count down every 1 second (1000 milliseconds)
  setInterval(function () {
    // Get current date and time
    var currentDate = new Date().getTime();

    // Calculate the distance between current date and time and the deadline date and time
    var distance = deadlineDate - currentDate;

    // Calculations the data for remaining days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    // Insert the result data into individual countdown boxes
    // If the number is lower than 10, add leading 0
    countdownDays.innerHTML = days;
    countdownHours.innerHTML = hours.toString().length !== 1 ? hours : '0' + hours;
    countdownMinutes.innerHTML = minutes.toString().length !== 1 ? minutes : '0' + minutes;
    countdownSeconds.innerHTML = seconds.toString().length !== 1 ? seconds : '0' + seconds;
  }, 1000);
};

exports.countdown = countdown;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Form floating labels module

var floatingLabels = function floatingLabels() {
  // Scripts for floating labels
  console.log('floating labels');
  // Cache all form elements
  var formElements = document.querySelectorAll('form .form-element-transparent');

  // Cycle through all form elements and add event listener for each
  formElements.forEach(function (formElement) {
    formElement.addEventListener('blur', function () {
      // If input field contains text, add background to hide label
      if (formElement.value.length !== 0) {
        formElement.style.background = '#fff';
      } else {
        // If input field doesn't contains text, make background transparent to make the label visible
        formElement.style.background = 'transparent';
      }
    });
  });
};

exports.floatingLabels = floatingLabels;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Google Map module

var googleMap = function googleMap() {
  // Script for Google map
  console.log('Googl map');

  // Map Coordinates
  var latlng = new google.maps.LatLng(50.0753355, 14.4113856);

  var mapStyles = [{
    'elementType': 'labels.text.fill',
    'featureType': 'all',
    'stylers': [{
      'color': '#ffffff'
    }]
  }, {
    'elementType': 'labels.text.stroke',
    'featureType': 'all',
    'stylers': [{
      'visibility': 'on'
    }, {
      'color': '#424b5b'
    }, {
      'weight': 2
    }, {
      'gamma': '1'
    }]
  }, {
    'elementType': 'labels.icon',
    'featureType': 'all',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'elementType': 'geometry',
    'featureType': 'administrative',
    'stylers': [{
      'weight': 0.6
    }, {
      'color': '#545b6b'
    }, {
      'gamma': '0'
    }]
  }, {
    'elementType': 'geometry',
    'featureType': 'landscape',
    'stylers': [{
      'color': '#545b6b'
    }, {
      'gamma': '1'
    }, {
      'weight': '10'
    }]
  }, {
    'elementType': 'geometry',
    'featureType': 'poi',
    'stylers': [{
      'color': '#666c7b'
    }]
  }, {
    'elementType': 'geometry',
    'featureType': 'poi.park',
    'stylers': [{
      'color': '#545b6b'
    }]
  }, {
    'elementType': 'geometry',
    'featureType': 'road',
    'stylers': [{
      'color': '#424a5b'
    }, {
      'lightness': '0'
    }]
  }, {
    'elementType': 'geometry',
    'featureType': 'transit',
    'stylers': [{
      'color': '#666c7b'
    }]
  }, {
    'elementType': 'geometry',
    'featureType': 'water',
    'stylers': [{
      'color': '#2e3546'
    }]
  }];

  // Map Options
  var myOptions = {
    center: latlng,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    styles: mapStyles,
    zoom: 15
  };

  // Find map wrapper
  var map = new google.maps.Map(document.querySelector('#google-map'), myOptions);

  //  Start Marker
  var myLatlng = new google.maps.LatLng(50.0753355, 14.4113856);

  // Marker Text
  var contentString = '<div id=\'map-tooltip\' class=\'map-tooltip\'><h5>Our Office Location</h5><p>Come see us!</p></div>';

  var markerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="512pt" height="512pt" viewBox="0 0 512 512"><path fill="#fff" d="M239.05 26.88c25.5-3.44 51.95.12 75.53 10.47 31.2 13.46 57.15 38.61 71.63 69.35 18.05 37.53 18.12 83.06.24 120.67-19.48 38.38-38.26 77.12-57.46 115.65-23.65 47.77-47.25 95.57-70.95 143.32-38.49-77.68-76.91-155.39-115.38-233.09-3.42-6.86-6.7-13.81-10.41-20.52-12.48-24.05-18.03-51.7-15.38-78.69 2.82-31.72 16.95-62.22 39.11-85.06 21.91-22.83 51.66-38.03 83.07-42.1m7.49 70.82c-21.3 3.4-40.53 17.24-50.69 36.25-8.89 16.32-10.9 36.23-5.39 53.98 4.39 14.58 13.71 27.61 26.04 36.55 13.22 9.75 29.97 14.62 46.36 13.39 13.67-.76 26.97-5.88 37.91-14.06 15.82-11.86 26.29-30.59 28.06-50.29 2.85-26.52-11.48-53.62-34.5-66.87-14.21-8.49-31.47-11.63-47.79-8.95z"/></svg>';

  var marker = new google.maps.Marker({
    icon: {
      scaledSize: new google.maps.Size(64, 64),
      //url: './images/map-marker-light.svg'
      url: 'data:image/svg+xml;utf-8, \
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M239.05 26.88c25.5-3.44 51.95.12 75.53 10.47 31.2 13.46 57.15 38.61 71.63 69.35 18.05 37.53 18.12 83.06.24 120.67-19.48 38.38-38.26 77.12-57.46 115.65-23.65 47.77-47.25 95.57-70.95 143.32-38.49-77.68-76.91-155.39-115.38-233.09-3.42-6.86-6.7-13.81-10.41-20.52-12.48-24.05-18.03-51.7-15.38-78.69 2.82-31.72 16.95-62.22 39.11-85.06 21.91-22.83 51.66-38.03 83.07-42.1m7.49 70.82c-21.3 3.4-40.53 17.24-50.69 36.25-8.89 16.32-10.9 36.23-5.39 53.98 4.39 14.58 13.71 27.61 26.04 36.55 13.22 9.75 29.97 14.62 46.36 13.39 13.67-.76 26.97-5.88 37.91-14.06 15.82-11.86 26.29-30.59 28.06-50.29 2.85-26.52-11.48-53.62-34.5-66.87-14.21-8.49-31.47-11.63-47.79-8.95z"/></svg>'
    },
    map: map,
    optimized: false,
    position: myLatlng,
    title: 'Welcome to Czech Republic!'
  });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
  // End Marker
};

exports.googleMap = googleMap;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Nav lnks module

var navLinks = function navLinks() {
  console.log('nav links');
  var navLinks = document.querySelectorAll('.js-nav a, .js-top');

  // Cycle through all navigation links and attach event listener for each
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
      // Block default link behavior
      event.preventDefault();

      // Smoothly scroll to the section related to clicked link
      $('html, body').animate({
        scrollTop: $($.attr(navLink, 'href')).offset().top
      }, 550);
    });
  });
};

exports.navLinks = navLinks;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ParticlesJS module

var particlesJS = function particlesJS() {
  // Script for landing page with ParticlesJS
  // Docs:https://github.com/marcbruederlin/particles.js
  console.log('particlesJS');

  Particles.init({
    color: '#212121',
    connectParticles: true,
    maxParticles: 88,
    minDistance: 120,
    opacity: .95,
    responsive: [{
      breakpoint: 992,
      options: {
        maxParticles: 88,
        minDistance: 100
      }
    }, {
      breakpoint: 768,
      options: {
        maxParticles: 66,
        minDistance: 90
      }
    }, {
      breakpoint: 480,
      options: {
        maxParticles: 44,
        minDistance: 80
      }
    }],
    selector: '.js-particles',
    sizeVariations: 4,
    speed: 0.85
  });
};

exports.particlesJS = particlesJS;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Slider module

var slider = function slider() {
  console.log('slider');
  var sliderLinks = document.querySelectorAll('.slider__link');

  sliderLinks.forEach(function (sliderLink) {
    sliderLink.addEventListener('click', function (event) {
      // Block default link behavior
      event.preventDefault();

      // Cache slider link 'href' attribute
      var sliderLinkHref = sliderLink.getAttribute('href');

      if (sliderLink.classList.contains('slider__link--active')) {
        // When user clicks on already active link, do nothing
        return false;
      } else {
        // When user clicks on not active link find currently active link and deactivate it
        document.querySelector('.slider__link--active').classList.remove('slider__link--active');

        // Next, find currently active slide and deactivate it
        document.querySelector('.slider__slide--active').classList.remove('slider__slide--active');

        // Next, activate clicked link
        sliderLink.classList.add('slider__link--active');

        // Finally, activate slide related to clicked link
        document.querySelector(sliderLinkHref).classList.add('slider__slide--active');
      }
    });
  });
};

exports.slider = slider;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Slider module

var templatePanel = function templatePanel() {
  // Script for template options panel
  console.log('panel');
  var templatePanel = document.querySelectorAll('.js-template-options-panel')[0];
  var templatePanelButton = document.querySelector('.template__button');

  // Open and Close Options Panel
  templatePanelButton.addEventListener('click', function (e) {
    e.preventDefault;

    templatePanel.classList.toggle('template-panel-open');
  });

  // Color Options
  var colorSwitches = document.querySelectorAll('.switch');
  var themStylesheet = document.querySelector('#theme-stylesheet');

  colorSwitches.forEach(function (colorSwitch) {
    colorSwitch.addEventListener('click', function (e) {
      var colorSwitchTitle = e.target.getAttribute('title');

      themStylesheet.setAttribute('href', './css/themes/trinity-' + colorSwitchTitle + '.css');
    });
  });
};

exports.templatePanel = templatePanel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// TypedJS module

var typedJS = function typedJS() {
  console.log('typedjs');

  Typed.new('.js-typed-h1', {
    contentType: 'text',
    loop: false, // loop on or off (true or false)
    loopCount: false, // number of loops, false = infinite
    showCursor: false, // disable typing cursor
    strings: ['Clean, modern and beautiful design'],
    typeSpeed: 50, // typing speed
    callback: function callback() {
      // call when done callback function
      setTimeout(function () {
        Typed.new('.js-typed-p', {
          contentType: 'text',
          loop: false, // loop on or off (true or false)
          loopCount: false, // number of loops, false = infinite
          showCursor: false, // disable typing cursor
          strings: ['Trinity Bootstrap Template comes with a large number of example pages, that help you quickly setup the basic flows for your application. From registering to building your profile or setting a blog, we\'ve got you covered.'],
          typeSpeed: 5 // typing speed
        });
      }, 35);
    }
  });
};

exports.typedJS = typedJS;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Video module

var videoPlayer = function videoPlayer() {
  // Script for video hero
  // Note: this script is not necessary for using Landing page with video hero. It is just a test for HTML5 video support
  console.log('video');
  var isHTML5Video = typeof document.createElement('video').canPlayType != 'undefined';

  if (!isHTML5Video) {
    // If HTML5 video is not supported, add class 'no-video' to HTML element
    document.querySelector('html').classList.add('no-video');
  }
};

exports.videoPlayer = videoPlayer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Main JavaScript file
//
// @author Alex Devero <deveroalex@gmail.com>
//

 // eslint-disable-line strict

var _contactForm = __webpack_require__(0);

var _countdown = __webpack_require__(1);

var _floatingLabels = __webpack_require__(2);

var _googleMap = __webpack_require__(3);

var _navLinks = __webpack_require__(4);

var _particlesjs = __webpack_require__(5);

var _slider = __webpack_require__(6);

var _typedjs = __webpack_require__(8);

var _video = __webpack_require__(9);

var _templatePanel = __webpack_require__(7);

// eslint-disable-line sort-imports
// endRemoveIf(production)

(function () {
  var app = {
    appAnchors: {
      countdown: document.querySelectorAll('.js-countdown'),
      formContact: document.querySelectorAll('.js-form--contact'),
      formGeneral: document.querySelectorAll('.js-form'),
      formHero: document.querySelectorAll('.js-form--hero'),
      googleMap: document.querySelectorAll('.js-google-map'),
      lazyImages: document.querySelectorAll('.js-lazy'),
      navLinks: document.querySelectorAll('.js-nav'),
      particles: document.querySelectorAll('.js-particles'),
      slider: document.querySelectorAll('.js-trinity-slider'),
      typedjs: document.querySelectorAll('.js-typedjs'),
      videoHero: document.querySelectorAll('.js-hero--video')
    },
    appControllers: {
      contactFormController: function contactFormController() {
        (0, _contactForm.contactForm)();
      },
      countdownController: function countdownController() {
        (0, _countdown.countdown)();
      },
      formFloatingLabelsController: function formFloatingLabelsController() {
        (0, _floatingLabels.floatingLabels)();
      },
      googleMapController: function googleMapController() {
        (0, _googleMap.googleMap)();
      },
      lazyImagesController: function lazyImagesController() {
        // Scripts for lazyloading images
        // Docs: http://verlok.github.io/lazyload/
        var lazyload = new LazyLoad(); // eslint-disable-line no-unused-vars
      },
      navLinksController: function navLinksController() {
        (0, _navLinks.navLinks)();
      },
      particles: function particles() {
        (0, _particlesjs.particlesJS)();
      },
      sliderController: function sliderController() {
        (0, _slider.slider)();
      },
      typedjsController: function typedjsController() {
        (0, _typedjs.typedJS)();
      },
      videoHeroController: function videoHeroController() {
        (0, _video.videoPlayer)();
      }
    },
    appSwitches: function appSwitches() {
      if (app.appAnchors.countdown.length > 0) {
        // Initiate controller for countdown
        app.appControllers.countdownController();
      }

      if (app.appAnchors.formContact.length > 0) {
        // Initiate controller for contact form in the bottom
        app.appControllers.contactFormController();
      }

      if (app.appAnchors.formGeneral.length > 0) {
        // Initiate controller for floating labels
        app.appControllers.formFloatingLabelsController();
      }

      if (app.appAnchors.formHero.length > 0) {
        // Initiate controller for contact form in hero (top)
      }

      if (app.appAnchors.googleMap.length > 0) {
        // Initiate controller for mobile navigation
        app.appControllers.googleMapController();
      }

      if (app.appAnchors.lazyImages.length > 0) {
        // Initiate controller for lazyloading images
        app.appControllers.lazyImagesController();
      }

      if (app.appAnchors.navLinks.length > 0) {
        // Initiate controller for smooth scrolling for navigation links
        app.appControllers.navLinksController();
      }

      if (app.appAnchors.particles.length > 0) {
        // Initiate controller for ParticlesJS
        app.appControllers.particles();
      }

      if (app.appAnchors.slider.length > 0) {
        // Initiate controller for slider
        app.appControllers.sliderController();
      }

      if (app.appAnchors.typedjs.length > 0) {
        // Initiate controller for slider
        app.appControllers.typedjsController();
      }

      if (app.appAnchors.videoHero.length > 0) {
        // Initiate controller for video hero
        app.appControllers.videoHeroController();
      }
      },
    init: function init() {
      // Check if JavaScript is available
      if (document.querySelector('.no-js') !== null) {
        document.querySelector('.no-js').classList.add('js');

        document.querySelector('.no-js').classList.remove('no-js');
      }

      // Initiate switches component
      app.appSwitches();
      }
  };

  // Initiate main app
  app.init();
})();
// removeIf(production)

/***/ })
/******/ ]);