import Navbar from "./components/NavBar";
import Toolbar from "./components/ToolBar";
import FormulaBar from "./components/FormulaBar";
import Spreadsheet from "./components/Spreadsheet";
import { useState } from "react";
import SpreadsheetHeader from "./components/SpreadsheetHeader";
import SpreadsheetFooter from "./components/SpreadsheetFooter";

function App() {
	const [colWidths, setColWidths] = useState([
		30, 300, 150, 150, 150, 150, 150, 150, 150, 150, 150,
	]);

	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="flex flex-col h-screen overflow-hidden">
			<Navbar setSearchTerm={setSearchTerm} />
			<Toolbar />

			<div className="flex-1 overflow-x-auto w-[99%] scrollbar-hide">
				<FormulaBar colWidths={colWidths} />
				<SpreadsheetHeader colWidths={colWidths} setColWidths={setColWidths} />
				<div className="overflow-y-auto mb-10">
					<Spreadsheet colWidths={colWidths} searchTerm={searchTerm} />
				</div>
				<SpreadsheetFooter indexColWidth={colWidths[0]} />
			</div>
		</div>
	);
}

export default App;
