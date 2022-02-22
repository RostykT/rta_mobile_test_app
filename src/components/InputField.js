import * as React from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { View } from 'react-native';

const InputField = ({
    title, 
    type, 
    password=false,
    error,
    value,
    setValue,
}) => {

  return (
    <View>
        <TextInput
            label={title}
            value={value}
            onChangeText={setValue}
            mode={type}
            secureTextEntry={password}
            error={error}
        />
        {error && (<HelperText type="error">
            Incorrect Password or Email
        </HelperText>)}
        
    </View>
    
  );
};

export default InputField;