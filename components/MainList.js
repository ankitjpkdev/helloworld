import React, { Component } from 'react';
import {Platform, FlatList,Picker, StyleSheet, Text, View} from 'react-native';
import WebCall from './WebCall'
import ListItems from './ListItem'


class MainList extends Component {

    state = {
        webValues: []
    } 

    async componentDidMount() {
        const webValues = await WebCall.fetch();
        this.setState({webValues});
    }

    renderRow(values){ 
        return <ListItems webName= {values}/>
    }


    render() { 
        return ( 
            <View>

                <FlatList
                    data={this.state.webValues.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={ ({item}) => this.renderRow(item.name)}
                    keyExtractor={item => item.name}/>

            </View> 
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 36,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
    },
    name: {
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'red'
    }
    
  });
 
export default MainList;