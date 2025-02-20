import ArrowRightCircle from "@/components/icons/arrow-right-circle";

export const ActionsOverview = () => {
    return (
      <div className="mt-6 p-6 bg-gradient-to-r from-gray-50/85 to-gray-100/55 rounded-2xl shadow-md w-full text-center">

        <div className="absolute inset-0 bg-white bg-opacity-10 rounded-3xl"></div>

        <h2 className="text-xl font-semibold text-gray-800 mb-5">🚀 What You Can Do</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          
          {/* 🏢 Create Company */}
          <ActionCard
            title="Create Company"
            description="Launch your own organization and manage fundraising campaigns."
            bgColor="bg-blue-200/85"
            hoverColor="hover:bg-blue-100/85"
            emoji="🏢"
          />
  
          {/* 💰 Start Fundraiser */}
          <ActionCard
            title="Start Fundraiser"
            description="Raise funds for your project or contribute to existing campaigns."
            bgColor="bg-green-200/85"
            hoverColor="hover:bg-green-100/85"
            emoji="💰"
          />
  
          {/* 📊 Donate & Invest */}
          <ActionCard
            title="Donate & Invest"
            description="Support projects by donating and investing in them."
            bgColor="bg-red-200/85"
            hoverColor="hover:bg-red-100/85"
            emoji="📊"
          />
  
          {/* 🗳 Vote on Proposals */}
          <ActionCard
            title="Vote on Proposals"
            description="Participate in DAO decision-making by voting on proposals."
            bgColor="bg-yellow-200/85"
            hoverColor="hover:bg-yellow-100/85"
            emoji="🗳"
          />
  
        </div>
      </div>
    );
  };

  interface ActionCardProps {
    title: string;
    description: string;
    bgColor: string;
    hoverColor: string;
    emoji: string;
  }

  const ActionCard = ({ title, description, bgColor, hoverColor, emoji }: ActionCardProps) => {
    return (
      <div className={`flex items-center z-50 px-5 py-3 rounded-xl shadow-sm ${bgColor} text-gray-800 transition-transform duration-200 ${hoverColor} hover:scale-[1.02]`}>
        <button
        className={`flex flex-col items-center`}
        >
          <span className="text-3xl">{emoji}</span>
          <h3 className="text-base font-semibold mt-2">{title}</h3>
          <p className="text-sm text-gray-700 text-opacity-80 mt-1">{description}</p>
        </button>
        <ArrowRightCircle />
      </div>
    );
  };