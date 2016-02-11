import React from 'react'
import { Router, Route } from 'react-router'

import Diary from './diary/diary.jsx'
import Alert from './alert/alert.jsx'
import Graph from './graph/graph.jsx'
import Homepage from './homepage/homepage.jsx'
import Login from './login/login.jsx'

export default (
    <Router>
        <Route path='/' component={Login} />
        <Route path='/home' component ={Homepage} />
        <Route path='/alert' component ={Alert} />
        <Route path='/graph' component ={Graph} />
        <Route path='/diary' component ={Diary} />
    </Router>
)