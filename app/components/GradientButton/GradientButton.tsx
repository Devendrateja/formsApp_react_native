import React, {Fragment, useState} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {ColorPicker} from 'react-native-color-picker';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Alert,
  Modal,
} from 'react-native';

interface GradientButtonProps {
  color: string;
  pickColor: (color: string) => void;
}

@observer
class GradientButton extends React.Component<GradientButtonProps> {
  @observable modalVisibility: boolean = false;
  onPress = () => {
    console.log('pressed');
  };
  onselectColor = (color: string) => {
    const {pickColor} = this.props;
    pickColor(color);
    this.modalVisibility = false;
  };
  setModalVisible = () => {
    this.modalVisibility = true;
  };
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.setModalVisible}>
          <View style={styles.button}></View>
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.modalVisibility}>
          <View style={styles.modalStyle}>
            <ColorPicker
              onColorSelected={(color) => this.onselectColor(color)}
              style={{flex: 1}}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: this.props.color,
    height: 30,
    width: 60,
    borderWidth: 5,
    borderColor: 'silver',
    margin: 5,
  },
  modalStyle: {
    marginTop: 50,
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});

export default GradientButton;
