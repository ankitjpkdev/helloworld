import React, {Component} from 'react';
import {Platform, FlatList, StyleSheet, Text, View} from 'react-native';
import Header from './Header'
import MainList from './MainList';


class Home extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Header/>
                <MainList/>
            </View>
        )
    }
}

export default Home