// variables declaration
const signupName = document.getElementById('signupName')
const signupEmail = document.getElementById('signupEmail')
const signupPassword = document.getElementById('signupPassword')
const signupBtn = document.getElementById('signupBtn')
const inputSignup = document.querySelectorAll('.form-control')
let allUsers = []
let isEmptyFlag = true
let isExistedFlag = true

//get data from local storage
if (localStorage.getItem('allUsers')) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}

//checking if any input signup boxes is empty
function isEmpty() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        document.getElementById('errorMsgSignupS').classList.replace('d-none', 'd-block')
        isEmptyFlag = true
        return false
    }
    else {
        isEmptyFlag = false
    }
}

//checking if email is existed 
function isExisted() {
    isExistedFlag = false
    for (let i = 0; i < allUsers.length; i++) {
        if (signupEmail.value.toLowerCase() == allUsers[i].email.toLowerCase()) {
            document.getElementById('errorMsgSignupF').classList.replace('d-none', 'd-block')

            isExistedFlag = true
            return true
        }
    }
}

//adding new user
function addUser() {
    if (isEmptyFlag == false && isExistedFlag == false) {
        let users = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        }
        allUsers.push(users)
        localStorage.setItem('allUsers', JSON.stringify(allUsers))
        location.href = '../smart-login/index.html'
    }
}

//clearing input boxes 
function clearInputs() {
    signupName.value = ''
    signupEmail.value = ''
    signupPassword.value = ''
}

// adding event to signup btn
signupBtn.addEventListener('click', function () {
    isEmpty()
    isExisted()
    addUser()
    if (isEmptyFlag == false) { clearInputs() }

})

//clearing error msg when focus on input boxes 
for (let i = 0; i < inputSignup.length; i++) {
    inputSignup[i].addEventListener('focus', function () {
        document.getElementById('errorMsgSignupS').classList.replace('d-block', 'd-none')
        document.getElementById('errorMsgSignupF').classList.replace('d-block', 'd-none')
    })
}

