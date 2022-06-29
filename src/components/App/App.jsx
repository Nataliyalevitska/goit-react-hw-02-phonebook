import Phonebook from "../Phonebook/Phonebook";
import { Global } from '@emotion/react';
import globalStyles from '../../styles/global-styles';
import Container from '../../styles/Container';

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
        <Container>
          <Phonebook />
          </Container>
    </>
  );
};

export default App;