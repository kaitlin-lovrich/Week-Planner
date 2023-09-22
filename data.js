/* exported todos */

let events = [];
const previousEventsJSON = localStorage.getItem('javascript-local-storage');

if (previousEventsJSON !== null) {
  events = JSON.parse(previousEventsJSON);
}

function stringifyEvents(event) {
  const eventsJSON = JSON.stringify(events);
  localStorage.setItem('javascript-local-storage', eventsJSON);
}

window.addEventListener('beforeunload', stringifyEvents);
