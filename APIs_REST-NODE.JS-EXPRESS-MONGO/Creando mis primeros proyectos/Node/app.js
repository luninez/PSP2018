let promesa = new Promise((res, rej) => {
    res('Exito');
    rej('Error')
});

let promesa2 = new Promise((res, rej) => {
    // haré lo que sea
    // si tengo exito
    res(valor);

    //si hay algun error
    rej(new Error('Error'));
});

promesa
    .then((resultado) => {console.log(resultado);})
    .catch((error) => {console.log(error);});