import { app } from '../firebase'

let template = document.createElement('template')
template.innerHTML = require('./template.html')
template = template.content.childNodes

document.querySelector('body').appendChild(template[0])

export default {
    el: null,
    template: null,
    afterBind () {
        app.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('estou autenticado')
            }else{
                console.log('quero me autenticado')
            }
        })
    }
}