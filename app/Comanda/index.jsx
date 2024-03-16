import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

import { styles } from "./style.js"
import Input from '../../components/Input';
import Button from '../../components/Button/index.jsx';
import { PedidoContext } from '../../context/PedidoContext.js';

export default function Comanda({navigation}) {
    
    const { user, logout } = useContext(AuthContext)
    const [ comanda, setComanda ] = useState('')
    const { loadComanda } = useContext(PedidoContext)

    function handleLogout(){
        logout()
        navigation.navigate("Login")
    }

    async function handleConfirm(){
        const resp = await fetch('http://localhost:3000/comandas?id=' + comanda)
        const data = await resp.json()
        const dadosComanda = data[0]
        loadComanda(dadosComanda)
        navigation.navigate('Produtos')
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
                <Input placeholder="cod. comanda" value={comanda} onChangeText={setComanda} />
                <Button onPress={handleConfirm}>Confirmar</Button>
            </View>

            <Text>Digite o código da comanda para iniciar um pedido</Text>

        </View>
    )
}