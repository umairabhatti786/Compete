import { StyleProp, TextStyle, TouchableOpacityProps, View, ViewStyle } from "react-native"

export type TextType = {
    color?: string,
    size?: number,
    text?: any,
    style?: StyleProp<TextStyle>,
    fontWeight?:any,
    lineHeight?: number,
    fontfam?: string,
    textAlign?: any,
    marginT?: any,
    marginR?: any,
    marginB?: any,
    marginL?: any,
    letterSpacing?: number,
    bg?: string,
}

export type ButtonType={
    text?:any,
    width?:any,
    height?:any,
    borderRadius?:number,
    bgColor?:string,
    textColor?:string,
    borderColor?:string,
    notRequiredShadow?:string,
    disable?:string,
    fontWeight?:string,
    shadowColor?:string,
    marginTop?:any,
    fontSize?:number,
    borderWidth?:number,
    alignSelf?:string,
    padding?:string,
    position?:string,
    top?:number,
    bottom?:number,
    marginbottom?:any,
    shadowOffset?:number,
    marginLeft?:number,
    onPress?:()=>void,
  style?: any;
  children?:any
  fontfam?:string
}
export type InputType={
    placeholder?:string,
    keyboard?:string,
    isPassword?:boolean,
    props?:any,
    isCenter?:boolean,
    value?:string,
    onChangeText?:(text:string)=>void,
    onShowPassword?:()=>void,
    editable?:any,
    color?:string,
    fd?:any,
    maxLength?:number,
    leftImage?:any,
    SecondrightImage?:any,
    rightImage?:any,
    imgWidth?:any,
    imgHeigth?:any,
    width?:any,
    ml?:any,
    mT?:any,
    marginLeft?:any,
    fontWeight?:any,
    bg?:string,
    align?:string,
    bdc?:string,
    Size?:number,
    bw?:number,
    style?:any,
    txalign?:string,
    justifyContent?:string,
    textContentType?:string,
    paddingHorizontal?:any
    height?:any
    mli?:any
    marginb?:any
    alignIt?:string
    activeOpacity:number
}