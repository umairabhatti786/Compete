import React, { useState } from 'react';
import { ActivityIndicator, Button, Image, KeyboardAvoidingView, Modal, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import CustomButton from '../../components/CustomBotton';
import CustomText from '../CustomText';
import images from '../../assets/images';
import sizeHelper from '../../utils/Helpers';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

type visibleProps = {
    visible: boolean;
    onClose: () => void;
}
const CustomModal = ({ visible, onClose }: visibleProps) => {
    return (
        <Modal style={{ flex: 1, }} transparent={true} visible={visible} animationType="fade">
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <CustomText text={"Edit Price & Availability"} size={25} fontWeight={"700"} color={colors.primary} />
                    <View style={styles.CustomInputHandler}>
                        <View style={styles.CustomInput}>
                            <CustomText text={"Date"} size={25} fontWeight={'600'} />
                            <CustomText text={"25 May 2024"} size={25} fontWeight={'600'} />
                        </View>
                        <View style={styles.CustomInput}>
                            <CustomText text={"Time"} size={25} fontWeight={'600'} />
                            <CustomText text={"8 AM - 9 AM"} size={25} fontWeight={'600'} />
                        </View>
                        <View style={styles.CustomInput}>
                            <CustomText text={"Price"} size={25} fontWeight={'600'} />
                            <View style={{ flexDirection: 'row', width: '35%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Image source={images.minus} style={{ width: sizeHelper.calWp(40), height: sizeHelper.calWp(40) }} />
                                <CustomText text={"20"} size={25} fontWeight={'700'} />
                                <Image source={images.add} style={{ width: sizeHelper.calWp(40), height: sizeHelper.calWp(40) }} />
                            </View>
                        </View>
                        <CustomText text={"Court Availability"} size={25} fontWeight={"700"} color={colors.primary} marginT={sizeHelper.calHp(20)} />
                        <View style={styles.CustomInput}>
                            <CustomText text={"Court 1 - Available"} color='#0C9900' size={25} fontWeight={'600'} />
                            <View style={styles.refresh}>
                                <Image source={images.refresh} style={{ width: sizeHelper.calWp(40), height: sizeHelper.calWp(40) }} />
                            </View>
                        </View>
                        <View style={styles.CustomInput}>
                            <CustomText text={"Court 2 - Blocked"} color='#FF0000' size={25} fontWeight={'600'} />
                            <View style={styles.refresh}>
                                <Image source={images.refresh} style={{ width: sizeHelper.calWp(40), height: sizeHelper.calWp(40) }} />
                            </View>
                        </View>
                        <View style={styles.CustomInput3}>
                            <CustomText text={"Court 3 - Blocked "} color='#0B00FF' size={25} fontWeight={'600'} />
                            <CustomText text={"("} color='#0B00FF' size={25} fontWeight={'700'} />
                            <CustomText text={"WJFIN"}  size={25} fontWeight={'600'} />
                            <CustomText text={")"} color='#0B00FF' size={25} fontWeight={'700'} />
                        </View>
                    </View>
                    <View style={{alignItems:'center', justifyContent:'center'}}> 
                    <Image source={images.down_arrow} style={{ width: sizeHelper.calWp(80), height: sizeHelper.calWp(80) }} />
                    </View>
                    <View style={{gap:sizeHelper.calWp(25)}} >
                        <CustomButton text={"Confirm"} fontSize={25} fontWeight='700' onPress={onClose} />
                        <CustomButton text={"Cancel"} fontSize={25} textColor='black' fontWeight='700' bgColor={colors.inputwhite} borderWidth={1} borderColor={colors.primarybdc} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: sizeHelper.calWp(600),
        padding: sizeHelper.calWp(40),
        gap: sizeHelper.calWp(50),
        borderRadius: sizeHelper.calWp(15),
        backgroundColor: 'white',
    },
    CustomInputHandler: {
        gap: sizeHelper.calWp(25)
    },
    CustomInput: {
        width: "100%",
        padding: sizeHelper.calWp(30),
        backgroundColor: colors.inputwhite,
        borderWidth: 1,
        borderColor: colors.primarybdc,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: sizeHelper.calHp(20)
    },
    CustomInput3: {
        width: "100%",
        padding: sizeHelper.calWp(30),
        backgroundColor: colors.inputwhite,
        borderWidth: 1,
        borderColor: colors.primarybdc,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: sizeHelper.calHp(20)
    },
    refresh: {
        width: sizeHelper.calWp(60),
        height: sizeHelper.calWp(60),
        padding: sizeHelper.calWp(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.primarybdc,
        borderRadius: sizeHelper.calWp(15)
    }
})
export default CustomModal;
