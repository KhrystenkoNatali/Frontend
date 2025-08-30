const userList = document.getElementById('userList');

userList.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
        const li = event.target.parentElement;
        userList.removeChild(li);
    }
});