import React from 'react';
import './App.css';
import Header from './components/header/header';
import LeftNav from './components/left-nav/left-nav';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import MyWork from './pages/my-work/my-work';
import AboutMe from './pages/about-me/about-me';
import Pricing from './pages/pricing/pricing';
import ClientGalleries from './pages/client-galleries/client-galleries';

function App() {
  const [isMenuExpanded, setIsMenuExpanded] = React.useState<boolean>(false);
  const toggleMenu = () => { setIsMenuExpanded(!isMenuExpanded) };
  const onMenuItemClicked = () => { setIsMenuExpanded(false) };

  return (
    <div className="App">
      <Header onMenuExpandToggled={toggleMenu} />
      <div className="main-area">
        <Router>
          <LeftNav isExpanded={isMenuExpanded} onMenuItemClick={onMenuItemClicked}/>
          <div className="page-area">
            <Switch>
              <Route path="/my-work">
                <MyWork />
              </Route>
              <Route path="/about-me">
                <AboutMe />
              </Route>
              <Route path="/pricing">
                <Pricing />
              </Route>
              <Route path="/client-galleries">
                <ClientGalleries />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
