import styled from '@emotion/styled';

export const ContactsItems = styled.ul`
  margin-top: ${p => p.theme.spacing(10)}px;
  margin-left: ${p => p.theme.spacing(10)}px;
  font-size: ${p => p.theme.spacing(5)}px;
  color: ${p => p.theme.colors.contactsItem};
`;
export const ContactsLi = styled.li`
  display: flex;
  align-items: baseline;
`;
export const ButtonContact = styled.button`
  padding: ${p => p.theme.spacing(2)}px;
  background-color: ${p => p.theme.colors.titleShadow};
  border-radius: ${p => p.theme.radii.normal};
  border: 2px solid ${p => p.theme.colors.titleColor};
  margin-left: 20px;
  margin-bottom: ${p => p.theme.spacing(3)}px;
  font-size: ${p => p.theme.spacing(4)}px;
`;
