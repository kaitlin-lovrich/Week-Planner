const $addEvent = document.querySelector('#add-event');
const $modal = document.querySelector('#modal');
const $tbody = document.querySelector('tbody');
const $form = document.querySelector('form');
const $confirm = document.querySelector('#confirm');

$addEvent.addEventListener('click', function (event) {
  $modal.className = 'modal-box overlay';
});

const $cancel = document.querySelector('#cancel');
$cancel.addEventListener('click', function (event) {
  $modal.className = 'modal-box overlay hidden';
});

function generateDOM(entry) {
  const $tr = document.createElement('tr');
  const $td1 = document.createElement('td');
  $td1.textContent = entry.time;
  const $td2 = document.createElement('td');
  $td2.textContent = entry.day;
  const $td3 = document.createElement('td');
  $td3.textContent = entry.info;

  $tr.appendChild($td1);
  $tr.appendChild($td2);
  $tr.appendChild($td3);
  return $tr;
}

function submit(event) {
  event.preventDefault();
  const eventEntry = {
    time: $form.elements.time.value,
    day: $form.elements.day.value,
    info: $form.elements.info.value
  };
  events.push(eventEntry);
  const $eventDOM = generateDOM(eventEntry);
  $tbody.prepend($eventDOM);
  $form.reset();

  $modal.className = 'modal-box overlay hidden';
}
$confirm.addEventListener('click', submit);

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; events.length > 1; i++) {
    const $newTd = generateDOM(events[i]);
    $tbody.appendChild($newTd);
  }
});
