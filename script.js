// const form = document.getElementById('ride-request-form');
// const submitBtn = document.getElementById('submit-btn');
// const responseMessage = document.getElementById('response-message');
// const dateInput = document.getElementById('date');
// const timeInput = document.getElementById('time');
// const departurePlaceInput = document.getElementById('departure-place');
// const dateError = document.getElementById('date-error');
// const timeError = document.getElementById('time-error');
// const departurePlaceError = document.getElementById('departure-place-error');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Clear previous error messages
//   dateError.textContent = '';
//   timeError.textContent = '';
//   departurePlaceError.textContent = '';
//   responseMessage.style.display = 'none';

//   const date = dateInput.value;
//   const time = timeInput.value;
//   const departurePlace = departurePlaceInput.value;

//   let hasError = false;

//   if (date === '') {
//     dateError.textContent = 'Please enter a date';
//     hasError = true;
//   }

//   if (time === '') {
//     timeError.textContent = 'Please enter a time';
//     hasError = true;
//   }

//   if (departurePlace === '') {
//     departurePlaceError.textContent = 'Please enter a departure place';
//     hasError = true;
//   }

//   if (!hasError) {
//     // Construct the WhatsApp URL with pre-filled message
//     const whatsappUrl = `https://wa.me/+916351271886?text=Ride+Request%0A%0A*Date:*+${date}%0A*Time:*+${time}%0A*Departure+Place:*+${departurePlace}%0A%0APlease+respond+with+one+of+the+following+options:%0A%0AAccept%0AReject`;

//     // Open WhatsApp app with pre-filled message
//     window.open(whatsappUrl, '_blank');

//     responseMessage.textContent = 'Ride request sent successfully!';
//     responseMessage.classList.add('success-message');
//     responseMessage.style.display = 'block';
//   } else {
//     responseMessage.textContent = 'Please fix the errors above.';
//     responseMessage.classList.add('error-response');
//     responseMessage.style.display = 'block';
//   }
// });


/*
const form = document.getElementById('ride-request-form');
const responseMessage = document.getElementById('response-message');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const departurePlaceInput = document.getElementById('departure-place');
const dateError = document.getElementById('date-error');
const timeError = document.getElementById('time-error');
const departurePlaceError = document.getElementById('departure-place-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous error messages
    dateError.textContent = '';
    timeError.textContent = '';
    departurePlaceError.textContent = '';
    responseMessage.classList.remove('success-message', 'error-response');
    responseMessage.classList.add('hidden');

    const date = dateInput.value;
    const time = timeInput.value;
    const departurePlace = departurePlaceInput.value;

    let hasError = false;

    if (date === '') {
        dateError.textContent = 'Please enter a date';
        hasError = true;
    }

    if (time === '') {
        timeError.textContent = 'Please enter a time';
        hasError = true;
    }

    if (departurePlace === '') {
        departurePlaceError.textContent = 'Please enter a departure place';
        hasError = true;
    }

    if (!hasError) {
        const whatsappUrl = `https://wa.me/+916351271886?text=Ride+Request%0A%0A*Date:*+${date}%0A*Time:*+${time}%0A*Departure+Place:*+${departurePlace}%0A%0APlease+respond+with+one+of+the+following+options:+%0A*Accept*+or+*Reject*`;
        window.open(whatsappUrl, '_blank');

        responseMessage.textContent = 'Ride request sent successfully! Please check WhatsApp.';
        responseMessage.classList.add('success-message');
        responseMessage.classList.remove('hidden');
    } else {
        responseMessage.textContent = 'Please fix the errors above.';
        responseMessage.classList.add('error-response');
        responseMessage.classList.remove('hidden');
    }
});
*/

const form = document.getElementById('ride-request-form');
const responseMessage = document.getElementById('response-message');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const departurePlaceInput = document.getElementById('departure-place');
const dateError = document.getElementById('date-error');
const timeError = document.getElementById('time-error');
const departurePlaceError = document.getElementById('departure-place-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous error messages
    dateError.textContent = '';
    timeError.textContent = '';
    departurePlaceError.textContent = '';
    responseMessage.classList.remove('success-message', 'error-response');
    responseMessage.classList.add('hidden');

    const date = dateInput.value;
    const time = timeInput.value;
    const departurePlace = departurePlaceInput.value;

    let hasError = false;

    if (date === '') {
        dateError.textContent = 'Please enter a date';
        hasError = true;
    }

    if (time === '') {
        timeError.textContent = 'Please enter a time';
        hasError = true;
    }

    if (departurePlace === '') {
        departurePlaceError.textContent = 'Please enter a departure place';
        hasError = true;
    }

    if (!hasError) {
        const whatsappUrl = `https://wa.me/+916351271886?text=Ride+Request%0A%0A*Date:*+${date}%0A*Time:*+${time}%0A*Departure+Place:*+${departurePlace}%0A%0APlease+respond+with+one+of+the+following+options:+%0A*Accept*+or+*Reject*`;
        window.open(whatsappUrl, '_blank');

        responseMessage.textContent = 'Ride request sent successfully! Please check WhatsApp.';
        responseMessage.classList.add('success-message');
        responseMessage.classList.remove('hidden');
    } else {
        responseMessage.textContent = 'Please fix the errors above.';
        responseMessage.classList.add('error-response');
        responseMessage.classList.remove('hidden');
    }
});
