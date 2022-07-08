import styled from '@emotion/styled';

export const TitleFilter = styled.label`
  margin-left: ${p => p.theme.spacing(10)}px;
  font-size: ${p => p.theme.spacing(5)}px;
  color: ${p => p.theme.colors.phoneLabColor};
  margin-bottom: ${p => p.theme.spacing(2)}px;
`;

export const InputFilter = styled.input`
  margin-left: ${p => p.theme.spacing(10)}px;
  padding: ${p => p.theme.spacing(3)}px;
  border-radius: ${p => p.theme.radii.normal};
  width: ${p => p.theme.spacing(80)}px;
`;
