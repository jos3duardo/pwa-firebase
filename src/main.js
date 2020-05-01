require('./styule.scss');
let partial = require('./partial.html')

class Init{
    constructor() {
        // let component = require('./index/')
        let app = document.getElementById('app')
        app.innerHTML = partial;
    }
}

new Init();
