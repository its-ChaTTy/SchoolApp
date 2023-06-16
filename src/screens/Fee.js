import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import DatePicker from 'react-native-date-picker-light';
import Entypo  from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Fee = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderItem = () => (
    <View>
    <DatePicker
      locale={'es-mx'}
      selected={(date) => console.log(date)}
      depressedColor={'#ff89c3'} // Set the color for when the date is selected
      pressedColor={'#4784fe'} // Set the color for when the date is not selected
    />
  </View>
  );

  const renderCard = ({ item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card}>
      <View style={styles.timeContainer}>
        <Text style={styles.nine}>
          {item.time1}
        </Text>
        <Text style={styles.ten}>
          {item.time2}
        </Text>
        <View style={styles.circle}></View>
        <View style={styles.dottedLine}></View>
      </View>
      <View style={[styles.teacherCard, { backgroundColor: item.backgroundColor }]}>
      <View style= {styles.logosContainer}>
      <Entypo name="open-book" size={24} color="#F2F2F2" marginTop={-9} />
      <FontAwesome5 name="chalkboard-teacher" size={24} color="#F2F2F2" marginTop={20} />
        </View>
        <View style= {styles.subjectContainer}>
        <Text style= {[styles.subject,styles.first]}>Subject: </Text>
        <Text style= {styles.subject}>Teacher: </Text>
        </View>
        <View style= {styles.teacherContainer}>
        <Text style= {[styles.maths,styles.first]}>Maths </Text>
        <Text style= {styles.maths}>Balkrishna Thakur </Text>
        </View>
      </View>
        {/* <Text style={styles.cardText}>{item.name}</Text> */}
      </TouchableOpacity>
    </View>
  );

  const data = [
    { id: '1', name: 'Item 1' },
  ];

  const cardData = [
    { id: '1', name: 'Card 1', time1: '9:00' , time2: '10:00', backgroundColor: '#4784fe' },
    { id: '2', name: 'Card 2', time1: '10:00' , time2: '11:00', backgroundColor: '#EF8FC1' },
    { id: '3', name: 'Card 3', time1: '11:00' , time2: '12:00', backgroundColor: '#EF8FC1' },
  ];
  

  return (
    <ScrollView>
    <Header />
    <View style={styles.container}>
      <View style={styles.routineFilters}>
      <View style={styles.routineContainer}>
        <Text style={styles.routine}>
          Routine
        </Text>
        <Text style={styles.september}>
          16 september
        </Text>
      </View>
      <View style={styles.filterBoxContainer}>
          <View style={styles.filterBox1}>
          <TouchableOpacity onPress={toggleExpanded} style={styles.button1}>
          <View style={styles.buttonRectangle}>
            <Text style={styles.buttonText}>{expanded ? 'Class            ^ ' : 'Class            v '}</Text>
          </View>
          </TouchableOpacity>
          {expanded && (
            <View style={styles.content}>
              {/* Content of the expanded list */}
              <Text style={styles.contentText}>9th</Text>
              <Text style={styles.contentText}>10th</Text>
              <Text style={styles.contentText}>11th</Text>
              <Text style={styles.contentText}>12th</Text>
            </View>
          )}
          </View>
          <TouchableOpacity style={styles.button2}>
          <View style={styles.buttonRectangle}>
            <Text style={styles.buttonText}>{expanded ? 'Section        ^ ' : 'Section        v '}</Text>
          </View>
          </TouchableOpacity>
          </View>
      </View>
      <View style={styles.todayContainer}>
        <Text style={styles.today}>
          Today
        </Text>
      </View>
      <View style={styles.calendar}>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </View>
    </View>
    <View>
    <FlatList
      data={cardData}
      renderItem={renderCard}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardList}
    />
    </View>
    </ScrollView>
  )
}

export default Fee

const styles=StyleSheet.create({
  container:{
    
  },
  routineContainer: {
    // padding:22,
  },
  routine: {
    fontWeight: 'bold',
    fontSize: 29,
  },
  routineFilters: {
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 22,
  },
  september: {
    fontSize: 16,
  },
  button1: {
    // backgroundColor: 'white',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: -16,
    // alignSelf: 'center',
    borderColor: 'black',
    alignSelf: 'flex-start',
  },
  button2: {
    // backgroundColor: 'white',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 18,
    // alignSelf: 'center',
    borderColor: 'black',
    alignSelf: 'flex-start',
  },
  filterBox1: {
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 14,
  },
  contentText: {
    fontSize: 10,
  },
  content: {
    marginLeft: -2,
  },
  buttonRectangle: {
    borderWidth: 1,
    borderColor: 'black',
    // paddingVertical: 10,
    padding: 2,
  },
  filterBoxContainer:{
    flexDirection: 'row',
    marginTop: 10,
  },
  today: {
    marginLeft: 22,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4784fe',
  },
  todayContainer: {
    padding: 0,
    marginTop: -10,
    marginBottom: -30,
  },
  calendar:{
    fontSize: 70,
  },
  cardList: {
    marginTop: 20,
    // paddingHorizontal: 10,
  },
  cardContainer: {
    // marginRight: 10,
    // flexDirection: 'column',
  },
  card: {
    width: '100%',
    height: 150,
    backgroundColor: '#F2F2F2',
    // borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'column',
    padding:22,
    marginTop: -23,
  },
  nine: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#5683F6'
  },
  ten: {
    fontSize: 18,
    marginLeft: 2,
    color: '#EF8FC1'
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 60 / 2,
    backgroundColor: '#F2F2F2',
    borderColor: '#EF8FC1',
    borderWidth: 2,
    marginLeft: 80,
    marginTop: -56,
  },
  dottedLine: {
    width: 2,
    height: 120,
    backgroundColor: 'transparent',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#EF8FC1',
    marginTop: 5,
    marginLeft: 93,
  },
  teacherCard: {
    width: 230,
    height: 140,
    backgroundColor: '#EF8FC1',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // marginTop: '10',
  },
  subjectContainer: {
    flexDirection: 'column',
  },
  subject: {
    fontSize: 16,
    color: '#F2F2F2',
    marginTop: 30,
  },
  maths: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F2F2F2',
    marginTop: 30,
  },
  logosContainer: {
    paddingRight: 8
  },
  first:{
    marginTop: -10,
  },
})