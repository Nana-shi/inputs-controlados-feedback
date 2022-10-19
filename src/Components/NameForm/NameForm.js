import React from "react";
import { Form, Input } from "../MainPage/styles";

const NameForm = (props) => {
  return (
    <Form>
      <label>
        Nome:
        <Input
          placeholder="Nome"
          value={props.name}
          onChange={props.onChangeName}
          required // indica que o usuário deve preencher valor obrigatóriamente
        />
      </label>
      <label>
        Idade:
        <Input
          placeholder="Idade"
          value={props.age}
          onChange={props.onChangeAge}
          required // indica que o usuário deve preencher valor obrigatóriamente
        />
      </label>
      <label>
        E-mail:
        <Input
          type="email" // este type garante que o email deve ter "@"
          placeholder="usuario@usuario.com"
          value={props.email}
          onChange={props.onChangeEmail}
          required // indica que o usuário deve preencher valor obrigatóriamente
        />
      </label>
      <label>
        Confirmação de e-mail:
        <Input
          placeholder="usuario@usuario.com"
          value={props.email}
          onChange={props.onChangeEmail}
          required // indica que o usuário deve preencher valor obrigatóriamente
        />
      </label>
      <button onClick={props.sendData}>Enviar dados</button>
    </Form>
  );
};

export default NameForm;
