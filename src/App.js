import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import Style from './components/Style';

import Botao from './components/Botao';

const inputButtons = [
  ['C','CE','BKS','INFO'],
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        previousInputValue: 0,
        inputValue: 0,
        selectedSymbol: null
    }
  }
  
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.entrada}>
          <Text style={Style.texto}>{this.state.inputValue}</Text>
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
                <Botao 
                  value={input} 
                  highlight={this.state.selectedSymbol === input}
                  onPress={this._onInputButtonPressed.bind(this, input)} 
                  key={r + "-" + i} />
            );
        }

        views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }
  
  _handleNumberInput(num) {
    let inputValue = 0;
    inputValue = (this.state.inputValue * 10) + num;
    this.setState({
      inputValue: inputValue
    });
  }

  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        case '=':
          let symbol = this.state.selectedSymbol,
              inputValue = this.state.inputValue,
              previousInputValue = this.state.previousInputValue;

          if (!symbol) {
              return;
          }
          this.setState({
              previousInputValue: 0,
              inputValue: eval(previousInputValue + symbol + inputValue),
              selectedSymbol: null
          });
          break;
        case 'INFO':
          alert('Desenvolvido por Samuel Ferreira.')
          break;
        case 'BKS':
          let numb = this.state.inputValue
          let inputValue2 = Math.trunc(numb/10);
          this.setState({
            inputValue: inputValue2
          });
          break;
        case 'CE':
          this.setState({
            inputValue: 0
          });
          break;
        case 'C':
          this.setState({
            previousInputValue: 0,
            selectedSymbol: null,
            inputValue: 0
          });
          break;
    }
  }

}


