import "./App.css";
import { useState, useEffect } from "react";
import ModalComp from "./components/ModalComp";

function App() {
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (email) => {
    const newArray = data.filter((item) => item.email !== email);

    setData(newArray);

    localStorage.setItem("cad_cliente", JSON.stringify(newArray));
  };

  const onOpen = (e) => {
    document.getElementById("modal-container").classList.add("modal-visivel");
    e.preventDefault();
  };

  const onClose = (e) => {
    document
      .getElementById("modal-container")
      .classList.remove("modal-visivel");
    e.preventDefault();
  };

  return (
    <section className="container">
      <div className="content">
        <button onClick={() => [setDataEdit({}), onOpen()]}>
          Novo Cadastro
        </button>

        <span className="aviso">
          Os dados ficam salvos no Local Storage do navegador*
        </span>

        <div className="box">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ name, email }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <span
                      onClick={() => [
                        setDataEdit({ name, email, index }),
                        onOpen(),
                      ]}
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </span>
                  </td>
                  <td>
                    <span onClick={(e) => handleRemove(email)}>
                      <i class="fa-solid fa-trash"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalComp
        onClose={onClose}
        data={data}
        setData={setData}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
      />
    </section>
  );
}

export default App;
