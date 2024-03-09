import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./style.js"
import Input from '../../components/Input';
import Button from '../../components/Button/index.jsx';

export default function Comanda({navigation}) {
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text>Olá,</Text>
                    <Text style={styles.title}>Carol Gonzaga</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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