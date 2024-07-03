import { View, StyleSheet } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'New Shoes',
    amount: 59.99,
    date: new Date(2024, 6, 28),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date(2024, 6, 26),
  },
  {
    id: 'e3',
    description: 'Bananas',
    amount: 5.99,
    date: new Date(2024, 6, 24),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 9.99,
    date: new Date(2024, 6, 1),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 12.99,
    date: new Date(2024, 6, 28),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
