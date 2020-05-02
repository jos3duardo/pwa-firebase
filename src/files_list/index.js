import getDate from './firebase_get_data';
import onClick from './on_click';
require('./style.scss');
import { UserClass } from '../auth/user';

export default {
    el: '#main',
    template:require('./template.html'),
    afterBind(){
        let userInstance = new UserClass;
        console.log(userInstance.user.uid)
        getDate({
            id: '/files/'+ userInstance.user.uid,
            title: 'home'
        });
        onClick()

    }
}