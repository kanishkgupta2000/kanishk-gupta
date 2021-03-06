import React,{Fragment} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Index from './components/Index';
import About from './components/About';
// import Contact from './components/Contact';
// import Work from './components/Work';
const App = () => {
  return (
<Router basename="/">
    <Fragment>
    <Header/>
		<Switch>
		<Route exact path='/' component={Index}/>
		<Route exact path='/home' component={Index}/>
		<Route exact path='/about' component={About}/>
		</Switch>
		
    <Footer/>
	</Fragment>
	</Router>


  )
}

export default App
