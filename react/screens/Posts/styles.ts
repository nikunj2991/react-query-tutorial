import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 10
    } as ViewStyle,
    wrapper: {
        flex: 1,
        paddingVertical: 30
    } as ViewStyle,
    item: {
        paddingVertical: 10,
        paddingHorizontal: 20
    } as ViewStyle,
    header: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.primary,
        paddingVertical: 10
    } as TextStyle,
    post: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    } as ViewStyle,
    postTitle: { 
        color: colors.white, 
        textTransform: 'capitalize' 
    } as TextStyle
});