import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function VerifyCode() {
    const router = useRouter();
    const [code, setCode] = useState(['', '', '', '']);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const updated = [...code];
        updated[index] = value;
        setCode(updated);
    };

    return (
        <View style={styles.container}>
            <View style={styles.blob} />
            <Text style={styles.title}>Password Recovery</Text>
            <Text style={styles.subtitle}>Enter 4-digits code we sent you on your phone number</Text>
            <Text style={styles.phone}>+98*******00</Text>

            <View style={styles.codeInputRow}>
                {code.map((digit, idx) => (
                    <TextInput
                        key={idx}
                        style={styles.codeBox}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={digit}
                        onChangeText={(val) => handleChange(idx, val)}
                    />
                ))}
            </View>

            <TouchableOpacity
                style={styles.sendBtn}
                onPress={() => router.push('/signup/reset-password')}
            >
                <Text style={styles.sendText}>Send Again</Text>
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
        paddingTop: 100 
    },
    blob: {
        position: 'absolute',
        top: -40,
        left: -60,
        width: 200,
        height: 180,
        borderRadius: 100,
        backgroundColor: '#0097FF',
    },
    title: { 
        fontSize: 22, 
        fontWeight: 'bold',
        marginBottom: 10 
    },

    subtitle: { 
        color: '#555', 
        textAlign: 'center', 
        paddingHorizontal: 30 
    },

    phone: { 
        marginTop: 8, 
        fontWeight: '600', 
        fontSize: 16 
    },

    codeInputRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 30,
    },
    codeBox: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
    },
    sendBtn: {
        backgroundColor: '#FF6AA2',
        marginTop: 40,
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 10,
    },
    sendText: { 
        color: 'white', 
        fontWeight: '600' 
    },
    cancelText: { 
        color: '#aaa', 
        marginTop: 20 },
});

