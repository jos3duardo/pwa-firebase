require('./photo/style.scss')
let template = require('./photo/template.html')
document.querySelector('body').innerHTML += template;

document.getElementById('cancel-photo').addEventListener('click', function (e) {
    e.preventDefault();
    let photoModal = document.getElementById('photo')
    photoModal.className = 'modal'
})

export default function () {
    let photoModal = document.getElementById('photo')
    photoModal.className = 'modal open'
}