/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import HelloWorld from './src/components/hello.component';

function App(): React.JSX.Element {
  return (
    <View>
      <HelloWorld name="John Doe" />
    </View>
  );
}

export default App;
