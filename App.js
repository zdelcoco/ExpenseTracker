import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import EditExpenseScreen from './screens/EditExpenseScreen';

import Colors from './constants/colors';

export default function App() {
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
            /*  this isn't working
            tabBarIconStyle: ({ focused }) => {

              console.log('focused', focused);
              return focused
                ? { backgroundColor: Colors.neutral100 }
                : { backgroundColor: Colors.accent400 };

                
            },*/
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
