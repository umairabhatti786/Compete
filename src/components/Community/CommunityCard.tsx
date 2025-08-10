import { Image, Text, View, ImageSourcePropType, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import sizeHelper from '../../utils/Helpers';
import CustomText from '../CustomText';
import { fonts } from '../../utils/Fonts';
import images from '../../assets/images';
import CustomButton from '../CustomBotton';

interface FavoriteGameCardProps {
  img?: ImageSourcePropType;
  title?: string;
}

const CommunityCard: React.FC<FavoriteGameCardProps> = ({ img, title }) => {
  return (
    <View style={styles.card}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: sizeHelper.calWp(20),
        gap: sizeHelper.calWp(15),
      }}
    >
      <Image
        source={images.clubpro}
        style={{
          width: sizeHelper.calWp(120),
          height: sizeHelper.calWp(120),
        }}
      />
      <View
        style={{
          gap: sizeHelper.calWp(10),
          alignSelf: 'center',
          alignItems: 'center',
        }}
      >
        <CustomText text={'Club Pro France'} size={24} />
        <View
          style={{
            flexDirection: 'row',
            gap: sizeHelper.calWp(14),
          }}
        >
          <Image
            source={images.users}
            style={{
              width: sizeHelper.calWp(30),
              height: sizeHelper.calWp(30),
            }}
          />
          <CustomText text={'7055 Members'} />
        </View>
      </View>
    </View>
    <CustomText
      text={'Founding organization of the IFC'}
      color={colors.primary + '60'}
      marginL={sizeHelper.calWp(20)}
      size={22}
    />
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: sizeHelper.calHp(10),
        marginLeft: sizeHelper.calWp(10),
        marginTop: sizeHelper.calHp(30),
        marginRight: sizeHelper.calWp(10),
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 0.5,
          borderColor: '#DDDEDF',
          width: '40%',
          borderRadius: sizeHelper.calWp(25),
          gap: sizeHelper.calWp(15),
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            backgroundColor: 'black',
            width: '40%',
            height: sizeHelper.calHp(70),

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={images.ea_sports}
            style={{
              width: sizeHelper.calWp(60),
              height: sizeHelper.calWp(65),
            }}
          />
        </View>
        <CustomText text={'EAFC 25'} size={22} />
      </View>
      <CustomButton
        text={'Join'}
        textColor="white"
        width={'25%'}
        borderRadius={8}
        fontWeight="500"
        fontfam={fonts.regular}
        fontSize={20}
        height={sizeHelper.calHp(60)}
      />
    </View>
  </View>
  );
};
export default CommunityCard;

const styles = StyleSheet.create({

    card: {
        width: '100%',
        padding: sizeHelper.calWp(23),
        borderRadius: sizeHelper.calWp(20),
        backgroundColor: 'white',
      },

    
   
  });
