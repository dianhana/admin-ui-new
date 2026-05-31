import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "./CardGoal";
import CardUpcomingBill from "./CardUpcomingBill";
import CardRecentTransaction from "./CardRecentTransaction";
import CardStatistic from "./CardStatistic";
import CardExpenseBreakdown from "./CardExpenseBreakdown";
import { transactions, bills, expensesBreakdowns } from "../data";


function Dashboard() {
console.log(transactions);

  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">

        {/* Total Balance */}
        <div className="sm:col-span-4 ">
          <CardBalance />
        </div>

        {/* Goals */}
        <div className="sm:col-span-4">
          <CardGoal />
        </div>

        {/* Upcoming Bill */}
        <div className="sm:col-span-4">
          <CardUpcomingBill data={bills}/>
        </div>

        {/* Recent Transactions */}
        <div className="sm:col-span-4">
          <CardRecentTransaction data={transactions} />
        </div>

        {/* Statistics */}
        <div className="sm:col-span-8">
          <CardStatistic data={expensesBreakdowns} />
        </div>

        {/* Expenses Breakdown */}
        <div className="sm:col-span-8">
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;