!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.register("2", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [],
    execute: function() {
      exports_1("default", angular.module("nReplaceWithValidation.templates", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("src/nReplaceWithValidation.html", "<div>\n    <span class=\"n-replace-with--original\"\n          ng-if=\"nReplaceWithValidation.input.$valid || (nReplaceWithValidation.input.$pristine && !nReplaceWithValidation.input.$$parentForm.$submitted)\"\n          ng-class=\"{\'is-invalid-input\': nReplaceWithValidation.input.$invalid && !nReplaceWithValidation.input.$pristine}\">\n        {{nReplaceWithValidation.text}}\n    </span>\n\n    <span role=\"alert\"\n          class=\"ng-messages\"\n          ng-messages=\"nReplaceWithValidation.input.$error\"\n          ng-if=\"(!nReplaceWithValidation.input.$valid && nReplaceWithValidation.input.$$parentForm.$submitted) || (!nReplaceWithValidation.input.$valid && !nReplaceWithValidation.input.$pristine)\">\n\n        <span class=\"is-invalid-label\" ng-message-exp=\"key\" ng-repeat=\"(key, message) in nReplaceWithValidation.messages track by $index\" ng-bind-html=\"message\"></span>\n\n    </span>\n\n</div>");
      }]));
    }
  };
});

$__System.registerDynamic("3", [], false, function($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);
  (function() {
    (function(window, angular) {
      'use strict';
      var isArray = angular.isArray;
      var forEach = angular.forEach;
      var isString = angular.isString;
      var jqLite = angular.element;
      angular.module('ngMessages', []).directive('ngMessages', ['$animate', function($animate) {
        var ACTIVE_CLASS = 'ng-active';
        var INACTIVE_CLASS = 'ng-inactive';
        return {
          require: 'ngMessages',
          restrict: 'AE',
          controller: ['$element', '$scope', '$attrs', function($element, $scope, $attrs) {
            var ctrl = this;
            var latestKey = 0;
            var nextAttachId = 0;
            this.getAttachId = function getAttachId() {
              return nextAttachId++;
            };
            var messages = this.messages = {};
            var renderLater,
                cachedCollection;
            this.render = function(collection) {
              collection = collection || {};
              renderLater = false;
              cachedCollection = collection;
              var multiple = isAttrTruthy($scope, $attrs.ngMessagesMultiple) || isAttrTruthy($scope, $attrs.multiple);
              var unmatchedMessages = [];
              var matchedKeys = {};
              var messageItem = ctrl.head;
              var messageFound = false;
              var totalMessages = 0;
              while (messageItem != null) {
                totalMessages++;
                var messageCtrl = messageItem.message;
                var messageUsed = false;
                if (!messageFound) {
                  forEach(collection, function(value, key) {
                    if (!messageUsed && truthy(value) && messageCtrl.test(key)) {
                      if (matchedKeys[key])
                        return;
                      matchedKeys[key] = true;
                      messageUsed = true;
                      messageCtrl.attach();
                    }
                  });
                }
                if (messageUsed) {
                  messageFound = !multiple;
                } else {
                  unmatchedMessages.push(messageCtrl);
                }
                messageItem = messageItem.next;
              }
              forEach(unmatchedMessages, function(messageCtrl) {
                messageCtrl.detach();
              });
              unmatchedMessages.length !== totalMessages ? $animate.setClass($element, ACTIVE_CLASS, INACTIVE_CLASS) : $animate.setClass($element, INACTIVE_CLASS, ACTIVE_CLASS);
            };
            $scope.$watchCollection($attrs.ngMessages || $attrs['for'], ctrl.render);
            $element.on('$destroy', function() {
              forEach(messages, function(item) {
                item.message.detach();
              });
            });
            this.reRender = function() {
              if (!renderLater) {
                renderLater = true;
                $scope.$evalAsync(function() {
                  if (renderLater) {
                    cachedCollection && ctrl.render(cachedCollection);
                  }
                });
              }
            };
            this.register = function(comment, messageCtrl) {
              var nextKey = latestKey.toString();
              messages[nextKey] = {message: messageCtrl};
              insertMessageNode($element[0], comment, nextKey);
              comment.$$ngMessageNode = nextKey;
              latestKey++;
              ctrl.reRender();
            };
            this.deregister = function(comment) {
              var key = comment.$$ngMessageNode;
              delete comment.$$ngMessageNode;
              removeMessageNode($element[0], comment, key);
              delete messages[key];
              ctrl.reRender();
            };
            function findPreviousMessage(parent, comment) {
              var prevNode = comment;
              var parentLookup = [];
              while (prevNode && prevNode !== parent) {
                var prevKey = prevNode.$$ngMessageNode;
                if (prevKey && prevKey.length) {
                  return messages[prevKey];
                }
                if (prevNode.childNodes.length && parentLookup.indexOf(prevNode) === -1) {
                  parentLookup.push(prevNode);
                  prevNode = prevNode.childNodes[prevNode.childNodes.length - 1];
                } else if (prevNode.previousSibling) {
                  prevNode = prevNode.previousSibling;
                } else {
                  prevNode = prevNode.parentNode;
                  parentLookup.push(prevNode);
                }
              }
            }
            function insertMessageNode(parent, comment, key) {
              var messageNode = messages[key];
              if (!ctrl.head) {
                ctrl.head = messageNode;
              } else {
                var match = findPreviousMessage(parent, comment);
                if (match) {
                  messageNode.next = match.next;
                  match.next = messageNode;
                } else {
                  messageNode.next = ctrl.head;
                  ctrl.head = messageNode;
                }
              }
            }
            function removeMessageNode(parent, comment, key) {
              var messageNode = messages[key];
              var match = findPreviousMessage(parent, comment);
              if (match) {
                match.next = messageNode.next;
              } else {
                ctrl.head = messageNode.next;
              }
            }
          }]
        };
        function isAttrTruthy(scope, attr) {
          return (isString(attr) && attr.length === 0) || truthy(scope.$eval(attr));
        }
        function truthy(val) {
          return isString(val) ? val.length : !!val;
        }
      }]).directive('ngMessagesInclude', ['$templateRequest', '$document', '$compile', function($templateRequest, $document, $compile) {
        return {
          restrict: 'AE',
          require: '^^ngMessages',
          link: function($scope, element, attrs) {
            var src = attrs.ngMessagesInclude || attrs.src;
            $templateRequest(src).then(function(html) {
              if ($scope.$$destroyed)
                return;
              if (isString(html) && !html.trim()) {
                replaceElementWithMarker(element, src);
              } else {
                $compile(html)($scope, function(contents) {
                  element.after(contents);
                  replaceElementWithMarker(element, src);
                });
              }
            });
          }
        };
        function replaceElementWithMarker(element, src) {
          var comment = $compile.$$createComment ? $compile.$$createComment('ngMessagesInclude', src) : $document[0].createComment(' ngMessagesInclude: ' + src + ' ');
          var marker = jqLite(comment);
          element.after(marker);
          element.remove();
        }
      }]).directive('ngMessage', ngMessageDirectiveFactory()).directive('ngMessageExp', ngMessageDirectiveFactory());
      function ngMessageDirectiveFactory() {
        return ['$animate', function($animate) {
          return {
            restrict: 'AE',
            transclude: 'element',
            priority: 1,
            terminal: true,
            require: '^^ngMessages',
            link: function(scope, element, attrs, ngMessagesCtrl, $transclude) {
              var commentNode = element[0];
              var records;
              var staticExp = attrs.ngMessage || attrs.when;
              var dynamicExp = attrs.ngMessageExp || attrs.whenExp;
              var assignRecords = function(items) {
                records = items ? (isArray(items) ? items : items.split(/[\s,]+/)) : null;
                ngMessagesCtrl.reRender();
              };
              if (dynamicExp) {
                assignRecords(scope.$eval(dynamicExp));
                scope.$watchCollection(dynamicExp, assignRecords);
              } else {
                assignRecords(staticExp);
              }
              var currentElement,
                  messageCtrl;
              ngMessagesCtrl.register(commentNode, messageCtrl = {
                test: function(name) {
                  return contains(records, name);
                },
                attach: function() {
                  if (!currentElement) {
                    $transclude(function(elm, newScope) {
                      $animate.enter(elm, null, element);
                      currentElement = elm;
                      var $$attachId = currentElement.$$attachId = ngMessagesCtrl.getAttachId();
                      currentElement.on('$destroy', function() {
                        if (currentElement && currentElement.$$attachId === $$attachId) {
                          ngMessagesCtrl.deregister(commentNode);
                          messageCtrl.detach();
                        }
                        newScope.$destroy();
                      });
                    });
                  }
                },
                detach: function() {
                  if (currentElement) {
                    var elm = currentElement;
                    currentElement = null;
                    $animate.leave(elm);
                  }
                }
              });
            }
          };
        }];
        function contains(collection, key) {
          if (collection) {
            return isArray(collection) ? collection.indexOf(key) >= 0 : collection.hasOwnProperty(key);
          }
        }
      }
    })(window, window.angular);
  })();
  return _retrieveGlobal();
});

$__System.register("4", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nReplaceWithValidation;
  return {
    setters: [],
    execute: function() {
      var nReplaceWithValidation;
      (function(nReplaceWithValidation) {
        'use strict';
        var dependencies = ['nReplaceWithValidation.templates', 'ngMessages'];
        angular.module('nReplaceWithValidation', dependencies);
      })(nReplaceWithValidation || (nReplaceWithValidation = {}));
    }
  };
});

$__System.register("5", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nReplaceWithValidation;
  return {
    setters: [],
    execute: function() {
      var nReplaceWithValidation;
      (function(nReplaceWithValidation) {
        var NReplaceWithValidationProvider = (function() {
          function NReplaceWithValidationProvider() {
            var _this = this;
            this.config = {
              required: 'Please enter a value for this field. (default)',
              minlength: 'Please enter a value for at least 6 characters long (default)',
              maxlength: 'This field can be at most 15 characters long. (default)',
              email: 'This field must be a valid email address. (default)',
              fallback: 'This will be used if error message is not configured. (default)'
            };
            this.$get = function() {
              return {config: _this.config};
            };
          }
          NReplaceWithValidationProvider.prototype.configure = function(config) {
            if (!arguments[0]) {
              return this.config;
            } else {
              angular.extend(this.config, config);
            }
          };
          NReplaceWithValidationProvider.$inject = [];
          return NReplaceWithValidationProvider;
        }());
        nReplaceWithValidation.NReplaceWithValidationProvider = NReplaceWithValidationProvider;
        angular.module('nReplaceWithValidation').provider('nReplaceWithValidationConfig', NReplaceWithValidationProvider);
      })(nReplaceWithValidation || (nReplaceWithValidation = {}));
    }
  };
});

$__System.register("6", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nReplaceWithValidation;
  return {
    setters: [],
    execute: function() {
      var nReplaceWithValidation;
      (function(nReplaceWithValidation) {
        'use strict';
        var controllerAs = 'nReplaceWithValidation';
        var NReplaceWithValidation = (function() {
          function NReplaceWithValidation() {
            this.bindToController = true;
            this.link = this.linkFn;
            this.controller = ComponentDirectiveController;
            this.restrict = 'A';
            this.templateUrl = 'src/nReplaceWithValidation.html';
            this.controllerAs = controllerAs;
            this.replace = true;
            this.require = '^form';
            this.scope = {
              name: '@',
              text: '@',
              messages: '=?'
            };
          }
          NReplaceWithValidation.instance = function() {
            return new NReplaceWithValidation();
          };
          NReplaceWithValidation.prototype.linkFn = function(scope, element, attrs, formController) {
            scope[controllerAs].input = formController[attrs.name];
          };
          NReplaceWithValidation.$inject = [];
          return NReplaceWithValidation;
        }());
        var ComponentDirectiveController = (function() {
          function ComponentDirectiveController($scope, $sce, nReplaceWithValidationConfig) {
            this.$scope = $scope;
            this.$sce = $sce;
            this.nReplaceWithValidationConfig = nReplaceWithValidationConfig;
            this.messages = angular.extend({}, nReplaceWithValidationConfig.config, this.messages);
            if (!this.messages.hasOwnProperty('fallback')) {
              this.messages.fallback = 'This will be used if error message is not configured. (default)';
            }
            for (var message in this.messages) {
              if (typeof this.messages[message] === 'string') {
                this.messages[message] = this.$sce.trustAsHtml(this.messages[message]);
              }
            }
            var self = this;
            this.$scope.$watchCollection('nReplaceWithValidation.input.$validators', function(newValue) {
              if (!newValue)
                return;
              for (var validator in newValue) {
                if (!self.messages.hasOwnProperty(validator)) {
                  self.messages[validator] = self.messages.fallback;
                }
              }
            });
          }
          ComponentDirectiveController.$inject = ['$scope', '$sce', 'nReplaceWithValidationConfig'];
          return ComponentDirectiveController;
        }());
        angular.module('nReplaceWithValidation').directive('nReplaceWithValidation', NReplaceWithValidation.instance);
      })(nReplaceWithValidation || (nReplaceWithValidation = {}));
    }
  };
});

$__System.register("1", ["2", "3", "4", "5", "6"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [function(_1) {}, function(_2) {}, function(_3) {}, function(_4) {}, function(_5) {}],
    execute: function() {}
  };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=component.js.map