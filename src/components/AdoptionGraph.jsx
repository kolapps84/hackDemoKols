import React from "react";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";

/**
 * AdoptionGraph component for displaying detailed adoption metrics
 */
const AdoptionGraph = () => {
  // Sample data for adoption trends over time
  const monthlyAdoptionData = [
    {
      label: "January 2025",
      value: 1250,
      max: 2500,
      color: "#3b82f6",
      bgColor: "#dbeafe",
      valueLabel: "1,250 users",
    },
    {
      label: "February 2025",
      value: 1580,
      max: 2500,
      color: "#3b82f6",
      bgColor: "#dbeafe",
      valueLabel: "1,580 users",
    },
    {
      label: "March 2025",
      value: 1820,
      max: 2500,
      color: "#3b82f6",
      bgColor: "#dbeafe",
      valueLabel: "1,820 users",
    },
    {
      label: "April 2025",
      value: 2100,
      max: 2500,
      color: "#3b82f6",
      bgColor: "#dbeafe",
      valueLabel: "2,100 users",
    },
    {
      label: "May 2025",
      value: 2267,
      max: 2500,
      color: "#6366f1",
      bgColor: "#e0e7ff",
      valueLabel: "2,267 users",
    },
  ];

  const adoptionByApp = [
    {
      label: "Microsoft Teams",
      value: 1890,
      max: 2267,
      color: "#6d28d9",
      bgColor: "#f3e8ff",
      valueLabel: "1,890 users (83%)",
    },
    {
      label: "Outlook",
      value: 1654,
      max: 2267,
      color: "#2563eb",
      bgColor: "#dbeafe",
      valueLabel: "1,654 users (73%)",
    },
    {
      label: "Word",
      value: 1423,
      max: 2267,
      color: "#059669",
      bgColor: "#d1fae5",
      valueLabel: "1,423 users (63%)",
    },
    {
      label: "Excel",
      value: 1201,
      max: 2267,
      color: "#dc2626",
      bgColor: "#fee2e2",
      valueLabel: "1,201 users (53%)",
    },
    {
      label: "PowerPoint",
      value: 998,
      max: 2267,
      color: "#ea580c",
      bgColor: "#fed7aa",
      valueLabel: "998 users (44%)",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Adoption Rate */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Adoption Rate</h3>
          <div className="flex items-center justify-center">
            <div className="relative">
              <DonutChart percent={64} size={120} strokeWidth={12} color="#6366f1" bgColor="#e5e7eb">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">64%</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
              </DonutChart>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">2,267 out of 3,540 licensed users</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Weekly Active Users</span>
              <span className="font-semibold text-blue-700">2,156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Daily Active Users</span>
              <span className="font-semibold text-blue-700">1,892</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Sessions per User</span>
              <span className="font-semibold text-green-700">4.2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Growth Rate (Month over Month)</span>
              <span className="font-semibold text-green-700">+7.9%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Adoption Trend */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Adoption Trend</h3>
        <BarChart data={monthlyAdoptionData} height={20} />
        <div className="mt-4 text-sm text-gray-600">
          <p>Showing active Copilot users growth over the last 5 months</p>
        </div>
      </div>

      {/* Adoption by Application */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Adoption by Microsoft 365 Application</h3>
        <BarChart data={adoptionByApp} height={18} />
        <div className="mt-4 text-sm text-gray-600">
          <p>Percentage of total active Copilot users using each application</p>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-900 mb-4">📊 Key Insights</h3>
        <ul className="space-y-2 text-sm text-green-800">
          <li>• <strong>Strong growth momentum:</strong> 7.9% month-over-month increase in active users</li>
          <li>• <strong>Teams leads adoption:</strong> 83% of users are active in Microsoft Teams with Copilot</li>
          <li>• <strong>High engagement:</strong> Average of 4.2 sessions per user indicates strong user engagement</li>
          <li>• <strong>Opportunity in PowerPoint:</strong> Only 44% adoption rate suggests potential for growth</li>
        </ul>
      </div>
    </div>
  );
};

export default AdoptionGraph;