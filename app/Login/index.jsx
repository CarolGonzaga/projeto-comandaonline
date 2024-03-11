import { Image, StatusBar, Text, View } from 'react-native'
import { styles } from './style.js'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext.js'

export default function Login({ navigation }) {

    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const { login } = useContext(AuthContext)

    function handleLogin() {
        if (login(email, senha) === "Ok") {
            navigation.navigate('Comanda')
        } else {
            setError("E-mail ou Senha inválidos!")
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/home.png')} />

            <Text>Sistema</Text>
            <Text style={styles.title}>Comanda</Text>

            <View>
                <Input placeholder="e-mail" value={email} onChangeText={setEmail} />
                <Input placeholder='senha' value={senha} onChangeText={setSenha} secureTextEntry />
                <Button onPress={handleLogin}>Entrar</Button>
            </View>
            
            <Text style={styles.error}>{error}</Text>

            <StatusBar style="auto" />
        </View>
    )
}