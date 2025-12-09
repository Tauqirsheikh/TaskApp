import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface CustomInputProps {
    placeholder: string;
    secureTextEntry?: boolean;
    value: string;
    setValue: (value: string) => void;
}

export default function CustomInput({
    placeholder,
    secureTextEntry,
    value,
    setValue
}: CustomInputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={setValue}
            placeholderTextColor="#aaa"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 25,
        marginVertical: 8,
        width: "90%",
        alignSelf: "center",
        fontSize: 16,
    },
});
