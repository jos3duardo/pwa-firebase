require('./photo/style.scss')
let template = require('./photo/template.html')
document.querySelector('body').innerHTML += template;

document.getElementById('cancel-photo').addEventListener('click', function (e) {
    e.preventDefault();
    let photoModal = document.getElementById('photo')
    photoModal.className = 'modal'
})

const startVideo = function(id){
    let config = {
        video: {deviceId: id},
        audio: false
    }

    let sucees = (stream) => {
        console.log('video rolando')
    }
    navigator.getUserMedia(config, sucees, (err) => console.log(err))
}

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

    document.querySelector('#photo-choice .menu-camera a').addEventListener('click', function (e) {
        e.preventDefault()
        startVideo(e.target.dataset.camera)
    } )
})

export default function () {
    let photoModal = document.getElementById('photo')
    photoModal.className = 'modal open'
}