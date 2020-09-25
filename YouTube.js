// ==UserScript==
// @name        Set Youtube Quality
// @version     1.0
// @grant       none
// @match       *://*.youtube.com/*
// @match       *://youtube.com/*
// @author      Shouyi Wang
// @description Set a specific Youtube quality you prefer, disable the annoying auto quality feature.
// @no-frames
// @namespace
// ==/UserScript==

(function() {
  "use strict";

  //The choices are: 'highres', 'hd2880', 'hd2160', 'hd1440', 'hd1080', 'hd720', 'large', 'medium', 'small', 'tiny'
  const preferredQuality = 'hd1440';
  let qualities;


  function setQuality() {
    if (window.location.href.indexOf('watch?v=') > 1){
        qualities = document.getElementById("movie_player").getAvailableQualityLevels();
      if (qualities.includes(preferredQuality)) {
        document.getElementById("movie_player").setPlaybackQualityRange(preferredQuality);
      }
      //if the highest quality available is lower than preferred quality, then set the highest quality.
      else {
        document.getElementById("movie_player").setPlaybackQualityRange(qualities[0]);
      }
    }
  }

  setQuality();
  window.addEventListener("yt-navigate-finish", setQuality, true );

})();
