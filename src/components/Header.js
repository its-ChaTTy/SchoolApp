import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Title } from 'react-native-paper';
import {Surface} from 'react-native-paper'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Colors from '../constants/Colors'

const IconSize=24;
function Header() {
    return (
        <Surface style={styles.header}>
            <View style={styles.viewMenu}>
                <TouchableOpacity>
                    <Feather name="menu" size={IconSize} color={Colors.white} />
                </TouchableOpacity>
            </View>
            <View style={styles.logo}>
                <FontAwesome5 name="school" size={24} color="white" />
            </View>
            <View style={styles.view}>
                <View style={styles.titleSpacing}>
                <Text style={styles.title} numberOfLines={1}>
                    School Name     
                </Text>
                </View>
            </View>
            <View style={[styles.view, styles.rightView]}>
                <TouchableOpacity style={styles.space}>
                    <Fontisto name="bell-alt" size={IconSize} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.space}>
                    <FontAwesome name="user" size={IconSize} color={Colors.white} />
                </TouchableOpacity>
            </View>
        </Surface>
    );
}

export default Header

const styles=StyleSheet.create({
    header: {
        height:150,
        elevation:4,
        justifyContent: 'space-between',
        // alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#467ee5'
    },
    viewMenu: {
        // margin: 10,
        marginTop: 17,
        marginLeft: 17,
    },
    view: {
        // margin: 10,
        marginTop: 6,
        marginRight: 15,
        // flexDirection: 'row',
    },
    rightView: {
        // flex: 1,
        flexDirection: 'row',
        // alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    title: {
        paddingTop: 60,
        fontSize: 28,
        fontWeight:'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: "bottom",
        fontFamily:"sans-serif-light",
        color: '#f8e71c',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 150,
        // paddingLeft: 15,
    },
    space: {
        padding: 12
    },
    titleSpacing: {
        marginTop: 15,
        marginLeft: -90
    },
})