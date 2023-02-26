import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}
export default DropdownPage;
