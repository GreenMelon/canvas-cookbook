/**
 * 定义路由
 */

import NotFound from '../pages/index/404';
import Index from '../pages/index/index';

function capitalize(str) {
    return str = str.split('-').map(item => {
        return item.substring(0, 1).toUpperCase() + item.substring(1);
    })
    .reduce((prev, each) => {
        return prev + each;
    });
};

let pages = [
    //
];

pages = pages.map(path => {
    let component = path.split('/').map(item => {
        return capitalize(item);
    })
    .reduce((prev, each) => {
        return prev + each;
    });

    // 无法import
    // import component from ('../pages/' + path);

    return {
        path: '/' + path,
        component: component
    };
});

let routes = [
    {
        path: '/',
        redirect: '/index'
    },{
        path: '/index',
        component: Index
    }
];

routes.push({ path: '*', component: NotFound });

export default routes;
