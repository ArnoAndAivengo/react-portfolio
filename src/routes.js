import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import alexandrPage from './pages/alexandrPage'
import natalyaPage from './pages/natalyaPage'
import welcomePage from "./pages/welcomePage"
import natalyaPortfolioPage from "./pages/natalyaPortfolioPage";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={welcomePage} exact />
        <Route path="/alexandr" component={alexandrPage} />
        <Route path="/natalya" component={natalyaPage} />
        <Route path="/natalyaPortfolio" component={natalyaPortfolioPage} />
      </Switch>
    </Router>
  )
}
export default Routes