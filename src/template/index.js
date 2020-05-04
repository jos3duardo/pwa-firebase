require('./style.scss');
require('./usage')
require('font-awesome/css/font-awesome.css');

let header = require('./header.html');
let content = require('./content.html');
let footer = require('./footer.html');
let sidebar = require('./sidebar.html');

export default {
    el: '#app',
    template: `
        <div id="wrapper">
            ${header}${content}${footer}
        </div>
    ${sidebar}`,
    afterBind: () => {
        let openMenu = document.querySelector('#header .menu-icon');
        let closeMenu = document.getElementById('wrapper');

        let closeMenuEvent = function (e) {
            e.preventDefault();
            let body = document.querySelector('body');
            body.className = body.className.replace('show-menu','');

            closeMenu.removeEventListener('click', closeMenuEvent, true);
        };

        let openMenuEvent = function (e) {
            e.preventDefault();
            let body = document.querySelector('body');
            body.className += "show-menu";
            body.className = body.className.trim()

            closeMenu.addEventListener('click',  closeMenuEvent,true);
        }

        openMenu.addEventListener('click', openMenuEvent);
    }
};
