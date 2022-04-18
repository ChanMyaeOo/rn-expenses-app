import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A Book",
        amount: 14.99,
        date: new Date("2021-11-25"),
    },
    {
        id: "e2",
        description: "Some fruits",
        amount: 12,
        date: new Date("2021-11-26"),
    },
    {
        id: "e3",
        description: "Hat",
        amount: 10,
        date: new Date("2021-11-27"),
    },
    {
        id: "e4",
        description: "Mouse & Keyboard",
        amount: 30.88,
        date: new Date("2021-12-03"),
    },
    {
        id: "e5",
        description: "Earphone",
        amount: 25,
        date: new Date("2021-12-12"),
    },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary
                expenses={DUMMY_EXPENSES}
                periodName={expensesPeriod}
            />
            <ExpensesList expenses={DUMMY_EXPENSES} />
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
});
