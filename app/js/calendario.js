import React from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  ListView,
  Alert,
  FlatList
} from 'react-native';

import { View,Input,Icon, Button, Text, Toast,Header,Left,Body,Right,Content,Container } from "native-base";

import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.']
};

LocaleConfig.defaultLocale = 'br';

var datas = {};
var descricoes = {};

fetch('http://localhost:8080/calendario',)
.then((res) => res.json())
.then((resJson) => {
    datas = resJson.datas;
    for(var i in resJson.datas){
        console.warn(i,resJson.datas[i].titulo);
    }
 })
 .catch((erro) => Alert.alert(erro.message));

function Item(props){
  return(
      <ListItem {...props}>
          <Text style={{flex:1}}>{props.texto}</Text>
          {props.children}
      </ListItem>
  );
}

export default class Calendario extends React.Component {
  render(){
    return(
        <Container>
            <Header>
                <Left><Icon name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())}/></Left>
                <Body><Text>Calendário</Text></Body>
                <Right />
            </Header>

              <Content style={{backgroundColor:'#fff'}}>
                <Calendar
                  markedDates={datas}
                  onDayPress={(dia) => {Alert.alert(datas[dia.dateString].titulo,datas[dia.dateString].descricao)}}
                />

                <FlatList
                    data={datas}
                    renderItem={({ item }) => (
                        <Text>Teste</Text>
                    )}
                />

              </Content>
        </Container>
    );
  }
};

const styles = StyleSheet.create({

});
