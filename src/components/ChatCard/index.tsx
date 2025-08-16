import { Image, StyleSheet, Text, View } from 'react-native';
import sizeHelper from '../../utils/Helpers';
import { fonts } from '../../utils/Fonts';
import { colors } from '../../utils/colors';
import CustomText from '../CustomText';

const ChatCard = ({ item, from, translation }: any) => {
  return (
    <View>
      <View style={{ gap: sizeHelper.calHp(10) }}>
        {!from ? (
          <View style={{ flexDirection: 'row', gap: sizeHelper.calWp(30) }}>
            <Image
              style={{
                width: sizeHelper.calWp(75),
                height: sizeHelper.calWp(75),
                borderRadius: sizeHelper.calWp(75),
                alignSelf: 'flex-end',
              }}
              source={item?.profile_img}
            />
            <View style={{ width: '84%', gap: sizeHelper.calHp(5) }}>
              <CustomText text={item?.name} size={22} color="#A3ABB2" />

              <View style={styles.leftContainer}>
                <View>
                  <Text
                    style={{
                      ...styles.leftText,
                      fontFamily: fonts.regular,

                      fontWeight: '500',
                    }}
                  >
                    {item?.message}
                  </Text>
                </View>

                {/* <Text style={from ? styles.rightTime : styles.leftTime}>
            {translation?.date}
          </Text> */}
              </View>
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', gap: sizeHelper.calWp(30) }}>
            <View style={{ width: '84%', gap: sizeHelper.calHp(5) }}>
              <CustomText
                text={item?.name}
                style={{ textAlign: 'right' }}
                size={22}
                color="#A3ABB2"
              />

              <View style={styles.rightContainer}>
                <View>
                  <Text
                    style={{
                      ...styles.rightText,
                      fontFamily: fonts.regular,

                      fontWeight: '500',
                    }}
                  >
                    {item?.message}
                  </Text>
                </View>

                {/* <Text style={from ? styles.rightTime : styles.leftTime}>
            {translation?.date}
          </Text> */}
              </View>
            </View>

            <Image
              style={{
                width: sizeHelper.calWp(75),
                height: sizeHelper.calWp(75),
                borderRadius: sizeHelper.calWp(75),
                alignSelf: 'flex-end',
              }}
              source={item?.profile_img}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default ChatCard;
const styles = StyleSheet.create({
  rightContainer: {
    backgroundColor: '#B2C9E5',
    borderRadius: sizeHelper.calWp(25),
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    minHeight: 30,
    paddingHorizontal: sizeHelper.calWp(30),
    paddingVertical: sizeHelper.calWp(25),
    minWidth: '30%',
    maxWidth: '100%',
  },
  leftContainer: {
    backgroundColor: '#2B3036',
    borderRadius: sizeHelper.calWp(25),
    minHeight: 30,
    paddingHorizontal: sizeHelper.calWp(30),
    paddingVertical: sizeHelper.calWp(25),
    minWidth: '30%',
    maxWidth: '100%',
  },
  rightText: {
    color: colors.primary,
    fontFamily: fonts.regular,
    fontWeight: '500',
    fontSize: sizeHelper.calHp(24),
    lineHeight: sizeHelper.calHp(30),
  },
  rightTime: {
    color: colors.primary,
    fontFamily: fonts.regular,
    fontWeight: '500',
    fontSize: sizeHelper.calHp(20),
    lineHeight: sizeHelper.calHp(30),
    textAlign: 'right',
  },

  leftText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontWeight: '500',
    fontSize: sizeHelper.calHp(24),
    lineHeight: sizeHelper.calHp(40),
  },
});
