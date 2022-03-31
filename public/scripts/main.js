// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function () {
//         navigator.serviceWorker.register('/service-worker.js')
//             .then(function (registration) {
//                 return registration.update();
//             })
//     });
// }

const submitButton = document.getElementById('submitButton')
const input = document.querySelector('form input')

const disableButton = () => {
    submitButton.disabled = true;
}

disableButton()

const enableButton = () => {
    if (input !== '') {
        submitButton.removeAttribute('disabled')
    }
}

enableButton()

// input.addEventListener('invalid', (e) => {
//     console.log('invalid')
// });