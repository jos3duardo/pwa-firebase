import { app } from "../firebase";
import getPath from "./utils/path";

export default function () {

    let path = getPath()

    let fileInput = document.getElementById('file');
    fileInput.click()
    fileInput.addEventListener('change', function (e) {
        const storareRef = app.storage().ref();
        let fileRef = storareRef.child('files/1/' + path + e.target.files[0].name)
        fileRef.put(e.target.files[0]).then((snapshot) => {
            let folderRef = app.database().ref('files/1' + path);
            snapshot.ref.getDownloadURL().then(function(url) {
                 folderRef.push({
                     type: 'file',
                     title: e.target.files[0].name,
                     url: url
                 })
            })
        })

    })
}