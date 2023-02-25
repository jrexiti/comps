import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "18672dfs",
      label: "Can I use react on a project?",
      content: "Yes sir",
    },
    {
      id: "13462dfs",
      label: "Can I use javascript on a project?",
      content: "Yes sir",
    },
    {
      id: "89512dfs",
      label: "Can I use css on a project?",
      content: "Yes sir",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
