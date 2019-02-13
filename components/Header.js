import React, { Component } from 'react';
import {Platform, FlatList,Picker, StyleSheet, Text, View} from 'react-native';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <View 
            style={styles.headerItems}>

            <Text
                style={{flex:1}}>SELECT ANCILLARY TYPE</Text>
            <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 50}}>

                    <Picker.Item label="one" value="Item_1" />
                    <Picker.Item label="two" value="Item_2" />
            </Picker>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    headerItems:{
        flex:1,
        flexDirection:'row'
    }
})
 
export default Header;