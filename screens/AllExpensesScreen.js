import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';

import Colors from '../constants/colors';

import ExpenseCard from '../components/ExpenseCard';
import SummaryCard from '../components/SummaryCard';

function AllExpensesScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name='add-outline'
          size={28}
          color={Colors.neutral200}
          style={{ marginRight: 16 }}
          onPress={() => navigation.navigate('AddExpense')}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Expenses Screen!</Text>
      <Button
        title='Edit Expenses'
        onPress={() => navigation.navigate('EditExpense', { backTitle: 'All' })}
      />
      <SummaryCard content={"example summary"} summary={'$456.34'}/>
      <ExpenseCard title={"hello"} content={"content"} expenseAmount={'45.96'}/>
      <ExpenseCard title={"hello"} content={"content"} expenseAmount={'45.96'}/>
      <ExpenseCard title={"hello"} content={"content"} expenseAmount={'45.96'}/>
      
    
    </View>
  );
}

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary600,
  },
  text: {
    color: Colors.accent500,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
