import { useState } from 'react'
import { Users, TrendingUp, CreditCard, AlertCircle } from 'lucide-react'

interface Customer {
  id: string
  name: string
  email: string
  subscription: 'starter' | 'growth' | 'agency'
  status: 'active' | 'cancelled'
  joinDate: string
  mrr: number
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'overview' | 'customers' | 'revenue'>('overview')
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: '1',
      name: 'John\'s E-Commerce Store',
      email: 'john@example.com',
      subscription: 'growth',
      status: 'active',
      joinDate: '2026-01-15',
      mrr: 699
    },
    {
      id: '2',
      name: 'Fashion Boutique',
      email: 'fashion@example.com',
      subscription: 'starter',
      status: 'active',
      joinDate: '2026-02-01',
      mrr: 299
    },
    {
      id: '3',
      name: 'Tech Gadgets Co',
      email: 'tech@example.com',
      subscription: 'agency',
      status: 'active',
      joinDate: '2025-12-20',
      mrr: 1499
    }
  ])

  const stats = [
    { label: 'Total Customers', value: '3', icon: <Users size={24} />, color: 'text-accent-blue' },
    { label: 'MRR', value: '$2,497', icon: <CreditCard size={24} />, color: 'text-accent-green' },
    { label: 'Growth Rate', value: '+25%', icon: <TrendingUp size={24} />, color: 'text-primary-teal' },
    { label: 'Active Subscriptions', value: '3', icon: <AlertCircle size={24} />, color: 'text-primary-green' }
  ]

  return (
    <div className="bg-dark-bg min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-text-secondary">Manage customers, revenue, and platform metrics</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="card">
              <div className={`mb-4 ${stat.color}`}>{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border-color">
          {['overview', 'customers', 'revenue'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-3 font-medium capitalize border-b-2 transition ${
                activeTab === tab
                  ? 'border-accent-blue text-accent-blue'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-6">Recent Signups</h3>
              <div className="space-y-4">
                {customers.slice(0, 3).map(customer => (
                  <div key={customer.id} className="flex justify-between items-center pb-4 border-b border-border-color last:border-0">
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-text-secondary">{customer.email}</p>
                    </div>
                    <span className="text-sm font-medium text-accent-green">{customer.subscription}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-6">Revenue Breakdown</h3>
              <div className="space-y-4">
                {[
                  { tier: 'Starter', count: 1, revenue: 299 },
                  { tier: 'Growth', count: 1, revenue: 699 },
                  { tier: 'Agency', count: 1, revenue: 1499 }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.tier}</p>
                      <p className="text-sm text-text-secondary">{item.count} customer(s)</p>
                    </div>
                    <span className="font-bold text-accent-green">${item.revenue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'customers' && (
          <div className="card overflow-x-auto">
            <h3 className="text-xl font-bold mb-6">All Customers</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-color">
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 font-semibold">Plan</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">MRR</th>
                  <th className="text-left py-3 px-4 font-semibold">Joined</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => (
                  <tr key={customer.id} className="border-b border-border-color hover:bg-card-bg transition">
                    <td className="py-3 px-4">{customer.name}</td>
                    <td className="py-3 px-4 text-text-secondary">{customer.email}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-accent-blue/20 text-accent-blue">
                        {customer.subscription}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        customer.status === 'active'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold">${customer.mrr}</td>
                    <td className="py-3 px-4 text-text-secondary">{customer.joinDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'revenue' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-6">Monthly Revenue Trend</h3>
              <div className="space-y-4">
                {[
                  { month: 'January', revenue: 1200 },
                  { month: 'February', revenue: 1800 },
                  { month: 'March', revenue: 2497 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{item.month}</span>
                      <span className="font-bold text-accent-green">${item.revenue}</span>
                    </div>
                    <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary"
                        style={{ width: `${(item.revenue / 2500) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-text-secondary mb-2">Average Customer Lifetime Value</p>
                  <p className="text-3xl font-bold text-accent-green">$8,491</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-2">Churn Rate</p>
                  <p className="text-3xl font-bold text-accent-blue">0%</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-2">Customer Acquisition Cost</p>
                  <p className="text-3xl font-bold text-primary-teal">$150</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
