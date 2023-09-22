const $addEvent = document.querySelector('#add-event');
const $modal = document.querySelector('#modal');
$addEvent.addEventListener('click', function (event) {
  $modal.className = 'modal-box overlay';
});

const $cancel = document.querySelector('#cancel');
$cancel.addEventListener('click', function (event) {
  $modal.className = 'modal-box overlay hidden';
});
