import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  Button,
  f7,
} from 'framework7-react';
import Questions from '../js/functions/questions';

const selectLevel = (event) => {
  const ID = event.target.id;
  // console.log(ID);
  const objPractice = Questions.generateQuiz(ID, 25, true, 3);
  // console.log(objPractice);
  f7.view.main.router.navigate('/questions/', {
    animate: true,
    props: {
      props: {
        ...objPractice,
        level: ID,
        allowPractice: true,
      }
    }
  });
};

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large>
      <NavTitle>Aprende Python</NavTitle>
      <NavTitleLarge>Aprende Python</NavTitleLarge>
    </Navbar>
    {/* Toolbar */}
    <Toolbar bottom>
      <Block>
        <p>v{f7.params.version}</p>
      </Block>
    </Toolbar>
    {/* Page content */}
    <BlockTitle>Selecciona el nivel que quieres practicar</BlockTitle>
    <Block inset>
      <div className="grid grid-cols-3 grid-gap">
        <Button id={'basic'} tonal onClick={selectLevel}>BÁSICO</Button>
        <Button id={'intermediate'} tonal onClick={selectLevel}>INTERMEDIO</Button>
        <Button id={'advance'} tonal onClick={selectLevel}>AVANZADO</Button>
        <Button id={'master'} tonal onClick={selectLevel}>MASTER</Button>
        <Button id={'all'} tonal onClick={selectLevel}>TODOS</Button>
      </div>
    </Block>

  </Page>
);
export default HomePage;