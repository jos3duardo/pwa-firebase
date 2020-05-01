require('./style.scss');

let header = require('./header.html');
let content = require('./content.html');
let footer = require('./footer.html');
let sidebar = require('./sidebar.html');

module.exports = {
    template: `
        <div id="wrapper">
            ${header}${content}${footer}
        </div>
        ${sidebar}
    `,
    action: () => {
        console.log('done');
    }
};
