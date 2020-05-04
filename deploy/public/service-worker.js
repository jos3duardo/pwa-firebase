/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-64f1e998'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "1e59d2330b4c6deb84b340635ed36249.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  }, {
    "url": "20fd1704ea223900efa9fd4e869efb08.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  }, {
    "url": "8b43027f47b20503057dfbbaa9401fef.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  }, {
    "url": "c1e38fd9e0e74ba58f7a2b77ef29fdd3.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  }, {
    "url": "f691f37e57f04c152e2315ab7dbad881.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  }, {
    "url": "icons/icon-192x192.png",
    "revision": "cfa06dd73845c8851815508abedf0529"
  }, {
    "url": "icons/icon-256x256.png",
    "revision": "427eafce6e3a1f01c94e0241cde11870"
  }, {
    "url": "icons/icon-512x512.png",
    "revision": "a27f95d6331074a99052f12d9acc356c"
  }, {
    "url": "index.html",
    "revision": "583b12ecb8d5c3eadb6c5076b49aada2"
  }, {
    "url": "main.js.gz",
    "revision": "7991ade422f50d684e3390a262c45123"
  }, {
    "url": "manifest.json",
    "revision": "395a6159e12bb9b8948080b41e1a77dc"
  }, {
    "url": "manifest.json.gz",
    "revision": "529352241f464ac37b37ffd12b1f55b7"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
