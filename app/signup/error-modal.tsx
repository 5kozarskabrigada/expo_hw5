import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function ErrorModal() {
    const [visible, setVisible] = useState(true);
    const router = useRouter();

    const handleOkay = () => {
        setVisible(false);
        router.push('/onboarding/intro1');
    };
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.icon}>❗</Text>
                    </View>

                    <Text style={styles.messageMain}>You reached out maximum amount of attempts.</Text>
                    <Text style={styles.messageSub}>Please, try later.</Text>

                    <TouchableOpacity style={styles.okButton} onPress={handleOkay}>
                        <Text style={styles.okText}>Okay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
    },
    iconWrapper: {
        backgroundColor: '#FFE3EC',
        borderRadius: 50,
        padding: 10,
        marginBottom: 16,
    },
    icon: { fontSize: 28, color: '#FF5C8D' },
    messageMain: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 8,
    },
    messageSub: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    okButton: {
        backgroundColor: '#0097FF',
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 10,
    },
    okText: { color: 'white', fontWeight: '600', fontSize: 16 },
});