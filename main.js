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

function generateDOM() {
  const $tr = document.createElement('tr');
  const $td = document.createElement('td');
  $tr.appendChild($td);
}

function submit(event) {
  // const event = {
  //   time: $form.elements.time.value,
  //   day: $form.elements.day.value,
  //   info: $form.elements.info.value,
  // }
  // $tbody.appendChild($tr);
  const eventDom = generateDOM();

  console.log(generateDOM());
  $form.reset();

}

$confirm.addEventListener('click', submit);
