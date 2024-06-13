import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function RecentExpensesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recent Expenses Screen!</Text>
        </View>
    );
}

export default RecentExpensesScreen;

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