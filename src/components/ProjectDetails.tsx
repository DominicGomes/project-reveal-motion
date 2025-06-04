
import React from 'react';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

interface ProjectDetailsProps {
  metrics: {
    performance: string;
    uptime: string;
    users: string;
    transactions: string;
  };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ metrics }) => {
  const metricItems = [
    {
      icon: TrendingUp,
      label: "Performance Score",
      value: metrics.performance,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      label: "Uptime",
      value: metrics.uptime,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      label: "Active Users",
      value: metrics.users,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: DollarSign,
      label: "Transactions",
      value: metrics.transactions,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section data-aos="fade-up" className="relative">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Project Metrics
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metricItems.map((metric, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative"
          >
            <div className="relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 bg-gradient-to-br ${metric.color} rounded-xl mb-6 shadow-lg`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {metric.value}
                </h3>
                
                <p className="text-gray-300 font-medium">
                  {metric.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
