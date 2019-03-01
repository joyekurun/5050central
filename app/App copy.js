import React from 'react';

import{ View, Text, StyleSheet } from 'react-native';



class App extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Control Case Mobile App</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FFFFFF',
    },
    header:{
        fontSize:50,
        backgroundColor:'white',
    },
});


export default App;