import { useState, useEffect, useRef } from "react";
import { rows } from "../data/spreadsheetData";

const Spreadsheet = ({ colWidths, searchTerm }) => {

	const containerRef = useRef(null);
    const rawRows = [...rows];
    while (rawRows.length < 100) rawRows.push({});
    
    const filteredRows = rawRows.filter((row) => {
        if (!searchTerm.trim()) return true;
        return Object.values(row).some((val) =>
            typeof val === "string"
                ? val.toLowerCase().includes(searchTerm.toLowerCase())
                : false
        );
    });
    

	const [selectedCell, setSelectedCell] = useState(null);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (!selectedCell) return;

			const { row, col } = selectedCell;
			const maxRows =filteredRows.length;
			const maxCols = 10;

			switch (e.key) {
				case "ArrowDown":
					setSelectedCell({ row: Math.min(row + 1, maxRows - 1), col });
					e.preventDefault();
					break;
				case "ArrowUp":
					setSelectedCell({ row: Math.max(row - 1, 0), col });
					e.preventDefault();
					break;
				case "ArrowLeft":
					setSelectedCell({ row, col: Math.max(col - 1, 0) });
					e.preventDefault();
					break;
				case "ArrowRight":
					setSelectedCell({ row, col: Math.min(col + 1, maxCols - 1) });
					e.preventDefault();
					break;
			}
		};

		const container = containerRef.current;
		container?.addEventListener("keydown", handleKeyDown);
		return () => container?.removeEventListener("keydown", handleKeyDown);
	}, [selectedCell]);

	useEffect(() => {
		containerRef.current?.focus();
	}, []);

	const getStatusStyle = (status) => {
		switch (status) {
			case "In-process":
				return "bg-[#FFF3D6] text-[#85640B]";
			case "Need to start":
				return "bg-[#E2E8F0] text-[#475569]";
			case "Complete":
				return "bg-[#D3F2E2] text-[#0A6E3D]";
			case "Blocked":
				return "bg-[#FFE1DE] text-[#C22219]";
			default:
				return "bg-gray-100 text-gray-400";
		}
	};

	const getPriorityColor = (priority) => {
		switch (priority) {
			case "High":
				return "text-[#EF4D44]";
			case "Medium":
				return "text-[#C29210]";
			case "Low":
				return "text-[#1A8CFF]";
			default:
				return "text-gray-400";
		}
	};

	return (
		<div
			ref={containerRef}
			tabIndex={0}
			className="w-full max-h-[calc(100vh-180px)] overflow-y-scroll scrollbar-hide will-change-transform"
		>
			{filteredRows.map((row, rowIndex) => (
				<div key={rowIndex} className="flex text-sm h-[36px]">
					{/* Index column */}
					<div
						className="px-2 py-1 text-center bg-gray-50 border-r border-[#eeeeee] text-[#757575] font-medium w-[50px]"
						style={{
							width: colWidths[0],
							minWidth: 30,
							maxWidth: colWidths[0],
						}}
					>
						{rowIndex + 1}
					</div>

					{/* Main spreadsheet columns */}
					{[
						row.jobRequest,
						row.submitted,
						row.status,
						row.submitter,
						row.url,
						row.assigned,
						row.priority,
						row.dueDate,
						row.estValue,
						row.placeholder,
					].map((cell, colIdx) => {
						const isSelected =
							selectedCell?.row === rowIndex && selectedCell?.col === colIdx;

						const baseClass =
							"px-2 py-1 truncate overflow-hidden box-border cursor-pointer";
						const textAlign =
							colIdx === 1 || colIdx === 7 || colIdx === 8
								? "text-right"
								: colIdx === 2 || colIdx === 6 || colIdx === 9
								? "flex items-center justify-center text-center"
								: "text-left";

						const selectedBorder = isSelected
							? "border-[2px] border-[#6C8B70] shadow-[0_0_0_2px_rgba(0,128,0,0.2)] z-10 bg-white"
							: "border border-[#f6f6f6]";

						const style = {
							width: colWidths[colIdx + 1],
							minWidth: 30,
							maxWidth: colWidths[colIdx + 1],
						};

						return (
							<div
								key={colIdx}
								onClick={() => {
									setSelectedCell({ row: rowIndex, col: colIdx });
									console.log(
										`Clicked cell [Row ${rowIndex + 1}, Col ${colIdx + 1}]`
									);
								}}
								className={`${baseClass} ${textAlign} ${selectedBorder}`}
								style={{
									...style,
									...(colIdx === 9 && {
										borderLeftStyle: "dashed",
										borderRightStyle: "dashed",
										borderTopStyle: "solid",
										borderBottomStyle: "solid",
										borderLeftColor: "#cbcbcb",
										borderRightColor: "#cbcbcb",
										borderTopColor: "#f6f6f6",
										borderBottomColor: "#f6f6f6",
										borderLeftWidth: "2px",
										borderRightWidth: "2px",
									}),
								}}
							>
								{/* Cell Content */}
								{colIdx === 2 && typeof cell === "string" ? (
									<span
										className={`font-medium py-1 px-2 text-xs rounded-2xl justify-center ${getStatusStyle(
											cell
										)}`}
									>
										{cell}
									</span>
								) : colIdx === 4 && typeof cell === "string" ? (
									<span className="underline">{cell}</span>
								) : colIdx === 6 && typeof cell === "string" ? (
									<span className={`font-semibold ${getPriorityColor(cell)}`}>
										{cell}
									</span>
								) : colIdx === 9 ? (
									<span className="italic text-sm text-white">
										{cell || ""}
									</span>
								) : (
									cell || ""
								)}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default Spreadsheet;
