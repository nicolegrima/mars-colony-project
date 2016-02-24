angular.module("red").run(["$templateCache", function($templateCache) {$templateCache.put("app/Report/report-filed.html","<h1>Report-Filed TEST</h1>");
$templateCache.put("app/Report/report.html","<div class=\"report-wrapper\"><h2>Report Encounter</h2><h3>Safety on Mars is your responsibility</h3><button>Submit Report</button></div>");
$templateCache.put("app/check-in/check-in.html","<div class=\"checkin-wrapper\"><h2>Register</h2><button>Check in</button></div>");
$templateCache.put("app/encounters/encounters.html","<div class=\"encounters-wrapper\"><h2>Recent Encounters</h2><h3>See an Alien? Report it!</h3><button>Report Encounter</button></div>");
$templateCache.put("app/main/main.html","<div class=\"main-wrapper\"><h2>Mars Colony 1</h2><h3>Tap circle to enter</h3></div>");}]);