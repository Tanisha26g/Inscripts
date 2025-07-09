import John_Doe from "../assets/John_Doe.svg";
import SidebarIcon from "../assets/Side_Bar_Icon.svg";
import Bell from "../assets/Notification_bell.svg";
import { BiSearch } from "react-icons/bi";

const Navbar = ({ setSearchTerm }) => {

	return (
		<div className="w-full flex justify-between items-center px-4 py-2 bg-white border-b-2 border-gray-200 text-sm">
			{/* Left section */}
			<div className="font-semibold flex items-center gap-2">
				<img src={SidebarIcon} alt="Sidebar Icon" className="px-2" />
				<span
					className="text-[#afafaf] cursor-pointer hover:underline"
					onClick={() => console.log("Navigated to Workspace")}
				>
					WorkSpace
				</span>
				<span className="text-[#afafaf]">&gt;</span>
				<span
					className="text-[#afafaf] cursor-pointer hover:underline"
					onClick={() => console.log("Navigated to Folder 2")}
				>
					Folder 2
				</span>
				<span className="text-[#afafaf]">&gt;</span>
				<span
					className="cursor-pointer hover:underline"
					onClick={() => console.log("Opened Spreadsheet 3")}
				>
					Spreadsheet 3
				</span>
				<span
					className="text-[#afafaf] text-lg tracking-wider ml-1 -translate-1"
					style={{ lineHeight: "1" }}
				>
					...
				</span>
			</div>

			{/* Right section */}
			<div className="flex items-center gap-2 pr-3">
				<div className="bg-[#F6F6F6] flex items-center gap-2 p-2.5 rounded-lg text-gray-500 w-[150px]">
					<BiSearch className="text-lg" />
					<input
	type="text"
	placeholder="Search within sheet"
	className="text-xs bg-transparent outline-none placeholder:text-gray-400 w-[105px]"
	onChange={(e) => setSearchTerm(e.target.value)}
/>

				</div>

				<img
					src={Bell}
					alt="Notifications"
					className="cursor-pointer"
					onClick={() => console.log("Opening notifications")}
				/>

				<img
					src={John_Doe}
					alt="Profile"
					className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer"
					onClick={() => console.log("Profile clicked")}
				/>

				<div
					className="flex flex-col leading-tight cursor-pointer"
					onClick={() => console.log("Opening profile")}
				>
					<div className="text-xs">John Doe</div>
					<div className="text-[#afafaf] text-[10px]">john.doe...</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
