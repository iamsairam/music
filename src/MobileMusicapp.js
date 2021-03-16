import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom'
import Newalbum from './Newalbum';
import loveSongs from './Arraydatalove';
import joshsongdata from './Arraydatajosh';
import sadsongdata from './Arraydatasad';
import Album from './Album'
import Home from './Home';

function MobileMusicapp(props) {
    return (
        <div>
            <Router>
            <Switch>
            <Route path="/" exact component={Home} />
                
                <Route path="/LoveSong" exact >
                <Album songs={loveSongs} />
                </Route>

                <Route path="/SadSongs" exact>
                <Album songs={sadsongdata} />
                </Route>

                <Route path="/JoshfullSongs" exact>
                <Album songs={joshsongdata} />
                </Route>
                
                <Route path="/Devotional" exact>
                <Album songs={sadsongdata} />
                </Route>

                <Route path="/BGM" exact >
                <Album songs={sadsongdata} />
                </Route>
                
            </Switch>

            </Router>
        </div>
    );
}

export default MobileMusicapp;