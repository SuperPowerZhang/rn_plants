/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Alert, Button, StyleSheet, Text,View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';


const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>所有植物信息</Text>
        <Button
            onPress={() => navigation.navigate('Details')}
            title="去浇水"
        />
    </View>
);
const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>浇水页面</Text>
    </View>
);
//
// const RootNavigator = StackNavigator({
//     Home:{
//         screen:HomeScreen,
//         navigationOptions: {
//             headerTitle: 'Home',
//         },
//     },
//     Details: {
//         screen: DetailsScreen,
//         navigationOptions: {
//             headerTitle: 'Details',
//         },
//     },
// });
const App = () => {
    return (
        <>
            <Text>植物日记</Text>
            <Button title="添加植物" onPress={() => {
                Alert.alert('按钮被点击了');
            }}/>
            <HomeScreen/>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
