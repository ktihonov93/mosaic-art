import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArchiveNavbar from './ArchiveNavbar'
import ArtistList from './ArtistList'
import ArtistDetails from "./ArtistDetails";
import ArtworkList from './ArtworkList'
//import ArtworkDetails from './ArtworkDetails'

export default function Archive() {
    return (
        <Router>
            <div>
                <ArchiveNavbar />
                <Switch>
                    <Route exact path="/archive/artists">
                        <ArtistList />
                    </Route>
                    <Route path="/archive/artworks">
                        <ArtworkList />
                    </Route>
                    <Route path="/archive/artists/:id" component={ArtistDetails} />
                </Switch>
            </div>

        </Router>

    )
}
