import { Image, Text, View, ImageSourcePropType } from 'react-native';
import { colors } from '../../utils/colors';
import sizeHelper from '../../utils/Helpers';
import CustomText from '../CustomText';
import { fonts } from '../../utils/Fonts';

interface FavoriteGameCardProps {
  item?: any;
}

const TeamsCard: React.FC<FavoriteGameCardProps> = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: sizeHelper.calWp(30),
        alignItems: 'center',
      }}
    >
      <Image
        source={item.ClubLogo}
        style={{
          width: sizeHelper.calWp(100),
          height: sizeHelper.calWp(100),
          borderRadius: sizeHelper.calWp(15),
        }}
      />
      <View
        style={{
          gap: sizeHelper.calWp(5),
        }}
      >
        <CustomText
          text={item.ClubTitle}
          fontWeight={'600'}
          fontfam={fonts.medium}
          color={colors.white}
          size={24}
        />
        <CustomText text={item.ClubTeam} color="#9EABB8" size={22} />
      </View>
    </View>
  );
};
export default TeamsCard;
