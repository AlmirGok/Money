import * as S from "./style";
import curves from "../../image/loading.gif";

export default function Loading() {
  return (
    <S.Container data-test-id>
      <img src={curves} alt="18" />
    </S.Container>
  );
}
