/**
 * 定义路由
 */

import NotFound from '../pages/index/404';
import Index from '../pages/index/index';

import BasicShapes from '../pages/basic-shapes/index';
import Line001 from '../pages/basic-shapes/line/001';
import Triangle001 from '../pages/basic-shapes/triangle/001';
import Rectangle001 from '../pages/basic-shapes/rectangle/001';
import Circle001 from '../pages/basic-shapes/circle/001';

import DrawImage from '../pages/draw-image/index';
import Halloween from '../pages/draw-image/instances/halloween';

export default [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },

    { path: '/basic-shapes', component: BasicShapes },
    { path: '/basic-shapes/line/001', component: Line001 },
    { path: '/basic-shapes/triangle/001', component: Triangle001 },
    { path: '/basic-shapes/rectangle/001', component: Rectangle001 },
    { path: '/basic-shapes/circle/001', component: Circle001 },

    { path: '/draw-image', component: DrawImage },
    { path: '/draw-image/instances/halloween', component: Halloween },

    { path: '*', component: NotFound }
];
