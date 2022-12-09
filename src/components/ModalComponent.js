import "./ModalComponent.css";

const ModalComponent = ({
  data,
  setData,
  dataEdit,
  onClose,
  setTitulo,
  titulo,
  setDescricao,
  descricao,
  setId,
  id,
  setStatus,
  status,
  setDeadline,
  deadline,
}) => {
  const handleSave = (e) => {
    e.preventDefault();
    if (!id || !titulo || !descricao || !deadline || !status) {
      return;
    }

    // if (emailAlreadyExists()) {
    //   return alert("E-mail já cadastrado!");
    // }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { id, titulo, descricao, deadline, status };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { id, titulo, descricao, deadline, status }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

    setData(newDataArray);
    setTitulo("");
    setDescricao("");
    setStatus("");
    setDeadline("");
    setId("");
    onClose();
  };

  // const emailAlreadyExists = () => {
  //   if (dataEdit.email !== email && data?.length) {
  //     return data.find((item) => item.email === email);
  //   }

  //   return false;
  // };

  return (
    <>
      <div className="modal-container" id="modal-container" onClose={onClose}>
        <div className="modal-content">
          <h2>Cadastrar Tarefa</h2>
          <form>
            <input
              type="text"
              hidden
              value={id}
              name="id"
              onChange={(e) => setId(e.target.value)}
            />
            <label>
              <span>Título:</span>
              <input
                type="text"
                value={titulo}
                name="titulo"
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Descrição:</span>
              <input
                type="text"
                value={descricao}
                name="descricao"
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Status:</span>
              <select
                required
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option value="Pendente">Selecione o status</option>
                <option value="Pendente">Pendente</option>
                <option value="Pausado">Pausado</option>
                <option value="Finalizado">Finalizado</option>
              </select>
            </label>
            <label>
              <span>Deadline:</span>
              <input
                type="date"
                value={deadline}
                name="deadline"
                onChange={(e) => setDeadline(e.target.value)}
                required
              />
            </label>
            <div className="buttons">
              <button onClick={handleSave}>Salvar</button>
              <div className="cancelar" onClick={onClose}>
                Cancelar
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
