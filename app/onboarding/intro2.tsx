import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Intro2() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://source.unsplash.com/400x300/?shopping,girls' }}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.headline}>Ready?</Text>
                <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
                    <Text style={styles.buttonText}>Let's Start</Text>
                </TouchableOpacity>

                <View style={styles.pagination}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={[styles.dot, styles.selected]} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FADBE7'
    },
    image: {
        width: '100%',
        height: '55%'
    },
    content: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        padding: 30
    },
    headline: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10
    },
    body: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#0097FF',
        paddingHorizontal: 50,
        paddingVertical: 14,
        borderRadius: 12,
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600'
    },
    pagination: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 30
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#ccc',
        borderRadius: 5
    },
    selected: {
        backgroundColor: '#0097FF'
    }
});
  