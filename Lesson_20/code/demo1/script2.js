// https://jsonplaceholder.typicode.com/users


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (response.ok){     // проверили что ответ получен
           return response.json();   // вернет json содеримое ответа     
        } else {
           throw new Error("ошибка загрузки данных");  
        }

    })
    .then ( loadedUser => {
         loadedUser.forEach( user =>
            console.log(user)
            //return fetch(...);
         )
    }

    )
    .catch (
        e=>console.log(e)
    ); 
    