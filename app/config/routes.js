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
import Arc001 from '../pages/basic-shapes/arc/001';
import ArcTo001 from '../pages/basic-shapes/arcTo/001';
import Circle001 from '../pages/basic-shapes/circle/001';
import LineWidth from '../pages/basic-shapes/stroke/line-width';
import LineJoin from '../pages/basic-shapes/stroke/line-join';
import Fill from '../pages/basic-shapes/fill/001';

import Gradient from '../pages/gradient/index';
import LinearGradient001 from '../pages/gradient/linear/001';
import RadialGradient001 from '../pages/gradient/radial/001';
import RadialGradient002 from '../pages/gradient/radial/002';

import DrawImage from '../pages/draw-image/index';
import Halloween from '../pages/draw-image/instances/halloween';

import Instances from '../pages/instances/index';
import Tangram from '../pages/instances/tangram';

export default [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },

    { path: '/basic-shapes', component: BasicShapes },
    { path: '/basic-shapes/line/001', component: Line001 },
    { path: '/basic-shapes/triangle/001', component: Triangle001 },
    { path: '/basic-shapes/rectangle/001', component: Rectangle001 },
    { path: '/basic-shapes/rectangle/002', component: Rectangle002 },
    { path: '/basic-shapes/rectangle/003', component: Rectangle003 },
    { path: '/basic-shapes/arc/001', component: Arc001 },
    { path: '/basic-shapes/arcTo/001', component: ArcTo001 },
    { path: '/basic-shapes/circle/001', component: Circle001 },
    { path: '/basic-shapes/stroke/line-width', component: LineWidth },
    { path: '/basic-shapes/stroke/line-join', component: LineJoin },
    { path: '/basic-shapes/fill/001', component: Fill },

    { path: '/gradient', component: Gradient },
    { path: '/gradient/linear/001', component: LinearGradient001 },
    { path: '/gradient/radial/001', component: RadialGradient001 },
    { path: '/gradient/radial/002', component: RadialGradient002 },

    { path: '/draw-image', component: DrawImage },
    { path: '/draw-image/instances/halloween', component: Halloween },

    { path: '/instances', component: Instances },
    { path: '/instances/tangram', component: Tangram },

    { path: '*', component: NotFound }
];
