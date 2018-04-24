import React from 'react';
import { Text, View } from 'react-native';

const ListItem = ({ patientRow }) => {
  const { listItemContainer, listItem, issueItem } = styles;
  return (
    <View style={listItemContainer}>
      <Text style={listItem}>{patientRow.date}</Text>
      <Text style={listItem}>{patientRow.number}</Text>
      <Text style={listItem}>{patientRow.patient}</Text>
      <Text style={issueItem}>{patientRow.issue}</Text>
    </View>
  );
}

const styles = {
  listItemContainer: {
    flexDirection: 'row',
    // margin:,
    // marginBottom: 2,
    borderWidth: 1,
    borderColor: 'black',
  },

  listItem: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1 ,
    textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  issueItem: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'blue',
    textAlign: 'center',
  }

}


export default ListItem;