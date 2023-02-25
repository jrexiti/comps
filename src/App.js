import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
  ];

  return <Dropdown options={options} />;
}
export default App;
