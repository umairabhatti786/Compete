import React, { useEffect } from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Fonts";
import CustomButton from "../../components/CustomBotton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CustomInput from "../../components/CustomInput";
type HostingScreenProps = {
    navigation: NativeStackNavigationProp<any>
}
const HomeScreen = (props: HostingScreenProps) => {
    type Datatype = {
        id: number;
        leagueImage: any;
        title: string
        startIn: string
    }
    type SpotType = {
        id: number;
        pic: any;
        name: string
        ranking: string
    }
    const Tournaments: Datatype[] = [
        {
            id: 1,
            leagueImage: images.premiere_league,
            title: "Premier League Showdown",
            startIn: "Start in 3 days",
        },
        {
            id: 2,
            leagueImage: images.championship_cup,
            title: "Champions Cup Clash",
            startIn: "Start in 1 weeks",
        },
        {
            id: 3,
            leagueImage: images.euro_league,
            title: "Euro League Face-Off",
            startIn: "Start in 2 weeks",
        }
    ]
    const Spotlight: SpotType[] = [
        {
            id: 1,
            pic: images.lions,
            name: "The Lions",
            ranking: "Top ranked team",
        },
        {
            id: 2,
            pic: images.eagles,
            name: "The Eagles",
            ranking: "Rising stars",
        },
        {
            id: 3,
            pic: images.wolves,
            name: "The Wolves",
            ranking: "Community favorites",
        }
    ]
    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden />
            <View style={{
                marginTop: sizeHelper.calHp(30),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "space-between",
                width: '56%',
                alignSelf: 'flex-end',
            }}>
                <CustomText
                    text={"Home"}
                    size={26}
                    color="white"
                    textAlign={"center"}
                />
                <Image
                    source={images.white_search}
                    style={{
                        width: sizeHelper.calWp(40),
                        height: sizeHelper.calWp(40),
                        alignSelf: 'flex-end',
                    }} />
            </View>
            <View style={{
                marginTop: sizeHelper.calHp(30),
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <Image source={images.stadium} />
                <View
                    style={{
                        gap: sizeHelper.calWp(70),
                        position: 'absolute',
                        bottom: sizeHelper.calWp(40)
                    }}>
                    <View
                        style={{
                            gap: sizeHelper.calWp(18)
                        }}
                    >
                        <CustomText
                            text={"Join the Ultimate Football Tournament"}
                            size={55}
                            color="white"
                            fontWeight={'700'}
                            lineHeight={sizeHelper.calWp(80)}
                        />
                        <CustomText
                            text={"Compete for glory and prizes in our biggest event of the year. Sign up now to secure your spot!"}
                            color="white"
                            lineHeight={sizeHelper.calWp(30)}
                        />
                    </View>
                    <CustomButton
                        bgColor="white"
                        textColor="black"
                        width={"38%"}
                        text={"Register Now"}
                        height={sizeHelper.calHp(75)}
                        fontSize={22}
                        borderRadius={sizeHelper.calWp(60)}
                        fontWeight="700"
                    />
                </View>
            </View>
            <CustomText
                text={"Upcoming Tournaments"}
                size={30}
                color="white"
                fontWeight={"700"}
                marginT={sizeHelper.calHp(50)}
            />
            <FlatList
                data={Tournaments}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                style={{
                    marginTop: sizeHelper.calHp(50)
                }}
                renderItem={({ item }) =>
                    <View>
                        <Image
                            source={item.leagueImage}
                            style={{
                                width: sizeHelper.calWp(350),
                                height: sizeHelper.calWp(200),
                                marginLeft: sizeHelper.calWp(20)
                            }} />
                        <View
                            style={{
                                width: sizeHelper.calWp(270),
                                marginLeft: sizeHelper.calWp(20),
                                marginTop: sizeHelper.calWp(20),
                                gap: sizeHelper.calWp(10)
                            }}>
                            <CustomText
                                text={item.title}
                                color="white"
                                size={22}
                                lineHeight={sizeHelper.calWp(35)}
                            />
                            <CustomText
                                text={item.startIn}
                                color="#9EABB8"
                                size={18}
                            />
                        </View>

                    </View>
                }
            />
            <CustomText
                text={"Spotlight Teams"}
                size={30}
                color="white"
                fontWeight={"700"}
                marginT={sizeHelper.calHp(70)}
            />
            <FlatList
                data={Spotlight}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                style={{
                    marginTop: sizeHelper.calHp(70),
                    marginBottom: sizeHelper.calHp(80)
                }}
                renderItem={({ item }) =>
                    <View 
                    style={{
                        alignItems:'center',
                    }}
                    >
                        <Image
                            source={item.pic}
                            style={{
                                width: sizeHelper.calWp(200),
                                height: sizeHelper.calWp(200),
                            }} />
                        <View
                            style={{
                                width: sizeHelper.calWp(270),
                                marginTop: sizeHelper.calWp(20),
                                gap: sizeHelper.calWp(10),
                                alignItems:'center'
                            }}>
                            <CustomText
                                text={item.name}
                                color="white"
                                size={22}
                                lineHeight={sizeHelper.calWp(35)}
                            />
                            <CustomText
                                text={item.ranking}
                                color="#9EABB8"
                                size={18}
                            />
                        </View>

                    </View>
                }
            />
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121417',
        padding: sizeHelper.calWp(36),
    },
})
export default HomeScreen;
