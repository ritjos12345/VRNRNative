import React, {Component} from 'react';
import { StyleSheet, Button, Text, View, ScrollView, TextInput,KeyboardAvoidingView, ToastAndroid, TabBarIOS } from 'react-native'; 
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Panel } from './Panel';  // Step 1

export class MyComponent extends React.Component{
    handleSubmit(){
        ToastAndroid.show("VRN sucessfully checked out", ToastAndroid.SHORT)
    }
    render() {
         return(   
    <View style={{flex: 1}}>      
    <ScrollView>
     <KeyboardAvoidingView style={{ flex: 1 }} behavior={"position"} >
     <Panel title="Vehicle">
                  <FormLabel>Vehicle Number</FormLabel>
                  <FormInput style={styles.titleText} onChangeText={this.handleChange} defaultValue={'MH01AD2334'}
                  editable={false}/>
                  <FormLabel>Fleet Type</FormLabel>
                  <FormInput style={styles.titleText} onChangeText={this.handleChange} defaultValue={'Vendor Vehicle'}
                  editable={false}/>
                  <FormLabel>Transporter Agency Name</FormLabel>
                  <FormInput style={styles.titleText} onChangeText={this.handleChange} defaultValue={'Test Vendor'}
                  editable={false}/>
                  
                  </Panel>
                  <Panel title="Driver">
                  <FormLabel>Driver License Number</FormLabel>
                  <FormInput style={styles.titleText} onChangeText={this.handleChange} defaultValue={'LIC0204'}
                  editable={false}/>
                  <FormLabel>Mobile No.</FormLabel>
                  <FormInput style={styles.titleText} onChangeText={this.handleChange} defaultValue={'9876543210'}
                  editable={false}/>
                  <FormLabel>Driver / Pickup Person Name</FormLabel>
                  <FormInput style={styles.titleText} onChangeText={this.handleChange} defaultValue={'Jay'}
                  editable={false}/>
                  </Panel>
                  <Panel title="Remarks">
                  <FormLabel>AWB No./Docker No./LR No.</FormLabel>
                  <FormInput style={styles.titleText} onChangeText={this.handleChange} defaultValue={'MH01AD2334'}
                  editable={false}/>
                  <FormLabel>In Remarks</FormLabel>
                  <FormInput style={styles.titleText} onChangeText={this.handleChange} defaultValue={'OK'}
                  editable={false}/>
                  </Panel>
                  
    </KeyboardAvoidingView>
    </ScrollView>
    
    <View>        
        <Button
                        onPress={this.handleSubmit}
                        title="Check-Out"   
                        color="#841584"
                        icon=""
                        accessibilityLabel="Check-Out"  
                    />
    </View>
    </View>
        )
       }
 } 


styles = StyleSheet.create({
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
      },
    scroll:{
        overflow : 'scroll'
    },
    header1: {
        fontSize: 24,
        marginBottom: 10
      },
    view: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        padding: 20
      },
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