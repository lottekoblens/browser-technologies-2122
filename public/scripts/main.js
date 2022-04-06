// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function () {
//         navigator.serviceWorker.register('/service-worker.js')
//             .then(function (registration) {
//                 return registration.update();
//             })
//     });
// }

// const elements = document.querySelectorAll('input, select, textarea');


// elements.forEach(element => element.addEventListener('invalid', function (event) {
//     if (event.target.validity.valueMissing) {
//         event.target.setCustomValidity('Vul hier de juiste gegevens in!');
//     }
// }))

// for ()

// input.forEach(element => {
//     element.addEventListener('invalid', function (event) {
//         if (event.target.validity.valueMissing) {
//             event.target.setCustomValidity('Vul hier je naam in!');
//         }

//     });
// })

// input.addEventListener('invalid', function (event) {
//     if (event.target.validity.valueMissing) {
//         event.target.setCustomValidity('Vul hier je naam in!');
//     }
// })

const changeAnswersSelect = document.querySelector('select');
const changeAnswersButton = document.querySelector('#change_answers_button');

if (changeAnswersSelect) {
    changeAnswersButton.setAttribute('href', changeAnswersSelect.value);

    changeAnswersSelect.addEventListener('change', () => {
        changeAnswersButton.setAttribute('href', changeAnswersSelect.value);
    });
}