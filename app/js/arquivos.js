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
  ListView
} from 'react-native';

import { List,ListItem,View,Input,Icon, Button, Text, Toast,Header,Left,Right,Body,Content,Container } from "native-base";

import {
  NavigationActions,
} from 'react-navigation';

// import ModalSelector from 'react-native-modal-selector';
// import Slider from "react-native-slider";
//
// function Item(props){
//   return(
//       <ListItem {...props}>
//           <Text style={{flex:1}}>{props.texto}</Text>
//           {props.children}
//       </ListItem>
//   );
// }

const datas = [
  'Enrolamento de folhas baixeiras',
  'Podridão-apical',
  'Lóculo-aberto',
  'Frutos ocados'
];

export default class Perdas extends React.Component {
  constructor(props){
    super(props);
    // this.state = {anomalias: 0};
    this.state = {
      anomalias: 0,
      basic: true,
      listViewData: datas,
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render(){
    const { navigate } = this.props.navigation;

    var anomalias = ["0 registros"];
    anomalias = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return(
        <Container>
            <Header>
                <Left><Icon name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())}/></Left>
                <Body><Text>Perdas</Text></Body>
                <Right />
            </Header>

              <Content style={{backgroundColor:'#fff'}}>
                <List>
                    <Item texto="Gerência de Projetos" itemDivider />
                    <List dataSource={ds.cloneWithRows(this.state.listViewData)}
                        renderRow={(item) =>
                            <ListItem style={{paddingHorizontal: 10}}>
                                <Text style={{flex:1}}>{item}</Text>
                                    {/* <Input style={{width:10}}/> */}
                                <Slider style={{width:60}}/>
                            </ListItem>
                        }
                        renderLeftHiddenRow={data =>
                          <Button full onPress={() => alert(data)}>
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

            <Button rounded style={{position:'absolute',bottom:15,right:15}}>
                <ModalSelector
                  data={data}
                  animationType="fade"
                  onChange={(option)=>{ console.warn(option.label); }} >
                      <Icon name="md-add" />
                </ModalSelector>
            </Button>
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
