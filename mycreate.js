import React, {Component} from 'react';
import { StyleSheet, Button, Text, View, ScrollView, TextInput,KeyboardAvoidingView, ToastAndroid, TabBarIOS } from 'react-native'; 
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export class MyCreateComponent extends React.Component{
    handleSubmit(){
        ToastAndroid.show("VRN sucessfully checked out", ToastAndroid.SHORT)
    }
    render() {
         return(   
    <View style={{flex: 1}}>      
    <ScrollView>
     <KeyboardAvoidingView style={{ flex: 1 }} behavior={"position"} >
         <FormLabel>Vehicle Status</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Vehicle Status"/>
         <FormLabel>Vehicle Number</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Vehicle No."/>
         <FormLabel>Fleet Type</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Fleet Type"/>
         <FormLabel>Transporter / Agency Name</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Transporter/Agency"/>
         <FormLabel>Seal Condition</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Seal Cond."/>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Seal No. 1"/>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Seal No. 2"/>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="No. of Boxes"/>
    </KeyboardAvoidingView>
    </ScrollView>

    <View>        
        <Button
                        onPress={this.handleSubmit}
                        title="Submit"   
                        color="#841584"
                        icon=""
                        accessibilityLabel="Submit"  
                    />
    </View>
    </View>
        )
       }
 } 