import React, { useState } from "react";
import { Form, Input } from "../MainPage/styles";

const ConfirmationForm = () => {
  const [data, setData] = useState("");
  const [tel, setTel] = useState("");
  const [genero, setGenero] = useState("");
  const [raca, setRaca] = useState("");
  const [curso, setCurso] = useState();
  const [ensinoMedio, setEnsinoMedio] = useState("");
  const [disponivel, setDisponivel] = useState("");

  const onChangeData = (event) => {
    setData(event.target.value);
  };
  const onChangeTel = (event) => {
    setTel(event.target.value);
  };
  const onChangeGenero = (event) => {
    setGenero(event.target.value);
  };
  const onChangeRaca = (event) => {
    setRaca(event.target.value);
  };
  const onChangeCurso = (event) => {
    setCurso(event.target.value);
  };
  const onChangeMedio = (event) => {
    setEnsinoMedio(event.target.value);
  };
  const onChangeDisponivel = (event) => {
    setDisponivel(event.target.value);
  };

  const sendDataConfirm = () => {
    alert("inscrição foi finalizada!");
    setData("");
    setTel("");
    setGenero("");
    setRaca("");
    setCurso(false);
    setEnsinoMedio(false);
    setDisponivel(false);
  };

  return (
    <Form>
      <h2>Forms do exercicio 3</h2>
      <label>
        data de nascimento:
        <Input type="date" onChange={onChangeData} value={data} />
      </label>
      <label>
        Telefone:
        <Input type="tel" onChange={onChangeTel} value={tel} />
      </label>
      <label>
        gênero:
        <select onChange={onChangeGenero} value={genero}>
          <option value="0" selected="selected"></option>
          <option value="1">Homem cisgênero</option>
          <option value="2">Mulher cisgênero</option>
          <option value="3">Homem trans</option>
          <option value="4">Mulher trans</option>
          <option value="5"> Pessoa não binária</option>
          <option value="6">Prefino nõa declarar</option>
        </select>
      </label>
      <label>
        Autodeclaração:
        <select onChange={onChangeRaca} value={raca}>
          <option value="0" selected="selected"></option>
          <option value="1">Negro</option>
          <option value="2">Pardo</option>
          <option value="3">Branco</option>
          <option value="4">Amarelo</option>
          <option value="5">Indígena</option>
          <option value="6">Prefiro não declarar</option>
        </select>
      </label>
      <label>
        Curso: <br />
        <input
          type="radio"
          name="curso"
          value="integral"
          onChange={onChangeCurso}
        />
        <label> Curso integral web fullstack</label>
        <br />
        <input type="radio" name="curso" value="noturno" />
        <label> Curso noturno web fullstack</label>
      </label>
      <label>
        <input type="checkbox" checked={ensinoMedio} onChange={onChangeMedio} />
        <label> Tem ensino médio</label>
        <br />
        <input
          type="checkbox"
          checked={disponivel}
          onChange={onChangeDisponivel}
        />
        <label> Tem disponibilidade para participar das atividades</label>
      </label>

      <button onClick={sendDataConfirm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;
