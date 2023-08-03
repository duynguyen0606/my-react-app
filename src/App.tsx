import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import DefaultLayout from './components/Layouts/DefaultLayout';
import { COURSE_CATEGORIES, COURSE_DATA } from './config/routers';

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes >
          <Route path={COURSE_CATEGORIES} element={<div>course cate</div>} />
          <Route path={COURSE_DATA} element={<div>course dât</div>} />
          {/* <PrivateRoute path="/su-kien" component={EventsPage} />
          <PrivateRoute path="/tin-tuc" component={NewsPage} />
          <PrivateRoute path="/danh-muc-tin-tuc" component={CategoryNewsPage} />
          <PrivateRoute path="/phan-hoi" component={FeedbackPage} /> */}
        </Routes >
      </DefaultLayout>
    </Router>
  );
}

export default App;
