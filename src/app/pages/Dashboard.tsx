import { TrendingUp, ShoppingBag, DollarSign, Package, Activity, Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Dashboard() {
  const stats = [
    {
      title: 'Total Orders',
      value: '24',
      change: '+12%',
      icon: ShoppingBag,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Total Spent',
      value: '€1,248',
      change: '+8%',
      icon: DollarSign,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Active Products',
      value: '156',
      change: '+5%',
      icon: Package,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Health Score',
      value: '8.5/10',
      change: '+0.3',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
    },
  ];

  const recentOrders = [
    {
      id: '#ORD-001',
      date: 'Mar 18, 2026',
      items: 3,
      total: 89.97,
      status: 'Delivered',
    },
    {
      id: '#ORD-002',
      date: 'Mar 15, 2026',
      items: 5,
      total: 156.45,
      status: 'Delivered',
    },
    {
      id: '#ORD-003',
      date: 'Mar 12, 2026',
      items: 2,
      total: 54.98,
      status: 'In Transit',
    },
    {
      id: '#ORD-004',
      date: 'Mar 08, 2026',
      items: 4,
      total: 124.96,
      status: 'Delivered',
    },
  ];

  const nutritionGoals = [
    { name: 'Protein', current: 145, target: 150, unit: 'g', color: 'bg-blue-500' },
    { name: 'Calories', current: 1850, target: 2000, unit: 'kcal', color: 'bg-orange-500' },
    { name: 'Carbs', current: 220, target: 250, unit: 'g', color: 'bg-green-500' },
    { name: 'Water', current: 2.3, target: 3, unit: 'L', color: 'bg-cyan-500' },
  ];

  const topProducts = [
    { name: 'Whey Protein Powder', orders: 12, revenue: '€599.88' },
    { name: 'Organic Almonds', orders: 8, revenue: '€127.92' },
    { name: 'Wild Salmon Fillet', orders: 6, revenue: '€149.94' },
    { name: 'Greek Yogurt Bowl', orders: 5, revenue: '€44.95' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl mb-2 text-black">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600">Welcome back! Here's your nutrition overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs sm:text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm text-gray-600 mb-1">{stat.title}</h3>
                <p className="text-xl sm:text-2xl text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 sm:mb-8">
          <Link
            to="/dashboard/product-list"
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-1">Product List</h3>
                <p className="text-xs sm:text-sm text-gray-600">View and manage all products</p>
              </div>
            </div>
          </Link>

          <Link
            to="/dashboard/add-product"
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-1">Add New Product</h3>
                <p className="text-xs sm:text-sm text-gray-600">Create and add products to inventory</p>
              </div>
            </div>
          </Link>

          <Link
            to="/dashboard/manage-orders"
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-1">Manage Orders</h3>
                <p className="text-xs sm:text-sm text-gray-600">View and process customer orders</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Nutrition Goals */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl text-gray-900">Today's Nutrition Goals</h2>
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            <div className="space-y-4 sm:space-y-6">
              {nutritionGoals.map((goal, index) => {
                const percentage = (goal.current / goal.target) * 100;
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-700">{goal.name}</span>
                      <span className="text-xs sm:text-sm text-gray-600">
                        {goal.current} / {goal.target} {goal.unit}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${goal.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 rounded-lg">
              <p className="text-xs sm:text-sm text-green-800">
                <strong>Great progress!</strong> You're on track to meet most of your nutrition goals today.
              </p>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl text-gray-900">Top Products</h2>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-900 mb-1 truncate">{product.name}</p>
                    <p className="text-xs text-gray-600">{product.orders} orders</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-900 ml-2">{product.revenue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl text-gray-900">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                      {order.date}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                      {order.items}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      €{order.total.toFixed(2)}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}