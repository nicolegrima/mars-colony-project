!function(){"use strict";angular.module("red",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router"])}(),function(){"use strict";function e(e){this.online=!0,e.description="Angular Seed Application"}e.$inject=["$scope"],angular.module("red").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("Run block end!")}e.$inject=["$log"],angular.module("red").run(e)}(),function(){"use strict";function e(e,n,t){t.html5Mode({enabled:!0,requireBase:!1,rewriteLinks:!1}),e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),n.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("red").config(e)}(),function(){"use strict";angular.module("red").constant("APP_NAME","RED Angular seed application")}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("red").config(e)}(),angular.module("red").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="welcome"><img src="https://red-wdf.herokuapp.com/public/img/red-logo.svg" alt=""><h1>{{ description }}</h1></div>')}]);