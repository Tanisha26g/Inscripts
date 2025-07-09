import { columns } from "../data/spreadsheetData";
import { useRef } from "react";

const SpreadsheetHeader = ({ colWidths, setColWidths }) => {
	const startX = useRef(0);
	const startWidth = useRef(0);
	const colIndexRef = useRef(null);

	const handleMouseDown = (e, index) => {
		startX.current = e.clientX;
		startWidth.current = colWidths[index];
		colIndexRef.current = index;

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	};

	const handleMouseMove = (e) => {
		const dx = e.clientX - startX.current;
		const index = colIndexRef.current;
		if (index === null) return;

		setColWidths((prev) => {
			const updated = [...prev];
			updated[index] = Math.max(50, startWidth.current + dx); // min width 50px
			return updated;
		});
	};

	const handleMouseUp = () => {
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("mouseup", handleMouseUp);
		colIndexRef.current = null;
	};

	return (
		<div className="flex sticky top-0 z-10 bg-white">
			<div
				className="px-2 py-1 text-lg text-[#BCBCBC] bg-gray-100 border border-[#eeeeee] text-center"
				style={{ width: colWidths[0] }}
			>
				#
			</div>

			{columns.map((heading, i) => (
				<div
					key={i}
					className="relative flex items-center justify-between px-2 py-1 text-sm font-semibold text-gray-700 border border-[#eeeeee] truncate"
					style={{
						width: colWidths[i + 1],
						minWidth: 50,
						backgroundColor: heading.bgColor || "#f3f3f3",
					}}
				>
					{/* Clickable heading label */}
					<div
						onClick={() => console.log(`Clicked header: ${heading.label}`)}
						className="flex items-center gap-1 cursor-pointer"
					>
						{heading.icon1 && <span>{heading.icon1}</span>}
						<span>{heading.label}</span>
					</div>

					{/* Clickable icon2 (e.g. filter/settings) */}
					{heading.icon2 && (
						<span
							onClick={() => console.log(`Clicked icon2 in: ${heading.label}`)}
							className="cursor-pointer"
						>
							{heading.icon2}
						</span>
					)}

					{/* Resize handle */}
					<div
						onMouseDown={(e) => handleMouseDown(e, i + 1)}
						className="absolute top-0 right-0 h-full w-2 cursor-col-resize"
					></div>
				</div>
			))}
		</div>
	);
};

export default SpreadsheetHeader;
