import React, { Component } from 'react';
import { Text, View, ScrollView, Button, StyleSheet } from 'react-native';

import Container from '../containers/container';
import ListHeader from './listHeader';
import ListItem from './listItem'
import PatientForm from './patientForm'


class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        // {id: 1, date:'4/21', number: '4-1', patient:'Smith', issue: 'Too flexible'},
        // {id: 2, date:'4/21', number: '10-1', patient:'John', issue: 'broken bones'},
        // {id: 3, date:'4/21', number: '4-5', patient:'Ryan', issue: 'complains a lot'},
        // {id: 4, date:'4/21', number: '5-3', patient:'Jack', issue: 'angry and wont stop complaining,angry and wont stop complaining,'},
        // {id: 5, date:'4/21', number: '2-3', patient:'Katie', issue: 'no idea'},
        // {id: 6, date:'4/21', number: '1-10', patient:'Suzzie', issue: 'death'}
      ],
      newForm: false,
    }
    this.displayItems = this.displayItems.bind(this);
    this.onCancelPress = this.onCancelPress.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  displayItems() {
    return this.state.items.map(item => {
      return <ListItem key={item.id} patientRow={item}/>;
    });
  }

  onCancelPress() {
    let current = !this.state.newForm;
    this.setState({
      newForm: current
    })
  }

  onSave(newInfo) {
    let current = !this.state.newForm;
    console.log('newInfo from feed-list: ',newInfo)
    this.setState({
      items: [...this.state.items, newInfo],
      newForm: current,
    })
  }



  render() {
    const { itemList, button, items } = styles;

    if (this.state.newForm) {
      return (
        <Container >
          <PatientForm 
            onCancelPress={this.onCancelPress} 
            onSave={this.onSave} 
          />
          
        </Container>
      )
    }

    return (
      <Container >
        <ListHeader />
        <View style={itemList}>
          
          <ScrollView style={items}>{this.displayItems()}</ScrollView>
        </View>
        <View style={button}>
          <Button 
            onPress={this.onCancelPress} 
            title='Add Patient'
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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

  addPatientButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  itemList: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginTop: 0,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ff0000', // red
  },

  items: {
    flex: 1,
    // width: 340,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue', // blue
    // marginTop: 5,
    // marginBottom: 10,
  }
  
})

export default FeedList;