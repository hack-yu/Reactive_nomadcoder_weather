import React from "react";
import {View, Text, StyleSheet, Image, StatusBar} from "react-native";
import PropTypes from "prop-types";                          // component properties check e
import { MaterialCommunityIcons } from '@expo/vector-icons'; // icons
import { LinearGradient } from 'expo-linear-gradient';       // react css needs install

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["#304352", "#d7d2cc"],
        title: "Thunderstorm\n(천둥번개)\n",
        subtitle: "There may be thunder and lightning.\n(천둥번개가 올 수 있어요.)",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"dark-content"
    },
    Drizzle: {
      iconName: "weather-rainy",
      gradient: ["#304352", "#d7d2cc"],
      title: "Drizzle(이슬비)\n",
      subtitle: "It can rain, so bring an umbrella.(비가 내릴 수 있으니 우산을 챙겨요.)",
      textcolor:"black",
      iconcolor:"black",
      celsiuscolor:"black",
      statusbarcolor:"dark-content"
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#304352", "#d7d2cc"],
      title: "Rain(비)\n",
      subtitle: "It can rain, so bring an umbrella.(비가 내릴 수 있으니 우산을 챙겨요.)",
      textcolor:"black",
      iconcolor:"black",
      celsiuscolor:"black",
      statusbarcolor:"dark-content"
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#ffffff", "#ffffff"],
      title: "Snow(눈)\n",
      subtitle: "It may snow.(눈이 내릴 수 있어요.)",
      textcolor:"black",
      iconcolor:"black",
      celsiuscolor:"black",
      statusbarcolor:"dark-content"
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#00C9FF", "#92FE9D"],
      title: "적당한 날씨\n",
      subtitle: "It's decent weather.\n(적당한 날씨네요.)",
      textcolor:"black",
      iconcolor:"black",
      celsiuscolor:"black",
      statusbarcolor:"dark-content"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#ada996","#f2f2f2","#dbdbdb","#eaeaea"],
        title: "Haze(안개)\n",
        subtitle: "There will be fog.(안개가 있어요.)",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"dark-content"
    },
    Smoke: {
        iconName: "weather-hail",
        gradient: ["#1e130c", "#9a8478"],
        title: "Smoke(연기)\n",
        subtitle: "The smoke is heavy, so wear a mask.\n(연기가 심하니 마스크를 착용해요.)",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"light-content"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#ada996","#f2f2f2","#dbdbdb","#eaeaea"],
        title: "Haze(안개)\n",
        subtitle: "There will be fog.(안개가 있어요.)",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"dark-content"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#1e130c", "#9a8478"],
        title: "Dusty(먼지)\n",
        subtitle: "There is a lot of dust, so I wear a mask.\n(먼지가 많아요 마스크를 착용해요.)",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"light-content"
    },
    Fog: {
        iconName: "weather-hail",
        gradient: ["#ada996","#f2f2f2","#dbdbdb","#eaeaea"],
        title: "Fog(안개)\n",
        subtitle: "There is fog.\n(안개가 있어요.)",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"dark-content"
    },
    Sand: {
        iconName: "weather-hail",
        gradient: ["#1e130c", "#9a8478"],
        title: "Dusty(먼지)\n",
        subtitle: "There is a lot of dust, so I wear a mask.\n(먼지가 많아요 마스크를 착용해요.)",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"light-content"
    },
    Ash: {
        iconName: "weather-hail",
        gradient: ["#1e130c", "#9a8478"],
        title: "Dusty(먼지)\n",
        subtitle: "There is a lot of dust, so I wear a mask.\n(먼지가 많아요 마스크를 착용해요.)",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"light-content"
    },
    Squall: {
        iconName: "weather-hail",
        gradient: ["#1d4350", "#a43931"],
        title: "Squall(돌풍)\n",
        subtitle: "Beware of gusts (hail, lightning, rain)\n(돌풍을 조심해요(우박, 벼락, 비))",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"light-content"
    },
    Tornado: {
        iconName: "weather-hail",
        gradient: ["#FFA17F", "#00223E"],
        title: "Tornado(태풍)\n",
        subtitle: "Watch out for typhoons.\n(태풍을 조심해요.)",
        textcolor:"black",
        iconcolor:"black",
        celsiuscolor:"black",
        statusbarcolor:"dark-content"
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#1488cc", "#ffffff"],
      title: "Clear(맑음)\n",
      subtitle: "It is the weather with clear skies.\n(맑은 하늘을 가지는 날씨입니다.)",
      textcolor:"black",
      iconcolor:"black",
      celsiuscolor:"black",
      statusbarcolor:"dark-content"
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#3a7bd5", "#3a6073"],
      title: "Clouds(구름)\n",
      subtitle: "There will be clouds in the sky.\n(하늘에 구름이 있겠습니다.)",
      textcolor:"black",
      iconcolor:"black",
      celsiuscolor:"black",
      statusbarcolor:"dark-content"
    },
  };

export default function Weather({celsius, weatherName, weatherCode, weatherDescription, weatherIconName}){
    //weatherName="Smoke"
    return(
        <View style={styles.container}>
            <StatusBar barStyle={weatherOptions[weatherName].statusbarcolor} />
            <LinearGradient colors={weatherOptions[weatherName].gradient} style={styles.halfcontainer}>
                <View style={styles.halfcontainer}>
                    <Text style={{fontSize:60, color:weatherOptions[weatherName].celsiuscolor}}> {celsius}
                    <Text style={{ fontSize:60, color:weatherOptions[weatherName].celsiuscolor}}>℃</Text>
                    </Text>
                </View>

                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons name={weatherOptions[weatherName].iconName} size={200} color={weatherOptions[weatherName].iconcolor} />
                </View>

                <View style={styles.halfcontainer2}>
                    <Text style={{fontSize:50, color:weatherOptions[weatherName].textcolor}}>{weatherOptions[weatherName].title}</Text>
                    <Text style={{fontSize:28, color:weatherOptions[weatherName].textcolor}}>{weatherOptions[weatherName].subtitle}</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

Weather.propTypes = {
    celsius : PropTypes.number.isRequired,
    weatherDescription : PropTypes.string.isRequired,
    weatherName: PropTypes.oneOf([
        "Thunderstorm", //200
        "Drizzle",      //300
        "Rain",         //500
        "Snow",         //600
        "Atmosphere",   //7xx
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",        //800
        "Clouds",       //80x
      ]).isRequired

};

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: '#0178a0'
    },
    halfcontainer:{
        flex:1,
        justifyContent : "center",
        alignItems : "center"
    },
    halfcontainer2:{
        flex:1,
        justifyContent : "flex-start",
        alignItems : "flex-start",
        padding:10
    }
});