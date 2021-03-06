// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/screen_move.js":[function(require,module,exports) {
"use strict"; // import { urlParams } from "./index.js";
// ANIMATION BETWEEN ABOUT AND PROJECT PAGE
// THIS PAGE IS A MESS

var screenWelcome = document.querySelector(".screen__welcome");
var screenAbout = document.querySelector(".screen__about");
var screenProject = document.querySelector(".screen__gallery");
var aboutButton = document.querySelector("#a-about");
var projectButton = document.querySelector("#a-projects"); // const imgArray = document.querySelectorAll(".imgwrapper");

var right = "right";
var left = "left";
window.addEventListener("DOMContentLoaded", initScreen); //let urlParams = new URLSearchParams(window.location.search);

function initScreen() {
  var fromSubpage = urlParams.get("fromSubpage");
  aboutButton.addEventListener("click", function () {
    checkScreen(right);
  });
  projectButton.addEventListener("click", function () {
    checkScreen(left);
  });
  console.log(fromSubpage);

  if (fromSubpage) {
    screenProject.classList.remove("none");
    screenProject.classList.add("here");
    screenWelcome.classList.remove("here");
    screenWelcome.classList.add("none");
    screenProject.style.left = "0";
    document.querySelectorAll(".c-menu").forEach(function (menu) {
      menu.style.backgroundColor = "rgb(11, 68, 63)";
    });
    var filter_link = document.querySelector("#a-filters");
    filter_link.classList.remove("none");
  }
}

function here(screen) {
  screen.classList.remove("none");
  screen.classList.add("here");
}

function notHere(screen) {
  screen.classList.remove("here");
}

function none(screen1, screen2) {
  console.log("deleting rest of screens");
  screen1.classList.add("none");
  screen2.classList.add("none");
  console.log(screen1);
}

function clear(screen1, screen2) {
  screen1.classList.remove("moveleft");
  screen1.classList.remove("moverightWelcome");
  screen2.classList.remove("moveleft");
  screen2.classList.remove("moverightWelcome");
  screen1.classList.remove("moveleftWelcome");
  screen2.classList.remove("moveleftWelcome");
  screen1.classList.remove("moveright");
  screen2.classList.remove("moveright");
}
/* SCREEN ANIMATION */


function checkScreen(e) {
  // IF WE CLICK ON ABOUT
  if (e === "right") {
    console.log("click right");
    screenAbout.classList.remove("none"); // FROM WELCOME

    if (screenWelcome.classList.contains("here")) {
      console.log("was on welcome");
      notHere(screenWelcome);
      screenWelcome.classList.add("moveleftWelcome");
      screenAbout.classList.add("moveleftWelcome");
    } // FROM PROJECTS
    else if (screenProject.classList.contains("here")) {
        console.log("was on projects");
        notHere(screenProject);
        clear(screenAbout, screenProject);
        screenProject.style.left = "0";
        screenProject.classList.add("moveleft");
        screenAbout.style.left = "100vw";
        screenAbout.classList.add("moveleft");
      }

    here(screenAbout);
    document.querySelectorAll(".c-menu").forEach(function (menu) {
      menu.style.backgroundColor = "rgb(154, 226, 214)";
    }); // document.querySelector(".c-menu").classList.add("moveright");

    console.log("in about");
    screenAbout.addEventListener("animationend", function () {
      if (screenAbout.classList.contains("here")) {
        none(screenWelcome, screenProject);
        document.querySelector("#a-filters").classList.add("none");
      }
    });
  } // IF WE CLICK ON PROJECT
  else if (e === "left") {
      console.log("clicked left");
      screenProject.classList.remove("none"); // FROM WELCOME

      if (screenWelcome.classList.contains("here")) {
        console.log("was on welcome");
        screenProject.classList.add("moverightWelcome");
        screenWelcome.classList.add("moverightWelcome");
        notHere(screenWelcome);
      } // FROM ABOUT
      else if (screenAbout.classList.contains("here")) {
          console.log("was on about");
          screenProject.style.left = "-100vw";
          screenAbout.style.left = "0";
          clear(screenProject, screenAbout);
          screenProject.classList.add("moveright");
          screenAbout.classList.add("moveright");
          notHere(screenAbout);
        }

      here(screenProject);
      document.querySelectorAll(".c-menu").forEach(function (menu) {
        menu.style.backgroundColor = "rgb(11, 68, 63)";
      });
      console.log("project here");
      screenProject.addEventListener("animationend", function () {
        if (screenProject.classList.contains("here")) {
          none(screenWelcome, screenAbout);
          document.querySelector("#a-filters").classList.remove("none");
        }
      });
    }
}
},{}],"../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50346" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/screen_move.js"], null)
//# sourceMappingURL=/screen_move.5bd88ed9.map