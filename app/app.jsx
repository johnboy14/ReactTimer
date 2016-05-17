var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hasHistory} = require("react-router");
var Main = require('Main');
var CountDown = require("CountDown");
var Timer = require("Timer");

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hasHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={CountDown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById("app")
);
