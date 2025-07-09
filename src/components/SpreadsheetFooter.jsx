import { useState } from "react";

const initialTabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const SpreadsheetFooter = ({ indexColWidth }) => {
	const [tabs, setTabs] = useState(initialTabs);
	const [activeTab, setActiveTab] = useState("All Orders");

	const handleTabClick = (tab) => {
		console.log(`Clicked -> navigate to ${tab}`);
		setActiveTab(tab);
	};

	const handleAddTab = () => {
		console.log("Clicked -> create a new sheet");
		const newTab = `Sheet ${tabs.length + 1}`;
		setTabs([...tabs, newTab]);
		setActiveTab(newTab);
	};

	return (
		<div
			className="fixed bottom-0 z-10 w-full h-[44px] flex items-center px-2 py-1 border-t border-gray-300 bg-white shadow-sm"
			style={{ paddingLeft: indexColWidth }}
		>
			{tabs.map((tab) => (
				<button
					key={tab}
					onClick={() => handleTabClick(tab)}
					className={`px-4 py-3 text-sm transition-all font-medium ${
						tab === activeTab
							? "bg-[#E8F0E9] text-[#3E5741] font-medium  border-[#3E5741] border-t-2"
							: " hover:bg-gray-200 text-[#757575]"
					}`}
				>
					{tab}
				</button>
			))}
			<button
				onClick={handleAddTab}
				className="w-[32px] h-[32px] text-2xl text-[#757575] hover:bg-gray-200 flex items-center justify-center p-5.5"
			>
				+
			</button>
		</div>
	);
};

export default SpreadsheetFooter;
