
import './style/main.scss'; 
import HomePage from './pages/HomePage/'
// import { HashRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './cmps/AppHeader';
import ContactPage from './pages/ContactPage/';
import ContactDetails from './pages/ContactDetails/ContactDetails';
import ContactEdit from './pages/ContactEdit/ContactEdit';


function App() {
  return (
    <div className="App">
      <Router>
      <AppHeader />
      <Switch>
      {/* <div className="flex wrap"> */}

        <Route path="/contacts/details/:id" component={ContactDetails} />
        <Route path="/contacts/edit/:id?" component={ContactEdit} />
        <Route path="/contacts" component={ContactPage} />
        <Route path="/" component={HomePage} />
      {/* </div> */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
