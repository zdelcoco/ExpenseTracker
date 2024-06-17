import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function EditExpenseScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Edit Expense Screen!</Text>
        </View>
    );
}

export default EditExpenseScreen

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
    }
});