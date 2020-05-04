import getDate from './firebase_get_data';
import onClick from './on_click';
require('./style.scss');
import { UserClass } from '../auth/user';

export default {
    el: '#main',
    template: require('./template.html'),
    afterBind(){
        let queryString = window.location.search.slice(1).split('&');
        queryString.forEach((item, key) => {
            item = item.split('=')
            queryString[item[0]] = item[1];
        })

        console.log(queryString);

        let uid = '';
        let title = '';

        if (queryString['drive']){
            uid = queryString['divre'];
            title = queryString['email']
        }else{
            let userInstance = new UserClass;
            uid = userInstance.user.uid
            title = 'home'
        }

        getDate({
            id: '/files/'+ uid,
            title: title
        });
        onClick()

    }
}