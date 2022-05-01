import { View, StyleSheet, Text } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod, fallBackText }) {
    let content = <Text style={styles.fallBackText}>{fallBackText}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />;
    }
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
        </View>
    );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    fallBackText: {
        alignItems: "center",
        fontSize: 17,
        color: "white",
        marginTop: 25,
    },
});
