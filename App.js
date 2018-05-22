import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import { List, ListItem, Header } from 'react-native-elements';
import { StyleSheet, Text, View, FlatList, TextInput, Button, ScrollView } from 'react-native'; 
import { SearchBar } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { MyComponent } from './myComp';
import { MyCreateComponent } from './mycreate';
import { KeyboardAvoidingView } from 'react-native';
import ActionButton from 'react-native-action-button';


class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: '',
      list : [
        {
          title: 'VRN : 100034',
          subtitle: 'MH01AB1234',
          icon: 'flight-takeoff'
        },
        {
          title: 'VRN : 100035',
          subtitle: 'MH01AB1235',
          icon:'flight-takeoff'
        },
        {
          title: 'VRN : 100034',
          subtitle: 'MH01AB1234',
          icon: 'flight-takeoff'
        },
        {
          title: 'VRN : 100035',
          subtitle: 'MH01AB1235',
          icon:'flight-takeoff'
        },
        {
          title: 'VRN : 100034',
          subtitle: 'MH01AB1234',
          icon: 'flight-takeoff'
        },
        {
          title: 'VRN : 100035',
          subtitle: 'MH01AB1235',
          icon:'flight-takeoff'
        },
        {
          title: 'VRN : 100034',
          subtitle: 'MH01AB1234',
          icon: 'flight-takeoff'
        },
        {
          title: 'VRN : 100035',
          subtitle: 'MH01AB1235',
          icon:'flight-takeoff'
        },
        {
          title: 'VRN : 100034',
          subtitle: 'MH01AB1234',
          icon: 'flight-takeoff'
        },
        {
          title: 'VRN : 100035',
          subtitle: 'MH01AB1235',
          icon:'flight-takeoff'
        },
        {
          title: 'VRN : 100034',
          subtitle: 'MH01AB1234',
          icon: 'flight-takeoff'
        },
        {
          title: 'VRN : 100035',
          subtitle: 'MH01AB1235',
          icon:'flight-takeoff'
        }
      ]
        
    }
    this.arrayholder = [];
    this.updateState=this.updateState.bind(this);
  }

render () {
 return( 
  <View style={{flex: 1}}> 
    <View>  
    <SearchBar
        platform="android"
        placeholder='Search'
        onChangeText={(text)=>this.onSearch(text)} /> 
    </View>    
    <ScrollView>    
    <List>
    {
      this.state.list.map((item, i) => (
        <ListItem button={true} onPress={() => this.props.navigation.navigate('Details')}
          key={i}
          title={            <View style={styles.titleView}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
          }
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>{item.subtitle}</Text>
            </View>
          }
          leftIcon={{name: item.icon}}
        />
      ))
    }    
    </List>
    </ScrollView>
    <ActionButton
    buttonColor="rgba(231,76,60,1)"
    onPress={() => this.props.navigation.navigate('Create')}
    />
  </View>)
}

updateState(){
  this.setState({list:this.arrayholder})
}

    
onSearch(text){
    this.arrayholder=this.state.list;
    this.arrayholder = this.state.list.filter(function(item){
    const itemData = item.title.toUpperCase()
    const textData = text.toUpperCase()
    return itemData.indexOf(textData) > -1
})
this.updateState();
}
}
class DetailsScreen extends React.Component{
  constructor(props) {
    super(props);
    // fetch(API + this.props.match.params.id)
    // .then(response => response.json())
    // .then(data => this.props.data);

        this.state = {
          text1 : "",
          text2 : ""  
        };

}
handleChange(){

}

render() {
    const { classes, theme } = this.props;
    return (      
            <MyComponent/>   
    );        
}
}

class CreateScreen extends React.Component{
  constructor(props) {
    super(props);
    // fetch(API + this.props.match.params.id)
    // .then(response => response.json())
    // .then(data => this.props.data);

        this.state = {
          text1 : "",
          text2 : ""  
        };

}
handleChange(){

}

render() {
    const { classes, theme } = this.props;
    return (      
            <MyCreateComponent/>   
    );        
}
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Create:{
      screen:CreateScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component{
  render(){
    return <RootStack />;
  }
}

styles = StyleSheet.create({
    label:{
        fontWeight:'bold'
    },
    titleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 0
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 0
  },
  titleText: {
    paddingLeft: 10,
    color: 'black'
  },
  ratingText: {
    paddingLeft: 10,
    color: 'green'
  }

})

