import { format, parseISO } from "date-fns";

const TarefasFinalizadosComponent = ({
  data,
  setData,
  dataEdit,
  onClose,
  onOpen,
  setDataEdit,
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
  setQtdFinalizado,
}) => {
  const handleRemove = (id) => {
    const newArray = data.filter((item) => item.id !== id);

    setData(newArray);

    localStorage.setItem("cad_cliente", JSON.stringify(newArray));

    setTimeout(() => {
      const quantidadeFinalizado = document.querySelectorAll(".qtdFinalizado");
      setQtdFinalizado(quantidadeFinalizado.length);
    }, 500);
  };

  return (
    <div className="box" id="box-finalizado">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, titulo, descricao, deadline, status }, index) => {
            return status === "Finalizado" ? (
              <tr key={index} className="qtdFinalizado">
                <td>
                  {index + 1}
                  <span className="id">{id}</span>
                </td>
                <td className="titulo">{titulo}</td>
                <td className="descricao">{descricao}</td>
                <td>{format(parseISO(deadline), "dd/MM/yyyy")}</td>
                <td>
                  <span className="finalizado">{status}</span>
                </td>
                <td>
                  <span
                    className="editar"
                    onClick={() => [
                      onOpen(),
                      setDataEdit({
                        id,
                        titulo,
                        descricao,
                        status,
                        deadline,
                        index,
                      }),
                      setTitulo(titulo),
                      setDescricao(descricao),
                      setStatus(status),
                      setDeadline(deadline),
                    ]}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </span>
                </td>
                <td>
                  <span className="excluir" onClick={(e) => handleRemove(id)}>
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </td>
              </tr>
            ) : (
              ""
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TarefasFinalizadosComponent;
