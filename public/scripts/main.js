const changeAnswersSelect = document.querySelector('select');
const changeAnswersButton = document.querySelector('#change_answers_button');

if (changeAnswersSelect) {
    changeAnswersButton.setAttribute('href', changeAnswersSelect.value);

    changeAnswersSelect.addEventListener('change', () => {
        changeAnswersButton.setAttribute('href', changeAnswersSelect.value);
    });
}

// when required isn't supported 
const input = document.querySelectorAll('input')
const form = document.querySelector('form')

const emptyInput = () => {
    input.forEach(input => {
        if (input.value.length == 0) {
            form.addEventListener('submit', () => {
                alert('Je hebt nog niet alles ingevuld')
            })
        }
    })
}

emptyInput();