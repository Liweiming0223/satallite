/**
 * Mars3D平台插件,结合echarts可视化功能插件  mars3d-echarts
 *
 * 版本信息：v3.6.6
 * 编译日期：2023-09-18 16:30:52
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2023-03-17
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.echarts || require('echarts')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'echarts', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-echarts"] = {}, global.echarts, global.mars3d));
})(this, (function (exports, echarts, mars3d) { 
'use strict';const _0x388e9a=_0x52dc;(function(_0x1af725,_0x29961f){const _0x451565={_0x26af90:0x17f,_0x42f6eb:0x15a,_0x575731:0x169,_0x389405:0x158},_0x4ec939=_0x52dc,_0x49d34a=_0x1af725();while(!![]){try{const _0x45e076=-parseInt(_0x4ec939(_0x451565._0x26af90))/0x1*(parseInt(_0x4ec939(0x14d))/0x2)+-parseInt(_0x4ec939(_0x451565._0x42f6eb))/0x3*(-parseInt(_0x4ec939(_0x451565._0x575731))/0x4)+parseInt(_0x4ec939(_0x451565._0x389405))/0x5+parseInt(_0x4ec939(0x15f))/0x6*(parseInt(_0x4ec939(0x14e))/0x7)+-parseInt(_0x4ec939(0x150))/0x8+parseInt(_0x4ec939(0x16a))/0x9+-parseInt(_0x4ec939(0x16c))/0xa*(parseInt(_0x4ec939(0x173))/0xb);if(_0x45e076===_0x29961f)break;else _0x49d34a['push'](_0x49d34a['shift']());}catch(_0x256c9){_0x49d34a['push'](_0x49d34a['shift']());}}}(_0x3c32,0xc3183));function _interopNamespace(_0x22b0b2){const _0x29bc91={_0x225273:0x15e},_0x520b57={_0x21fee1:0x163},_0x382926=_0x52dc;if(_0x22b0b2&&_0x22b0b2[_0x382926(0x180)])return _0x22b0b2;var _0x10f647=Object['create'](null);return _0x22b0b2&&Object['keys'](_0x22b0b2)[_0x382926(_0x29bc91._0x225273)](function(_0x5a0594){const _0x4986ea=_0x382926;if(_0x5a0594!==_0x4986ea(0x16b)){var _0x216033=Object[_0x4986ea(0x171)](_0x22b0b2,_0x5a0594);Object[_0x4986ea(_0x520b57._0x21fee1)](_0x10f647,_0x5a0594,_0x216033['get']?_0x216033:{'enumerable':!![],'get':function(){return _0x22b0b2[_0x5a0594];}});}}),_0x10f647['default']=_0x22b0b2,_0x10f647;}var echarts__namespace=_interopNamespace(echarts),mars3d__namespace=_interopNamespace(mars3d);function _0x52dc(_0x1c73cc,_0x5eaa23){const _0x3c32a4=_0x3c32();return _0x52dc=function(_0x52dcb5,_0x39e844){_0x52dcb5=_0x52dcb5-0x149;let _0x1e14da=_0x3c32a4[_0x52dcb5];return _0x1e14da;},_0x52dc(_0x1c73cc,_0x5eaa23);}const Cesium$1=mars3d__namespace[_0x388e9a(0x187)];class CompositeCoordinateSystem{constructor(_0x470c95,_0x53bcfa){const _0x6ef684={_0x52d63c:0x16e},_0x2f5251=_0x388e9a;this['_mars3d_scene']=_0x470c95,this['dimensions']=[_0x2f5251(_0x6ef684._0x52d63c),'lat'],this['_mapOffset']=[0x0,0x0],this['_api']=_0x53bcfa;}['setMapOffset'](_0x192165){const _0x3070eb=_0x388e9a;this[_0x3070eb(0x179)]=_0x192165;}['getBMap'](){return this['_mars3d_scene'];}[_0x388e9a(0x174)](_0xf8b171){const _0x233a2e={_0x5388ea:0x17e,_0x4dc807:0x14c,_0x37fc56:0x182,_0x36df27:0x179},_0x3f8258=_0x388e9a,_0x2f0c1f=this['_mars3d_scene'],_0x294f62=[NaN,NaN];let _0x2adc87=_0x2f0c1f['echartsFixedHeight'];_0x2f0c1f['echartsAutoHeight']&&(_0x2adc87=_0x2f0c1f['globe']['getHeight'](Cesium$1[_0x3f8258(0x149)]['fromDegrees'](_0xf8b171[0x0],_0xf8b171[0x1])));const _0x4685fe=Cesium$1['Cartesian3'][_0x3f8258(_0x233a2e._0x5388ea)](_0xf8b171[0x0],_0xf8b171[0x1],_0x2adc87);if(!_0x4685fe)return _0x294f62;const _0x289532=Cesium$1['SceneTransforms']['wgs84ToWindowCoordinates'](_0x2f0c1f,_0x4685fe);if(!_0x289532)return _0x294f62;if(_0x2f0c1f[_0x3f8258(0x153)]&&_0x2f0c1f['mode']===Cesium$1[_0x3f8258(_0x233a2e._0x4dc807)]['SCENE3D']){const _0x3e4c0a=new Cesium$1['EllipsoidalOccluder'](_0x2f0c1f['globe']['ellipsoid'],_0x2f0c1f['camera']['positionWC']),_0x39c8b6=_0x3e4c0a[_0x3f8258(_0x233a2e._0x37fc56)](_0x4685fe);if(!_0x39c8b6)return _0x294f62;}return[_0x289532['x']-this[_0x3f8258(_0x233a2e._0x36df27)][0x0],_0x289532['y']-this[_0x3f8258(0x179)][0x1]];}['getViewRect'](){const _0x362d9f={_0x317bfb:0x178},_0x4a3430=_0x388e9a,_0x32ac65=this['_api'];return new echarts__namespace['graphic'][(_0x4a3430(_0x362d9f._0x317bfb))](0x0,0x0,_0x32ac65['getWidth'](),_0x32ac65[_0x4a3430(0x164)]());}[_0x388e9a(0x15d)](){return echarts__namespace['matrix']['create']();}}CompositeCoordinateSystem['dimensions']=[_0x388e9a(0x16e),_0x388e9a(0x170)],CompositeCoordinateSystem[_0x388e9a(0x17c)]=function(_0x27b858,_0x2857c8){const _0x2bbdd2={_0x1800a1:0x14b},_0x51ba63={_0xa48dcd:0x162,_0x10ef4:0x188,_0x2f0d0:0x168},_0x1bb8dd=_0x388e9a;let _0x56fab7;const _0x1cadd6=_0x27b858['scheduler']['ecInstance'][_0x1bb8dd(0x166)];_0x27b858['eachComponent'](_0x1bb8dd(_0x2bbdd2._0x1800a1),function(_0x13ac18){const _0x57cc46=_0x1bb8dd,_0x3979ec=_0x2857c8['getZr']()[_0x57cc46(_0x51ba63._0xa48dcd)];if(!_0x3979ec)return;!_0x56fab7&&(_0x56fab7=new CompositeCoordinateSystem(_0x1cadd6,_0x2857c8)),_0x13ac18[_0x57cc46(_0x51ba63._0x10ef4)]=_0x56fab7,_0x56fab7[_0x57cc46(_0x51ba63._0x2f0d0)](_0x13ac18['__mapOffset']||[0x0,0x0]);}),_0x27b858[_0x1bb8dd(0x17d)](function(_0x35ff26){const _0x3d519c=_0x1bb8dd;_0x35ff26['get'](_0x3d519c(0x188))===_0x3d519c(0x14b)&&(!_0x56fab7&&(_0x56fab7=new CompositeCoordinateSystem(_0x1cadd6,_0x2857c8)),_0x35ff26['coordinateSystem']=_0x56fab7);});};if(echarts__namespace!==null&&echarts__namespace!==void 0x0&&echarts__namespace['init'])echarts__namespace['registerCoordinateSystem'](_0x388e9a(0x14b),CompositeCoordinateSystem),echarts__namespace[_0x388e9a(0x152)]({'type':'mars3dMapRoam','event':'mars3dMapRoam','update':_0x388e9a(0x159)},function(_0x353e64,_0x300777){}),echarts__namespace['extendComponentModel']({'type':'mars3dMap','getBMap':function(){return this['_mars3d_scene'];},'defaultOption':{'roam':![]}}),echarts__namespace['extendComponentView']({'type':'mars3dMap','init':function(_0x1a9350,_0xc575a){const _0x223514=_0x388e9a;this['api']=_0xc575a,this['scene']=_0x1a9350['scheduler']['ecInstance']['_mars3d_scene'],this[_0x223514(0x185)][_0x223514(0x156)]['addEventListener'](this['moveHandler'],this);},'moveHandler':function(_0x13bbeb,_0x33559b){this['api']['dispatchAction']({'type':'mars3dMapRoam'});},'render':function(_0x4ae8b3,_0x104d1d,_0x509799){},'dispose':function(_0x408119){const _0x2601c9=_0x388e9a;this['scene']['postRender'][_0x2601c9(0x186)](this[_0x2601c9(0x15c)],this);}});else throw new Error('请引入\x20echarts\x20库\x20');const Cesium=mars3d__namespace[_0x388e9a(0x187)],BaseLayer=mars3d__namespace['layer']['BaseLayer'];class EchartsLayer extends BaseLayer{constructor(_0x24ecce={}){const _0x47166f=_0x388e9a;super(_0x24ecce),this[_0x47166f(0x18b)]=this['options']['pointerEvents'];}get['layer'](){return this['_echartsInstance'];}get['pointerEvents'](){return this['_pointerEvents'];}set['pointerEvents'](_0x3d2092){const _0x237763={_0x4299d5:0x18c,_0x391e5a:0x15b,_0x19e111:0x15b},_0x16be24=_0x388e9a;this['_pointerEvents']=_0x3d2092,this['_echartsContainer']&&(_0x3d2092?this['_echartsContainer'][_0x16be24(_0x237763._0x4299d5)][_0x16be24(_0x237763._0x391e5a)]='all':this['_echartsContainer'][_0x16be24(_0x237763._0x4299d5)][_0x16be24(_0x237763._0x19e111)]='none');}[_0x388e9a(0x161)](_0xd74c78,_0x51be12){this['setEchartsOption'](_0xd74c78);}['_showHook'](_0x257aaa){const _0x42eb47={_0x113845:0x18c,_0x5557a5:0x176},_0x36d1aa=_0x388e9a;_0x257aaa?this['_echartsContainer'][_0x36d1aa(_0x42eb47._0x113845)]['visibility']='visible':this['_echartsContainer']['style'][_0x36d1aa(0x16f)]=_0x36d1aa(_0x42eb47._0x5557a5);}['_mountedHook'](){const _0x5cea3f={_0x5b0ebe:0x160,_0x516b4b:0x181},_0x3f30b7=_0x388e9a;this[_0x3f30b7(0x183)]['scene']['echartsDepthTest']=this['options'][_0x3f30b7(_0x5cea3f._0x5b0ebe)]??!![],this['_map']['scene']['echartsAutoHeight']=this['options']['clampToGround']??![],this['_map']['scene'][_0x3f30b7(_0x5cea3f._0x516b4b)]=this[_0x3f30b7(0x155)]['fixedHeight']??0x0;}[_0x388e9a(0x189)](){const _0x41590b=_0x388e9a;this['_echartsContainer']=this['_createChartOverlay'](),this[_0x41590b(0x16d)]=echarts__namespace['init'](this['_echartsContainer']),this['_echartsInstance']['_mars3d_scene']=this['_map']['scene'],this['setEchartsOption'](this['options']);}['_removedHook'](){const _0x4c3349={_0xf97d4:0x16d,_0x2ae21b:0x16d},_0x2c78cc=_0x388e9a;this['_echartsInstance']&&(this[_0x2c78cc(_0x4c3349._0xf97d4)]['clear'](),this['_echartsInstance']['dispose'](),delete this[_0x2c78cc(_0x4c3349._0x2ae21b)]),this['_echartsContainer']&&(this['_map']['container'][_0x2c78cc(0x18a)](this['_echartsContainer']),delete this[_0x2c78cc(0x175)]);}[_0x388e9a(0x14f)](){const _0x57aeb3={_0x5eeb3e:0x154,_0x86d6df:0x17a,_0x213354:0x18c,_0x536825:0x183,_0x4aa25d:0x185},_0x4007db=_0x388e9a,_0x571808=mars3d__namespace[_0x4007db(_0x57aeb3._0x5eeb3e)]['create']('div','mars3d-echarts',this['_map']['container']);return _0x571808['id']=this['id'],_0x571808['style']['position']=_0x4007db(0x172),_0x571808['style'][_0x4007db(_0x57aeb3._0x86d6df)]='0px',_0x571808['style']['left']='0px',_0x571808[_0x4007db(_0x57aeb3._0x213354)]['width']=this[_0x4007db(_0x57aeb3._0x536825)][_0x4007db(_0x57aeb3._0x4aa25d)]['canvas']['clientWidth']+'px',_0x571808['style']['height']=this['_map']['scene']['canvas']['clientHeight']+'px',_0x571808['style']['pointerEvents']=this['_pointerEvents']?'all':_0x4007db(0x177),_0x571808['style']['zIndex']=this['options']['zIndex']??0x9,_0x571808;}['resize'](){const _0x5cd1fe={_0x458133:0x184,_0xaeeb53:0x16d,_0x66e1d:0x151},_0xc0542b=_0x388e9a;if(!this['_echartsInstance'])return;this['_echartsContainer']['style']['width']=this['_map']['scene']['canvas']['clientWidth']+'px',this['_echartsContainer']['style']['height']=this['_map']['scene'][_0xc0542b(0x14a)][_0xc0542b(_0x5cd1fe._0x458133)]+'px',this[_0xc0542b(_0x5cd1fe._0xaeeb53)][_0xc0542b(_0x5cd1fe._0x66e1d)]();}['setEchartsOption'](_0x3ff562,_0x54418f,_0x55ae33){const _0x5d250b={_0x451995:0x14b,_0xe8aef0:0x14b},_0x46ff61=_0x388e9a;this['_echartsInstance']&&(_0x3ff562[_0x46ff61(_0x5d250b._0x451995)]=_0x3ff562[_0x46ff61(_0x5d250b._0xe8aef0)]||{},this['_echartsInstance']['setOption'](_0x3ff562,_0x54418f,_0x55ae33));}[_0x388e9a(0x165)](_0x48c5a7){const _0x551270={_0x116ce4:0x155},_0x18b141={_0x5f0f0d:0x157},_0x43e292=_0x388e9a;let _0x4204de,_0x2b953a,_0x332413,_0x43cdc8;function _0x3c964b(_0x5dcf36){const _0x2928b4=_0x52dc;if(!Array['isArray'](_0x5dcf36))return;const _0x42c912=_0x5dcf36[0x0]||0x0,_0x2344f7=_0x5dcf36[0x1]||0x0;_0x42c912!==0x0&&_0x2344f7!==0x0&&(_0x4204de===undefined?(_0x4204de=_0x42c912,_0x2b953a=_0x42c912,_0x332413=_0x2344f7,_0x43cdc8=_0x2344f7):(_0x4204de=Math['min'](_0x4204de,_0x42c912),_0x2b953a=Math['max'](_0x2b953a,_0x42c912),_0x332413=Math[_0x2928b4(_0x18b141._0x5f0f0d)](_0x332413,_0x2344f7),_0x43cdc8=Math['max'](_0x43cdc8,_0x2344f7)));}const _0x4f660d=this[_0x43e292(_0x551270._0x116ce4)]['series'];_0x4f660d&&_0x4f660d['forEach'](_0x511f28=>{_0x511f28['data']&&_0x511f28['data']['forEach'](_0xde2624=>{const _0x2ec05b=_0x52dc;if(_0xde2624['value'])_0x3c964b(_0xde2624[_0x2ec05b(0x167)]);else _0xde2624['coords']&&_0xde2624['coords']['forEach'](_0x284c35=>{_0x3c964b(_0x284c35);});});});if(_0x4204de===0x0&&_0x332413===0x0&&_0x2b953a===0x0&&_0x43cdc8===0x0)return null;return _0x48c5a7!==null&&_0x48c5a7!==void 0x0&&_0x48c5a7['isFormat']?{'xmin':_0x4204de,'xmax':_0x2b953a,'ymin':_0x332413,'ymax':_0x43cdc8}:Cesium['Rectangle'][_0x43e292(0x17e)](_0x4204de,_0x332413,_0x2b953a,_0x43cdc8);}['on'](_0x402585,_0x5463ad,_0x29ddd4){return this['_echartsInstance']['on'](_0x402585,_0x5463ad,_0x29ddd4||this),this;}['onByQuery'](_0xc435a5,_0xc2f41a,_0x3cd80c,_0x8459ba){const _0x46e006=_0x388e9a;return this[_0x46e006(0x16d)]['on'](_0xc435a5,_0xc2f41a,_0x3cd80c,_0x8459ba||this),this;}['off'](_0x29413e,_0x49df17,_0x19662a){return this['_echartsInstance']['off'](_0x29413e,_0x49df17,_0x19662a||this),this;}}function _0x3c32(){const _0x2e2129=['top','register','create','eachSeries','fromDegrees','6ZAoLnk','__esModule','echartsFixedHeight','isPointVisible','_map','clientHeight','scene','removeEventListener','Cesium','coordinateSystem','_addedHook','removeChild','_pointerEvents','style','Cartographic','canvas','mars3dMap','SceneMode','116762gvVPVp','273eQFyQz','_createChartOverlay','1800128sbVTZb','resize','registerAction','echartsDepthTest','DomUtil','options','postRender','min','2856365kPJWPw','updateLayout','3tWpgLf','pointerEvents','moveHandler','getRoamTransform','forEach','40626NSIBOh','depthTest','_setOptionsHook','painter','defineProperty','getHeight','getRectangle','_mars3d_scene','value','setMapOffset','1083356vroRVW','12987279Ecihhy','default','559430qvYRKu','_echartsInstance','lng','visibility','lat','getOwnPropertyDescriptor','absolute','231CnDFms','dataToPoint','_echartsContainer','hidden','none','BoundingRect','_mapOffset'];_0x3c32=function(){return _0x2e2129;};return _0x3c32();}mars3d__namespace['LayerUtil'][_0x388e9a(0x17b)]('echarts',EchartsLayer),mars3d__namespace['layer']['EchartsLayer']=EchartsLayer,mars3d__namespace['echarts']=echarts__namespace,exports['EchartsLayer']=EchartsLayer,Object['keys'](echarts)[_0x388e9a(0x15e)](function(_0x29d55b){const _0xcc122d={_0x3dc1dc:0x16b,_0x33f4ee:0x163},_0x14aafb=_0x388e9a;if(_0x29d55b!==_0x14aafb(_0xcc122d._0x3dc1dc)&&!exports['hasOwnProperty'](_0x29d55b))Object[_0x14aafb(_0xcc122d._0x33f4ee)](exports,_0x29d55b,{'enumerable':!![],'get':function(){return echarts[_0x29d55b];}});}),Object['defineProperty'](exports,_0x388e9a(0x180),{'value':!![]});
}));