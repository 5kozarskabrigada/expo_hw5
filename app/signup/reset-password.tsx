import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function ResetPassword() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSave = () => {
        if (password !== repeatPassword) {
            alert("Passwords don't match");
            return;
        }
        router.push('/signup/error-modal');
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerBlob} />

            <View style={styles.avatar} />
            <Text style={styles.title}>Setup New Password</Text>
            <Text style={styles.subtitle}>Please, setup a new password for your account</Text>

            <TextInput
                placeholder="New Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />

            <TextInput
                placeholder="Repeat Password"
                secureTextEntry
                value={repeatPassword}
                onChangeText={setRepeatPassword}
                style={styles.input}
            />

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                <Text style={styles.saveText}>Save</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 80,
        paddingHorizontal: 25
    },
    headerBlob: {
        position: 'absolute',
        top: -60,
        left: -100,
        width: 250,
        height: 200,
        backgroundColor: '#0097FF',
        borderBottomRightRadius: 140,
        borderBottomLeftRadius: 80
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#FFC1DA',
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginVertical: 10
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginVertical: 10
    },
    saveBtn: {
        width: '100%',
        backgroundColor: '#0097FF',
        padding: 14,
        borderRadius: 10,
        marginTop: 20
    },
    saveText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    cancelText: {
        color: '#888',
        marginTop: 16
    }
});
  