import { useState } from 'react';
import { Search, Filter, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  email: string;
  date: string;
  items: number;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
}

export function Orders() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Mock orders data
  const [orders] = useState<Order[]>([
    {
      id: '#ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      date: 'Mar 20, 2026',
      items: 3,
      total: 89.97,
      status: 'Delivered',
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      date: 'Mar 19, 2026',
      items: 5,
      total: 156.45,
      status: 'Shipped',
    },
    {
      id: '#ORD-003',
      customer: 'Bob Johnson',
      email: 'bob@example.com',
      date: 'Mar 18, 2026',
      items: 2,
      total: 54.98,
      status: 'Processing',
    },
    {
      id: '#ORD-004',
      customer: 'Alice Williams',
      email: 'alice@example.com',
      date: 'Mar 17, 2026',
      items: 4,
      total: 124.96,
      status: 'Pending',
    },
    {
      id: '#ORD-005',
      customer: 'Charlie Brown',
      email: 'charlie@example.com',
      date: 'Mar 16, 2026',
      items: 1,
      total: 29.99,
      status: 'Cancelled',
    },
  ]);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Order['status']) => {
    const statusConfig = {
      Pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock },
      Processing: { bg: 'bg-blue-100', text: 'text-blue-800', icon: Clock },
      Shipped: { bg: 'bg-purple-100', text: 'text-purple-800', icon: CheckCircle },
      Delivered: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
      Cancelled: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle },
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

  const statusOptions = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl mb-2 text-black">Orders</h1>
          <p className="text-sm sm:text-base text-gray-600">View and manage all customer orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Orders</p>
            <p className="text-xl sm:text-2xl text-gray-900">{orders.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-xl sm:text-2xl text-yellow-600">
              {orders.filter(o => o.status === 'Pending').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Processing</p>
            <p className="text-xl sm:text-2xl text-blue-600">
              {orders.filter(o => o.status === 'Processing').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Delivered</p>
            <p className="text-xl sm:text-2xl text-green-600">
              {orders.filter(o => o.status === 'Delivered').length}
            </p>
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
                placeholder="Search by order ID, customer name, or email..."
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

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Date
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Items
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      No orders found
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <div className="text-xs sm:text-sm text-gray-900">{order.customer}</div>
                        <div className="text-xs text-gray-500 hidden xl:block">{order.email}</div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden md:table-cell">
                        {order.date}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden sm:table-cell">
                        {order.items}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        {getStatusBadge(order.status)}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm hidden lg:table-cell">
                        <button className="flex items-center gap-1 text-green-600 hover:text-green-700">
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </button>
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
