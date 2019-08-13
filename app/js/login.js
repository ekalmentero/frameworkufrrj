import React from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  AsyncStorage
} from 'react-native';
import { View,Form,Item,Input,Icon, Button, Text, Toast } from "native-base";

function Texto(props){
    return(
        <Item rounded style={styles.input}>
            <Icon name={props.icone} style={{color:"#ffffff"}}/>
            <Input style={{color: "#ffffff"}} placeholder={props.placeholder} placeholderTextColor="#ffffff" {...props}/>
        </Item>
    );
}

export default class Login extends React.Component {
  render(){
      return(
          /*<ImageBackground source={require('./assets/1.jpg')} style={styles.container}>*/
              <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={0} style={{flex:1}}>
      		        <View style={{ flex:1,alignItems:'center',justifyContent:'center' }}>
                      
                  </View>

                  <View style={{paddingHorizontal: 30}}>
                      <Form>
                          <Texto placeholder='Usuário' icone='person' keyboardType='email-address' returnKeyType='next' />
                          <Texto placeholder='Senha' icone='key' secureTextEntry={true} returnKeyType='go' />
                      </Form>
                      <Button block
                          style={{borderRadius:20,backgroundColor:'#004238'}}
                          onPress={() => {
                              Toast.show({
                                  text: 'Login incorreto',
                                  position: 'bottom',
                                  buttonText: 'Ok'
                              });
                              AsyncStorage.setItem('logado',"1");
                          }}>
                            <Text>Login</Text>
                      </Button>
                  </View>
                  <View style={{flexDirection:'row',width:null,backgroundColor:'transparent'}}>
                      <Text>Cadastrar</Text>
                      <Text style={[{textAlign:'right',flex:1},styles.texto]} >Esqueci a senha</Text>
                  </View>
              </KeyboardAvoidingView>
          /*</ImageBackground>*/
      );
    }
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    logo: {
        alignSelf: 'center',
        position: "absolute",
        width: 260,
        height: 96
    },
    texto: {
        color:'#fff',
        padding:20,
        textShadowColor :'#000',
        textShadowOffset:{width: 0,height:1},
        textShadowRadius:7
    },
    input: {
        backgroundColor:'rgba(0,0,0,.5)',
        borderColor:'transparent',
        paddingHorizontal: 15,
        paddingVertical: 4,
        marginBottom: 20
    }
});
