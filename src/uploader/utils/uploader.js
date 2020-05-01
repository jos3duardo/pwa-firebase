import getPath from "./path";
import {app} from "../../firebase";

export default function (file, name) {
    let path = getPath()
    const storareRef = app.storage().ref();
    let fileRef = storareRef.child('files/1/' + path + name)
    fileRef.put(file).then((snapshot) => {
        let folderRef = app.database().ref('files/1' + path);

        snapshot.ref.getDownloadURL().then(function(url) {
            folderRef.push({
                type: 'file',
                title: name,
                url: url
            })
        })
    })
}