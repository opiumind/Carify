import { RadioButtons } from 'react-native-radio-buttons';
import { SegmentedControls } from 'react-native-radio-buttons';
import {React, Text, TouchableWithoutFeedback, View} from "react-native";
import {Component} from "react";


class RadioButtons extends Component {
  state = {text: ''};
  render()
  {
    const options = [
      "Yes",
      "No"
    ];

    function setSelectedOption(selectedOption) {
      this.setState({
        selectedOption
      });
    }

    function renderOption(option, selected, onSelect, index) {
      const style = selected ? {fontWeight: 'bold'} : {};

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes) {
      return <View>{optionNodes}</View>;
    }

    return (
      <View style={{margin: 20}}>
        <SegmentedControls
          tint={'#f80046'}
          selectedTint={'white'}
          backTint={'#1e2126'}
          options={options}
          allowFontScaling={false} // default: true
          onSelection={setSelectedOption.bind(this)}
          selectedOption={this.state.selectedOption}
          optionStyle={{fontFamily: 'AvenirNext-Medium'}}
          optionContainerStyle={{flex: 1}}
        />
        <Text>Selected option: {this.state.selectedOption || 'none'}</Text>
      </View>);
  }
}
export { RadioButtons };
