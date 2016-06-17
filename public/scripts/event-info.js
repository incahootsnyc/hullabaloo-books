(function init (events) {
	var upcomingSection = document.getElementsByClassName("upcoming")[0];
	var emptyMessage = "Sorry Buddy, there are no events currently scheduled.";
	var newEvent = document.createElement("div");
	newEvent.classList.add("event");
	upcomingSection.appendChild(newEvent);

	if (events.length == 0) {		
			newEvent.innerHTML = emptyMessage;
	
	} else {
		
		events.forEach(function (event){
			var eventDate = document.createElement("strong");
			eventDate.classList.add("event__date");	
			var eventTime = document.createElement("strong");
			eventTime.classList.add("event__time");
			var eventSummary = document.createElement("a");
			eventSummary.classList.add("event__summary");
			eventSummary.setAttribute("href", event.eventLink);
			
			eventDate.innerHTML = event.eventDate;
			eventTime.innerHTML = event.eventTime;
			eventSummary.innerHTML = event.eventName;
			
			newEvent.appendChild(eventDate);
			newEvent.appendChild(eventTime);
			newEvent.appendChild(eventSummary);
		
		})
	}	

}) (eventInfo);

// JQUERY LAND ADMISSION $35.99 FOR A SEASON PASS

// (function init (events) {
// 	var upcomingSection = $( ".upcoming" )[0];
// 	var $upcomingSection = $(upcomingSection); //make this guy a jquery element 	// var $upcomingSection = $($(".upcoming")[0]); in one step this uses jquery to get the element and also re-assigns it to be a jquery element.
// 	var emptyMessage = "Oh no! There are no events currently scheduled.";
// 	var $newEvent = $("<div></div>").addClass("event");
// 	$upcomingSection.append($newEvent);

// 	if (events.length == 0) {
// 		$newEvent.text(emptyMessage);

// 	} else {
// 		events.forEach(function (event) {
// 			var $eventDate = $("<strong></strong>").addClass("event__date");
// 			var $eventTime = $("<strong></strong>").addClass("event__time");
// 			var $eventSummary = $("<a></a>").addClass("event__summary").attr("href", event.eventLink);

// 			$eventDate.text(event.eventDate);
// 			$eventTime.text(event.eventTime);
// 			$eventSummary.text(event.eventName);

// 			$newEvent.append($eventDate).append($eventTime).append($eventSummary);
// 		})
// 	}

// }) (eventInfo);










