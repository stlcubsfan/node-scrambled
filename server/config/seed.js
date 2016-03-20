/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import Tournament from '../api/tournament/tournament.model';
var moment = require('moment');

var today = moment();
var twoWeeksAgo = moment().subtract(14, 'days');
var tenDaysAgo = moment().subtract(10, 'days');
var eighteenDaysAgo = moment().subtract(18, 'days');
var fourDaysAgo = moment().subtract(4, 'days');
var oneDayAgo = moment().subtract(1, 'days');
var fourDaysFromNow = moment().add(4, 'days');
var sixteenDaysFromNow = moment().add(16, 'days');
var nineteenDaysFromNow = moment().add(19, 'days');
var twentyDaysFromNow = moment().add(20, 'days');
var twentyFourDaysFromNow = moment().add(24, 'days');

Tournament.find({}).remove()
  .then(() => {
    Tournament.create({
      name: 'Demo Past Tournament',
      startDate: twoWeeksAgo,
      endDate: tenDaysAgo,
      picksStartDate: eighteenDaysAgo,
      picksEndDate: twoWeeksAgo,
      leaderboardUrl: 'http://www.pgatour.com/data/r/100/2015/leaderboard-v2mini.json',
      par: 72,
      message: 'Payouts include:',
      secretCode: 'theoldcourse',
      active: true
    }, {
      name: 'Demo Current Tournament',
      startDate: today,
      endDate: fourDaysFromNow,
      picksStartDate: fourDaysAgo,
      picksEndDate: oneDayAgo,
      leaderboardUrl: 'http://www.pgatour.com/data/r/100/2015/leaderboard-v2mini.json',
      par: 72,
      message: 'Payouts include:',
      secretCode: 'theoldcourse2',
      active: true
    }, {
      name: 'Demo Future Tournament',
      startDate: twentyDaysFromNow,
      endDate: twentyFourDaysFromNow,
      picksStartDate: sixteenDaysFromNow,
      picksEndDate: nineteenDaysFromNow,
      leaderboardUrl: 'http://www.pgatour.com/data/r/100/2015/leaderboard-v2mini.json',
      par: 72,
      message: 'Payouts include:',
      secretCode: 'theoldcourse3',
      active: true
    })
  });

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });
