import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArchiveNavbar from './ArchiveNavbar'
import ItemList from './ItemList'
import ItemDetails from "./ItemDetails";
import Works from './Works'

export default function Archive() {
    return (
        <Router>
            <div>
                <ArchiveNavbar />
                <Switch>
                    <Route exact path="/archive/artists">
                        <ItemList />
                    </Route>
                    <Route path="/archive/works">
                        <Works />
                    </Route>
                    <Route path="/archive/artists/:id" component={ItemDetails} />
                </Switch>
            </div>

        </Router>

    )
}
