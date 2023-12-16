import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import InicioScreen from '../screen/InicioScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import LoginScreen from '../screen/LoginScreen'; 
import RegistroScreen from '../screen/RegistroScreen'; 
import PerfilScreen from '../screen/PerfilScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InicioStack" component={MyTabs} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Inicio'>
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => (
            <FontAwesome name="registered" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarLabel: 'Welcome',
          tabBarIcon: () => (
            <FontAwesome name="registered" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Registro"
        component={RegistroScreen}
        options={{
          tabBarLabel: 'Registro',
          tabBarIcon: () => (
            <FontAwesome name="registered" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: () => (
            <MaterialIcons name="app-registration" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: 'perfil',
          tabBarIcon: () => (
            <MaterialIcons name="system-update" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
