import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Flatlist, Button } from 'react-native';
import QuoteScreen from '@/components/QuoteScreen';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.titleGroup}>
                <Text style={styles.text}>Welcome to</Text>
                <Text style={styles.title}>The Word Nerd's </Text>
                <Text style={styles.title}>Playground</Text>
                <Text style={styles.text}>Let's get started!</Text>
            </View>
            <QuoteScreen/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        gap: 10,
        backgroundColor: 'lightblue',
        padding: 100,
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontFamily: '',
        textAlign: 'center',
    },
    titleGroup: {
        display: 'flex',
        gap: 10,
        marginTop: 50,
    }
})