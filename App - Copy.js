import React from 'react';
import { StyleSheet, Text, View, AppRegistry,Button,TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        city:'',
        forecast:{
          main: '-',
          description: '-',
          temp: 0,
          sunrise:'-',
          sunset:'-',
          country:'-',
          speed:'-',
          sea_level:'-',
          pressure:'-',
          humidity:'-'
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=82449c1c164b25d82978617d33599687&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          sunrise: responseJson.sys.sunrise,
          sunset:responseJson.sys.sunset,
          country:responseJson.sys.country,
          speed:responseJson.wind.speed,
          sea_level: responseJson.main.sea_level,
          grnd_level: responseJson.main.grnd_level,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.inputtext}>
            <View style={styles.inputtext2}>
              <TextInput style = {styles.text2}
                placeholder="Masukkan Nama Kota"
                onChangeText={(city)=>this.setState({city})}
              />
            </View>

              <Button
                onPress={
                  () => this.getWeather()
                }
                title="Lihat"
                color="#00B0FF"
                accessibilityLabel="Klik untuk melihat"
              />
          </View>

          <View style={styles.infocuaca}>
            <View style={styles.backkeyboard}>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Kota = {this.state.city} {"\n"}
                </Text>
              </View>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Negara = {this.state.forecast.country} {"\n"}
                </Text>
              </View>

            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Cuaca = {this.state.forecast.main} {"\n"}
                </Text>
              </View>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Desc = {this.state.forecast.description} {"\n"}
                </Text>
              </View>
            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Sunrise = {this.state.forecast.sunrise} {"\n"}
                </Text>
              </View>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Sunset = {this.state.forecast.sunset} {"\n"}
                </Text>
              </View>
            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.box4}>
              <Text style = {{padding: 10, fontSize: 15}} >
                Temp = {this.state.forecast.temp} {"'Celcius"}
              </Text>
              </View>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Wind Speed = {this.state.forecast.speed} {"\n"}
                </Text>
              </View>
            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Sea_level = {this.state.forecast.sea_level} {"\n"}
                </Text>
              </View>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Grnd_level = {this.state.forecast.grnd_level} {"\n"}
                </Text>
              </View>
            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Pressure = {this.state.forecast.pressure} {"\n"}
                </Text>
              </View>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Humidity = {this.state.forecast.grnd_level} {"\n"}
                </Text>
              </View>
            </View>

          </View>

          <View style={styles.footer}>
            <Text style={styles.textfooter}>Pendidikan Teknik Informatika @IWES</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E8F5E9',
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: '#1B5E20',
    flex: 1,
    justifyContent: 'center'
  },

  inputtext: {
    backgroundColor: '#388E3C',
    flex: 2,
    justifyContent: 'center',
    margin:10
  },

  inputtext2: {
    backgroundColor: 'white',
    flex: 2,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight:30,
    marginTop: 50,
    marginBottom:50
  },

  infocuaca: {
    backgroundColor: '#E8F5E9',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box4: {//box detail tampil
    backgroundColor: '#A5D6A7',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:10,

    marginLeft: 10,
    marginRight: 10
  },

  footer: {
    backgroundColor: '#1B5E20',
    flex: 1,
    justifyContent: 'center'
  },

  backkeyboard: {
    flex: 2,
    backgroundColor: '#E8F5E9',
    flexDirection: 'row',
  },

  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },
  text1: {
    padding: 15, fontSize: 30, color: 'white', textAlign: 'center', fontWeight:'bold'
  },
  text2: {
    padding: 15, fontSize: 20, color: 'black', textAlign: 'center', fontWeight:'bold'
  },
  textfooter: {
    padding: 15, fontSize: 15, color: 'white', textAlign: 'center', fontWeight:'bold'
  }
});
