import getDate from './firebase_get_data';
import onClick from './on_click';
require('./style.scss');

export default {
    el: '#main',
    template:require('./template.html'),
    afterBind(){
        getDate({
            id: '/files/1',
            title: 'home'
        });
        onClick()

    }
}