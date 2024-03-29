'use strict';

var currentLocationEl = document.getElementById('location');

// Images
var images = [
  {
    'background-image': 'url(images/stars.gif)',
    'background-size': 'cover'
  },
  { 'background-image': 'url(images/dots.jpeg)' },
  { 'background-image': 'url(images/specs.gif)' }
]

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var el = document.querySelectorAll('.container')[0];
  var attrs = images[Math.floor(Math.random() * images.length)];
  Object.keys(attrs).forEach(function(key) {
    var value = attrs[key];
    el.style[key] = value;
  })
});