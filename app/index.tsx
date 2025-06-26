import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/263/263115.png' }}
                style={styles.logo}
            />
            <Text style={styles.title}>Shoppe</Text>
            <Text style={styles.subtitle}>Beautiful eCommerce UI Kit for your online store</Text>

            <TouchableOpacity style={styles.button} onPress={() => router.push('/signup')}>
                <Text style={styles.buttonText}>Let's get started</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/login')}>
                <Text style={styles.linkText}>I already have an account →</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        backgroundColor: '#E5F1FF',
        padding: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222222',
        fontFamily: 'sans-serif',
    },
    subtitle: {
        fontSize: 14,
        color: '#777777',
        textAlign: 'center',
        marginVertical: 12,
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 30,
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    linkText: {
        marginTop: 20,
        fontSize: 14,
        color: '#999999',
    },
});