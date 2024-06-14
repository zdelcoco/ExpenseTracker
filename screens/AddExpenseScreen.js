import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function AddExpenseScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Add Expense Screen!</Text>
      <View style={styles.expenseFormContainer}>
        <Text>Expense Form</Text>
        <Text>Enter expense title</Text>
        <Text>Enter expense date</Text>
        <Text>Enter expense amount</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.cancelButtonContainer}>
          <Button
            style={styles.cancelButton}
            title='Cancel'
            onPress={() => {}}
          />
        </View>
        <View style={styles.addButtonContainer}>
          <Button style={styles.addButton} title='Add' onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

export default AddExpenseScreen;

const styles = StyleSheet.create({
  rootContainer: {
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
  buttonsContainer: {
    flexDirection: 'row',    
    justifyContent: 'space-between',
    marginTop: 16,
    width: '50%',
  },
  addButtonContainer: {
    backgroundColor: Colors.primary400,
    margin: 8,
    flex: 1,
    borderRadius: 6,
  },
  addButton: {
    color: Colors.neutral200,
  },
  cancelButtonContainer: {
    backgroundColor: Colors.primary400,
    margin: 8,
    flex: 1,
    borderRadius: 6,
  },
  cancelButton: {
    color: Colors.neutral200,
  },
});
