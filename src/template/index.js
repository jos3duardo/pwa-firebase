let header = require('./header.html');
let content = require('./content.html');
module.exports = {
    template: header + content,
    action: () => {
        console.log('done');
    }
};
