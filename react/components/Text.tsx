import React from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    defaultText: {
        color: colors.primary,
        fontSize: 16
    } as TextStyle
});

type TextProps = {
    text: string,
    style?: TextStyle
}

export const Text = ({ text, style = {}}: TextProps) => {
    const textStyles = [styles.defaultText];
    textStyles.push(style);

    return <RNText style={textStyles}>{text}</RNText>;
};
