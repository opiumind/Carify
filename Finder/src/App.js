import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Map from './Map'
import {InitialPage} from './InitialPage'

const App = () => {
    return (
    <Router showNavigationBar={false}>
        <Scene key={"root"}>
            <Scene  key={"initial"}
                    component={InitialPage}
                    hideNavBar={true}
                    initial/>
          <Scene  key={"map"}
                  component={Map}
                  hideNavBar={false}
                  />
        </Scene>
    </Router>
    )
};

export default App;

