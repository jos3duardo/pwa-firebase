import { app } from '../firebase'

export default function (ref) {

        let database = app.database();
        let filesRef = database.ref(ref);
        filesRef.on('value', (snapshot) =>{
            let data = snapshot.val()
            data = Object.entries(data)

            let partial = require('./partial.html');

            let html = '';
            for (let index in data){

                if (typeof  data[index][1] != 'object'){
                    continue
                }

                html += partial
                    .replace(/{{ fid }}/g, data[index][0])
                    .replace(/{{ title }}/g, data[index][1].title)
                    .replace(/{{ type }}/g, data[index][1].type)
            }

            document.querySelector('#main .files').innerHTML = html
        })
}