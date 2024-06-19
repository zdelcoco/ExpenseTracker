import { createSlice } from '@reduxjs/toolkit';
import { EXPENSES } from '../../data/dummy-data';

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: EXPENSES,
    },
    reducers: {
        addExpense(state, action) {
            state.expenses.push(action.payload);
        },
        deleteExpense(state, action) {
            state.expenses = state.expenses.filter(
                (expense) => expense.id !== action.payload
            );
        },
    },
});

export const { addExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;