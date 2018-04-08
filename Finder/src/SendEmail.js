import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import axios from 'axios';


export default class SendEmail extends Component {



    render(){
        return(
            <TouchableOpacity onPress={() =>
            axios.get('https://api.sparkpost.com/api/v1/transmission', {'header':'1e5968efedc059bbba0dfbd7a969ca2bd5a6996f'})
                .then(response => {console.warn(response.data);}).catch(error => {console.warn("Error");})
            }>
                <Text>Press</Text>
            </TouchableOpacity>
        )
    }
}