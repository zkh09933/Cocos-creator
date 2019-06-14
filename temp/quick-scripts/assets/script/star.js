(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/star.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3de05Ov/IVBOJjfqVP9vqzB', 'star', __filename);
// script/star.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        pickRadios: {
            default: 0,
            tooltip: '星星和主角之间距离小于此数值，则收集完成'
        }
    },

    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=star.js.map
        