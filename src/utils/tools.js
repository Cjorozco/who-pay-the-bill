import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const MainLogo = () => {
  return (
    <Text style={styles.text}>
      Who pays the bill?
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'orange',
    //fontFamily: 'Pacifico-Regular',
    fontSize: 30,
    marginTop: 50
  },
});