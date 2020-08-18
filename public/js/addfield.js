document.querySelector("#add-time")
    .addEventListener('click', cloneField)

function cloneField() {
    const newfieldConteiner = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newfieldConteiner.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newfieldConteiner)
}