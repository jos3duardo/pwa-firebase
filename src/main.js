import  templateComponent  from './template'
import  uploaderComponent  from './uploader'
import  authComponent  from './auth'

const components = [
    templateComponent,
    uploaderComponent,
    authComponent
]
class Init{
    constructor() {
        components.forEach((component) => {
            if (component.el){
                let element = document.querySelector(component.el);
                element.innerHTML = component.template;
            }
            component.afterBind();

        })
    }
}

new Init();
