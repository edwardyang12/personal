// referenced from tutorial

import "./widgets.js";

// embed twitter
twttr.widgets.createTimeline(
  {
    sourceType: 'profile',
    screenName: 'hardmaru'
  },
  document.getElementById('timeline'),
  {
    width: '50vw',
    height: '70vw',
    related: 'twitterdev,twitterapi'
  }).then(function (el) {
    console.log('Embedded a timeline.')
  });
