import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends React.Component {
  componentDidMount () {
    this.animation.play ();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset ();
    this.animation.play ();
  };

  render () {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
          }}
          source={require ('../../constant/9644-delivery-riding.json')}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
