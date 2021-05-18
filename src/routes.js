import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/reports" component={ReportDashboard}/>
        <Route path="/reports/:reportId" component={ReportDetail}/>
      </Switch>
    </Router>
  )
}