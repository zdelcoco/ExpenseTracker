import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';

import Colors from '../constants/colors';

import ExpenseCard from '../components/ExpenseCard';
import SummaryCard from '../components/SummaryCard';

import { EXPENSES } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';

function AllExpensesScreen({ navigation }) {
  function totalExpenses() {
    return EXPENSES.reduce((acc, expense) => acc + expense.amount, 0);
  }

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

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
      <SummaryCard
        content={'Total expenses'}
        summary={USDollar.format(totalExpenses())}
      />
      <FlatList
        data={EXPENSES.sort((a, b) => b.date.localeCompare(a.date))}
        renderItem={({ item }) => (
          <ExpenseCard
            title={item.title}
            content={item.date}
            expenseAmount={USDollar.format(item.amount)}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.expenseList}
        contentContainerStyle={styles.expenseListContainer}
      />
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
  expenseListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseList: {
    width: '100%',
  },
});
