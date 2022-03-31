import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import { Home, ClassicSuperHeroes } from '../screens';

export type TabParamList = {
    Home: undefined,
    ClassicSuperHeroes: undefined,
    RQSuperheroes: undefined
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export type HomeScreenNavigationProps = MaterialTopTabScreenProps<TabParamList, 'Home'>;
export type ClassicSuperHeroesScreenNavigationProps = MaterialTopTabScreenProps<TabParamList, 'ClassicSuperHeroes'>;
export type RQHeroesScreenNavigationProps = MaterialTopTabScreenProps<TabParamList, 'RQSuperheroes'>;

const Tab = createMaterialTopTabNavigator();

export const Main = () => (
    <SafeAreaView style={{flex: 1, marginTop: 24}}>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Classic Superheroes" component={ClassicSuperHeroes} />
            <Tab.Screen name="RQ Superheroes" component={SettingsScreen} />
        </Tab.Navigator>
    </SafeAreaView>
);
