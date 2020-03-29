import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default () => {
    const navigation = useNavigation();

    const navigateToDetail = () => {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerCount}> 0 Casos </Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>lorem bla bla</Text>

            <FlatList
                style={styles.incidentList}
                data={[1, 2, 3, 4, 5]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>
                            ONG:
                        </Text>
                        <Text style={styles.incidentValue}>
                            Avengers
                        </Text>

                        <Text style={styles.incidentProperty}>
                            Caso:
                        </Text>
                        <Text style={styles.incidentValue}>
                            lorem isum bla bla
                        </Text>

                        <Text style={styles.incidentProperty}>
                            Valor:
                        </Text>
                        <Text style={styles.incidentValue}>
                            R$ 500,00
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