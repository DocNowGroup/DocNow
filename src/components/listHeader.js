import React from 'react';
import { Text, View } from 'react-native';

const ListHeader = () => {
  const { listHeaderContainer, listContainerItems, issueContainer } = styles;
  return (
    <View style={listHeaderContainer}>
      <Text style={listContainerItems}>Date</Text>
      <Text style={listContainerItems}>#</Text>
      <Text style={listContainerItems}>Patient</Text>
      <Text style={issueContainer}>Issue</Text>
    </View>
  );
}

const styles = {
  listHeaderContainer: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'black',
  },

  listContainerItems: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1 ,
    textAlign: 'center',
  },

  issueContainer: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'blue',
    textAlign: 'center',
  }

}


export default ListHeader;