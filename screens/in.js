import React from 'react'
import {View, Text,StyleSheet,Image} from 'react-native'
import { render } from 'react-dom';

export default class IN extends React.Component{
    render(){
        return(
            <View style={styles.imageStyle}>
              <img src="https://i.pinimg.com/originals/83/02/66/8302668e65c27ce762fe49fdd0e96e0a.gif" />           
            </View>
        )
    }
}

const styles = StyleSheet.create({
  imageStyle:{
    width: 900,
    height: 100,
    borderRadius:12,
    marginLeft:500,
    marginTop:100,
   }
})