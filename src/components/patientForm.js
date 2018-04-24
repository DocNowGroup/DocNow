import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

class PatientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      room: null,
      name: null,
      issue: null
    }
  }

  render() {
    const { input, issueInput } = styles;
    return (
      <ScrollView >
       <KeyboardAvoidingView keyboardShouldPersistTaps>
        <TextInput
          style={input}
          placeholder="Date"
          
        />
        <TextInput
          style={input}
          placeholder="Room-Bed Number"
        />

        <TextInput
          style={input}
          placeholder="Patient Name"
        />

        <TextInput
          style={issueInput}
          placeholder="Issue"
        />
       </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = {
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },

  issueInput: {
    height: 80,
    margin: 15,
    borderColor: '#7a42f4',
    borderWidth: 1
  }

}


export default PatientForm;