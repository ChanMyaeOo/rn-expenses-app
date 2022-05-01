import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import { formattedDate } from "../../utils/date";

function ExpenseItem({ id, description, date, amount, onPress }) {
    const navigation = useNavigation();
    const expensePressHandler = () => {
        navigation.navigate("ManageExpense", {
            expenseId: id,
        });
    };
    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>
                        {description}
                    </Text>
                    <Text style={styles.textBase}>{formattedDate(date)}</Text>
                </View>

                <View style={styles.amountWrap}>
                    <Text>${amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.primary500,
        padding: 12,
        marginVertical: 6,
        elevation: 2,
        marginTop: 20,
        borderRadius: 6,
    },
    amountWrap: {
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
        minWidth: 80,
        borderRadius: 6,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
        color: GlobalStyles.colors.primary100,
    },
    pressed: { opacity: 0.7 },
});
