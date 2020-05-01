require('./photo/style.scss')
let template = require('./photo/template.html')
document.querySelector('body').innerHTML += template;

document.getElementById('cancel-photo').addEventListener('click', function (e) {
    e.preventDefault();
    let photoModal = document.getElementById('photo')
    photoModal.className = 'modal'
})

navigator.mediaDevices.enumerateDevices().then((devices) => {
    let options = []
    devices.forEach((device) => {

        if (device.kind === "videoinput"){
            options.push(device)
        }
    });

    let menuCamera = document.querySelector('#photo-choice .menu-camera')
    let partialTemplate = menuCamera.innerHTML;
    console.log(partialTemplate)
    let html = '';
    options.forEach( (device) => {
        let label = device.label || 'Camera'
        html += partialTemplate
            .replace(/{{ id }}/g, device.deviceId)
            .replace(/{{ label }}/g, label)
    })

    menuCamera.innerHTML = html;
})

export default function () {
    let photoModal = document.getElementById('photo')
    photoModal.className = 'modal open'
}