import React, {Component} from 'react'
import { View,StyleSheet,Text,TouchableOpacity,TextInput,Alert} from 'react-native'
import {server,showError,showSuccess} from './src/server'
import axios from 'axios'
const initialState = {
    name: '',
    email: '',
    password: ''
}

export default class Register extends Component {
    
    state = {
        ...initialState
    }
    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        }
        catch(e) {
            showError(e)
        }
    }
    render() {
        
    return (
    

        <View style={styles.container}>
        <View style={styles.container2}>
            <TextInput style={styles.input}
            placeholder="Nome" value={this.state.name}
            onChangeText={name => this.setState({name})}/>

            <TextInput style={styles.input}
            placeholder="Nome" value={this.state.email}
            onChangeText={email => this.setState({email})}/>

            <TextInput style={styles.input}
            placeholder="Nome" value={this.state.password}
            onChangeText={password => this.setState({password})}/>

            <TouchableOpacity onPress={() => this.signup()}><Text>Enviar</Text></TouchableOpacity>
            </View>

        </View>
    )
        }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center'
    }
})
