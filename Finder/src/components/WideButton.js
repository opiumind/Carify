import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const WideButton = ({ whenPressed, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={whenPressed} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
      backgroundColor: 'rgba(255, 251, 190, .8)',
      width: null,
      height: 65,
      borderColor: 'transparent',
      borderWidth: 0
      // borderRadius: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: 'rgba(93, 59, 37, 1)',
        fontSize: 26,
        fontWeight: '500',
        paddingTop: 12,
        paddingBottom: 10
    }
};

export { WideButton };
