import React from 'react';
import {StyleSheet, Text, View } from 'react-native';


export default function Loading(){
    return  (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>Getting The Fucking Weather</Text>
            </View>
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    view: {
        flex: 1,
        justifyContent : "flex-end",
        alignItems : "flex-start",
        backgroundColor : "#FCF9A2"        
    },
    text:{
        fontSize : 30,
        padding : 35,
        //marginHorizontal:20,
        marginVertical : 20
    }
});