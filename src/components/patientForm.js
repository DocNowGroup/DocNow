import React, { Component } from 'react';
import { Button, Text, View, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

class PatientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      room: '',
      name: '',
      issue: '',
    }

    this.onDateInputChange = this.onDateInputChange.bind(this);
    this.onRoomInputChange = this.onRoomInputChange.bind(this);
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onIssueInputChange = this.onIssueInputChange.bind(this);

    this.saveNewPatient = this.saveNewPatient.bind(this);
    this.checkDataEntered = this.checkDataEntered.bind(this);
  }

  onDateInputChange(event) {
    this.setState({
      date: event.nativeEvent.text
    });
  }

  onRoomInputChange(event) {
    this.setState({
      room: event.nativeEvent.text
    });
  }

  onNameInputChange(event) {
    this.setState({
      name: event.nativeEvent.text
    });
  }

  onIssueInputChange(event) {
    this.setState({
      issue: event.nativeEvent.text
    });
  }

  saveNewPatient() {
    let id = this.state.name + ' ' + this.state.issue;
    let newPatient = {
      date: this.state.date,
      number: this.state.room, 
      patient: this.state.name, 
      issue: this.state.issue,
      id: id
    }
    console.log('newPatient from form ', newPatient)
    let valid = this.checkDataEntered();

    if (!valid) {
      return;
    }

    this.props.onSave(newPatient);
  }

  // checks if all inputs are entered, need to style red missing inputs
  checkDataEntered() {
    if (this.state.date === '' || this.state.number === '' || this.state.patient === '' || this.state.issue === '') {
      return false;
    }

    return true;
  }


  render() {
    const { button, addPatientButtons, input, issueInput } = styles;
    return (
      <View>
        <ScrollView >
         <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={5}>
        <View>
          <TextInput
            onChange={this.onDateInputChange}
            style={input}
            placeholder="Date"
          />
        </View>
          <TextInput
            onChange={this.onRoomInputChange}
            style={input}
            placeholder="Room-Bed Number"
          />

          <TextInput
            onChange={this.onNameInputChange}
            style={input}
            placeholder="Patient Name"
          />
        <View>
          <TextInput
            onChange={this.onIssueInputChange}
            style={issueInput}
            placeholder="Issue"
          />
        </View>
         </KeyboardAvoidingView>
        </ScrollView>
        <View style={addPatientButtons}>
          <View style={button}>
            <Button
            title='Save    '
            onPress={this.saveNewPatient}
            />
          </View>
          <View style={button}>
            <Button 
            title='Cancel'
            onPress={this.props.onCancelPress}
            />
          </View>
        </View>
      </View>
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
  },

  addPatientButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  button: {
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: '#ff0000', // red
    borderRadius: 5,
    borderWidth: 1,
    // alignItems: 'center',
    marginBottom: 5,
    backgroundColor: 'white'
  },

}


export default PatientForm;