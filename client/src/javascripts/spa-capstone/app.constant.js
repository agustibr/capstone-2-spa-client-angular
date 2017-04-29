(function() {
  "use strict";

  angular
    .module("spa-capstone")
    .constant("spa-capstone.APP_CONFIG", {
      server_url: "http://localhost:3000",

      main_page_html: "spa-capstone/pages/main.html",

      cities_html: "spa-capstone/cities/cities.html"
    });

})();
