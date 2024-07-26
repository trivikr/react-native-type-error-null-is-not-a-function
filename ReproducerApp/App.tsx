/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const onPress = async () => {
  const functionToCallInFinally = null;
  const greeting = await new Promise(resolve => {
    resolve('Hello, world!');
  }).finally(functionToCallInFinally);
  console.log(greeting);
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button title="Press me" onPress={onPress} />
    </SafeAreaView>
  );
}

export default App;
