var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res) {

	var parsedEvents = [];

	request('http://classes.thinkolio.org/venues/hullabaloo-bookstore/', { timeout: 1500 }, function (error, response, body) {

	  if (!error && response.statusCode == 200) {
	    var $ = cheerio.load(body),
	    		events = $('.home-container').find('.col-md-4'),
	    		$event,
	    		eventTime;

	    for (var i = 0; i < events.length; i++) {
	    	$event = cheerio(events[i]);
	    	eventTime = $event.find('h5').last().text();

	    	parsedEvents.push({
	    		eventName: $event.find('#class-title').text(),
	    		eventLink: 'http://classes.thinkolio.org' + $event.find('a').attr('href'),
	    		eventDate: $event.find('#dateover').text(),
	    		eventTime: eventTime.substring(0, eventTime.indexOf('.m.') + 3)
	    	});
	    };
	    
	  }

	  res.render('index', { title: 'Hullabaloo Books', eventInfo: parsedEvents });

	});

});

module.exports = router;
