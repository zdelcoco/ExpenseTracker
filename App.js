import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import EditExpenseScreen from './screens/EditExpenseScreen';

import Colors from './constants/colors';

export default function App() {
  const RootStack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.neutral100,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarStyle: {
              backgroundColor: Colors.primary500,
            },
            tabBarActiveTintColor: Colors.accent400,
            tabBarInactiveTintColor: Colors.neutral500,
          }}
        >
          <Tab.Screen
            name='RecentExpenses'
            component={RecentExpensesScreen}
            options={{
              title: 'Recent Expenses',
              tabBarLabel: 'Recent Expenses',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='hourglass-outline' size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name='AllExpenses'
            component={AllExpensesScreen}
            options={{
              title: 'All Expenses',
              tabBarLabel: 'All Expenses',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='calendar-outline' size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
        <StatusBar style='light' />
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen
            name='EditExpense'
            component={EditExpenseScreen}
            options={{ title: 'Edit Expense' }}
          />
        </RootStack.Group>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary600,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
