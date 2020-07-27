
import React, { useState } from 'react';

import {Text , StyleSheet, TouchableOpacity, View} from 'react-native'
import  Clipboard from "@react-native-community/clipboard";
import LottieView  from 'lottie-react-native'
import Input from "../Input/Input";


const endpoint = "https://buscaemoji.herokuapp.com/emoji?s="
const Main = () => {
    
    const [value, onChangeText] = useState("")
    const [emoji, setEmoji] = useState("")
    const [erroMessage, setErroMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [coping, setCoping] = useState(false)
    
    async function getEmoji(q, func){
        
        setLoading( true )
        setEmoji("")
        setErroMessage("")

        var resp = await fetch(endpoint+q, {
            method: 'GET'
        });
        
        var json = await resp.json();

        setLoading(false)
        if( json.hasOwnProperty('Simbol') ){
            setEmoji(json.Simbol) 
        }else{
            setErroMessage( json.Message )
        }
    }

    function copy(){
        setCoping(true);
        Clipboard.setString(emoji)
        setTimeout(function(){
            setCoping(false)
        },1000);
    }


    function getComponent(){


        if( loading && !erroMessage ){
            return (

                <>
                    <LottieView  source={ require('../../assets/loading.json')} loop autoPlay />
                    <View>
                        <Text style={styles.canvasText} >Calma aê</Text>
                    </View>
                </>

            );
        }
        else if( !loading && erroMessage ){
            return(

                <>
                    <LottieView  source={ require('../../assets/error.json')} loop autoPlay />
                    <View>
                        <Text style={styles.canvasText} >Não achei nada</Text>
                    </View>  
                </>

            );
        }

    }


    return (
        <>
            <Text style={styles.text}>BuscaEmoji</Text>
            <Input onChangeText={onChangeText} getEmoji={getEmoji} />
            <TouchableOpacity onLongPress={ ()=> copy() }>
                <View style={styles.canvas} >
                    {coping ? <LottieView  source={ require('../../assets/exp.json')} loop autoPlay />: <View/>}
                    <Text style={styles.simbol}> { emoji } </Text>
                </View>
            </TouchableOpacity>
            <View style={ styles.canvas } >{ getComponent() }</View>
        </>
    );
}

const fontColor = 'white';
const styles = StyleSheet.create({
    text : {
        color : fontColor,
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: 'Helvetica'
    },

    erroMessage: {
        marginTop: 350,
        color: fontColor,
        fontSize: 30,
        fontWeight: "bold",
        position: 'absolute',
        zIndex: 100
    },
    simbol: {
        marginTop: 100,
        color: fontColor,
        fontSize: 60,
        fontWeight: "bold"
    },
    canvas :{
        display: 'flex',
        width: 300,
        height: 300,
        alignItems: 'center',
        textAlign: 'center'
    },
    canvasText: {
        color : fontColor,
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: 'Helvetica'
    },

})

export default Main;
