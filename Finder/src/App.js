import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import SetDistance from './SetDistance'
import {InitialPage} from './InitialPage'

import Settings from './Settings'


const App = () => {
    return (
    <Router showNavigationBar={false}>
        <Scene key={"root"}>
            <Scene  key={"initial"}
                    component={InitialPage}
                    hideNavBar={true}
                    initial/>
            <Scene  key={"setDistance"}
                    component={SetDistance}
                    hideNavBar={false}
                    />
            <Scene  key={"settings"}
                    component={Settings}
                    hideNavBar={false}
            />
        </Scene>
    </Router>
    )
};

export default App;

