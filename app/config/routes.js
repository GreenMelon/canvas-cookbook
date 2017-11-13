/**
 * 定义路由
 */

import NotFound from '../pages/index/404';
import Index from '../pages/index/index';

import Basic from '../pages/basic/index';
import Restore001 from '../pages/basic/restore/001';

import BasicShapes from '../pages/shapes/index';
import Line001 from '../pages/shapes/line/001';
import Triangle001 from '../pages/shapes/triangle/001';
import Rectangle001 from '../pages/shapes/rectangle/001';
import Rectangle002 from '../pages/shapes/rectangle/002';
import Rectangle003 from '../pages/shapes/rectangle/003';
import Arc001 from '../pages/shapes/arc/001';
import ArcTo001 from '../pages/shapes/arcTo/001';
import Circle001 from '../pages/shapes/circle/001';
import LineWidth from '../pages/shapes/stroke/line-width';
import LineJoin from '../pages/shapes/stroke/line-join';
import Fill from '../pages/shapes/fill/001';

import Gradient from '../pages/gradient/index';
import LinearGradient001 from '../pages/gradient/linear/001';
import RadialGradient001 from '../pages/gradient/radial/001';
import RadialGradient002 from '../pages/gradient/radial/002';

import Pattern from '../pages/pattern/index';
import Pattern001 from '../pages/pattern/001';

import DrawImage from '../pages/draw-image/index';
import Halloween from '../pages/draw-image/instances/halloween';
import ToDataURL from '../pages/draw-image/to-data-url';

import Instances from '../pages/instances/index';
import Tangram from '../pages/instances/tangram';

export default [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },

    { path: '/basic', component: Basic },
    { path: '/basic/restore/001', component: Restore001 },

    { path: '/shapes', component: BasicShapes },
    { path: '/shapes/line/001', component: Line001 },
    { path: '/shapes/triangle/001', component: Triangle001 },
    { path: '/shapes/rectangle/001', component: Rectangle001 },
    { path: '/shapes/rectangle/002', component: Rectangle002 },
    { path: '/shapes/rectangle/003', component: Rectangle003 },
    { path: '/shapes/arc/001', component: Arc001 },
    { path: '/shapes/arcTo/001', component: ArcTo001 },
    { path: '/shapes/circle/001', component: Circle001 },
    { path: '/shapes/stroke/line-width', component: LineWidth },
    { path: '/shapes/stroke/line-join', component: LineJoin },
    { path: '/shapes/fill/001', component: Fill },

    { path: '/gradient', component: Gradient },
    { path: '/gradient/linear/001', component: LinearGradient001 },
    { path: '/gradient/radial/001', component: RadialGradient001 },
    { path: '/gradient/radial/002', component: RadialGradient002 },

    { path: '/pattern', component: Pattern },
    { path: '/pattern/001', component: Pattern001 },

    { path: '/draw-image', component: DrawImage },
    { path: '/draw-image/instances/halloween', component: Halloween },
    { path: '/draw-image/to-data-url', component: ToDataURL },

    { path: '/instances', component: Instances },
    { path: '/instances/tangram', component: Tangram },

    { path: '*', component: NotFound }
];
