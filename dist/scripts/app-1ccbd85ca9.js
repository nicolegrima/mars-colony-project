!function(){"use strict";angular.module("red",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router"])}(),function(){"use strict";function n(n){this.online=!0,n.description="Angular Seed Application"}n.$inject=["$scope"],angular.module("red").controller("MainController",n)}(),function(){"use strict";function n(n){n.debug("Run block end!")}n.$inject=["$log"],angular.module("red").run(n)}(),function(){"use strict";function n(n,e,t){t.html5Mode({enabled:!0,requireBase:!1,rewriteLinks:!1}),n.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("red").config(n)}(),function(){"use strict";angular.module("red").constant("APP_NAME","RED Angular seed application")}(),function(){"use strict";function n(n){n.debugEnabled(!0)}n.$inject=["$logProvider"],angular.module("red").config(n)}(),angular.module("red").run(["$templateCache",function(n){n.put("app/main/main.html",'<div class="welcome"><h1>{{ description }}</h1></div>')}]);