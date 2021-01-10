import React from 'react'
import {View, Text,StyleSheet, Image} from 'react-native'
import { render } from 'react-dom';

export default class FB extends React.Component{
    render(){
        return(
            <View style={styles.imageStyle}>
              <img src="https://media.giphy.com/headers/facebook/FuLFvah0klRm.gif" />           
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
    marginTop:400,
  }
})