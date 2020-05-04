import getPath from "./path";
import {app} from "../../firebase";
import { UserClass } from '../../auth/user'

export default function (file, name) {
    let path = getPath()
    const storareRef = app.storage().ref();
    let fileRef = storareRef.child('/files/'+ userInstance.user.uid + name)

    let userInstance = new UserClass();

    fileRef.put(file).then((snapshot) => {
        let folderRef = app.database().ref('files/'+  userInstance.user.uid + path);

        snapshot.ref.getDownloadURL().then(function(url) {
            folderRef.push({
                type: 'file',
                title: name,
                url: url
            })
        })
    })
}