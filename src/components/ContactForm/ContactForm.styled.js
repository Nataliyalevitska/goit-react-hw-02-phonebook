import styled from '@emotion/styled';

export const PhoneLabel = styled.label`
  color: ${p => p.theme.colors.phoneLabColor};
  font-size: ${p => p.theme.spacing(4)}px;
`;

export const PhoneInput = styled.input`
  margin-bottom: ${p => p.theme.spacing(5)}px;
  margin-left: ${p => p.theme.spacing(3)}px;
  padding: ${p => p.theme.spacing(2)}px;
  border-radius: ${p => p.theme.radii.normal};
  width: ${p => p.theme.spacing(80)}px;
`;

export const ButtonContact = styled.button`
  padding: ${p => p.theme.spacing(2)}px;
  background-color: ${p => p.theme.colors.buttonContactBg};
  border-radius: ${p => p.theme.radii.normal};
  border: 3px solid ${p => p.theme.colors.buttonContactBr};
  font-size: ${p => p.theme.spacing(4)}px;
  width: ${p => p.theme.spacing(40)}px;
`;
export const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.theme.spacing(10)}px;
`;
