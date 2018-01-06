/**
 * 定义路由
 */

import NotFound from 'pages/index/404';
import Index from 'pages/index/index';

import Basic from 'pages/basic/index';
import Restore01 from 'pages/basic/restore/01';

import BasicShapes from 'pages/shapes/index';
import Line01 from 'pages/shapes/line/01';
import Triangle01 from 'pages/shapes/triangle/01';
import Rectangle01 from 'pages/shapes/rectangle/01';
import Rectangle02 from 'pages/shapes/rectangle/02';
import Rectangle03 from 'pages/shapes/rectangle/03';
import Rectangle04 from 'pages/shapes/rectangle/04';
import Polygon01 from 'pages/shapes/polygon/01';
import Circle01 from 'pages/shapes/circle/01';
import Circle02 from 'pages/shapes/circle/02';
import Arc01 from 'pages/shapes/arc/01';
import ArcTo01 from 'pages/shapes/arcTo/01';
import QuadraticCurveTo01 from 'pages/shapes/quadratic-curve-to/01';
import BezierCurveTo01 from 'pages/shapes/bezier-curve-to/01';
import LineWidth from 'pages/shapes/stroke/line-width';
import LineJoin from 'pages/shapes/stroke/line-join';
import LineJoin02 from 'pages/shapes/stroke/line-join-02';
import LineCap from 'pages/shapes/stroke/line-cap';
import SetLineDash from 'pages/shapes/stroke/set-line-dash';
import Fill from 'pages/shapes/fill/01';

import Gradient from 'pages/gradient/index';
import LinearGradient01 from 'pages/gradient/linear/01';
import RadialGradient01 from 'pages/gradient/radial/01';
import RadialGradient02 from 'pages/gradient/radial/02';

import Pattern from 'pages/pattern/index';
import Pattern01 from 'pages/pattern/01';
import Pattern02 from 'pages/pattern/02';

import Text from 'pages/text/index';
import StrokeText01 from 'pages/text/stroke-text/01';
import FillText01 from 'pages/text/fill-text/01';
import FillText02 from 'pages/text/fill-text/02';
import MeasureText01 from 'pages/text/measure-text/01';
import MeasureText02 from 'pages/text/measure-text/02';
import TextAlign01 from 'pages/text/text-align/01';
import TextBaseLine01 from 'pages/text/text-base-line/01';

import Image from 'pages/image/index';
import DrawImage01 from 'pages/image/draw/01';
import DrawImage02 from 'pages/image/draw/02';
import DrawImage03 from 'pages/image/draw/03';
import Halloween from 'pages/image/draw/halloween';
import Screenshot from 'pages/image/draw/screenshot';
import ClipImage01 from 'pages/image/clip/01';
import ToDataURL from 'pages/image/export/to-data-url';

import Pixel from 'pages/pixel/index';
import Invert01 from 'pages/pixel/invert/01';

import Transform from 'pages/transform/index';
import Translate01 from 'pages/transform/translate/01';
import Scale01 from 'pages/transform/scale/01';
import Scale02 from 'pages/transform/scale/02';
import Rotate01 from 'pages/transform/rotate/01';
import Rotate02 from 'pages/transform/rotate/02';

import Instances from 'pages/instances/index';
import Tangram from 'pages/instances/tangram';
import Palette from 'pages/instances/palette';

export default [
    { path: '/', redirect: '/text/fill-text/01' },
    { path: '/index', component: Index },

    { path: '/basic', component: Basic },
    { path: '/basic/restore/01', component: Restore01 },

    { path: '/shapes', component: BasicShapes },
    { path: '/shapes/line/01', component: Line01 },
    { path: '/shapes/triangle/01', component: Triangle01 },
    { path: '/shapes/rectangle/01', component: Rectangle01 },
    { path: '/shapes/rectangle/02', component: Rectangle02 },
    { path: '/shapes/rectangle/03', component: Rectangle03 },
    { path: '/shapes/rectangle/04', component: Rectangle04 },
    { path: '/shapes/polygon/01', component: Polygon01 },
    { path: '/shapes/circle/01', component: Circle01 },
    { path: '/shapes/circle/02', component: Circle02 },
    { path: '/shapes/arc/01', component: Arc01 },
    { path: '/shapes/arcTo/01', component: ArcTo01 },
    { path: '/shapes/quadratic-curve-to/01', component: QuadraticCurveTo01 },
    { path: '/shapes/bezier-curve-to/01', component: BezierCurveTo01 },
    { path: '/shapes/stroke/line-width', component: LineWidth },
    { path: '/shapes/stroke/line-join', component: LineJoin },
    { path: '/shapes/stroke/line-join-02', component: LineJoin02 },
    { path: '/shapes/stroke/line-cap', component: LineCap },
    { path: '/shapes/stroke/set-line-dash', component: SetLineDash },
    { path: '/shapes/fill/01', component: Fill },

    { path: '/gradient', component: Gradient },
    { path: '/gradient/linear/01', component: LinearGradient01 },
    { path: '/gradient/radial/01', component: RadialGradient01 },
    { path: '/gradient/radial/02', component: RadialGradient02 },

    { path: '/pattern', component: Pattern },
    { path: '/pattern/01', component: Pattern01 },
    { path: '/pattern/02', component: Pattern02 },

    { path: '/text', component: Text },
    { path: '/text/stroke-text/01', component: StrokeText01 },
    { path: '/text/fill-text/01', component: FillText01 },
    { path: '/text/fill-text/02', component: FillText02 },
    { path: '/text/measure-text/01', component: MeasureText01 },
    { path: '/text/measure-text/02', component: MeasureText02 },
    { path: '/text/text-align/01', component: TextAlign01 },
    { path: '/text/text-base-line/01', component: TextBaseLine01 },

    { path: '/image', component: Image },
    { path: '/image/draw/01', component: DrawImage01 },
    { path: '/image/draw/02', component: DrawImage02 },
    { path: '/image/draw/03', component: DrawImage03 },
    { path: '/image/draw/halloween', component: Halloween },
    { path: '/image/draw/screenshot', component: Screenshot },
    { path: '/image/clip/01', component: ClipImage01 },
    { path: '/image/export/to-data-url', component: ToDataURL },

    { path: '/pixel', component: Pixel },
    { path: '/pixel/invert/01', component: Invert01 },

    { path: '/transform', component: Transform },
    { path: '/transform/translate/01', component: Translate01 },
    { path: '/transform/scale/01', component: Scale01 },
    { path: '/transform/scale/02', component: Scale02 },
    { path: '/transform/rotate/01', component: Rotate01 },
    { path: '/transform/rotate/02', component: Rotate02 },

    { path: '/instances', component: Instances },
    { path: '/instances/tangram', component: Tangram },
    { path: '/instances/palette', component: Palette },

    { path: '*', component: NotFound }
];
