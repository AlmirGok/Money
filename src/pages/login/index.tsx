import { useState } from "react";
import * as S from "./style";

export function Login() {
  const [form, setForm] = useState({
    email: {
      hasChanger: false,
      value: "",
    },
    password: {
      hasChanger: false,
      value: "",
    },
  });

  const isEmailValid = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <S.Container>
      <section>
        <form>
          <input
            value={form.email.value}
            onChange={(event) =>
              setForm({
                ...form,
                email: {
                  hasChanger: true,
                  value: event.target.value,
                },
              })
            }
            type="email"
            placeholder="E-mail"
            data-testid="email"
          />
          {form.email.hasChanger && !form.email.value && (
            <span data-testid="email-required">*E-mail é obrigatório</span>
          )}
          {form.email.hasChanger && !isEmailValid(form.email.value) && (
            <span data-testid="email-invalid">*E-mail é inválido</span>
          )}
          <br />
          <br />
          <input
            onChange={(event) =>
              setForm({
                ...form,
                password: {
                  hasChanger: true,
                  value: event.target.value,
                },
              })
            }
            value={form.password.value}
            type="password"
            placeholder="Senha"
            data-testid="password"
          />
          {form.password.hasChanger && !form.password.value && (
            <span data-testid="password-required">*Senha é obrigatória</span>
          )}
          <br />
          <br />
          <button type="button">Recuperar senha</button>
          <br />
          <button type="button">Entrar</button>
          <br />
          <button type="button">Registrar</button>
        </form>
      </section>
    </S.Container>
  );
}
