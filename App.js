import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FB from './screens/fb'
import IN from './screens/in'
import Click from './screens/click'
import { render } from 'react-dom';

const TabNavigator = createBottomTabNavigator({
  HOME:{screen:Click},
  FACEBOOK:{screen:FB},
  INSTAGRAM:{screen:IN}
 });

const AppContainer = createAppContainer(TabNavigator);


export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
