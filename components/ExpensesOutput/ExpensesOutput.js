import { View, StyleSheet } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({});
