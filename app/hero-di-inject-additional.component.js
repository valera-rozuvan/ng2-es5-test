(function(app) {

  var old = app.HeroComponent;

  app.HeroComponent = HeroComponent;

  HeroComponent.annotations = [
    new ng.core.Component({
      selector: 'hero-di-inject-additional',
      template: '<hero-title title="Tour of Heroes"></hero-title>'
    })
  ];

  function HeroComponent() {}

  app.HeroDIInjectAdditionalComponent = app.HeroComponent;
  app.HeroComponent = old;

})(window.app = window.app || {});

////// DSL Version /////////
(function(app) {

  var old = app.HeroComponent;

  app.HeroComponent = ng.core.Component({
    selector: 'hero-di-inject-additional-dsl',
    template: '<hero-title-dsl title="Tour of Heroes"></hero-title-dsl>'
  }).Class({
    constructor: function HeroComponent() { }
  });

  app.HeroDIInjectAdditionalDslComponent = app.HeroComponent;
  app.HeroComponent = old;

})(window.app = window.app || {});


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/