import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import Style from './Style';

export default class Botao extends Component {
    
    render() {
        return (
            <TouchableHighlight style={Style.styleBotao}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.styleBotaoTexto}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
    
}
