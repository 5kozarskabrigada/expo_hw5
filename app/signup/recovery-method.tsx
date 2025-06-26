import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RecoveryMethod() {
    const router = useRouter();
    const [method, setMethod] = useState<'sms' | 'email'>('sms');

    return (
        <View style={styles.container}>
            <View style={styles.blob} />
            <Image source={require('./avatar.jpg')} style={styles.avatar} />
            <Text style={styles.title}>Password Recovery</Text>
            <Text style={styles.subtitle}>How you would like to restore your password?</Text>

            <View style={styles.buttonsRow}>
                <TouchableOpacity
                    style={[styles.methodButton, method === 'sms' && styles.methodSelected]}
                    onPress={() => setMethod('sms')}
                >
                    <Text style={styles.methodText}>SMS ✔</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.methodButton, method === 'email' && styles.methodSelected]}
                    onPress={() => setMethod('email')}
                >
                    <Text style={styles.methodText}>Email</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/signup/verify-code')}>
                <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    blob: {
        position: 'absolute',
        top: -40,
        left: -60,
        width: 200,
        height: 180,
        borderRadius: 100,
        backgroundColor: '#0097FF'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 80
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 20
    },
    subtitle: {
        color: '#555',
        textAlign: 'center',
        marginTop: 10
    },
    buttonsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 30
    },
    methodButton: {
        borderWidth: 1,
        borderColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    methodSelected: {
        backgroundColor: '#007AFF'
    },
    methodText: {
        color: '#fff',
        fontWeight: '600'
    },
    nextButton: {
        marginTop: 40,
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 10
    },
    nextText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16
    },
    cancelText: {
        color: '#999',
        marginTop: 12
    }
});
  