const dogImage = document.getElementById('dogImage');
const loadBtn = document.getElementById('loadBtn');

loadBtn.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            dogImage.src = data.message;
        })
        .catch(err => {
            alert("Ошибка загрузки картинки");
            console.error(err);
        });
});