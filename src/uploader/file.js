import {app} from "../firebase";

export default function () {
    let fileInput = document.getElementById('file');
    fileInput.click()
    fileInput.addEventListener('change', function (e) {

        const storareRef = app.storage().ref();

        let fileRef = storareRef.child('files/1/' + e.target.files[0].name)
        fileRef.put(e.target.files[0]).then((snapshot) => {
            console.log(snapshot);

        })

    })

}