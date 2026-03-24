import { motion } from "motion/react";
import { User, Award, Target, Calendar, Settings, LogOut, ChevronRight } from "lucide-react";

interface ProfileProps {
  onLogout: () => void;
}

export function Profile({ onLogout }: ProfileProps) {
  const achievements = [
    { title: "First Steps", description: "Completed 10 questions", icon: "🎯" },
    { title: "Week Warrior", description: "7 day streak", icon: "🔥" },
    { title: "Knowledge Seeker", description: "50 questions answered", icon: "📚" },
  ];

  const menuItems = [
    { label: "Settings", icon: Settings },
    { label: "Achievements", icon: Award },
    { label: "Statistics", icon: Target },
    { label: "Activity", icon: Calendar },
  ];

  return (
    <div className="h-full w-full overflow-y-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="p-6 pb-24">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-sm mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-gray-900 mb-1">Guest User</h2>
              <p className="text-gray-500">Learning enthusiast</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">42</div>
              <div className="text-xs text-gray-500">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">5</div>
              <div className="text-xs text-gray-500">Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">78%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="text-gray-900 mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{achievement.title}</div>
                  <div className="text-sm text-gray-500">{achievement.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6"
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="w-full flex items-center justify-between p-4 border-b border-gray-100 last:border-0 active:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.button>
            );
          })}
        </motion.div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full bg-red-50 text-red-600 rounded-2xl p-4 flex items-center justify-center gap-2 active:scale-98 transition-transform"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5" />
          <span className="font-semibold">Log Out</span>
        </motion.button>
      </div>
    </div>
  );
}
