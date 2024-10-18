import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native'
import { theme } from '@/constants/theme'
import { hp, wp } from '@/helpers/common'
import Icon from '@/assets/icons'

const CustomInput = (props) => {
  const [ showPassword, setShowPassword ] = useState(false)
  return (
    <View style={[styles.container, props.containerStyle && props.containerStyle]}>
      {
        props.icon && props.icon
      }
      <TextInput
        style={{flex:1}}
        placeholderTextColor={theme.colors.textLight}
        ref={props.inputRef && props.inputRef}
        {...props}
        secureTextEntry={props.title === "Password" && !showPassword}
        autoCapitalize="none"
      />
      {props.title === "Password" && (
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          {!showPassword
          ?
          <Icon name="eye" size={26} />
          :
          <Icon name="eyeSlash" size={26} />}
        </Pressable>
      )}
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.dark,
    borderRadius: theme.radius.xxl,
    borderCurve: 'continuous',
    paddingHorizontal: 18,
    gap: 12
  },
})