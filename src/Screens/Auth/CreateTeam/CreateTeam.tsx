import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import images from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import sizeHelper from '../../../utils/Helpers';
import CustomButton from '../../../components/CustomBotton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/Fonts';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const { width } = Dimensions.get('window');

const CreateTeam = (props: NotificationsScreenProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Choose a logo',
      image: images.logo_one,
      image2: images.logo_two,
      image3: images.logo_three,
      image4: images.logo_four,
      image5: images.logo_five,
      image6: images.logo_six,
    },
    {
      id: 2,
      title: 'Choose a logo',
      image: images.logo_one,
      image2: images.logo_two,
      image3: images.logo_three,
      image4: images.logo_four,
      image5: images.logo_five,
      image6: images.logo_six,
    },
    {
      id: 3,
      title: 'Choose a logo',
      image: images.logo_one,
      image2: images.logo_two,
      image3: images.logo_three,
      image4: images.logo_four,
      image5: images.logo_five,
      image6: images.logo_six,
    },
  ];

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  return (
    <ScreenLayout style={{ backgroundColor: '#121417' }}>
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Create Team'}
        color={'white'}
        gap={1}
        fontWeight={'700'}
        onPress={() => props.navigation.goBack()}
      />

      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <Text
            key={index}
            style={[
              styles.dot,
              { color: activeIndex === index ? '#fff' : '#555' },
            ]}
          >
            •
          </Text>
        ))}
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map(item => (
          <View key={item.id}>
            <CustomText
              text={item.title}
              color={colors.white}
              size={28}
              fontWeight={"700"}
              fontfam={fonts.bold}
              marginB={sizeHelper.calHp(35)}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: sizeHelper.calHp(35),
              }}
            >
              <Image source={item.image} />
              <Image source={item.image2} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: sizeHelper.calHp(35),
              }}
            >
              <Image source={item.image3} />
              <Image source={item.image4} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: sizeHelper.calHp(35),
              }}
            >
              <Image source={item.image5} />
              <Image source={item.image6} />
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          marginBottom: sizeHelper.calHp(30),
        }}
      >
        <CustomButton
          text={'Next'}
          bgColor="white"
          textColor="black"
          fontWeight="700"
          fontSize={26}
          borderRadius={sizeHelper.calWp(50)}
          onPress={() => props.navigation.navigate('TeamMember')}
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: sizeHelper.calHp(20),
    marginBottom: sizeHelper.calHp(30),
  },
  dot: {
    fontSize: sizeHelper.calWp(60),
    marginHorizontal: 3,
  },
});

export default CreateTeam;
