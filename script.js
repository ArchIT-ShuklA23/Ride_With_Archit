const form = document.getElementById('ride-request-form');
const submitBtn = document.getElementById('submit-btn');
const responseMessage = document.getElementById('response-message');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const departurePlaceInput = document.getElementById('departure-place');
const dateError = document.getElementById('date-error');
const timeError = document.getElementById('time-error');
const departurePlaceError = document.getElementById('departure-place-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = dateInput.value;
  const time = timeInput.value;
  const departurePlace = departurePlaceInput.value;

  if (date === '') {
    dateError.textContent = 'Please enter a date';
    dateInput.classList.add('error');
  } else {
    dateError.textContent = '';
    dateInput.classList.remove('error');
  }

  if (time === '') {
    timeError.textContent = 'Please enter a time';
    timeInput.classList.add('error');
  } else {
    timeError.textContent = '';
    timeInput.classList.remove('error');
  }

  if (departurePlace === '') {
    departurePlaceError.textContent = 'Please enter a departure place';
    departurePlaceInput.classList.add('error');
  } else {
    departurePlaceError.textContent = '';
    departurePlaceInput.classList.remove('error');
  }

  if (date !== '' && time !== '' && departurePlace !== '') {
    // Construct the WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/+916351271886?text=Ride+Request%0A%0A*Date:*+${date}%0A*Time:*+${time}%0A*Departure+Place:*+${departurePlace}%0A%0APlease+respond+with+one+of+the+following+options:%0A%0AAccept%0AReject`;

    // Open WhatsApp app with pre-filled message
    window.open(whatsappUrl, '_blank');

    responseMessage.innerHTML = 'Ride request sent successfully!';
    responseMessage.classList.add('success-message');
  }
});