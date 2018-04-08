import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Map from './Map'
import {InitialPage} from './InitialPage'
import SendEmail from './SendEmail'

const App = () => {
    return (
    <Router showNavigationBar={false}>
        <Scene key={"root"}>
            <Scene  key={"initial"}
                    component={SendEmail}
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

