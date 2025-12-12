import { Block, BlockTitle, Icon, List, ListItem, Navbar, NavLeft, NavTitle, Page } from "framework7-react";
import { useState } from "react";
import APP_CONSTANTS from "../js/variables/constants";
import { value } from "dom7";

const QuestionsPage = ({props}) => {
    let navTitle = props.level;
    switch(navTitle) {
        case APP_CONSTANTS.QTypes.BASIC:
            navTitle = "Nivel Basico";
            break;
        case APP_CONSTANTS.QTypes.INTERMEDIATE:
            navTitle = "Nivel Intermedio";
            break;
        case APP_CONSTANTS.QTypes.ADVANCE:
            navTitle = "Nivel Avanzado";
            break;
        case APP_CONSTANTS.QTypes.MASTER:
            navTitle = "Nivel Maestro";
            break;
        default:
            navTitle = "Todos los niveles";
            break;
    }
    return (
        <Page name="questions">
            <Navbar>
                <NavTitle>{navTitle}</NavTitle>
            </Navbar>
            <BlockTitle medium>Preguntas</BlockTitle>
            <Block className="questions">
                {
                    props.questions.map((elem, idx) => (
                        <Block key={elem.id}>
                            <Block inset strong outline>
                                <p><b>{idx + 1}</b>. {elem.question}</p>
                            </Block>
                            <Block>
                                 <List strong inset dividersIos>
                                    {
                                        elem.answers.map((elem, idx) => (
                                            <ListItem key={elem.questionID} radio radioIcon="start" title={elem.answer} value={elem.answer} name={`radio-anwer-${elem.questionID}`} />
                                        ))
                                    }
                                </List>
                            </Block>
                        </Block>
                        
                    ))
                }
            </Block>
            <BlockTitle medium>Ejercicios</BlockTitle>
            <Block className="practices">

            </Block>
        </Page>
    );
};

export default QuestionsPage;