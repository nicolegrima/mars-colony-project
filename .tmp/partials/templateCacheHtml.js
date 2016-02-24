angular.module("red").run(["$templateCache", function($templateCache) {$templateCache.put("app/Report/report-filed.html","<h1>Report-Filed TEST</h1>");
$templateCache.put("app/Report/report.html","<h1>Report TEST</h1>");
$templateCache.put("app/check-in/check-in.html","<div class=\"checkin-wrapper\"><h1>Check-in TEST</h1></div>");
$templateCache.put("app/encounters/encounters.html","<div class=\"encounters-wrapper\"><h2>Recent Encounters</h2><h3>See an Alien? Report it!</h3><button>Report Encounter</button></div>");
$templateCache.put("app/main/main.html","<div class=\"welcome\"><h1>{{ description }}</h1></div>");}]);