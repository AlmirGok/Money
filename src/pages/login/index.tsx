import { useState } from "react";
import * as S from "./style";
import { isEmailValid } from "../../helpers/EmailHelpers";
import ValidationError from "../../components/validation-error/ValidationError";

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

          <ValidationError
            hasChanged={form.email.hasChanger}
            errorMessage="*E-mail é obrigatorio"
            testId="email-required"
            type="required"
            value={form.email.value}
          />
          <ValidationError
            hasChanged={form.email.hasChanger}
            errorMessage="*E-mail é inválido"
            testId="email-invalid"
            type="email"
            value={form.email.value}
          />
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
          <ValidationError
            hasChanged={form.password.hasChanger}
            errorMessage="*Senha é obrigatória"
            testId="password-required"
            type="required"
            value={form.password.value}
          />
          <br />
          <br />
          <button
            data-testid="recover-password-button"
            disabled={!isEmailValid(form.email.value)}
            type="button"
          >
            Recuperar senha
          </button>
          <br />
          <button
            data-testid="login-button"
            disabled={!isEmailValid(form.email.value) || !form.password.value}
            type="button"
          >
            Entrar
          </button>
          <br />
          <button type="button">Registrar</button>
        </form>
      </section>
    </S.Container>
  );
}
