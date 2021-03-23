import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/study" component={TeacherList}  />
            <Route path="/give-classes" component={TeacherForm}  />
            <Route path="/login" component={Login}  />
            <Route path="/register" component={Register}  />
            <Route path="/profile" component={Profile}  />
        </BrowserRouter>
        );
}

export default Routes;