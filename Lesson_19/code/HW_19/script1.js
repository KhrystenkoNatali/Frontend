const form = document.getElementById('userForm');
const userList = document.getElementById('userList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    const li = document.createElement('li');
    li.textContent = `${name} ${lastName} (${email})`;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('deleteBtn');

    li.appendChild(deleteBtn);
    userList.appendChild(li);

    form.reset(); 
});