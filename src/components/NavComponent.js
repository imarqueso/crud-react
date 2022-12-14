const NavComponent = ({
  qtdPendente,
  qtdPausado,
  qtdFinalizado,
  handlePendente,
  handlePausado,
  handleFinalizado,
}) => {
  return (
    <nav>
      <ul>
        <li>
          <p onClick={handlePendente} className="active" id="navPendente">
            Pendentes&nbsp;({qtdPendente})
          </p>
        </li>
        <li>
          <p onClick={handlePausado} id="navPausado">
            Pausadas&nbsp;({qtdPausado})
          </p>
        </li>
        <li>
          <p onClick={handleFinalizado} id="navFinalizado">
            Finalizadas&nbsp;({qtdFinalizado})
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
