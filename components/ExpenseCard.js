import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function ExpenseCard({ title, content, expenseAmount }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.textOuterContainer}>
        <View styles={styles.textInnerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
      <View style={styles.expenseOuterContainer}>
        <View style={styles.expenseInnerContainer}>
          <Text style={styles.expenseText}>{expenseAmount}</Text>
        </View>
      </View>
    </View>
  );
}

export default ExpenseCard;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.primary400,
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.primary900,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  textOuterContainer: {
    flex: 3,
  },
  textInnerContainer: {},
  title: {
    color: Colors.neutral200,
    fontSize: 18,
    fontWeight: 'bold',   
  },
  content: {
    color: Colors.neutral300,
    fontSize: 16,
    marginTop: 4,
  },
  expenseOuterContainer: {
    flex: 1,    
    height: '100%',
  },
  expenseInnerContainer: {
    backgroundColor: Colors.neutral300,
    flex: 1,
    borderRadius: 3,
    justifyContent: 'center',
  },
  expenseText: {
    color: Colors.primary600,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});
