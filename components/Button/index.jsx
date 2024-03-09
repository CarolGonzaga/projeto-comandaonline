import { Text, TouchableOpacity } from "react-native";

import {styles} from "./style"

export default function Button({children, ...props }) {
    return (
        <TouchableOpacity style={styles.button} {...props}>
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

