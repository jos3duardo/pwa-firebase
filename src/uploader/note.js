let template = document.createElement('template')
template.innerHTML = require('./node/template.html')
template = template.content.childNodes;
document.querySelector('body').appendChild(template[0])

document.getElementById('note-cancel').addEventListener( 'click', (e) =>{
    e.preventDefault()
    let noteModal = document.getElementById('note')
    noteModal.className = 'modal'
} )
export default function () {
    let noteModal = document.getElementById('note')
    noteModal.className = 'modal open'
}