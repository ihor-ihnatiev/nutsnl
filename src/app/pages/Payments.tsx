import { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Clock, DollarSign } from 'lucide-react';

interface Payment {
  id: string;
  orderId: string;
  customer: string;
  email: string;
  date: string;
  amount: number;
  method: 'Credit Card' | 'PayPal' | 'Debit Card' | 'Bank Transfer';
  status: 'Completed' | 'Pending' | 'Failed' | 'Refunded';
}

export function Payments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Mock payments data
  const [payments] = useState<Payment[]>([
    {
      id: '#PAY-001',
      orderId: '#ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      date: 'Mar 20, 2026',
      amount: 89.97,
      method: 'Credit Card',
      status: 'Completed',
    },
    {
      id: '#PAY-002',
      orderId: '#ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      date: 'Mar 19, 2026',
      amount: 156.45,
      method: 'PayPal',
      status: 'Completed',
    },
    {
      id: '#PAY-003',
      orderId: '#ORD-003',
      customer: 'Bob Johnson',
      email: 'bob@example.com',
      date: 'Mar 18, 2026',
      amount: 54.98,
      method: 'Debit Card',
      status: 'Pending',
    },
    {
      id: '#PAY-004',
      orderId: '#ORD-004',
      customer: 'Alice Williams',
      email: 'alice@example.com',
      date: 'Mar 17, 2026',
      amount: 124.96,
      method: 'Credit Card',
      status: 'Completed',
    },
    {
      id: '#PAY-005',
      orderId: '#ORD-005',
      customer: 'Charlie Brown',
      email: 'charlie@example.com',
      date: 'Mar 16, 2026',
      amount: 29.99,
      method: 'Bank Transfer',
      status: 'Failed',
    },
    {
      id: '#PAY-006',
      orderId: '#ORD-006',
      customer: 'David Miller',
      email: 'david@example.com',
      date: 'Mar 15, 2026',
      amount: 199.99,
      method: 'PayPal',
      status: 'Refunded',
    },
  ]);

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || payment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Payment['status']) => {
    const statusConfig = {
      Completed: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
      Pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock },
      Failed: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle },
      Refunded: { bg: 'bg-gray-100', text: 'text-gray-800', icon: DollarSign },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs ${config.bg} ${config.text}`}>
        <Icon className="w-3 h-3" />
        {status}
      </span>
    );
  };

  const statusOptions = ['All', 'Completed', 'Pending', 'Failed', 'Refunded'];

  const totalRevenue = payments
    .filter(p => p.status === 'Completed')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl mb-2 text-black">Payment History</h1>
          <p className="text-sm sm:text-base text-gray-600">Track and manage all payment transactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Payments</p>
            <p className="text-xl sm:text-2xl text-gray-900">{payments.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Completed</p>
            <p className="text-xl sm:text-2xl text-green-600">
              {payments.filter(p => p.status === 'Completed').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-xl sm:text-2xl text-yellow-600">
              {payments.filter(p => p.status === 'Pending').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Revenue</p>
            <p className="text-xl sm:text-2xl text-green-600">${totalRevenue.toFixed(2)}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search by payment ID, order ID, customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-9 sm:pl-10 pr-8 sm:pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white text-sm sm:text-base"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status === 'All' ? 'All Status' : status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Payment ID
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Order ID
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Date
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Method
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPayments.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      No payments found
                    </td>
                  </tr>
                ) : (
                  filteredPayments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                        {payment.id}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden sm:table-cell">
                        {payment.orderId}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <div className="text-xs sm:text-sm text-gray-900">{payment.customer}</div>
                        <div className="text-xs text-gray-500 hidden xl:block">{payment.email}</div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden md:table-cell">
                        {payment.date}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                        ${payment.amount.toFixed(2)}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden lg:table-cell">
                        {payment.method}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        {getStatusBadge(payment.status)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
