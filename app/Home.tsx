import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { SvgUri } from 'react-native-svg';
import LOGOSVG from "../assets/images/bolt2.jpg";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Tim from '../assets/images/tim.jpg';
import Brim from '../assets/images/brim.jpg';
import Steph from '../assets/images/steph.png';
import AD from '../assets/images/ADw.jpeg';
import AU from '../assets/images/AUp.jpeg';
import Ade from '../assets/images/ade6.png';
import Data from '../assets/images/data.jpeg'
import Phone from '../assets/images/phone.jpeg'
import Elect from '../assets/images/serv.jpeg'
import Tv from '../assets/images/Tvsub.jpeg'
import HD from '../assets/images/headlogo.jpeg'

export default function Home({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                height: screenHeight,
                width: screenWidth,
                backgroundColor: "#0C1115",


            }}>
            <StatusBar
                barStyle="light-content" // Light text (for dark backgrounds)

            />
            <View style={styles.nav}>
                <View style={styles.navLeft}>
                    <Image source={Ade} style={styles.navImg} />
                    <View>
                        <Text style={styles.navMain}>Hi, Ade</Text>
                        <Text style={styles.navBasic}>@dexcode01 <FontAwesome5 name={'copy'} solid /></Text>
                    </View>
                </View>
                <View style={styles.navRight}>
                    <Text style={styles.navIcon}>
                        <FontAwesome5 name={'vector-square'} size={24} solid />

                    </Text>
                </View>
            </View>
            <View style={styles.balanceBox}>
                <View style={styles.balanceLeft}>
                    <View style={styles.bImg}>
                    <Image source={HD} style={styles.balanceLeftImg} />

                    </View>
                    <Text style={styles.balanceAmount} >$23,454,344</Text>
                    <Text style={styles.balanceTitle}>Total Balance</Text>
                </View>
                <View style={styles.balanceRight}>
                    <Text style={styles.bRTitle}>Savings <FontAwesome5 name={'angle-down'} solid />
                    </Text>
                </View>
            </View>
            <View style={styles.SR}>
                <View style={styles.send}>
                    <Image source={AU}/>
                    <Text style={styles.srText} >Send</Text>
                </View>
                <View style={styles.recieve}>
                <Image/>
                <Image source={AD}/>
                    <Text style={styles.srText} >Receive</Text>

                </View>
            </View>
            <View style={styles.serviceBox} >
                <View style={styles.service}>
                    <View style={styles.serviceImgContainer}>
                    <Image style={styles.serviceImg} source={Phone} />
                    </View>
                    <Text style={styles.serviceBaisc}>Airtime</Text>
                </View>
                <View style={styles.service}>
                    <View style={styles.serviceImgContainer}>
                    <Image style={styles.serviceImg} source={Data} />
                    </View>
                    <Text style={styles.serviceBaisc}>Data</Text>
                </View>
                <View style={styles.service}>
                    <View style={styles.serviceImgContainer}>
                    <Image style={styles.serviceImg} source={Elect} />
                    </View>
                    <Text style={styles.serviceBaisc}>Electricity</Text>
                </View>
                <View style={styles.service}>
                    <View style={styles.serviceImgContainer}>
                    <Image style={styles.serviceImg} source={Tv} />
                    </View>
                    <Text style={styles.serviceBaisc}>Tv Sub</Text>
                </View>
            </View>
            <View style={styles.transactionContainer}>
                <View style={styles.transNav}>
                    <Text style={styles.tnavLeft}>Transaction</Text>
                    <Text style={styles.tnavRight}>View all</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.tBox}>
                    <View style={styles.transaction}>
                        <View style={styles.trans}>
                            <Image source={Tim} style={styles.tImg} />
                            <View>
                            <Text style={styles.tName}>Timx Design</Text>
                            <Text style={styles.tDate}>September 2, 2024</Text>
                            </View>
                          
                        </View>
                        <Text style={styles.tAmount}>+$50,000</Text>
                    </View>
                    <View style={styles.transaction}>
                        <View style={styles.trans}>
                            <Image source={Steph} style={styles.tImg} />
                            <View>
                            <Text style={styles.tName}>Crownz Design</Text>
                            <Text style={styles.tDate}>September 2, 2024</Text>
                            </View>
                          
                        </View>
                        <Text style={styles.tAmount}>+$120,450</Text>
                    </View>
                    <View style={styles.transaction}>
                        <View style={styles.trans}>
                            <Image source={Brim} style={styles.tImg} />
                            <View>
                            <Text style={styles.tName}>Braimo.kr8</Text>
                            <Text style={styles.tDate}>September 2, 2024</Text>
                            </View>
                          
                        </View>
                        <Text style={styles.tAmount}>+$100,000</Text>
                    </View>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
      
        marginTop: 30,
        width:"100%",
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row"

    },
    navLeft: {
    
        borderRadius: 10,
        marginLeft:20,
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row",
        gap:10,

    },
    navImg: {
        width: 40,
        height: 40,
    },
    navRight: {
        borderRadius: 10,
        marginRight:20,

    },
    navMain: {
        color: "white",
        fontSize:20,
        fontWeight:"300",
    },
    navBasic: {
        color: "white",
        backgroundColor:"#131D26",
        padding:4,
        borderRadius:10,
        fontSize:12,
    },
    navIcon: {
        color: "white"
    },
    balanceBox: {
        backgroundColor:"#131D26",
        display:"flex",
        justifyContent: "space-between",
        width:"90%",
        margin:20,
        padding:20,
        flexDirection:"row",
        borderRadius:20,
    },
    balanceLeft: {

    },
    bImg:{
        backgroundColor:"#1D90E9",
        padding:4,
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        borderRadius:400,
        width: 50,
        height:50,
        marginBottom:20,
        
    },
    balanceLeftImg: {
        borderRadius:400,
       width: 20,
       height:30,
      
    },
    balanceAmount: {
        color:"white",
        fontSize:40,

    },
    balanceTitle: {
        color:"white",
        fontSize:17,
        fontWeight:"300",

    },
    balanceRight: {
        backgroundColor:"#1B2B38",
        height:30,
        width:80,
        padding:4,
        borderRadius:10,

    },
    bRTitle: {
        color:"white",
        textAlign:"center",
      

    },
    SR: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row",
        width:"90%",
        margin:20,
        gap:10,
       

    },
    send: {
        backgroundColor:"#1B2B38",
        width:"48%",
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding:20,
        borderRadius:40,

    },
    recieve: {
        backgroundColor:"#131D26",
        width:"48%",
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding:20,
        borderRadius:40,

    },
   
    srText: {
     color:"white",
    }, 
    serviceImgContainer:{
        backgroundColor:"#1B2B38",
        width: 60,
        height:60,
        borderRadius:400,
        padding:10, 
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",

    },
    serviceBox: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width:"90%",
        backgroundColor:"#131D26",
        padding:20,
        borderRadius:10,
        
    },
    serviceImg:{
        width: 40,
        height:40,
        borderRadius:400,

    },
    service: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",

    },
    serviceBaisc: {
        color:"white"

    },
    transactionContainer: {
        margin:10,
        backgroundColor:"#131D26",
        width:"90%",
        borderRadius:20,
        padding:20,

    },
    transNav: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row",
        marginBottom:10
    },
    tnavLeft: {
        color:"white",
        fontSize:17,

    }, 
    tnavRight: {
        color:"#1E95F3",
        fontSize:15,
        textDecorationLine: "underline",
    },
    line: {
    width: "100%",
    height:1,
    backgroundColor:"#ccc"

    },
    tBox: {
   marginTop:10,
    },
    transaction: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row",
        marginTop:10,
    },
    trans:{
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row",
        gap:10,
    },
    tImg: {
        width:50,
        height:50,
        borderRadius:30,

    }, tName: {
        color:"white",
        fontSize:15,

    }, 
    tDate: {
        fontSize:11,
        color:"#ccc"


    },
    tAmount: {
        color:"white",
        fontSize:20,

    }



})