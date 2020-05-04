import { app } from '../../firebase'


export const authCreateEmail = function () {
    alert('criação de conta')
    let email = prompt('Qual seu email','')
    let password = prompt('Qual sua senha', '')

    app.auth().createUserWithEmailAndPassword(email,password)
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.log(err)
        })
}

export const authEmail = function () {
    alert('Autenticação')
    let email = prompt('Qual seu email','')
    let password = prompt('Qual sua senha', '')

    app.auth().signInWithEmailAndPassword(email,password)
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.log(err)
        })
}