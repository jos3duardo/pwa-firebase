import { app } from '../firebase'

export default {
    template:require('./template.html'),
    action(){
        let database = app.database();
        let filesRef = database.ref('/files/1');
        filesRef.on('value', (snapshot) =>{
            let data = snapshot.val()

            let partial = require('./partial.html');

            let html = '';
            for (let index in data){
                html += partial
                    .replace('{{ title }}', data[index].title)
                    .replace('{{ type }}', data[index].type)
            }

            document.querySelector('#main .files').innerHTML = html
        })





    }
}