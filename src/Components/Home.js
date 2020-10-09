import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

let Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{width: '100%', height: '40%'}}
        source={require('../Images/home.png')}></Image>

      {/* Main Title */}
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Yet To-Do</Text>
        </View>
      </View>

      {/* Tagline - Heading */}
      <View style={styles.containerTagline}>
        <Text style={styles.tagline}>Do Something Great !</Text>
      </View>

      {/* Tagline - Quote */}
      <View style={styles.tagquote}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Small steps towards a greater destination{' '}
        </Text>
      </View>

      {/* Start button */}
      <View>
        <TouchableOpacity
          backgroundColor="tomato"
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <View style={styles.button}>
            <Text style={{color: 'white', fontSize: 20}}>Let's Go </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: 'rgb(119, 190, 137)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
  },
  title: {
    width: '50%',
    backgroundColor: 'rgba(131,226,8, 0.8)',
    // boxShadow: "5px 5px 5px rgba(100, 100, 100, 0.7)",
    padding: 20,
    borderRadius: 10,
    flex: 0.3,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTagline: {
    flex: 0.25,
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagline: {
    color: 'rgb(100, 100, 100)',
    fontSize: 30,
    padding: 15,
  },
  tagquote: {
    marginHorizontal: 10,
    justifyContent: 'center',
    height: '20%',
    textAlign: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: 'tomato',
    width: '30%',
    alignSelf: 'center',
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default Home;
