import Comanda from './app/Comanda';
import Login from './app/Login';
import Produtos from './app/Produtos';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import { PedidoProvider } from './context/PedidoContext';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <PedidoProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Produtos" component={Produtos} />
            <Stack.Screen name="Comanda" component={Comanda} />
          </Stack.Navigator>
        </PedidoProvider>
      </AuthProvider>
    </NavigationContainer>
  );

}



