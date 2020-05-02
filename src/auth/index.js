import { app } from '../firebase'
import { authCreateEmail} from "./auth/email";

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
                const auth = document.getElementById('auth')
                auth.className = 'modal open'
                document.querySelector('#auth-email').addEventListener('click', function (e) {
                    e.preventDefault()
                    console.log('login')

                })
                document.querySelector('#auth-create-email').addEventListener('click', function (e) {
                    e.preventDefault()
                   authCreateEmail()

                })
            }
        })
    }
}