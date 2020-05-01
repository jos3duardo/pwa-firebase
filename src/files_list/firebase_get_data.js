import { app } from '../firebase'
import getDate from './update_data';

export const foldersPath = []

export default function (reference) {
    let position = foldersPath.findIndex((e) => e.id === reference.id );

    if (position === -1){
        foldersPath.push(reference)
    }else{
        foldersPath.splice( position + 1, foldersPath.length - position )
    }

    let firebase_ref = '';
    let breadcrumbs = '';

    for (let index in foldersPath){
        firebase_ref += foldersPath[index].id + '/';
        breadcrumbs += ` | <a href="" data-type="folder-open" data-fid="${foldersPath[index].id}">${foldersPath[index].title}</a>`
    }

    let database = app.database();
    let filesRef = database.ref(firebase_ref);
    filesRef.on('value', getDate)

    document.querySelector('#path').innerHTML = breadcrumbs
}