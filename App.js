import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import EditExpenseScreen from './screens/EditExpenseScreen';

import Colors from './constants/colors';
import AddExpenseScreen from './screens/AddExpenseScreen';

export default function App() {
  const RootStack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function Home() {
    return (
      <Tab.Navigator
        id={'Home'}
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTintColor: Colors.neutral200,
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
    );
  }

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primary500,
              },
              headerTintColor: Colors.neutral200,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <RootStack.Screen
              name='Home'
              component={Home}
              options={{ headerShown: false }}
            />
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
              <RootStack.Screen
                name='AddExpense'
                component={AddExpenseScreen}
                options={{
                  title: 'Add Expense',
                  headerBackTitle: 'Back',
                  //headerBackTitle: ({ params }) => params ? params.backTitle : 'Back',
                }}
              />
              <RootStack.Screen
                name='EditExpense'
                component={EditExpenseScreen}
                options={{
                  title: 'Edit Expense',
                  headerBackTitle: 'Back',
                  //headerBackTitle: ({ params }) => params ? params.backTitle : 'Back',
                }}
              />
            </RootStack.Group>
          </RootStack.Navigator>
          <StatusBar style='light' />
        </NavigationContainer>
      </Provider>
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
