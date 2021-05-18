import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReportDashboard from "./pages/financial-report/ReportDashboard";
import ReportDetail from "./pages/financial-report/ReportDetail";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ReportDashboard}/>
        <Route exact path="/reports/:reportId" component={ReportDetail}/>
      </Switch>
    </Router>
  )
}