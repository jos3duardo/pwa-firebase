import { app } from "../firebase";

export default function (value) {
    const sha1 = require('js-sha1')

    let ref = app.database().ref('/sharer/' + sha1(value))

    ref.once('value', (snapshot) => {
        if (snapshot.val()){
            console.log('achou')
        }else {
            alert('email não cadastrado')
        }
    })
}