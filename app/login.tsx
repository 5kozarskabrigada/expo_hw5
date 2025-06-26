import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <Text style={styles.subText}>Good to see you back! ♥</Text>
            <TextInput style={styles.input} placeholder="Email" />

            <TouchableOpacity style={styles.button} onPress={() => router.push('/signup/password')}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 24,
        justifyContent: 'center'
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 10
    },
    subText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 14,
        marginBottom: 18,
        fontSize: 16
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    cancelText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 14
    }
});
  