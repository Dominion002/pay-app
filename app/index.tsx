import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { SvgUri } from 'react-native-svg';
import LOGOSVG from "../assets/images/bolt2.jpg";
export default function Index({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: screenHeight,
        width: screenWidth,
        backgroundColor: "#0C1115",

      }}
    >
       <StatusBar
                barStyle="light-content" // Light text (for dark backgrounds)

            />
    
        <View style={styles.nav}>
          <View style={styles.firstLoad}>
            <View style={styles.secondLoad}></View>
          </View>
        </View>
      <View>
     <Image source={LOGOSVG} style={styles.img} />
      </View>
      <View style={styles.details}>
        <Text style={styles.main}>
          Transact with Speed
        </Text>
        <Text style={styles.basic}>
          We handle your finance with every senses of urgerncy and piority
        </Text>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate("Home")}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {

 marginBottom:60,
  },
  firstLoad: {
    backgroundColor:"white",
     width:200,
     height:10,
     borderRadius:10,

  },
  secondLoad: {
     backgroundColor:"#2176B7",
     width:70,
     height:10,
     borderRadius:10,

  },
  img: {
    width:400,
    height:400,
    objectFit:"contain",
   

  },
  details: {
    display:"flex",
    justifyContent: "center",
    alignItems: "start",

  },
  main: {
    color: "white",
    fontSize:40,
    width:200,
    textAlign:"left",
    margin:10,
    fontWeight:"600",

  },
  basic: {
    color: "white",
    width:250,
    fontSize:16,
    textAlign:"left",
    marginLeft:10,
    fontWeight:"300"
  },
  button: {
    width:250,
    marginTop:50,
    borderRadius:30,
  
    padding:20,
    backgroundColor:"#1780D3"

  }, btnText:{
    color: "white",
    textAlign:"center",
    fontWeight:"500",

  }
})