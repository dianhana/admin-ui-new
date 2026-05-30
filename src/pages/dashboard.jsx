import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";

function Dashboard() {
  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 gap-6">

        {/* Total Balance */}
        <div className="sm:col-span-4">
          <Card
            title="Total Balance"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos."
          />
        </div>

        {/* Goals */}
        <div className="sm:col-span-4">
          <Card
            title="Goals"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos."
          />
        </div>

        {/* Upcoming Bill */}
        <div className="sm:col-span-4">
          <Card
            title="Upcoming Bill"
            link="/bill"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos."
          />
        </div>

        {/* Recent Transactions */}
        <div className="sm:col-span-4">
          <Card
            title="Recent Transactions"
            link="/transactions"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos."
          />
        </div>

        {/* Statistics */}
        <div className="sm:col-span-8">
          <Card
            title="Statistics"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos."
          />
        </div>

        {/* Expenses Breakdown */}
        <div className="sm:col-span-8">
          <Card
            title="Expenses Breakdown"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos."
          />
        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;