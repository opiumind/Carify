import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

const App = () => {
    return (
    <Router showNavigationBar={false}>
        <Scene key={"root"}>
            <Scene key={"initial"}/>
        </Scene>
    </Router>
    )
};

export default App;

