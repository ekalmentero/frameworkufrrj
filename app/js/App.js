import React from 'react';
import { StatusBar,AsyncStorage,Platform } from 'react-native';
import { Root,Text } from 'native-base';
import { StackNavigator } from 'react-navigation';

import Login from './login';
import Arquivos from './arquivos';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {logado:false};

        setInterval(() => {
            AsyncStorage.getItem('logado').then((valor) => {
                this.setState({logado:valor});
            });
        },150);
    }

    componentWillMount() {
        AsyncStorage.getItem('logado').then((valor) => {
            this.setState({logado:valor});
        });
    }

    render(){
        var tmp;
        if(this.state.logado == "1"){
             tmp = <Text>Logado</Text>;
        } else { tmp = <Login />; }
        return(
          <Root>
              <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
              {tmp}
          </Root>
        );
    }
}
