const changeAnswersSelect = document.querySelector('select');
const changeAnswersButton = document.querySelector('#change_answers_button');

if (changeAnswersSelect) {
    changeAnswersButton.setAttribute('href', changeAnswersSelect.value);

    changeAnswersSelect.addEventListener('change', () => {
        changeAnswersButton.setAttribute('href', changeAnswersSelect.value);
    });
}

// when required isn't supported 
const inputs = document.querySelectorAll('input')
const textareas = document.querySelectorAll('textarea')
const form = document.querySelector('form')

const checkInputs = () => {
    inputs.forEach(input => {
        if (input.value.length == 0) {
            form.addEventListener('submit', (event) => {
                alert('Nog niet alle velden zijn ingevuld');
            })
        }
    });
    textareas.forEach(textarea => {
        if (textarea.value.length == 0) {
            form.addEventListener('submit', () => {
                alert('Nog niet alle velden zijn ingevuld');
            })
        }
    });
}
checkInputs();


window.onload = () => {
    document.body.classList.add('loading');
}