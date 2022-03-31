import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 30
    } as ViewStyle,
    header: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 40,
        color: colors.primary,
        paddingVertical: 10
    } as TextStyle,
    commentHeader: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.primary,
        paddingVertical: 30
    } as TextStyle,
    post: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    } as ViewStyle
});
