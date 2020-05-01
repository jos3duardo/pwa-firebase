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
                    .replace(/{{ title }}/g, data[index].title)
                    .replace(/{{ type }}/g, data[index].type)
            }

            document.querySelector('#main .files').innerHTML = html
        })

        let onClick = (e) => {
            e.preventDefault();
            let element = e.target;

            if (e.target.tagName === 'I'){
                element = e.target.parentElement;
            }

            if (element.tagName === 'A'){
                if (element.dataset.type === 'folder-open'){
                    console.log('abre a pasta')
                }else {
                    console.log('download do arquivo')
                }
            }
            console.log(e.target.tagName)
        };

        document.querySelector('#main').addEventListener('click', onClick)



    }
}