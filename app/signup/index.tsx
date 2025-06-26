import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarCircle}>
                    <Text style={styles.cameraIcon}>📷</Text>
                </View>
            </View>

            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />

            <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
                <Text style={styles.buttonText}>Done</Text>
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
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#222',
        textAlign: 'center',
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    cameraIcon: {
        fontSize: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 14,
        marginBottom: 16,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 12,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    cancelText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 14,
    },
});
  