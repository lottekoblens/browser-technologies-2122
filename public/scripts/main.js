// if the user wants to change a answer, this brings them to the page they chose to change the answers of
var AnswersSelect = document.querySelector('select');
var changeAnswersButton = document.querySelector('#change_answers_button');

// check if classlist is supported or not


if (AnswersSelect) {
    changeAnswersButton.setAttribute('href', AnswersSelect.value);

    AnswersSelect.addEventListener('change', function () {
        changeAnswersButton.setAttribute('href', AnswersSelect.value);
    });

    if (document.body.classList) {
        AnswersSelect.classList.add('show'); //only show the select when javascript works
    } else {
        AnswersSelect.style.display = 'block';
    }
}

// when required isn't supported this function will prevent the user from submitting the form without filling in all
// the input fields and textareas
var inputs = document.querySelectorAll('input')
var textareas = document.querySelectorAll('textarea')
var form = document.querySelector('form')

function checkInputs() {
    form.addEventListener('submit', function (event) {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length == 0) {
                event.preventDefault()
                alert('Nog niet alle velden zijn ingevuld');
            }
        }
        for (var i = 0; i < textareas.length; i++) {
            if (textareas[i].value.length == 0) {
                event.preventDefault()
                alert('Nog niet alle velden zijn ingevuld');
            }
        }
    })
}

checkInputs();


// add class loading on page load

// check if classlist is supported or not
if (document.body.classList) {
    window.onload = function () {
        document.body.classList.add('loading');
    }
} else {
    window.onload = function () {
        document.body.style.animation = 'fadein 1s'
    }
}