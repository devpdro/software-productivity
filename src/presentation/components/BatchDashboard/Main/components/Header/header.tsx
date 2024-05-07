import { CustomModal } from '../../../../Modal'

import * as S from "./header-styles";

const Header = () => {
  return (
    <S.Container>
      <h1>Dashboard</h1>
      <S.BoxContainer>
        <S.IconBox>
          <CustomModal/>
        </S.IconBox>
        <S.TextBox>
          <h2>234</h2>
          <p>Adicionar lote</p>
        </S.TextBox>
      </S.BoxContainer>
    </S.Container>
  );
};

export default Header;
