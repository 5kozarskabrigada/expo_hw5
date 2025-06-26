import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Intro1() {

    const router = useRouter();

    return (
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => router.push('/onboarding/intro2')}>
            <View style={styles.topSection}>
                <View style={styles.blueCorner} />
                <View style={styles.pinkArea}>
                    <Image
                        source={{ uri: 'https://source.unsplash.com/400x300/?shopping,girl' }}
                        style={styles.girlImage}
                    />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Hello</Text>
                <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

                <View style={styles.pagination}>
                    <View style={[styles.dot, styles.dotSelected]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#FADBE7' 
    },
    topSection: { 
        flex: 2, 
        position: 'relative' 
    },
    blueCorner: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 120,
        height: 120,
        backgroundColor: '#0097FF',
        zIndex: 1,
    },
    pinkArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    girlImage: { 
        width: 220, 
        height: 220, 
        borderRadius: 20 
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        alignItems: 'center',
    },
    title: { 
        fontSize: 26, 
        fontWeight: '700', 
        marginBottom: 10 
    },
    body: { 
        fontSize: 14, 
        color: '#666', 
        textAlign: 'center' 
    },
    pagination: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 20,
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
    },
    dotSelected: {
        backgroundColor: '#0097FF',
    },
});
