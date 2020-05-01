import  templateComponent  from './template'
import  fileListComponent  from './files_list'

const components = [
    templateComponent,
    fileListComponent
]
class Init{
    constructor() {

        components.forEach((component) => {
            let element = document.querySelector(component.el);
            element.innerHTML = component.template;
            component.afterBind();

        })
    }
}

new Init();
