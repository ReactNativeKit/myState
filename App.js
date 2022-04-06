import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Abhinav');
  const [person, setPerson] = useState({ name: 'Tushar', age: 22 });

  const clickHandler = () => {
    setName('Prem');
    setPerson({ name: 'Edward', age: 24 });
  };

  return (
      <View style={styles.container}>
      <Text>My name is {name}.</Text>
      <Text>His name is {person.name} and his age is {person.age}.{'\n'}</Text>
      <View>
        <Button color="#92BA92" title='update state' onPress={clickHandler}/>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DDBF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});