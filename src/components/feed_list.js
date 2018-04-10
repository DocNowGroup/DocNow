import React, { Component } from 'react';
import { Text, View, ScrollView, Button, StyleSheet } from 'react-native';

import Container from '../containers/container'

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1,2,3,4,5]
    }
    this.displayItems = this.displayItems.bind(this);
  }

  displayItems() {
    return this.state.items.map(item => {
      return <Text>Here is an item {item}!</Text>;
    });
  }

  pressButton() {
    console.log("button pressed")
  }

  render() {
    const { button } = styles;
    return (
      <Container >
        <View>
          <Text>Here is the feed list</Text>
          <ScrollView>{this.displayItems()}</ScrollView>
        </View>
        <View style={button}>
          <Button 
            onPress={this.pressButton} 
            title='Add Patient'
            color='#841584'
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 300,
    top: 350,
    borderStyle: 'solid',
    borderColor: '#ff0000', // red
    borderRadius: 5,
    borderWidth: 1,
  }
  
})

export default FeedList;