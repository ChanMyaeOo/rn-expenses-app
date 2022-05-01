import { useContext } from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    return (
        <ExpensesOutput
            expenses={expensesCtx.expenses}
            expensesPeriod="Total"
            fallBackText="There is no registered expenses found!"
        />
    );
}

export default AllExpenses;
