import getDate from './update_data';
import onClick from './on_click';

export default {
    template:require('./template.html'),
    action(){

        getDate('/files/1')
        onClick()

    }
}