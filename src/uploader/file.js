import { app } from "../firebase";
import { foldersPath } from "../files_list/firebase_get_data";

export default function () {
    let path = '/';
    foldersPath.forEach((item, key) => {
        if (key > 0){
            path += item.id + '/'
        }
    });

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
    function setUtl(url) {
        console.log(url)

        return url;
    }

}