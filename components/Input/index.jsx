import { TextInput } from "react-native"

import {styles} from "./style"

export default function Input(props){
    return (
        <TextInput style={styles.input} {...props} />
    )
}