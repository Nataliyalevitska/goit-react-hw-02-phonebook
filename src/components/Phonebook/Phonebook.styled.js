import styled from '@emotion/styled';

export const Title = styled.h1`
  color: ${props => props.theme.colors.titleColor};
  font-size: 50px;
  font-family: Helvetica Neue;
  margin-bottom: ${props => props.theme.spacing(14)}px;
  margin-top: ${props => props.theme.spacing(2)}px;
  margin-left: ${props => props.theme.spacing(4)}px;
  text-shadow: 4px 4px 4px ${props => props.theme.colors.titleShadow}; ;
`;
