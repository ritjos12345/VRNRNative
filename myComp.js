import React, {Component} from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native'; 
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';    

export class MyComponent extends React.Component{
    handleSubmit(){
        alert("HI")
    }
    render() {
         return(   
         <ScrollView scrollEnabled={true} >           
         <FormLabel>Vehicle Status</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter name"/>
         <FormLabel>Vehicle Number</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter name"/>
         <FormLabel>Fleet Type</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter name"/>
         <FormLabel>Transporter / Agency Name</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter name"/>
         <FormLabel>Seal Condition</FormLabel>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter name"/>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Seal No. 1"/>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Seal No. 2"/>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="No. of Boxes"/>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="Enter Seal No. 2"/>
         <FormInput style={styles.titleText} onChangeText={this.handleChange} placeholder="No. of Boxes"/>
         <Button
               onPress={this.handleSubmit}
               title="Submit"
               color="#841584"
               icon=""
               accessibilityLabel="Submit"  
           />
           </ScrollView>)
       }
 } 


styles = StyleSheet.create({
    scroll:{
        overflow : 'scroll'
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