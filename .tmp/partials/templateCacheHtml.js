angular.module("red").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div class=\"welcome\"><img src=\"https://red-wdf.herokuapp.com/public/img/red-logo.svg\" alt=\"\"><h1>{{ description }}</h1></div>");}]);