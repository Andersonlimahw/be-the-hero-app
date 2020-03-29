import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';


import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    const navigateToDetail = () => {
        navigation.navigate('Detail');
    }
    const loadIncidents = async () => {
        try {
            const response = await api.get('incidents');
            setTotal(response.headers['x-total-count']);
            setIncidents(response.data);
        } catch (ex) {
            console.error('Erro ao carregar incidentes : ', ex);
        }
       
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de<Text style={styles.headerCount}> {total} </Text> casos
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>lorem bla bla</Text>

            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>
                            ONG:
                        </Text>
                        <Text style={styles.incidentValue}>
                            {incident.ong_name}
                        </Text>

                        <Text style={styles.incidentProperty}>
                            Caso:
                        </Text>
                        <Text style={styles.incidentValue}>
                            {incident.title}
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
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText}> ver mais detalhes</Text>
                            <Feather
                                name='arrow-right'
                                size={16}
                                color="#e02041"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
};