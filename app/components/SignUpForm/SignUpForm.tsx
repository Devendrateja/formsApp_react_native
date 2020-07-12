import React, {Fragment, useState} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

@observer
class SignUpForm extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.form}>
            <Text style={styles.signUpTitle}>Sign Up</Text>
            <Text>Please fill in the fom to create an account</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffff',
  },
  signUpTitle: {
    fontSize: 30,
    fontWeight: '700',
  },
});

export default SignUpForm;
