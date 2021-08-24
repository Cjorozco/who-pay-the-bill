import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import StageOne from './src/components/stageOne';
import StageTwo from './src/components/stageTwo';
import { MyContext } from './src/context';

class App extends Component {
  static contextType = MyContext;

  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.context.state.stage === 1 ? <StageOne /> : <StageTwo />}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:Platform.OS === 'ios' ? 80 : 10
  },
});

export default App;
