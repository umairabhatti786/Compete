import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import images from '../../assets/images';
import sizeHelper from '../../utils/Helpers';
import CustomText from '../CustomText';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/Fonts';

const DropDown = ({
  data,
  value,
  placeholderColor,
  placeholder,
  dropWidth,
  onSelect,
  error,
  mainWidth,
  maxHeight,
  search,
  mainStyles,
  dropMaxWidth,
  dropLeftMargin,
  label,
}: any) => {
  const [open, setOpen] = useState(false);

  const renderRightIcon = () => (
    <View style={styles.iconStyle}>
      <Image
        style={{ width: '100%', height: '100%' }}
        source={images.up_down}
        resizeMode="contain"
      />
    </View>
  );
  return (
    <View style={{ width: mainWidth || '100%' }}>
      {label && (
        <View
          style={{
            marginBottom: sizeHelper.calHp(12),
          }}
        >
          <CustomText text={label} size={23} />
        </View>
      )}
      <Dropdown
        style={[
          {
            ...styles.dropdown,
            width: '100%',
            // backgroundColor: colors.input_back,
          },
          mainStyles, // This will ensure that the styles object is properly merged
        ]}
        containerStyle={{
          minHeight: 100,
          borderRadius: sizeHelper.calWp(20),
          overflow: 'hidden',
          width: dropWidth || '92%',
          maxWidth: dropMaxWidth,
          marginLeft: dropLeftMargin,
          borderWidth: 0,
          backgroundColor:colors.input_background
        }}
        placeholderStyle={{
          color: '#A3ABB2',
          fontSize: sizeHelper.calHp(23),
          fontFamily: fonts.regular,
          fontWeight: '500',
        }}
        selectedTextStyle={{
          fontSize: sizeHelper.calHp(23),
          color: colors.white,
          fontFamily: fonts.regular,
          fontWeight: '500',
        }}
        renderRightIcon={renderRightIcon}
        renderItem={item => {
          return (
            <View
              style={{
                height: sizeHelper.calHp(50),
                justifyContent: 'center',
                paddingHorizontal: sizeHelper.calWp(20),
                paddingTop: sizeHelper.calHp(10),
              }}
            >
              <CustomText
                text={item.label}
                color={colors.white}
                size={25}
                // style={{textAlign:""}}
              />
            </View>
          );
        }}
        data={data}
        maxHeight={maxHeight || 220}
        labelField="label"
        valueField="label"
        search={search}
        placeholder={placeholder || 'Type'}
        searchPlaceholder="Type"
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onChange={onSelect}
      />
    </View>
  );
};

export default DropDown;
const styles = StyleSheet.create({
  dropdown: {
    height: sizeHelper.calHp(80),
    paddingHorizontal: sizeHelper.calWp(25),
    borderRadius: sizeHelper.calWp(20),
    backgroundColor: colors.input_background,
  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    height: sizeHelper.calWp(35),
    width: sizeHelper.calWp(35),
  },
});
