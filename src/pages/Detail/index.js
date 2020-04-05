import React from 'react';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    
    const message = `Olá, ${incident.ong_name} estou entrando em contato para ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pr-BR',{style: 'currency',currency: 'BRL'}).format(incident.value)}.`;
    const phone = incident.ong_whatsapp;

    const navigatBack = () => {
        navigation.goBack();
    }

    const sendEmail = () => {
        MailComposer.composeAsync({
            subject: 'Heróis do caso: Cadelinha atropelada', 
            recipients: [`${incident.ong_email}`], 
            body: message
        });
    }

    const sendWhastapp = () => {
        Linking.openURL(`whatsapp://send?phone${phone}&text=${message}`);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity
                    onPress={navigatBack}
                >
                    <Feather
                        name='arrow-left'
                        size={28}
                        color='#E02041'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentPropert, { marginTop: 0}]}>
                    ONG:
                </Text>
                <Text style={styles.incidentValue}>
                    {incident.ong_name} de {incident.ong_city}, {incident.onguf}
                </Text>

                <Text style={styles.incidentProperty}>
                    Caso:
                </Text>
                <Text style={styles.incidentValue}>
                    {incident.description}
                </Text>

                <Text style={styles.incidentProperty}>
                    Valor:
                </Text>
                <Text style={styles.incidentValue}>
                {Intl.NumberFormat('pr-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    })
                    .format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.contactTitle}>
                     Salve o dia!
                </Text>
                <Text style={styles.contactTitle}>
                     Seja o herói desse caso.
                </Text>

                <Text style={styles.contactDescription}>
                     Entre em contato:
                </Text>

                <View style={styles.actions}>
                    <TouchableOpacity
                        onPress={sendWhastapp}
                        style={styles.action}
                    >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={sendEmail}
                        style={styles.action}
                    >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};