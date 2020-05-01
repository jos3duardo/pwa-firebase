import getDate from './firebase_get_data';
import onClick from './on_click';

export default {
    template:require('./template.html'),
    action(){

        getDate('/files/1')
        onClick()

    }
}