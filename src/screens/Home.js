import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import Header from '../components/Header';
import MyTabs from '../components/BottomBar';
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

const FlatCards = ({ cards }) => {
  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  const renderItem = ({ item }) => {
    const cardStyles = StyleSheet.create({
      card: {
        marginLeft: item.styles ? item.styles.marginLeft : 0,
        width: 93,
        height: 120,
        margin: 10,
        borderRadius: 20,
        backgroundColor: item.color,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5,
      },
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 8,
      },
      contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
        fontSize: 13,
        color: 'white',
        textAlign: 'center',
      },
      text: {
        fontSize: 10,
        marginLeft: 8,
        color: 'white',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
      },
      feeLabel: {
        fontSize: 8,
        color: 'white',
        fontWeight: 'bold',
      },
      feeValue: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
      },
    });

    const contentLines = item.content.split('/n');

    return (
      <View style={[cardStyles.card]}>
        <Text style={cardStyles.text}>{item.text}</Text>
        <Text style={cardStyles.title}>{item.title}</Text>
        <View style={cardStyles.contentContainer}>
          {contentLines.map((line, index) => {
            const lineParts = line.split(': ');
            return (
              <Text key={index} style={cardStyles.content}>
                <Text style={cardStyles.feeLabel}>{lineParts[0]}: </Text>
                <Text style={cardStyles.feeValue}>{lineParts[1]}</Text>
              </Text>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={cards}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      horizontal
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const Home = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Current month',
      title: 'May',
      color: '#6fd2ff',
      content: 'Total Fee: 500 /n Fee Paid: 400 /n Total Due: 100',
      styles: {
        marginLeft: 20,
      },
    },
    {
      id: 2,
      text: 'Next month',
      title: 'June',
      color: '#c6b2f4',
      content: 'Total Fee: 500 /n Fee Paid: ---- /n Total Due: ----',
      styles: {
        marginLeft: 30,
      },
    },
    {
      id: 3,
      text: 'Upcoming',
      title: 'July',
      color: '#8caded',
      content: 'Total Fee: 500 /n Fee Paid: ---- /n Total Due: ----',
      styles: {
        marginLeft: 30,
      },
    },
  ]);
  
  const pieData = [
    {
      key: 'Total Fee',
      value: 6000,
      svg: {
        fill: '#9012fe',
      },
    },
    {
      key: 'Fee Paid',
      value: 5000,
      svg: {
        fill: '#a3bc31',
      },
    },
    {
      key: 'Total Due',
      value: 1000,
      svg: {
        fill: '#009044',
      },
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.bulletPointContainer}>
      <Text style={[styles.bulletPoint, { color: item.svg.fill, marginTop: item.key === 'Total Fee' ? 10 : 0 }]}>{'\u2022'}</Text>
      <Text style={[styles.bulletPointValue, { color: item.svg.fill, marginTop: item.key === 'Total Fee' ? 10 : 0 }]}>
        {item.key} : {item.value}
      </Text>
    </View>
  );

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <ScrollView>
      <Header />
      <Text style={styles.feeDetails}>Fee Details</Text>
      <View style={styles.container}>
        <View>
          <FlatCards cards={cards} />
        </View>
        <Text style={styles.sessionHistory}>Session History</Text>
          <View style={styles.pieChartContainer}>
              <PieChart style={{ width: 100, height: 100 }} data={pieData} />
              <FlatList style={styles.pieValues}
            data={pieData}
            keyExtractor={(item) => item.key}
            renderItem={renderItem}
          />
          <View style={styles.filterContainer}>
          <View style={styles.searchbyFilter}>
              <Text style={styles.searchbyFilterText}>Search by Filters</Text>
          </View>
          <View style={styles.filterBoxContainer}>
          <View style={styles.filterBox1}>
          <TouchableOpacity onPress={toggleExpanded} style={styles.button1}>
          <View style={styles.buttonRectangle}>
            <Text style={styles.buttonText}>{expanded ? 'Select Session ^ ' : 'Select Session v '}</Text>
          </View>
          </TouchableOpacity>
          {expanded && (
            <View style={styles.content}>
              {/* Content of the expanded list */}
              <Text style={styles.contentText}>2pm-3pm</Text>
              <Text style={styles.contentText}>2pm-3pm</Text>
              <Text style={styles.contentText}>2pm-3pm</Text>
              <Text style={styles.contentText}>2pm-3pm</Text>
              <Text style={styles.contentText}>2pm-3pm</Text>
            </View>
          )}
          </View>
          <TouchableOpacity style={styles.button2}>
          <View style={styles.buttonRectangle}>
            <Text style={styles.buttonText}>{expanded ? 'Select Month ^ ' : 'Select Month v '}</Text>
          </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.expandableCardsContainer}>
          <TouchableOpacity style={styles.expandableCard}>
            <View style={styles.expandableContainer}>
            <Text style={styles.expandableCardTitle}>M</Text>
            <Text style={styles.expandableCardTitleSmall}>ay</Text>
            <View style={styles.expandableCardFeePaid}>
            <Text style={styles.expandableCardFeePaidText}>                                                            Fee Paid - 500</Text>
            </View>
            </View>
            <View style={styles.expandableCardContent}>
            <Text style={styles.expandableCardText}>Click to view detailed breakup</Text>
            <Text style={styles.expandableCardStatus}>Status</Text>
            <View style={styles.buttonPaidRectangle}>
            <Text style={styles.buttonPaidText}>Paid</Text>
          </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.expandableCard}>
          <View style={styles.expandableContainer}>
            <Text style={styles.expandableCardTitle}>J</Text>
            <Text style={styles.expandableCardTitleSmall}>une</Text>
            <View style={styles.expandableCardFeePaid}>
            <Text style={styles.expandableCardFeePaidText}>                                                             Fee Paid - 500</Text>
            </View>
            </View>
            <View style={styles.expandableCardContent}>
            <Text style={styles.expandableCardText}>Click to view detailed breakup</Text>
            <Text style={styles.expandableCardStatus}>Status</Text>
            <View style={styles.buttonPaidRectangle}>
            <Text style={styles.buttonPaidText}>Paid</Text>
          </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.expandableCard}>
          <View style={styles.expandableContainer}>
            <Text style={styles.expandableCardTitle}>J</Text>
            <Text style={styles.expandableCardTitleSmall}>uly</Text>
            <View style={styles.expandableCardFeePaid}>
            <Text style={styles.expandableCardFeePaidText}>                                                               Fee Paid - 500</Text>
            </View>
            </View>
            <View style={styles.expandableCardContent}>
            <Text style={styles.expandableCardText}>Click to view detailed breakup</Text>
            <Text style={styles.expandableCardStatus}>Status</Text>
            <View style={styles.buttonPaidRectangle}>
            <Text style={styles.buttonPaidText}>Paid</Text>
          </View>
            </View>
          </TouchableOpacity>
        </View>
        </View>
        {/* <MyTabs/> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  feeDetails: {
    color: '#4784fe',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 30,
  },
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#07befe',
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  sessionHistory: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    // marginTop: 60,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  pieChartContainer: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  bulletPointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
  },
  bulletPoint: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bulletPointValue: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  searchbyFilter: {
    // flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:'center',
    marginRight: 24,
    marginTop: 0,
  },
  searchbyFilterText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'column',
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
    color: 'black',
    fontSize: 8,
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
  },
  expandableCardsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  expandableCard: {
    backgroundColor: '#f4f8fb',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  expandableCardTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  expandableCardContent: {
    // margintop: 5,
    padding: 0,
    flexDirection: 'row',
  },
  expandableCardText: {
    fontSize: 12,

  },
  expandableCardTitleSmall: {
    fontSize: 16,
    marginTop:12,
    alignSelf:'center',
    fontWeight: 'bold',
    color: 'black',
  },
  expandableContainer: {
    flexDirection: 'row',
  },
  expandableCardFeePaid: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // selfAlign: 'flex-end',
  },
  expandableCardFeePaidText: {
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
  },
  expandableCardStatus: {
    fontWeight: 'bold',
    marginLeft: 70,
  },
  buttonPaidRectangle: {
    marginLeft: 20,
    padding: 2,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#4784fe',
    borderRadius: 8,
  },
  buttonPaidText: {
    color: 'white',
  }
});

export default Home;