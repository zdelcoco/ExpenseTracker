import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';

import Colors from '../constants/colors';

import ExpenseCard from '../components/ExpenseCard';
import SummaryCard from '../components/SummaryCard';
import NumberCard from '../components/NumberCard';

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
      <ExpenseCard title={"hello"} content={"content"}/>
      <SummaryCard content={"example summary"}/>
      <NumberCard title={"$45.55"} />
      <ExpenseCard title={"test"} content={"test"}>
        <NumberCard title={"$45.55"} />
      </ExpenseCard>
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
