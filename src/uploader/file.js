export default function () {
    let fileInput = document.getElementById('file');
    fileInput.click()
    fileInput.addEventListener('change', function (e) {
        console.log(e.target.files[0]);
    })

}