;(function() {
    var vueTap = {};

    vueTap.install = function(Vue) {
        Vue.directive('tap', {

            isFn: true,
            acceptStatement: true,
            priority: Vue.directive('on').priority,

            bind: function() {
                var self = this;

                self.handler = function() {};
                self.tapInfo = {};
                self.touchstartFn = function(e) {
                    if(self.modifiers.stopPropagation) e.stopPropagation();
                    if(self.modifiers.preventDefault) e.preventDefault();
                    self._touchstart(self, e);
                };
                self.touchendFn = function(e) {
                    self._touchend(self, e);
                };

                this.el.addEventListener('touchstart', self.touchstartFn);

                this.el.addEventListener('touchend', self.touchendFn);
            },

            _touchstart: function(obj, event) {
                var touch = event.touches[0];
                obj.tapInfo.pageX = touch.pageX;
                obj.tapInfo.pageY = touch.pageY;
                obj.tapInfo.touchStartTime = (new Date()).getTime();
            },

            _touchend: function(obj, event) {
                var touch = event.changedTouches[0];
                var interval = (new Date()).getTime() - obj.tapInfo.touchStartTime;
                var disX = touch.pageX - obj.tapInfo.pageX;
                var disY = touch.pageY - obj.tapInfo.pageY;

                if (interval < 100 && Math.abs(disX) < 2 && Math.abs(disY) < 2) {
                    obj.handler(event);
                }
            },

            update: function(fn) {
                if (typeof fn != 'function') return console.error('the tap event handler must be function!');

                this.handler = fn;
            },

            unbind: function() {
                this.el.removeEventListener('touchstart', this.touchstartFn);
                this.el.removeEventListener('touchend', this.touchendFn);
                this.touchstartFn = this.touchendFn = null;
                this.handler = this.tapInfo = null;
            }
        });
    };

    if (typeof exports == 'object') {
        module.exports = vueTap;
    } else if (typeof define == 'function' && define.amd) {
        define([], function() { return vueTap; });
    } else {
        window.vueTap = vueTap;
        Vue.use(vueTap);
    }
})();