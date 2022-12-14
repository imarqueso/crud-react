import "./App.css";
import { useState, useEffect } from "react";
import ModalComponent from "./components/ModalComponent";
import TarefasPendenteComponent from "./components/TarefasPendenteComponent";
import TarefasPausadasComponent from "./components/TarefasPausadasComponent";
import TarefasFinalizadosComponent from "./components/TarefasFinalizadosComponent";
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

  const [qtdPendente, setQtdPendente] = useState("");
  const [qtdPausado, setQtdPausado] = useState("");
  const [qtdFinalizado, setQtdFinalizado] = useState("");

  const handlePendente = () => {
    document.getElementById("box-pendente").classList.add("box-visivel");
    document.getElementById("box-pausado").classList.remove("box-visivel");
    document.getElementById("box-finalizado").classList.remove("box-visivel");
    document.getElementById("navPendente").classList.add("active");
    document.getElementById("navPausado").classList.remove("active");
    document.getElementById("navFinalizado").classList.remove("active");
  };

  const handlePausado = () => {
    document.getElementById("box-pendente").classList.remove("box-visivel");
    document.getElementById("box-pausado").classList.add("box-visivel");
    document.getElementById("box-finalizado").classList.remove("box-visivel");
    document.getElementById("navPendente").classList.remove("active");
    document.getElementById("navPausado").classList.add("active");
    document.getElementById("navFinalizado").classList.remove("active");
  };

  const handleFinalizado = () => {
    document.getElementById("box-pendente").classList.remove("box-visivel");
    document.getElementById("box-pausado").classList.remove("box-visivel");
    document.getElementById("box-finalizado").classList.add("box-visivel");
    document.getElementById("navPendente").classList.remove("active");
    document.getElementById("navPausado").classList.remove("active");
    document.getElementById("navFinalizado").classList.add("active");
  };

  useEffect(() => {
    setTimeout(() => {
      const quantidadePendente = document.querySelectorAll(".qtdPendente");
      setQtdPendente(quantidadePendente.length);
      const quantidadePausado = document.querySelectorAll(".qtdPausado");
      setQtdPausado(quantidadePausado.length);
      const quantidadeFinalizado = document.querySelectorAll(".qtdFinalizado");
      setQtdFinalizado(quantidadeFinalizado.length);
    }, 500);
  }, []);

  return (
    <section className="container">
      <div className="content">
        <button className="add-btn" onClick={() => [setDataEdit({}), onOpen()]}>
          Adicionar Tarefa
        </button>

        <span className="aviso">
          Os dados ficam salvos no Local Storage do navegador*
        </span>

        <NavComponent
          qtdPendente={qtdPendente}
          qtdPausado={qtdPausado}
          qtdFinalizado={qtdFinalizado}
          handlePendente={handlePendente}
          handlePausado={handlePausado}
          handleFinalizado={handleFinalizado}
        />

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
          setQtdPendente={setQtdPendente}
        />
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
          setQtdPausado={setQtdPausado}
        />
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
          setQtdFinalizado={setQtdFinalizado}
        />
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
        setQtdPendente={setQtdPendente}
        setQtdPausado={setQtdPausado}
        setQtdFinalizado={setQtdFinalizado}
        qtdPendente={qtdPendente}
        qtdPausado={qtdPausado}
        qtdFinalizado={qtdFinalizado}
      />
    </section>
  );
}

export default App;
