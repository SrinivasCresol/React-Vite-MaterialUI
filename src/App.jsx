import Form from "./Pages/Form";
import Cards from "./Pages/Cards";
import TableData from "./Pages/Table";
import Header from "./Pages/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tabs from "./Pages/Tabs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="/form" element={<Form />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/table" element={<TableData />} />
      </Routes>
    </>
  );
}

export default App;
