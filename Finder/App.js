import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Map from './src/Map'

const App = () => {
    return (
    <Router showNavigationBar={false}>
        <Scene key={"root"}>
            <Scene  key={"initial"}
                    component={Map}
                    initial/>
        </Scene>
    </Router>
    )
};

export default App;

