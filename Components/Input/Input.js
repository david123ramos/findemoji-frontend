
import React from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";



const Input = (props) => {

    return(
        <>

            <View style={styles.container}>
                
                <View style={styles.SectionStyle}>

                    <Image source={require('../../assets/images/mg.png')} style={styles.ImageStyle} />

                    
                    <TextInput 
                        style={styles.input} 
                        onChangeText={  t => props.onChangeText(t)  }
                        onSubmitEditing ={ e =>  props.getEmoji(e.nativeEvent.text) }
                        underlineColorAndroid="transparent" >
                    </TextInput>

                </View>

            </View>

        </>

    );
}


const styles = StyleSheet.create({

    input : {
        width: 350,
        height: 45, 
        borderRadius: 10,
        color: '#fff',
        fontSize: 25,
        fontWeight: "bold",
        flex: 1,
        backgroundColor: '#4a1596'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      },
      
      SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4a1596',
        marginTop: 50,
        height: 50,
        borderRadius: 5 ,
        shadowColor: "#5e3f8a",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.32,
        shadowRadius: 4.22,
        elevation: 4,
    },
     
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
})

export default Input;