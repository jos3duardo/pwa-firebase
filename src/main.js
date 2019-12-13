require('./styule.scss');
let partial = require('./partial.html')

class Init{
    constructor(name) {
        let app = document.getElementById('app')
        app.innerHTML = partial;
    }
}

new Init('José Eduardo');
