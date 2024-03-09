import { Image, StatusBar, Text, View } from 'react-native'
import { styles } from './style.js'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/home.png')} />
            <Text>Sistema</Text>
            <Text style={styles.title}>Comanda</Text>
            <Input placeholder="e-mail" />
            <Input placeholder='senha' secureTextEntry />
            <Button onPress={() => navigation.navigate('Comanda')}>Entrar</Button>
           
            <StatusBar style="auto" />
        </View>
    )
}