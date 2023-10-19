import { useState } from "react";
import * as S from "./style";
import { isEmailValid } from "../../helpers/EmailHelpers";
import ValidationError from "../../components/validation-error/ValidationError";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthServrice";
import Loading from "../../components/loading";

type LoginPageProps = {
  authService: AuthService;
};

export function Login(props: LoginPageProps) {
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

  const [error, setError] = useState(null as any);
  const [showLoading, setShowLoading] = useState(false);
  const [showRecoverPasswordMessage, setShowRecoverPasswordMessage] =
    useState(false);

  const login = () => {
    setShowLoading(true);
    props.authService
      .login(form.email.value, form.password.value)
      .then(() => {
        setShowLoading(false);
        navigate("/home");
      })
      .catch((error) => {
        setShowLoading(false);
        setError(error);
      });
  };

  const recoverPassword = () => {
    setShowLoading(true);
    props.authService
      .recoverPassword(form.email.value)
      .then(() => {
        setShowLoading(false);
        setShowRecoverPasswordMessage(true);
      })
      .catch((error) => {
        setShowLoading(false);
        setError(error);
        setShowRecoverPasswordMessage(false);
      });
  };

  const navigate = useNavigate();
  const goToRegisterPage = () => {
    navigate("/register");
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

          {error && <span data-testid="error">{error.message}</span>}
          <br />
          <br />
          <button
            data-testid="recover-password-button"
            disabled={!isEmailValid(form.email.value)}
            type="button"
            onClick={recoverPassword}
          >
            Recuperar senha
          </button>
          <br />
          <button
            data-testid="login-button"
            disabled={!isEmailValid(form.email.value) || !form.password.value}
            type="button"
            onClick={login}
          >
            Entrar
          </button>
          <br />
          <button
            data-testid="register-button"
            type="button"
            onClick={goToRegisterPage}
          >
            Registrar
          </button>
        </form>
        {showLoading && <Loading />}
        {showRecoverPasswordMessage && <div>Verifique sua caixa de email</div>}
      </section>
    </S.Container>
  );
}
