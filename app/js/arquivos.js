import React from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Slider,
  ListView,
  Alert
} from 'react-native';

import { List,ListItem,View,Input,Icon, Button, Text, Toast,Header,Left,Right,Body,Content,Container } from "native-base";

import {
  NavigationActions,
} from 'react-navigation';

function Item(props){
  return(
      <ListItem {...props}>
          <Text style={{flex:1}}>{props.texto}</Text>
          {props.children}
      </ListItem>
  );
}

//========| Imagens |========//
const pdf = require("../assets/pdf.png");
const word = require("../assets/word.png");
const zip = require("../assets/zip.png");
//==========================//

const datas = [
  ["pdf","Lista 1","50KB"],["zip","Exemplo","2MB"]
];

export default class Arquivos extends React.Component {
  constructor(props){0
    super(props);
    this.state = {
      arquivos: datas,
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.arquivos];
    newData.splice(rowId, 1);
    this.setState({ arquivos: newData });
  }

  render(){
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return(
        <Container>
            <Header>
                <Left><Icon name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())}/></Left>
                <Body><Text>Arquivos</Text></Body>
                <Right />
            </Header>

              <Content style={{backgroundColor:'#fff'}}>
                <List>
                    <Item texto="Gerência de Projetos" itemDivider />
                    <List dataSource={ds.cloneWithRows(this.state.arquivos)}
                        renderRow={(item) =>
                            <ListItem style={{paddingHorizontal: 10}} onPress={() => {
                              Toast.show({
                                  text: "download de " + item[1] + "." + item[0] + " completo",
                                  position: 'bottom',
                                  buttonText: 'Ok'
                              });
                            }}>
                                <Image style={{height:25,width:25,marginRight:10}} source={eval(item[0])} />
                                <Text style={{flex:1}}>{item[1]}</Text>
                            </ListItem>
                        }
                        renderLeftHiddenRow={data =>
                          <Button full onPress={() => Alert.alert("Informações","\n" + data[1] + data[0] + "\n Tamanho: " + data[2])}>
                              <Icon active name="information-circle" />
                          </Button>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                          <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                            <Icon active name="trash" />
                          </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}>
                    </List>

                    <Item texto="Tópicos em WEB" itemDivider />
                    <Item texto="0 registros"/>

                </List>
            </Content>
        </Container>
    );
  }
};

          //   <Fab
          //   active={true}
          //   direction="up"
          //   containerStyle={{ }}
          //   style={{ backgroundColor: '#5067FF' }}
          //   position="bottomRight">
          //   <Icon name="share" />
          //   <Button style={{ backgroundColor: '#34A34F' }}>
          //     <Icon name="logo-whatsapp" />
          //   </Button>
          //   <Button style={{ backgroundColor: '#3B5998' }}>
          //     <Icon name="logo-facebook" />
          //   </Button>
          //   <Button disabled style={{ backgroundColor: '#DD5144' }}>
          //     <Icon name="mail" />
          //   </Button>
          // </Fab>
const styles = StyleSheet.create({

});
