import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    }, 
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 48
    }, 
    headerText: {
        fontSize: 15, 
        color: '#737380'
    },
    headerCount: {
        fontWeight: 'bold'
    },
    incident: {
        padding: 24, 
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    }, 
    incidentProperty: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#41414d', 
        marginTop: 24, 
    }, 
    incidentValue: {
        marginTop: 8,
        fontSize: 16,
        color: '#737380'
    }, 

    contactBox: {
        padding: 24, 
        borderRadius: 8,
        backgroundColor: '#fff',
    }, 
    contactTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    }, 
    contactDescription: {
        marginTop: 16,
        fontSize: 16,
        color: '#737380'
    }, 
    actions: {
        marginTop: 16, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    action: {
        backgroundColor: '#E02041', 
        borderRadius: 8, 
        height: 50,
        width: '48%', 
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    actionText: {
        color: '#fff'
    }
});