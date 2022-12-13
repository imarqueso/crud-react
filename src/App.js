import "./App.css";
import { useState, useEffect } from "react";
import ModalComponent from "./components/ModalComponent";
import TarefasPendenteComponent from "./components/TarefasPendenteComponent";
import TarefasPausadasComponent from "./components/TarefasPausadasComponent";
import TarefasFinalizadosComponent from "./components/TarefasFinalizadosComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";

function App() {
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const onOpen = (e) => {
    document.getElementById("modal-container").classList.add("modal-visivel");
    setId(Math.floor(Math.random() * 9999999));
  };

  const onClose = (e) => {
    setTitulo("");
    setDescricao("");
    setStatus("");
    setDeadline("");
    document
      .getElementById("modal-container")
      .classList.remove("modal-visivel");
  };

  return (
    <section className="container">
      <div className="content">
        <button className="add-btn" onClick={() => [setDataEdit({}), onOpen()]}>
          Adicionar Tarefa
        </button>

        <span className="aviso">
          Os dados ficam salvos no Local Storage do navegador*
        </span>

        <BrowserRouter>
          <NavComponent />
          <Routes>
            <Route
              path="/"
              element={
                <TarefasPendenteComponent
                  onClose={onClose}
                  data={data}
                  setData={setData}
                  dataEdit={dataEdit}
                  setDataEdit={setDataEdit}
                  setTitulo={setTitulo}
                  titulo={titulo}
                  setDescricao={setDescricao}
                  descricao={descricao}
                  setId={setId}
                  id={id}
                  setStatus={setStatus}
                  status={status}
                  setDeadline={setDeadline}
                  deadline={deadline}
                  onOpen={onOpen}
                />
              }
            />
            <Route
              path="pausadas"
              element={
                <TarefasPausadasComponent
                  onClose={onClose}
                  data={data}
                  setData={setData}
                  dataEdit={dataEdit}
                  setDataEdit={setDataEdit}
                  setTitulo={setTitulo}
                  titulo={titulo}
                  setDescricao={setDescricao}
                  descricao={descricao}
                  setId={setId}
                  id={id}
                  setStatus={setStatus}
                  status={status}
                  setDeadline={setDeadline}
                  deadline={deadline}
                  onOpen={onOpen}
                />
              }
            />
            <Route
              path="finalizadas"
              element={
                <TarefasFinalizadosComponent
                  onClose={onClose}
                  data={data}
                  setData={setData}
                  dataEdit={dataEdit}
                  setDataEdit={setDataEdit}
                  setTitulo={setTitulo}
                  titulo={titulo}
                  setDescricao={setDescricao}
                  descricao={descricao}
                  setId={setId}
                  id={id}
                  setStatus={setStatus}
                  status={status}
                  setDeadline={setDeadline}
                  deadline={deadline}
                  onOpen={onOpen}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <ModalComponent
        onClose={onClose}
        data={data}
        setData={setData}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
        setTitulo={setTitulo}
        titulo={titulo}
        setDescricao={setDescricao}
        descricao={descricao}
        setId={setId}
        id={id}
        setStatus={setStatus}
        status={status}
        setDeadline={setDeadline}
        deadline={deadline}
      />
    </section>
  );
}

export default App;
