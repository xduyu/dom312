const name = document.getElementById('username');
const surname = document.getElementById('surname');
const tel = document.getElementById('phone')
const email = document.getElementById('email')
const btnGen = document.getElementById('btnGen')
const contacts = document.getElementById('contacts')

console.log(surname.value.trim())

function addElemnt(el) {
    const surnameValue = surname.value.trim()
    const nameValue = name.value.trim()
    const telValue = tel.value.trim()
    const emailValue = email.value.trim()

    if (surnameVale && nameValue && telValue & emailValue) {
        const contactCard = createCard()
        resContentsa.append(contactCard)
    }
}

function createNewElement(el) {

}


// btnGen.addEventListener('click', addElemnt)