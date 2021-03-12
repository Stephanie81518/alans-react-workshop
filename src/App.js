import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import ContactScreen from './pages/contact-screen';
import HomeScreen from './pages/home-screen';
import PeopleScreen from './pages/people-screen';
import PersonScreen from './pages/person-screen';

const App = () => {

  const people = [
    {
      name: 'Alan',
      age: 38,
      personId: 0,
      slug: 'alan-k',
      favoriteMovies: ['goonies', 'fight club']
    },
    {
      name: 'Joe',
      age: 35,
      personId: 1,
      slug: 'joe-k',
      favoriteMovies: ['rambo', 'catch me if you can']
    }
  
  ]

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/contact' component={ContactScreen} />
          <Route exact path='/people'><PeopleScreen people={people} /></Route>
          <Route exact path='/people/:slug'><PersonScreen people={people} /></Route>
          

        </Switch>
      </BrowserRouter>
    
    </div>
  );

}

export default App;
