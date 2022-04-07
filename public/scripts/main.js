// if the user wants to change a answer, this brings them to the page they chose to change the answers of
const AnswersSelect = document.querySelector('select');
const changeAnswersButton = document.querySelector('#change_answers_button');


if (AnswersSelect) {
    AnswersSelect.classList.add('show'); //only show the select when javascript works
    changeAnswersButton.setAttribute('href', AnswersSelect.value);

    AnswersSelect.addEventListener('change', () => {
        changeAnswersButton.setAttribute('href', AnswersSelect.value);
    });
}

// when required isn't supported this function will prevent the user from submitting the form without filling in all
// the input fields and textareas
const inputs = document.querySelectorAll('input')
const textareas = document.querySelectorAll('textarea')
const form = document.querySelector('form')

const checkInputs = () => {
    form.addEventListener('submit', (event) => {
        inputs.forEach(input => {
            if (input.value.length == 0) {
                event.preventDefault()
                alert('Nog niet alle velden zijn ingevuld');
            }
        })
        textareas.forEach(textarea => {
            if (textarea.value.length == 0) {
                event.preventDefault()
                alert('Nog niet alle velden zijn ingevuld');
            }
        });
    })
}
checkInputs();

// add class loading on page load
window.onload = () => {
    document.body.classList.add('loading');
}