import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import uuidV4 from 'uuid/v4';

import { colors } from '../theme';

export default class AddCity extends React.Component {

    state = {
        city: '',
        country: ''
    }

    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }

    submit = () => {
        if (this.state.city === '' || this.state.country === '') {
            alert("please complete form");
            return;
        }

        const city = {
            city: this.state.city,
            country: this.state.country,
            id: uuidV4(),
            locations: []
        }

        this.props.screenProps.addCity(city);
        this.setState({
            city: '',
            country: ''
        }, () => {
            this.props.navigation.navigate('Cities');
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Cities</Text>
                <TextInput
                    style={styles.input}
                    placeholder="City name"
                    onChangeText={val => this.onChangeText('city', val)}
                    value={this.state.city} />
                <TextInput
                    style={styles.input}
                    placeholder="Country name"
                    onChangeText={val => this.onChangeText('country', val)}
                    value={this.state.country} />
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add city</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    heading: {
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 50
    }
})