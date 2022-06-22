import React from 'react'

import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Detail from './Detail';

const App = () => {
    return(
        <div className='ui container' style={{marginTop: '30px'}}>
            <Route component={Navigation} />

            {/* Access to Router Props NOT custom props */}
            {/* <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} /> */}
                <Switch>
                <Route 
                exact
                path='/' render={(routerProps) => {
                    return <Home {...routerProps} homeData='This is data from home component'/>
                }}/>

                  <Route path='/about' render={(routerProps) => {
                    return <About {...routerProps} aboutData='This is data from about component'/>
                }}/>

                <Route path='/projects' render={(routerProps) => {
                    return <Projects {...routerProps} projectsData='This is data from projects component'/>
                }}/>

                <Route path='/detail/:id?' render={(routerProps) => {
                    return <Detail {...routerProps} detailData='This is data from detail component'/>
                }}/>
                </Switch>
        </div>
    )
};

export default App;