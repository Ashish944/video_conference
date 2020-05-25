/*
 * JoshMeet.js
 * version: 0.0.1 (25/5/2020)
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2020 - joshsoftware.com
 *
 * Use:
 *
 * const options = {
 *  roomName: 'JitsiMeetAPIExample',
 *  width: 700,
 *  height: 700,
 *  parentNode: document.querySelector('#meet')
 * };
 *
 * const api = JoshMeet(options);
 */

(function (w, d) {

  'use strict';

  var loader = function () {
    var s = d.createElement("script");
    var head = document.head || document.getElementsByTagName('head')[0];
    s.src = "https://meet.jit.si/external_api.js";
    s.async = false
    head.insertBefore(s, head.firstChild);
  };

  if (w.addEventListener) {
    w.addEventListener("load", loader, false);
  } else if (w.attachEvent) {
    w.attachEvent("onload", loader);
  } else {
    w.onload = loader;
  }

  var defaultDomain = 'meet.akshaybirajdar.com';
  var meetData = { domain: defaultDomain }

  var JoshMeet = function (options, type = "new") {
    debugger;
    if (type == "new") {
      fetch('https://josh-meet.herokuapp.com/video_conferences', {
        method: 'post',
        headers: new Headers(
          {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        ),
        body: JSON.stringify({
          user: {
            name: options.user.name || "annon",
            email: options.user.email || "akshayb@joshsoftware.com",
            avatar_url: options.user.avatar_url
          }
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        meetData = data.data

        var domain = meetData.video_conference.domain || defaultDomain;
        options.roomName = meetData.video_conference.room || options.roomName;

        return new JitsiMeetExternalAPI(domain, options);
      });
    } else {
      return new JitsiMeetExternalAPI(defaultDomain, options);
    }
  };

  window.JoshMeet = JoshMeet;

})(window, document);
