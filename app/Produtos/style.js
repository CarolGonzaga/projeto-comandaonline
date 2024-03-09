import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    box: {
        borderColor: '#121A2C',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        alignItems: 'center'
    },
    pedidos: {
        width: '100%',
    },
    pedidoData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pedidoDataTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
    },
    scroll: {
        width: '100%',
    },
    containerBetween: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
      },
      header:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
      },

})