import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import Style from './components/Style';

import Botao from './components/Botao';

const inputButtons = [
  ['1', '2', '3', '/'],
  ['4', '5', '6', '*'],
  ['7', '8', '9', '-'],
  ['0', '.', '=', '+']
];

export default class App extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.entrada}>
          <Text style={Style.texto}>0</Text>
        </View>
        <View style={Style.teclado}>
          {this._renderInputButtons()}
        </View>
      </View>
    );
  }

  _renderInputButtons() {
    let views = [];

    for (var r = 0; r < inputButtons.length; r ++) {
        let row = inputButtons[r];

        let inputRow = [];
        for (var i = 0; i < row.length; i ++) {
            let input = row[i];

            inputRow.push(
                <Botao value={input} onPress={this._onInputButtonPressed.bind(this, input)} key={r + "-" + i} />
            );
        }

        views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    alert(input)
  }

}


