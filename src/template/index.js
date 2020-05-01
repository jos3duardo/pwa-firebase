let header = require('./header.html');
let content = require('./content.html');
let footer = require('./footer.html');


module.exports = {
    template: header + content + footer,
    action: () => {
        console.log('done');
    }
};
