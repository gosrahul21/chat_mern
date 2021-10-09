import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Join from './components/Join'
import Chat from './components/Chat'

const App = props => {
    return (
        <div>
            <Router>
                <Switch>
                <Route path="/" exact component={Join}/>
                <Route path="/chat" exact component={Chat}/>


                </Switch>
       
            </Router>
        </div>
    )
}


export default App
