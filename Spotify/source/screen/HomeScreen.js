import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, } from 'react-native';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PlaylistCard from '../components/PlaylistCard';
import { LinearGradient } from 'expo-linear-gradient';



const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.deedveiw}>
                <View style={styles.subContainer}>
                    <Header />
                    <View style={styles.container}>
                        <View style={styles.veiw1}>
                            <View style={styles.zuragveiw}>
                                <Image source={require("../albumCovers/billie.jpg")} style={{ height: 60, width: 60 }}></Image>
                                <Text style={styles.text5}>Billie Eilish Mix</Text>
                            </View>
                            <View style={styles.zuragveiw}>
                                <Image source={require("../albumCovers/flowerboi.jpg")} style={{ height: 60, width: 60 }}></Image>
                                <Text style={styles.text5}>Hip Hop Mix</Text>
                            </View>
                            <View style={styles.zuragveiw}>
                                <Image source={require("../albumCovers/kendrick.jpg")} style={{ height: 60, width: 60 }}></Image>
                                <Text style={styles.text5}>Kendrick Mix</Text>
                            </View>
                            <View style={styles.zuragveiw}>
                                <Image source={require("../albumCovers/coldplay.jpg")} style={{ height: 60, width: 60, justifyContents: 'space-around' }}></Image>
                                <Text style={styles.text5}>Coldplay Mix</Text>
                            </View>
                            <View style={styles.zuragveiw}>
                                <Image source={require("../albumCovers/igorigor.jpg")} style={{ height: 60, width: 60 }}></Image>
                                <Text style={styles.text5}>Tyler Mix</Text>
                            </View>
                            <View style={styles.zuragveiw}>
                                <Image source={require("../albumCovers/pasd.jpg")} style={{ height: 60, width: 60 }}></Image>
                                <Text style={styles.text5}>Nirvana Mix</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.text2}>Your top mixes</Text>
                </View>


                <ScrollView horizontal={true} style={styles.dundveiw}>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/1.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/2.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/3.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                         <Image source={require("../albumcover2/4.jpg")} style={{ height: 160, width: 160,  }}></Image>
                         <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/5.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/6.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/7.jpg")} style={{ height: 160, width: 160,}}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.text2}>Jump back in</Text>
                </View>

                <ScrollView horizontal={true} style={styles.dundveiw}>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/10.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Kendrick lamar,Joji and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/11.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Kendrick lamar,Joji and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/12.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Kendrick lamar,Joji and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                         <Image source={require("../albumcover2/7.jpg")} style={{ height: 160, width: 160,  }}></Image>
                         <Text style={styles.text3}>Kendrick lamar,Joji and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/8.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Kendrick lamar,Joji and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/9.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Kendrick lamar,Joji and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/12.jpg")} style={{ height: 160, width: 160,}}></Image>
                        <Text style={styles.text3}>Kendrick lamar,Joji and other artist...</Text>
                    </View>
                </ScrollView>
                <View>
                    <Text style={styles.text2}>Discover Picks For You</Text>
                </View>

                <ScrollView horizontal={true} style={styles.dundveiw}>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/7.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Travis scott, Kayne West and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/8.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Travis scott, Kayne West and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/6.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Travis scott, Kayne West and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                         <Image source={require("../albumcover2/5.jpg")} style={{ height: 160, width: 160,  }}></Image>
                         <Text style={styles.text3}>Travis scott, Kayne West and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/4.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Travis scott, Kayne West and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/3.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Travis scott, Kayne West and other artist...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/2.jpg")} style={{ height: 160, width: 160,}}></Image>
                        <Text style={styles.text3}>Travis scott, Kayne West and other artist...</Text>
                    </View>
                </ScrollView>
                    <View>
                    <Text style={styles.text2}>Last Played...</Text>
                </View>

                <ScrollView horizontal={true} style={styles.dundveiw}>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/2.jpg")} style={{ height: 100, width: 100,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/4.jpg")} style={{ height: 100, width: 100,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/6.jpg")} style={{ height: 100, width: 100,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                         <Image source={require("../albumcover2/8.jpg")} style={{ height: 100, width: 100,  }}></Image>
                         <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/10.jpg")} style={{ height: 100, width: 100,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/12.jpg")} style={{ height: 100, width: 100,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/9.jpg")} style={{ height: 100, width: 100,}}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                </ScrollView>
                <View>
                    <Text style={styles.text2}>Made For You</Text>
                </View>

                <ScrollView horizontal={true} style={styles.dundveiw}>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/5.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/7.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/9.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                         <Image source={require("../albumcover2/11.jpg")} style={{ height: 160, width: 160,  }}></Image>
                         <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/3.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/1.jpg")} style={{ height: 160, width: 160,  }}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumcover2/4.jpg")} style={{ height: 160, width: 160,}}></Image>
                        <Text style={styles.text3}>Orion Sun,Thuy,Tory,Lanez and more...</Text>
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.text2}>Your Loved Artist</Text>
                </View>

                <ScrollView horizontal={true} style={styles.dundveiw}>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumCover3/kend.jpg")} style={{ width:160,height:160,borderRadius: 80, }}></Image>
                        <Text style={styles.text4}>Kendrick Lamar</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumCover3/dua.jpg")} style={{ width:160,height:160,borderRadius: 80, }}></Image>
                        <Text style={styles.text4}> Dua Lipa</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumCover3/joji.jpg")} style={{ width:160,height:160,borderRadius: 80, }}></Image>
                        <Text style={styles.text4}>Joji</Text>
                    </View>
                    <View style={styles.zurag2}>
                         <Image source={require("../albumCover3/kend2.jpg")} style={{ width:160,height:160,borderRadius: 80, }}></Image>
                         <Text style={styles.text4}>Kdot</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumCover3/kurt.jpg")} style={{ width: 160,height:160,borderRadius: 80, }}></Image>
                        <Text style={styles.text4}>Kurt Kobain</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumCover3/tyler.jpg")} style={{ width:160,height:160,borderRadius: 80, }}></Image>
                        <Text style={styles.text4}>Tyler the greator</Text>
                    </View>
                    <View style={styles.zurag2}>
                        <Image source={require("../albumCover3/wkk.jpg")} style={{ height: 160, width: 160, borderRadius: 80, }}></Image>
                        <Text style={styles.text4}>Weeknd</Text>
                    </View>
                </ScrollView>

            </ScrollView>
        </SafeAreaView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "black",
    },

    subContainer: {
        paddingRight: 15,
        paddingLeft: 15,
    },
    deedveiw: {
        backgroundColor: "black"
    },
    zuragveiw: {
        flex: 1,
        minWidth: 170,
        maxWidth: 210,
        maxHeight: 60,
        backgroundColor: "rgba(51,51,51,0.7)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 4,
        overflow: 'hidden',
        marginRight: 8,
        marginBottom: 8,
    },
    textCont: {
        textAlign: "center",
        width: "55%"
    },
    text: {
        color: "white",
        flex: 1,
        fontSize: 15,

    },
    text2: {
        color: "white",
        fontSize: 23,
        fontWeight: "bold",
        justifyContent: "flex-start",

    },
    veiw1: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        alignItems: "center",
        maxHeight: 210,
    },
    text1: {
        color: "white",
        fontSize: 22,
        fontWeight: "normal",
        marginBottom: 20,
        textAlign: 'center',
    },
    dundveiw: {
        flexDirection: "row",
        
    },
    zurag2:{
        flex: 1,
        overflow:'hidden',
        minHeight:220,
        maxHeight:220,
        maxWidth:160,
        marginRight:20,
    },
    text3:{
        color:"gray",
        marginTop:4,
        fontWeight:"800"

    },
    text4:{
        color:"gray",
        marginTop:1,
        fontWeight:"800",
        textAlign: 'center',
    
    },
    text5:{
        color:"white",
        fontWeight:"800",
        flex:1,
        fontSize:12,
        
    
    }


})