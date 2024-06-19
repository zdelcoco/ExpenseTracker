import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import Colors from '../constants/colors';
import ExpenseCard from '../components/ExpenseCard';
import SummaryCard from '../components/SummaryCard';

function AllExpensesScreen({ navigation }) {
  expenses = useSelector((state) => state.expenses.expenses);

  function totalExpenses() {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const sortedExpenses = [...expenses].sort((a, b) => b.date.localeCompare(a.date));

  function renderExpenseItem(itemData) {
    function pressHandler() {
      navigation.navigate('EditExpense', {
        expenseId: itemData.item.id,
      });
    }

    return (
      <ExpenseCard
        title={itemData.item.title}
        content={itemData.item.date}
        expenseAmount={USDollar.format(itemData.item.amount)}
        onPress={pressHandler}
      />
    );
  }

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
      <SummaryCard
        content={'Total expenses'}
        summary={USDollar.format(totalExpenses())}
      />
      <FlatList
        data={sortedExpenses}
        renderItem={renderExpenseItem}
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
