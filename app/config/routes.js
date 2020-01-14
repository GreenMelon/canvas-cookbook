/**
 * 定义路由
 */

const NotFound = () => import('pages/index/404');
const Index = () => import('pages/index/index');

const PathAndStatus = () => import('pages/path-and-status/index');
const Path01 = () => import('pages/path-and-status/path/01');
const Clip01 = () => import('pages/path-and-status/clip/01');
const Restore01 = () => import('pages/path-and-status/restore/01');

const BasicShapes = () => import('pages/shapes/index');
const Line01 = () => import('pages/shapes/line/01');
const Triangle01 = () => import('pages/shapes/triangle/01');
const Rectangle01 = () => import('pages/shapes/rectangle/01');
const Rectangle02 = () => import('pages/shapes/rectangle/02');
const Rectangle03 = () => import('pages/shapes/rectangle/03');
const Rectangle04 = () => import('pages/shapes/rectangle/04');
const Polygon01 = () => import('pages/shapes/polygon/01');
const Circle01 = () => import('pages/shapes/circle/01');
const Circle02 = () => import('pages/shapes/circle/02');
const Arc01 = () => import('pages/shapes/arc/01');
const ArcTo01 = () => import('pages/shapes/arcTo/01');
const QuadraticCurveTo01 = () => import('pages/shapes/quadratic-curve-to/01');
const BezierCurveTo01 = () => import('pages/shapes/bezier-curve-to/01');
const LineWidth = () => import('pages/shapes/stroke/line-width');
const LineJoin = () => import('pages/shapes/stroke/line-join');
const LineJoin02 = () => import('pages/shapes/stroke/line-join-02');
const LineCap = () => import('pages/shapes/stroke/line-cap');
const SetLineDash = () => import('pages/shapes/stroke/set-line-dash');
const Fill = () => import('pages/shapes/fill/01');

const Text = () => import('pages/text/index');
const StrokeText01 = () => import('pages/text/stroke-text/01');
const FillText01 = () => import('pages/text/fill-text/01');
const FillText02 = () => import('pages/text/fill-text/02');
const FillText03 = () => import('pages/text/fill-text/03');
const FillText04 = () => import('pages/text/fill-text/04');
const MeasureText01 = () => import('pages/text/measure-text/01');
const MeasureText02 = () => import('pages/text/measure-text/02');
const TextAlign01 = () => import('pages/text/text-align/01');
const TextBaseLine01 = () => import('pages/text/text-base-line/01');

const Image = () => import('pages/image/index');
const DrawImage01 = () => import('pages/image/draw/01');
const DrawImage02 = () => import('pages/image/draw/02');
const DrawImage03 = () => import('pages/image/draw/03');
const DrawImage04 = () => import('pages/image/draw/04');
const Halloween = () => import('pages/image/draw/halloween');
const Screenshot = () => import('pages/image/draw/screenshot');
const ClipImage01 = () => import('pages/image/clip/01');
const MergeImage01 = () => import('pages/image/merge/01');
const HeightLimit = () => import('pages/image/export/height-limit');
const ToDataURL = () => import('pages/image/export/to-data-url');

const Pixel = () => import('pages/pixel/index');
const Invert01 = () => import('pages/pixel/invert/01');
const Average01 = () => import('pages/pixel/average/01');
const Brightness01 = () => import('pages/pixel/brightness/01');
const Sepia01 = () => import('pages/pixel/sepia/01');
const Mask01 = () => import('pages/pixel/mask/01');
const Alpha01 = () => import('pages/pixel/alpha/01');
const GaussianBlur01 = () => import('pages/pixel/gaussian-blur/01');
const Mosaic01 = () => import('pages/pixel/mosaic/01');
const GlobalAlpha = () => import('pages/pixel/global/alpha');
const GlobalCompositeOperation = () => import('pages/pixel/global/composite-operation');

const Gradient = () => import('pages/gradient/index');
const LinearGradient01 = () => import('pages/gradient/linear/01');
const LinearGradient02 = () => import('pages/gradient/linear/02');
const LinearGradient03 = () => import('pages/gradient/linear/03');
const RadialGradient01 = () => import('pages/gradient/radial/01');
const RadialGradient02 = () => import('pages/gradient/radial/02');

const Shadow = () => import('pages/shadow/index');
const Shadow01 = () => import('pages/shadow/01');

const Pattern = () => import('pages/pattern/index');
const Pattern01 = () => import('pages/pattern/01');
const Pattern02 = () => import('pages/pattern/02');

const Transform = () => import('pages/transform/index');
const Translate01 = () => import('pages/transform/translate/01');
const Scale01 = () => import('pages/transform/scale/01');
const Scale02 = () => import('pages/transform/scale/02');
const Rotate01 = () => import('pages/transform/rotate/01');
const Rotate02 = () => import('pages/transform/rotate/02');

const Animation = () => import('pages/animation/index');
const ColorAnimation = () => import('pages/animation/color');
const CountDownAnimation = () => import('pages/animation/countdown');

const Events = () => import('pages/events/index');
const Mouse01 = () => import('pages/events/mouse/01');

const Instances = () => import('pages/instances/index');
const Tangram = () => import('pages/instances/tangram');
const Wind = () => import('pages/instances/wind');
const Palette = () => import('pages/instances/palette');
const Magnifier = () => import('pages/instances/magnifier');

const Plugins = () => import('pages/plugins/index');
const DomToImage01 = () => import('pages/plugins/dom-to-image/01');

export default [
    { path: '/', redirect: '/text/fill-text/01' },
    { path: '/index', component: Index },

    { path: '/path-and-status', component: PathAndStatus },
    { path: '/path-and-status/path/01', component: Path01 },
    { path: '/path-and-status/clip/01', component: Clip01 },
    { path: '/path-and-status/restore/01', component: Restore01 },

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

    { path: '/text', component: Text },
    { path: '/text/stroke-text/01', component: StrokeText01 },
    { path: '/text/fill-text/01', component: FillText01 },
    { path: '/text/fill-text/02', component: FillText02 },
    { path: '/text/fill-text/03', component: FillText03 },
    { path: '/text/fill-text/04', component: FillText04 },
    { path: '/text/measure-text/01', component: MeasureText01 },
    { path: '/text/measure-text/02', component: MeasureText02 },
    { path: '/text/text-align/01', component: TextAlign01 },
    { path: '/text/text-base-line/01', component: TextBaseLine01 },

    { path: '/image', component: Image },
    { path: '/image/draw/01', component: DrawImage01 },
    { path: '/image/draw/02', component: DrawImage02 },
    { path: '/image/draw/03', component: DrawImage03 },
    { path: '/image/draw/04', component: DrawImage04 },
    { path: '/image/draw/halloween', component: Halloween },
    { path: '/image/draw/screenshot', component: Screenshot },
    { path: '/image/clip/01', component: ClipImage01 },
    { path: '/image/merge/01', component: MergeImage01 },
    { path: '/image/export/height-limit', component: HeightLimit },
    { path: '/image/export/to-data-url', component: ToDataURL },

    { path: '/pixel', component: Pixel },
    { path: '/pixel/invert/01', component: Invert01 },
    { path: '/pixel/average/01', component: Average01 },
    { path: '/pixel/brightness/01', component: Brightness01 },
    { path: '/pixel/sepia/01', component: Sepia01 },
    { path: '/pixel/mask/01', component: Mask01 },
    { path: '/pixel/alpha/01', component: Alpha01 },
    { path: '/pixel/gaussian-blur/01', component: GaussianBlur01 },
    { path: '/pixel/mosaic/01', component: Mosaic01 },
    { path: '/pixel/global-alpha', component: GlobalAlpha },
    { path: '/pixel/global-composite-operation', component: GlobalCompositeOperation },

    { path: '/gradient', component: Gradient },
    { path: '/gradient/linear/01', component: LinearGradient01 },
    { path: '/gradient/linear/02', component: LinearGradient02 },
    { path: '/gradient/linear/03', component: LinearGradient03 },
    { path: '/gradient/radial/01', component: RadialGradient01 },
    { path: '/gradient/radial/02', component: RadialGradient02 },

    { path: '/shadow', component: Shadow },
    { path: '/shadow/01', component: Shadow01 },

    { path: '/pattern', component: Pattern },
    { path: '/pattern/01', component: Pattern01 },
    { path: '/pattern/02', component: Pattern02 },

    { path: '/transform', component: Transform },
    { path: '/transform/translate/01', component: Translate01 },
    { path: '/transform/scale/01', component: Scale01 },
    { path: '/transform/scale/02', component: Scale02 },
    { path: '/transform/rotate/01', component: Rotate01 },
    { path: '/transform/rotate/02', component: Rotate02 },

    { path: '/animation', component: Animation },
    { path: '/animation/color', component: ColorAnimation },
    { path: '/animation/countdown', component: CountDownAnimation },

    { path: '/events', component: Events },
    { path: '/events/mouse/01', component: Mouse01 },

    { path: '/instances', component: Instances },
    { path: '/instances/tangram', component: Tangram },
    { path: '/instances/wind', component: Wind },
    { path: '/instances/palette', component: Palette },
    { path: '/instances/magnifier', component: Magnifier },

    { path: '/plugins', component: Plugins },
    { path: '/plugins/dom-to-image/01', component: DomToImage01 },

    { path: '*', component: NotFound }
];
