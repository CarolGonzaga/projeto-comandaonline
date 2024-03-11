import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

import { styles } from "./style.js"
import Input from '../../components/Input';
import Button from '../../components/Button/index.jsx';

export default function Comanda({navigation}) {
    
    const { user, logout } = useContext(AuthContext)

    function handleLogout(){
        logout()
        navigation.navigate("Login")
    }

    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text>Olá,</Text>
                    <Text style={styles.title}>
                        { user.nome }
                    </Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                    <MaterialIcons name="exit-to-app" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <Input placeholder="cod. comanda" />
                <Button onPress={() => navigation.navigate('Produtos')}>Confirmar</Button>
            </View>

            <Text>Digite o código da comanda para iniciar um pedido</Text>

        </View>
    )
}