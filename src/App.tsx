import ExpensesTable from "./ExpensesTable";
import React, {useEffect, useState} from "react";
import {Expense} from "./types/types";

const App: React.FC = () => {

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const retrieveExpenses = async () => {
        try {
            const response = await fetch("https://expenses-backend-mu.vercel.app/expenses", {
                headers: {
                    "Content-Type": "application/json",
                    Username: "kossai.sbai" // Replace with actual username
                }
            });
            if (!response.ok) {
                console.error('Error fetching expenses:', response.statusText);
                return []
            }
            const data = await response.json();
            setExpenses(data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    useEffect(() => {
        retrieveExpenses();
    }, []);

  return (
    <div id="template-text">
      <ExpensesTable expenses={expenses}/>
    </div>
  );
}

export default App;
