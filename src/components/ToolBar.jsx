import { BsChevronDoubleRight } from "react-icons/bs";
import { VscEyeClosed } from "react-icons/vsc";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { BsFilter } from "react-icons/bs";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaRegShareFromSquare } from "react-icons/fa6";
import Arrow_Split from "../assets/Arrow _Split.svg";

const Toolbar = () => {
	return (
		<div className="flex gap-2 px-3 py-1.5 justify-between border-b border-[#eeeeee] text-sm">
			{/* Left */}
			<div className="flex items-center gap-5">
				<button
					className="flex items-center justify-center gap-1 border-r-2 border-gray-300 px-3 py-1"
					onClick={() => console.log("Expanding toolbar")}
				>
					<span>Tool bar</span>
					<BsChevronDoubleRight />
				</button>

				<button
					className="flex items-center justify-center gap-1"
					onClick={() => console.log("Hiding fields")}
				>
					<VscEyeClosed className="text-lg" />
					<span>Hide fields</span>
				</button>

				<button
					className="flex items-center justify-center gap-1"
					onClick={() => console.log("Sorting triggered")}
				>
					<HiOutlineArrowsUpDown className="text-lg" />
					<span>Sort</span>
				</button>

				<button
					className="flex items-center justify-center gap-1"
					onClick={() => console.log("Filtering triggered")}
				>
					<BsFilter className="text-lg" />
					<span>Filter</span>
				</button>

				<button
					className="flex items-center justify-center gap-1 content-center"
					onClick={() => console.log("Changing to Cell view")}
				>
					<TbArrowAutofitHeight className="text-lg" />
					<span>Cell view</span>
				</button>
			</div>

			{/* Right */}
			<div className="flex items-center gap-2">
				<button
					className="border border-gray-200 flex items-center justify-center gap-1 py-2 rounded-md px-2 text-gray-600 hover:bg-[#4B6A4F] hover:text-white duration-200 ease-in"
					onClick={() => console.log("Importing data")}
				>
					<LiaDownloadSolid className="text-lg" />
					<span>Import</span>
				</button>

				<button
					className="border border-gray-200 flex items-center justify-center gap-1 py-2 rounded-md px-2 text-gray-600 hover:bg-[#4B6A4F] hover:text-white duration-200 ease-in"
					onClick={() => console.log("Exporting data")}
				>
					<LiaDownloadSolid className="rotate-180 text-lg" />
					<span>Export</span>
				</button>

				<button
					className="border border-gray-200 flex items-center justify-center gap-1 py-2 rounded-md px-2 text-gray-600 hover:bg-[#4B6A4F] hover:text-white duration-200 ease-in"
					onClick={() => console.log("Sharing spreadsheet")}
				>
					<FaRegShareFromSquare className="text-lg" />
					<span>Share</span>
				</button>

				<button
					className="bg-[#4B6A4F] text-white flex items-center justify-center gap-1 py-2 rounded-md px-6"
					onClick={() => console.log("New action started")}
				>
					<img src={Arrow_Split} alt="New Action" />
					<span>New Action</span>
				</button>
			</div>
		</div>
	);
};

export default Toolbar;
