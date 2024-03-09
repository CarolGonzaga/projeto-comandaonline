import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import Button from '../../components/Button/index.jsx';
import CardProduto from '../../components/CardProduto/index.jsx';
import { styles } from './style.js';

export default function Produtos({navigation}) {
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
                <CardProduto produto={produto1} />
                <CardProduto produto={produto2} />
                <CardProduto produto={produto3} />
                <CardProduto produto={produto4} />
            </ScrollView>


            <Button>Finalizar</Button>
        </View>

    )
}