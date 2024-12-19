import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Flatlist, Button, ImageBackground } from 'react-native';
import QuoteScreen from '@/components/QuoteScreen';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import backgroundImage from '@/assets/images/serene.png';


export default function HomeScreen() {
    return (
        <ImageBackground 
            source={backgroundImage}
            style={styles.container}
        >
            <View style={styles.titleGroup}>
                <Text style={styles.title}>Wisdom Drop</Text>
                <Text style={styles.slogan}>Short bursts of knowledge at the touch of your fingers</Text>
            </View>
            <QuoteScreen/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        gap: 10,
        backgroundColor: 'black',
        padding: 100,
    },
    text: {
        fontSize: 18,
        color: 'lightblue',
        textAlign: 'center',
    },
    title: {
        fontSize: 48,
        color: 'lightblue',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    slogan: {
        fontSize: 18,
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'lightblue',
    },
    titleGroup: {
        display: 'flex',
        gap: 10,
        marginTop: 50,
    }
})