import { app } from '../firebase'
import getDate from './update_data';

let folderPath = []

export default function (reference) {
    let position = folderPath.findIndex((e) => {
        e = reference
    });

    if (position === -1){
        folderPath.push(reference)
    }else{
        folderPath = folderPath.slice(position + 1)
    }


    let database = app.database();
    let filesRef = database.reference(reference);
    filesRef.on('value', getDate)
}