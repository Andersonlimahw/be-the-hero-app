import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default () => {
    const navigation = useNavigation();

    const navigatBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    <Text style={styles.headerCount}> Be the hero</Text>
                </Text>
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
                        onPress={() => { }}
                        style={styles.action}
                    >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.action}
                    >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};