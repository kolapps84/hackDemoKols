
import DonutChart from "./components/DonutChart";
import BarChart from "./components/BarChart";
import InfoCard from "./components/InfoCard";

const CopilotDashboard = () => {
  return (
    <div className="bg-[#f6f8fa] min-h-screen p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Microsoft 365 Copilot dashboard</h1>
        <div className="flex items-center space-x-8 border-b border-gray-200">
          <button className="py-2 px-4 border-b-2 border-blue-600 text-blue-700 font-medium">Readiness</button>
          <button className="py-2 px-4 text-gray-500">Adoption</button>
          <button className="py-2 px-4 text-gray-500">Impact</button>
          <button className="py-2 px-4 text-gray-500">Learning</button>
        </div>
      </div>
      {/* Main Card */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
        {/* Donut Chart + Steps */}
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col items-center justify-center border-r border-gray-100 pr-8">
            <div className="mb-2 font-medium">Copilot adoption rate</div>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <DonutChart percent={64} size={128} strokeWidth={10} color="#6366f1" bgColor="#e5e7eb">
                  <span className="text-2xl font-bold text-blue-700">64%</span>
                </DonutChart>
              </div>
            </div>
            <div className="flex justify-center mt-4 text-xs text-gray-500">
              <div className="flex items-center mr-4"><span className="w-3 h-3 bg-blue-700 rounded-full mr-1"></span>Active Copilot users</div>
              <div className="flex items-center"><span className="w-3 h-3 bg-gray-300 rounded-full mr-1"></span>Copilot licensed employees</div>
            </div>
          </div>
          <div className="flex-1 pl-8">
            <div className="mb-2 font-medium">Copilot activation steps</div>
            <BarChart
              data={[
                {
                  label: "Total Microsoft 365 licenses",
                  value: 7250,
                  max: 7250,
                  color: "#2563eb",
                  bgColor: "#f1f5f9",
                  valueLabel: "7,250",
                },
                {
                  label: "Total Copilot licenses",
                  value: 4660,
                  max: 7250,
                  color: "#3b82f6",
                  bgColor: "#dbeafe",
                  valueLabel: "4,660",
                },
                {
                  label: "Copilot licenses assigned",
                  value: 2518,
                  max: 7250,
                  color: "#60a5fa",
                  bgColor: "#e0f2fe",
                  valueLabel: "2,518",
                },
                {
                  label: "Active Copilot users",
                  value: 2267,
                  max: 7250,
                  color: "#93c5fd",
                  bgColor: "#f0f9ff",
                  valueLabel: "2,267",
                },
              ]}
              height={12}
            />
          </div>
        </div>
        {/* Explore adoption button */}
        <div className="flex flex-col justify-end">
          <button className="border border-gray-300 rounded px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50">Explore adoption</button>
        </div>
      </div>
      {/* Value Cards Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">How Copilot can transform your work</h2>
        <p className="text-gray-600 mb-6 text-sm">Assess how Copilot can bring value to Microsoft 365 app users in your organization. <a href="#" className="text-blue-600 underline">Read the research</a></p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            title="Meetings"
            value="38,568"
            subtitle="Teams meeting users"
            research="It’s 3.8 times faster to summarize a meeting with Copilot than without Copilot."
          />
          <InfoCard
            title="Emails"
            value="37,246"
            subtitle="Outlook email users"
            research="64% of Outlook users say Copilot allows them to spend less time processing email."
          />
          <InfoCard
            title="Teams chat"
            value="33,544"
            subtitle="Teams chat users"
            research="86% of Copilot users say it’s easier to catch up on what they missed in Teams."
          />
        </div>
      </div>
    </div>
  );
};

export default CopilotDashboard;
