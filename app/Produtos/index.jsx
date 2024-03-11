import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Button from '../../components/Button/index.jsx';
import CardProduto from '../../components/CardProduto/index.jsx';
import { styles } from './style.js';

export default function Produtos({ navigation }) {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/produtos')
            .then(function (response) {
                // manipula o sucesso da requisição
                console.log(response);
                setProdutos(response.data)
            })
    }, [])


    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Comanda')}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <View style={styles.box}>
                    <Text>comanda</Text>
                    <Text style={styles.title}>2457</Text>
                </View>
            </View>

            <View style={styles.pedidos}>
                <Text style={styles.subtitle}>Pedido</Text>
                <View style={styles.pedidoData}>
                    <Text>Saldo da comanda</Text>
                    <Text>R$ 0,00</Text>
                </View>
                <View style={styles.pedidoData}>
                    <Text>Total do pedido</Text>
                    <Text>R$ +20,00</Text>
                </View>
                <View style={styles.pedidoDataTotal}>
                    <Text>Saldo final</Text>
                    <Text>R$ 149,00</Text>
                </View>
            </View>

            <Text style={styles.subtitle}>Produtos</Text>

            <ScrollView style={styles.scroll}>
                {produtos.map(produto => <CardProduto key={produto.id} produto={produto} />)}
            </ScrollView>

            <Button>Finalizar</Button>
        </View>

    )
}