import * as S from "./select-styles";

const Select = ({ name, id }: { name: string, id: string }) => {
  return (
    <S.Container>
      <label htmlFor="">{name}</label>
      <input type="text" name={name} id={id} />
    </S.Container>
  );
};

export default Select;
