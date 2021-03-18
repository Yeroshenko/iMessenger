import React, { FC, useState } from 'react'
import { Controller } from 'react-hook-form'

import { InputInnerProps, InputProps } from './types'
import { InputWrapper, TextInput } from './styles'

export const Input: FC<InputProps> = ({ control, name, defaultValue = '', ...props }) => {
  if (control && !name) {
    throw 'if you need to control this field using react-hook-form, pass property "name"'
  }

  if (name && !control) {
    throw 'if you need to control this field using react-hook-form, pass property "control". can be obtained from \'useForm\' hook'
  }

  return (
    <>
      {control && name ? (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ onChange, value }) => (
            <InputInner value={value} onChangeText={onChange} {...props} />
          )}
        />
      ) : (
        <InputInner {...props} />
      )}
    </>
  )
}

const InputInner: FC<InputInnerProps> = ({
  style,
  ref,
  value,
  autoFocus = false,
  keyboardType = 'default',
  placeholder,
  onChangeText,
  secureTextEntry = false
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)

  return (
    <InputWrapper style={style}>
      <TextInput
        isFocused={isFocused}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        ref={ref}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        value={value}
      />
    </InputWrapper>
  )
}
