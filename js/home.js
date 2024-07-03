// variable declaration
const user = document.getElementById('user')
const logoutBtn = document.getElementById('logoutBtn')

//get username from local strg
user.innerHTML = localStorage.getItem('username')

// add event to logout btn
logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('username')
    location.href = '../smart login/index.html'
})

