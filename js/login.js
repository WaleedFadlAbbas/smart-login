// variable declaration
const loginEmail = document.getElementById('loginEmail')
const loginPassword = document.getElementById('loginPassword')
const errorLoginMsg = document.getElementById('errorLoginMsg')
const errorEmptyLoginMsg = document.getElementById('errorEmptyLoginMsg')
const loginBtn = document.getElementById('loginBtn')
const inputLogin = document.querySelectorAll('.form-control')
let userExisted = false
let isEmptyFlag = true
let allUsers = []
allUsers = JSON.parse(localStorage.getItem('allUsers'))

//input validation
function isEmpty() {
    if (loginEmail.value == "" || loginPassword.value == "") {
        document.getElementById('errorEmptyLoginMsg').classList.replace('d-none', 'd-block')
        isEmptyFlag = true
        return false
    }
    else {
        isEmptyFlag = false
    }
}

//check user existance
function checkUser() {
    userExisted = false
    for (let i = 0; i < allUsers.length; i++) {
        if (loginEmail.value.toLowerCase() == allUsers[i].email.toLowerCase() && loginPassword.value.toLowerCase() == allUsers[i].password.toLowerCase()) {
            let user = allUsers[i].name
            localStorage.setItem('username', user)
            location.href = '../smart login/homepage.html'
            userExisted = true
            break
        }

    } if (userExisted == false) {
        errorLoginMsg.classList.replace('d-none', 'd-block')
    }
}

// clearing input boxes after user usage
function clearInputs() {
    loginEmail.value = ''
    loginPassword.value = ''
}

//adding event to login btn
loginBtn.addEventListener('click', function () {
    isEmpty()

    if (isEmptyFlag == false) {
        checkUser()
        clearInputs()
    }

})

//clearing error msg 
for (let i = 0; i < inputLogin.length; i++) {
    inputLogin[i].addEventListener('focus', function () {
        document.getElementById('errorEmptyLoginMsg').classList.replace('d-block', 'd-none')
        errorLoginMsg.classList.replace('d-block', 'd-none')
    })
}