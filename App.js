

import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';



import Main from './Components/Main/Main'

const App = () => {
  return (
    <>
      <View style={page.container}>
        <StatusBar translucent backgroundColor="#280659" />
        <Main/>
      </View>
    </>
  );
};
const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#280659",
    color: "white"
  },

  statusbar : {
    backgroundColor: 'black'
  }
});


export default App;
