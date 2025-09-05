function getInfo(request){
    let promise =  new Promise(
      function(resolve, reject){          // функция executor
        const ok = Math.random()>0.3; 

        if (ok){
            resolve( {code: `получено ${request}`}  );
        } else {
            reject( {msg: `error!!! при получение ${request}`} );
        }
    });

   return promise; 
}

/*
getInfo("1")
    .then (
        responce => console.log(responce),  // callback который испольнится в случае успеха
        err => console.log(err)
    );
*/    
/*
getInfo("1")
    .then (
        responce => console.log(responce)  // callback который испольнится в случае успеха
    )
    .catch (
        err => console.log(err)
    )
*/

getInfo("пользователь Jack")
    .then( response=>{ console.log(response);  
            return getInfo ("профиль пользователчя " + response.code);    
        })
    .then( response => {
            console.log(response);
            return getInfo ("фотография ")
    })
    .then (response => console.log(response))  
    .catch  (
        err => console.log(err)
    )