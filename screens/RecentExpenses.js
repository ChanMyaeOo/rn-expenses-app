import { useContext } from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../utils/date";
function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7daysAgo = getDateMinusDays(today, 7);
        return expense.date > date7daysAgo;
    });
    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod="Last 7 Days"
            fallBackText="There is no registered expenses for the last 7 days."
        />
    );
}

export default RecentExpenses;
