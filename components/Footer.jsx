import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All rights reserved by Little Lemon, 2025</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        backgroundColor:"#F4CE14",
        bottom:10,
        right: 0,
        left: 0,
        paddingVertical:5,
        alignItems:'center'
    },
    text:{
        fontSize:17,
        fontWeight:'bold'
    }
})