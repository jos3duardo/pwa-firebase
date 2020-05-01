let header = require('./header.html');
let content = require('./content.html');
let footer = require('./footer.html');
let sidenav = require('./sidebar.html');

module.exports = {
    template: `
        <div id="wrapper">
            ${header}${content}${footer}
        </div>
        ${sidenav}
    `,
    action: () => {
        console.log('done');
    }
};
