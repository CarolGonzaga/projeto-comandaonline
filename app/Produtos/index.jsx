import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import Button from '../../components/Button/index.jsx';
import CardProduto from '../../components/CardProduto/index.jsx';
import { styles } from './style.js';
import { PedidoContext } from '../../context/PedidoContext.js';

export default function Produtos({ navigation }) {

    const [ produtos, setProdutos ] = useState([])
    const { saldoComanda, total, saldoFinal, comanda } = useContext(PedidoContext)

    useEffect(() => {
        axios.get('http://localhost:3000/produtos')
            .then(function (response) {
                // manipula o sucesso da requisição
                console.log(response);
                setProdutos(response.data)
            })
    }, [])

    function CurrencyFormat({ value, currency }) {
        // Formata o valor da moeda
        const valorFormatado = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: currency || 'BRL' // Se a moeda não for fornecida, assume BRL (Real brasileiro)
        }).format(value);
      
        return valorFormatado;
      }


    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Comanda')}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <View style={styles.box}>
                    <Text>Comanda</Text>
                    <Text style={styles.title}>{comanda.id}</Text>
                </View>
            </View>

            <View style={styles.pedidos}>
                <Text style={styles.subtitle}>Pedido</Text>
                <View style={styles.pedidoData}>
                    <Text>Saldo da comanda</Text>
                    <Text>{CurrencyFormat({ value: saldoComanda })}</Text>
                </View>
                <View style={styles.pedidoData}>
                    <Text>Último item adicionado</Text>
                    <Text>{CurrencyFormat({ value: total })}</Text>
                </View>
                <View style={styles.pedidoDataTotal}>
                    <Text>Saldo final</Text>
                    <Text>{CurrencyFormat({ value: saldoFinal })}</Text>
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