import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({name}) => {
  return (
    <View>
      <Text>Hello, {name}!</Text>
    </View>
  );
};

export default HelloWorld;
