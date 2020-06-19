import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const soundData = [
  { id: 'first', title: '一番目' },
  { id: 'second', title: '二番目' },
  { id: 'third', title: '三番目' },
  { id: 'forth', title: '四番目' },
  { id: 'fifth', title: '五番目' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    height: 100,
  },
});

const Layout = (props: any) => <SafeAreaView>{props.children}</SafeAreaView>;

function Main() {
  return (
    <Layout>
      <FlatList data={soundData} renderItem={({ item }) => <Text style={styles.label}>{item.title}</Text>} />
    </Layout>
  );
}

function Sub() {
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="音声一覧" component={Main} />
      <Tab.Screen name="☆" component={Sub} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
