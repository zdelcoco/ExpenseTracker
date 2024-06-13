import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function AllExpensesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>All Expenses Screen!</Text>
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
    }
});