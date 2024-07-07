import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../store/redux/expenses';

import Colors from '../constants/colors';

function EditExpenseScreen({ route, navigation }) {
  const expenseId = route.params.expenseId;
  const selectedExpense = useSelector((state) =>
    state.expenses.expenses.find((expense) => expense.id === expenseId)
  );
  const dispatch = useDispatch();

  function deleteHandler() {    
    // todo -- find way to get out of the screen before it errors out due
    // to the expense being deleted (its trying to reference selectedExpense.title after its deleted)
    // navigation.navigate('AllExpenses');
    // dispatch(deleteExpense(selectedExpense.id));
    console.log('deleted');
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit {selectedExpense.title} Expense</Text>
      <Pressable onPress={deleteHandler}>
        <Ionicons
          style={styles.deleteIcon}
          name='trash-outline'
          size={48}
          color='red'
        />
      </Pressable>
    </View>
  );
}

export default EditExpenseScreen;

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
  deleteIcon: {
    marginTop: 16,
  },
});
