import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArchiveNavbar from './ArchiveNavbar'
import Artists from './Artists'
import Works from './Works'

export default function Archive() {
    return (
        <Router>
            <div>
                <ArchiveNavbar />
                <Switch>
                    <Route exact path="/archive/artists">
                        <Artists />
                    </Route>
                    <Route path="/archive/works">
                        <Works />
                    </Route>
                </Switch>
            </div>

        </Router>

    )
}
