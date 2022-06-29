import { ContainerStyled } from './Container.styled';

const Container = props => {
  return <ContainerStyled {...props}>{props.children}</ContainerStyled>;
};

export default Container;
