/**
 * 定义路由
 */

import NotFound from '../pages/index/404';
import Index from '../pages/index/index';

import BasicShapes from '../pages/basic-shapes/index';
import Line001 from '../pages/basic-shapes/line/001';
import Triangle001 from '../pages/basic-shapes/triangle/001';
import Rectangle001 from '../pages/basic-shapes/rectangle/001';
import Rectangle002 from '../pages/basic-shapes/rectangle/002';
import Rectangle003 from '../pages/basic-shapes/rectangle/003';
import ArcTo001 from '../pages/basic-shapes/arcTo/001';
import Circle001 from '../pages/basic-shapes/circle/001';
import Stroke from '../pages/basic-shapes/stroke/001';
import Fill from '../pages/basic-shapes/fill/001';

import Instances from '../pages/instances/index';
import Tangram from '../pages/instances/tangram';

import DrawImage from '../pages/draw-image/index';
import Halloween from '../pages/draw-image/instances/halloween';

export default [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },

    { path: '/basic-shapes', component: BasicShapes },
    { path: '/basic-shapes/line/001', component: Line001 },
    { path: '/basic-shapes/triangle/001', component: Triangle001 },
    { path: '/basic-shapes/rectangle/001', component: Rectangle001 },
    { path: '/basic-shapes/rectangle/002', component: Rectangle002 },
    { path: '/basic-shapes/rectangle/003', component: Rectangle003 },
    { path: '/basic-shapes/arcTo/001', component: ArcTo001 },
    { path: '/basic-shapes/circle/001', component: Circle001 },
    { path: '/basic-shapes/stroke/001', component: Stroke },
    { path: '/basic-shapes/fill/001', component: Fill },

    { path: '/instances', component: Instances },
    { path: '/instances/tangram', component: Tangram },

    { path: '/draw-image', component: DrawImage },
    { path: '/draw-image/instances/halloween', component: Halloween },

    { path: '*', component: NotFound }
];
