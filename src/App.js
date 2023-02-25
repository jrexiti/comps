import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "18672dfs",
      label: "Option 1",
      content: "Option 1 displayed",
    },
    {
      id: "13462dfs",
      label: "Option 2",
      content: "Option 2 displayed",
    },
    {
      id: "89512dfs",
      label: "Option 3",
      content: "Option 3 displayed",
    },
    {
      id: "89512dfs",
      label: "Option 4",
      content: "Option 4 displayed",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
