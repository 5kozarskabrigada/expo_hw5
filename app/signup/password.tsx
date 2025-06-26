import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PasswordEntry() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.blob} />
            <Image source={require('./avatar.jpg')} style={styles.avatar} />
            <Text style={styles.greeting}>Hello, Romina!!</Text>
            <Text style={styles.instruction}>Type your password</Text>

            <View style={styles.passwordBoxes}>
                {[1, 2, 3, 4].map((_, idx) => (
                    <View key={idx} style={styles.box} />
                ))}
            </View>
            <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/signup/recovery-method')}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.notYou}>
                <Text style={styles.notYouText}>Not you? →</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 80
    },
    blob: {
        position: 'absolute',
        top: -50,
        right: -50,
        width: 200,
        height: 200,
        backgroundColor: '#007AFF',
        borderRadius: 100
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 20
    },
    greeting: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20
    },
    instruction: {
        color: '#666',
        marginTop: 6
    },
    passwordBoxes: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24
    },
    box: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc'
    },
    notYou: {
        marginTop: 30
    },
    notYouText: {
        color: '#007AFF'
    },
    continueButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    continueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    }
});
  