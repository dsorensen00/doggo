import React from 'react'
import {BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom'
import Home from './Home'
import Doggos from './Doggos';
import BreedSelector from './Breed-selector';

export default ()=>{
    
    return(  
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/doggos' component={Doggos}/>
                <Route path='/breed-selector' component={BreedSelector}/>
            </Switch>
        </Router>
    );
}