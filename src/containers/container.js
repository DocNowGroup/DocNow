import React from 'react';
import { View } from 'react-native';


const Container = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-end',
    borderWidth: 1,
    borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    borderStyle: 'solid',
    borderColor: 'green', // green
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#F0F0F0', // grey
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10
  }
}

export default Container;