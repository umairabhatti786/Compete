import { Image, Text, View, ImageSourcePropType } from 'react-native';
import { colors } from '../../utils/colors';
import sizeHelper from '../../utils/Helpers';
import CustomText from '../CustomText';
import { fonts } from '../../utils/Fonts';

interface FavoriteGameCardProps {
  img: ImageSourcePropType;
  title?: string;
}

const FavoriteGameCard: React.FC<FavoriteGameCardProps> = ({ img, title }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#DDDEDF',
        borderRadius: sizeHelper.calWp(20),
        minWidth: sizeHelper.calWp(180),
        maxWidth: sizeHelper.calWp(450),
        backgroundColor: colors.white,
        overflow: 'hidden',
      }}
    >
      <Image
        source={img}
        resizeMode="cover"
        style={{
          width: '100%',
          height: sizeHelper.calHp(100),
        }}
      />
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          borderBottomLeftRadius: sizeHelper.calWp(25),
          borderBottomRightRadius: sizeHelper.calWp(25),
          padding: sizeHelper.calWp(5),
          paddingHorizontal: sizeHelper.calWp(25),
          // width: sizeHelper.calWp(200),
        }}
      >
        <CustomText text={title} fontWeight={'600'} fontfam={fonts.medium} />
      </View>
    </View>
  );
};
export default FavoriteGameCard;
