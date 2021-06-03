import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";      // for getLocation  needs install
import axios from "axios";                      // for http or https communication  needs install
import { MaterialCommunityIcons } from '@expo/vector-icons';

const API_KEY = "your api key";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  //weather request function
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    //console.log("getWeatherData\n", data);

    this.setState({
      // isLoading : false,
      // celsius : 23,
      // weatherName : "Clouds111",
      // weatherCode : 803,
      // weatherDescription : "broken clouds",
      // weatherIconName : "04d"
      isLoading : false,
      celsius : data.main.temp,
      weatherName : data.weather[0].main,
      weatherCode : data.weather[0].id,
      weatherDescription : data.weather[0].description,
      weatherIconName : "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
    });
  };

  
  // user foreground permit
  getLocation = async () => {
    try {
      foregroundPermission =  await Location.requestForegroundPermissionsAsync();
      if(foregroundPermission.status == "granted"){
        const {
          coords: { latitude, longitude }
        } = await Location.getCurrentPositionAsync(); //Device 위치정보 요청
        this.getWeather(latitude, longitude);   //getWeather Function Call
      }
    } 
    catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  
  render() {
    const {isLoading, celsius, weatherName, weatherCode, weatherDescription, weatherIconName} = this.state;
    return this.state.isLoading ? 
    <Loading />
    : 
    <Weather 
      celsius = {Math.round(celsius)}
      weatherName = {weatherName}
      weatherCode = {weatherCode}
      weatherDescription = {weatherDescription}
      weatherIconName = {weatherIconName}
    />;
  }
}