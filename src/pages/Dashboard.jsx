import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  FiHome,
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiLogOut,
} from "react-icons/fi";

const monthlyData = [
  { month: "Jan", expense: 4500 },
  { month: "Feb", expense: 6200 },
  { month: "Mar", expense: 3800 },
  { month: "Apr", expense: 7500 },
  { month: "May", expense: 5200 },
  { month: "Jun", expense: 6800 },
];

const categoryData = [
  { name: "Food", value: 3000 },
  { name: "Travel", value: 2000 },
  { name: "Shopping", value: 4000 },
  { name: "Bills", value: 2500 },
  { name: "Other", value: 1500 },
];

const recentTransactions = [
  { title: "Salary", category: "Income", amount: 30000, type: "income" },
  { title: "Food", category: "Food", amount: 500, type: "expense" },
  { title: "Bus Travel", category: "Travel", amount: 800, type: "expense" },
  { title: "Shopping", category: "Shopping", amount: 1500, type: "expense" },
];

const COLORS = ["#667eea", "#764ba2", "#f59e0b", "#10b981", "#ef4444"];

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          💰 Expense Tracker
        </div>

        <nav>
          <a className="active">
            <FiHome />
            Dashboard
          </a>

          <a>
            <FiDollarSign />
            Transactions
          </a>

          <a>
            <FiTrendingUp />
            Income
          </a>

          <a>
            <FiTrendingDown />
            Expenses
          </a>
        </nav>

        <button className="logout-btn">
          <FiLogOut />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">

        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's your financial overview.</p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="summary-grid">

          <div className="summary-card">
            <div className="card-icon balance">
              <FiDollarSign />
            </div>
            <div>
              <p>Total Balance</p>
              <h2>₹25,000</h2>
            </div>
          </div>

          <div className="summary-card">
            <div className="card-icon income">
              <FiTrendingUp />
            </div>
            <div>
              <p>Total Income</p>
              <h2>₹40,000</h2>
            </div>
          </div>

          <div className="summary-card">
            <div className="card-icon expense">
              <FiTrendingDown />
            </div>
            <div>
              <p>Total Expense</p>
              <h2>₹15,000</h2>
            </div>
          </div>

        </div>

        {/* Charts */}
        <div className="charts-grid">

          <div className="chart-card">
            <div className="chart-header">
              <h3>Monthly Expenses</h3>
              <span>2026</span>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="expense"
                  fill="#667eea"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <h3>Expense by Category</h3>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Recent Transactions */}
        <div className="transactions-card">

          <div className="section-header">
            <h3>Recent Transactions</h3>
            <button>View All</button>
          </div>

          <div className="transaction-list">

            {recentTransactions.map((transaction, index) => (
              <div className="transaction-item" key={index}>

                <div className="transaction-info">
                  <div className={`transaction-icon ${transaction.type}`}>
                    {transaction.type === "income"
                      ? <FiTrendingUp />
                      : <FiTrendingDown />}
                  </div>

                  <div>
                    <h4>{transaction.title}</h4>
                    <p>{transaction.category}</p>
                  </div>
                </div>

                <strong className={transaction.type}>
                  {transaction.type === "income" ? "+" : "-"}
                  ₹{transaction.amount}
                </strong>

              </div>
            ))}

          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;