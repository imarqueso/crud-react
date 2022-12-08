import { useState } from "react";
import "./ModalComp.css";

const ModalComponent = ({
  data,
  setData,
  dataEdit,
  onClose,
  setName,
  name,
  setEmail,
  email,
}) => {
  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !email) {
      return;
    }

    if (emailAlreadyExists()) {
      return alert("E-mail já cadastrado!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, email };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, email }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

    setData(newDataArray);
    setName("");
    setEmail("");
    onClose();
  };

  const emailAlreadyExists = () => {
    if (dataEdit.email !== email && data?.length) {
      return data.find((item) => item.email === email);
    }

    return false;
  };

  return (
    <>
      <div className="modal-container" id="modal-container" onClose={onClose}>
        <div className="modal-content">
          <h2>Cadastrar Usuário</h2>
          <span onClick={onClose} className="close">
            <i className="fa-solid fa-xmark"></i>
          </span>
          <form>
            <label>
              <span>Nome:</span>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              <span>E-mail:</span>
              <input
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <div className="buttons">
              <button onClick={handleSave}>Salvar</button>
              <button onClick={onClose}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalComp;
