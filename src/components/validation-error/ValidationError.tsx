import { isEmailValid } from "../../helpers/EmailHelpers";

type ValidationErrorProps = {
  errorMessage: string;
  hasChanged: boolean;
  type: "required" | "email";
  value: string;
  testId: string;
};

export default function ValidationError(props: ValidationErrorProps) {
  if (!props.hasChanged) {
    return null;
  }

  const error = <span data-testid={props.testId}>{props.errorMessage}</span>;

  if (props.type === "required") {
    return props.value === "" ? error : null;
  }
  return !isEmailValid(props.value) ? error : null;
}
