function InfosUsuario(props) {
  return (
    <div>
      <img src={props.info.imagem} alt={props.info.autor} width="400" />
      <h4>Autor: {props.info.autor}</h4>
    </div>
  );
}

export default InfosUsuario;
