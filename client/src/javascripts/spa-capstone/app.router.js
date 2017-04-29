(function() {
  "use strict";

  angular
    .module("spa-capstone")
    .config(RouterFunction);

  RouterFunction.$inject = ["$stateProvider",
                            "$urlRouterProvider", 
                            "spa-capstone.APP_CONFIG"];

  function RouterFunction($stateProvider, $urlRouterProvider, APP_CONFIG) {
    $stateProvider
    .state("home",{
      url: "/",
      templateUrl: APP_CONFIG.main_page_html,
      // controller: ,
      // controllerAs: ,
    })

    $urlRouterProvider.otherwise("/");
  }
})();