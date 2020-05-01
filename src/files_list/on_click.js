import getDate from './firebase_get_data';

export default function () {
    let onClick = (e) => {
        e.preventDefault();
        let element = e.target;

        if (e.target.tagName === 'I'){
            element = e.target.parentElement;
        }

        if (element.tagName === 'A'){
            if (element.dataset.type === 'folder-open'){
                getDate(element.dataset.fid)
            }else {
                console.log('download do arquivo')
            }
        }
        // console.log(e.target.tagName)
    };
    document.querySelector('#main').addEventListener('click', onClick)

}