import React, {Fragment, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ColorPicker} from 'react-native-color-picker';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';

import SignUpForm from '../../components/SignUpForm';
import GradientButton from '../../components/GradientButton';

@observer
class AppScene extends React.Component {
  @observable color1: string = '#4c669f';
  @observable color2: string = '#192f6a';

  pickColor1 = (color: string): void => {
    this.color1 = color;
  };

  pickColor2 = (color: string): void => {
    this.color2 = color;
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[this.color1, this.color2]}
          style={styles.linearGradient}>
          <View style={styles.favouriteColorsView}>
            <Text style={styles.buttonText}>Select your favourite colors</Text>
            <GradientButton pickColor={this.pickColor1} />
            <GradientButton pickColor={this.pickColor2} />
          </View>
          <SignUpForm />
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

let styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  favouriteColorsView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  modalStyle: {
    marginTop: 50,
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});

// let styles = StyleSheet.create({
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
//   }
// });

export default AppScene;

// class AppScene extends React.Component {
//   const [color1, setColor1] = useState('#3399ff');
//   const [color2, setColor2] = useState('#cc66ff');
//   const [hidePicker1, setHidePicker1] = useState(true);
//   const [hidePicker2, setHidePicker2] = useState(true);

//   const selectColor1 = (color) => {
//     setHidePicker1(true);
//     setHidePicker2(true);
//     setColor1(color);
//   };

//   const selectColor2 = (color) => {
//     setHidePicker1(true);
//     setHidePicker2(true);
//     setColor2(color);
//   };

//   const setHidePicker = (number) => {
//     if (number === 1) {
//       setHidePicker1(!hidePicker1);
//     }
//     if (number === 2) {
//       setHidePicker2(!hidePicker2);
//     }
//   };
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
//         title=""
//         color={color1}
//         onPress={() => setHidePicker(1)}></Button>
//       <Button
//         title=""
//         color={color2}
//         onPress={() => setHidePicker(2)}></Button>
//     </>
//   );
// };
