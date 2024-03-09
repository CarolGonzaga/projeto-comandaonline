import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function CardProduto({ produto }) {

    return (
        <View style={styles.pedidos}>

            <View style={styles.cardProduto}>

                <Image style={styles.thumb} source={produto.imagePath} />

                <View style={styles.produtoData}>
                    <Text>{produto.nome}</Text>
                    <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
                </View>

                <View style={styles.spinner}>
                    <TouchableOpacity >
                        <Text style={styles.spinnerMinus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.spinnerValue}>1</Text>
                    <TouchableOpacity >
                        <Text style={styles.spinnerPlus}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}