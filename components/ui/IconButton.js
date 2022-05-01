import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ icon, color, size, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.iconWrap}>
                <Ionicons name={icon} color={color} size={size} />
            </View>
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    pressed: { opacity: 0.7 },
    iconWrap: {
        justifyContent: "center",
        marginHorizontal: 20,
    },
});
