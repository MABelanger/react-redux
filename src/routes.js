import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
  <Route path="/" component={App}>
    <indexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="course" component={CoursesPage} />
  </Route>
);
