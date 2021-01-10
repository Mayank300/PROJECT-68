import React from 'react'
import {View, Text,StyleSheet, Image} from 'react-native'
import { render } from 'react-dom';

export default class Click extends React.Component{
    render(){
        return(
            <View style={styles.imageStyle}>
              <img src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_1x1_400px.gif" />           
            </View>
        )
    }
}

const styles = StyleSheet.create({
  imageStyle:{
    width: 500,
    height: 900,
    borderRadius:12,
    marginLeft:700,
    marginTop:270,
  }
})