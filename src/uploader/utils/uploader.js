import getPath from "./path";
import {app} from "../../firebase";
import { UserClass } from '../../auth/user'

export default function (file, name) {
    let path = getPath()
    const storareRef = app.storage().ref();


    let userInstance = new UserClass();

    let fileRef = storareRef.child('files/'+ userInstance.user.uid + name)

    fileRef.put(file).then((snapshot) => {
        let folderRef = app.database().ref('files/'+  userInstance.user.uid + path);


        snapshot.ref.getDownloadURL().then(function(url) {
            folderRef.push({
                type: 'file',
                title: name,
                url: url,
                size: snapshot.totalBytes
            })
        })

        let totalBytes = snapshot.totalBytes;
        // console.log(totalBytes)

        let userRef = app.database().ref('/users/' + userInstance.user.uid + '/usage')

        userRef.once('value', (snapshot) => {
            let size = snapshot.val() || 0;
            userRef.set(totalBytes + size)
        }, err => console.log(err))
    })
}