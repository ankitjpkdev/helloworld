import React, { Component } from 'react';
import CardSection from './CardSection'
import { Text,View,StyleSheet,TextInput } from 'react-native';
import Radio from 'native-base'

class ListItems extends Component {

    constructor(props){
        super(props) 
    } 

    render() {   
        return (
            <View>    
                <View
                    style={style.itemName}>
                   <Text>{this.props.webName} </Text>
                </View>     
 
                              
            </View>
        );
    }
}

const style = StyleSheet.create({
    itemName:{
        backgroundColor:'blue',
        marginTop:'2'
    }

})
 
export default ListItems;