import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom'
import loveSongs from './Arraydatalove';
import joshsongdata from './Arraydatajosh';
import sadsongdata from './Arraydatasad';
import devotionalsongdata from './Arraydatadevotional';
import bgmsongdata from './Arraydatabgm';
import Classicsongdata from './Arraydataclassics';
import SPBsongsdata from './Arraydataspb'
import KVsongsdata from './Arraydatakv'
import Nagsongsdata from './Arraydatanag'
import venkysongsdata from './Arraydatavenky';
import PKsongsdata from './Arraydatapk';

import Album from './Album'
import Home from './Home';
import Contact from './Contact';
import About from './About';

function MobileMusicapp(props) {
    return (
        <div>
            <Router>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
                
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
                <Album songs={devotionalsongdata} />
                </Route>

                <Route path="/BGM" exact >
                <Album songs={bgmsongdata} />
                </Route>

                <Route path="/Classic" exact >
                <Album songs={Classicsongdata} />
                </Route>

                <Route path="/SPB" exact >
                <Album songs={SPBsongsdata} />
                </Route>

                <Route path="/KV" exact >
                <Album songs={KVsongsdata} />
                </Route>

                <Route path="/Nag" exact >
                <Album songs={Nagsongsdata} />
                </Route>

                <Route path="/Venky" exact >
                <Album songs={venkysongsdata} />
                </Route>

                <Route path="/PK" exact >
                <Album songs={PKsongsdata} />
                </Route>
                
            </Switch>

            </Router>
        </div>
    );
}

export default MobileMusicapp;