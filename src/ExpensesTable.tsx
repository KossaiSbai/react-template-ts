import React from 'react';
import '../public/styles/expenses-table.css';
import { Expense } from './types/types';
import {formatDate, toTitleCase} from "./utils/utils";

type ExpenseTableProps = {
    expenses: Expense[];
};

const ExpensesTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
    return (
        <div className="wrapper">
            <div className="header">
                <h1 className="title">Expenses</h1>
                <hr className="divider" />
            </div>
            <table className="styledTable">
                <thead>
                <tr className="styledTr">
                    <th className="styledTh">Date</th>
                    <th className="styledTh">Merchant</th>
                    <th className="styledTh">Amount</th>
                    <th className="styledTh">Category</th>
                    <th className="styledTh">Description</th>
                    <th className="styledTh">Status</th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense, index) => (
                    <tr key={index} className="styledTr">
                        <td className="styledTd">{formatDate(expense.date)}</td>
                        <td className="styledTd">{expense.merchant}</td>
                        <td className="styledTd">£{expense.amount}</td>
                        <td className="styledTd">{toTitleCase(expense.category)}</td>
                        <td className="styledTd">{expense.description}</td>
                        <td className="styledTd">{expense.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpensesTable;
