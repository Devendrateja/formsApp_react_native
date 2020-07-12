/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

import AppScene from './app/scenes/AppScene/index';

const App = () => {
  return (
    <Fragment>
      <AppScene />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Button,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {ColorPicker} from 'react-native-color-picker';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
// const [color1, setColor1] = useState('#3399ff');
// const [color2, setColor2] = useState('#cc66ff');
// const [hidePicker1, setHidePicker1] = useState(true);
// const [hidePicker2, setHidePicker2] = useState(true);

// selectColor1 = (color) => {
//   setHidePicker1(true);
//   setHidePicker2(true);
//   setColor1(color);
// };

// selectColor2 = (color) => {
//   setHidePicker1(true);
//   setHidePicker2(true);
//   setColor2(color);
// };

// setHidePicker = (number) => {
//   if (number === 1) {
//     setHidePicker1(!hidePicker1);
//   }
//   if (number === 2) {
//     setHidePicker2(!hidePicker2);
//   }
// };

//   return (
//     <>
//       <LinearGradient
//         start={{x: 0, y: 0}}
//         end={{x: 0.7, y: 0}}
//         colors={[color1, color2]}
//         style={styles.linearGradient}>
//         <Text style={styles.buttonText}>Sign in with Facebook</Text>
//         {!hidePicker1 && (
//           <ColorPicker
//             onColorSelected={(color) => selectColor1(color)}
//             style={{flex: 1}}
//           />
//         )}
//         {!hidePicker2 && (
//           <ColorPicker
//             onColorSelected={(color) => selectColor2(color)}
//             style={{flex: 1}}
//           />
//         )}
//       </LinearGradient>
//       <Button
//         style={styles.button}
//         title=""
//         color={color1}
//         onPress={() => setHidePicker(1)}></Button>
//       <Button
//         style={styles.button}
//         title=""
//         color={color2}
//         onPress={() => setHidePicker(2)}></Button>
//     </>
//   );
// };

// var styles = StyleSheet.create({
//   linearGradient: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 18,
//     fontFamily: 'Gill Sans',
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
//   button: {
//     borderColor: 'black',
//     borderWidth: 3,
//     marginBottom: 2,
//   },
// });

// export default App;
