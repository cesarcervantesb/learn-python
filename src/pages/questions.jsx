import { Block, BlockFooter, BlockTitle, Button, Chip, f7, Icon, List, ListItem, Navbar, NavLeft, NavTitle, Page } from "framework7-react";
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
    const [userAnswers, setUserAnswers] = useState([]);
    const responseQuestion = (event) => {
        const target = event.target;
        const questionID = parseInt(target.name.replace('radio-answer-', ''));
        const userAnswer = parseInt(target.value);
        console.log(`Question ID: ${questionID} - userResponse: ${userAnswer}`);
        var arrAux = userAnswers;
        arrAux[questionID] = userAnswer;
        setUserAnswers(arrAux);
    };
    const evaluateAnswers = () => {
        f7.dialog.confirm(`Asegurate de contestar todas las preguntas correctamente. ¿Estas seguro que quieres evaluar tus respuestas?`, 'Evaluar', () => {
            // Callback OK
            var count = 0;
            for (var question of props.questions) {
                const qID = question.id;
                const posCorrectAnswer = question.correctAnswer;
                const correctAnswer = question.answers[posCorrectAnswer].answer;
                const userAnswer = userAnswers[qID];
                const userAnswerIsCorrect = (posCorrectAnswer === userAnswer) ? true : false;
                if (userAnswerIsCorrect) {
                    count += 1;
                }
                showResultChips(qID, userAnswerIsCorrect, correctAnswer);
            }
            const prom = (count * 100) / props.questions.length;
            f7.dialog.create({
                title: 'Resultados',
                content: `
                    <p>Preguntas correctas: <b>${count}</b>.</P>
                    <p>Preguntas incorrectas: <b>${props.questions.length - count}</b>.</p>
                    <p>Total de preguntas: <b>${props.questions.length}</b>.</p>
                    <p>Tu calificación es: <b>${prom}%</b>.
                    <p><b>${(prom >= 60 ? 'APROBADO :)' : 'REPROBADO :(')}</b></p>
                `,
                closeByBackdropClick: true,
                destroyOnClose: true,
            }).open(true);
        }, () => {
            // Callback Cancel
        });
    };
    const showResultChips = (qID, isCorrect, correctAnswer) => {
        const $ = f7.$;
        // Oculta todas
        $('#eval-q' + qID).css('display', 'none');
        $('#correct-q' + qID).css('display', 'none');
        $('#result-q' + qID).css('display', 'none');
        $('#correct-answer-q' + qID).text('La respuesta correcta es: ').css('display', 'none');
        // Muestra las que correspondan
        $('#eval-q' + qID).css('display', '');
        if (isCorrect) {
            $('#correct-q' + qID).css('display', '');
        }
        else {
            $('#result-q' + qID).css('display', '');
            $('#correct-answer-q' + qID).text('La respuesta correcta es: "' + correctAnswer + '"').css('display', '');
        }
    };
    return (
        <Page name="questions">
            <Navbar>
                <NavTitle>{navTitle}</NavTitle>
            </Navbar>
            <BlockTitle style={{justifySelf: 'center'}} medium>Preguntas {`1 al ${props.questions.length}`}</BlockTitle>
            <Block className="questions" style={{maxWidth: 720, justifySelf: 'center'}}>
                {
                    props.questions.map((elem, idx) => (
                        <div>
                        <Block key={elem.id} inset strong outline>
                            <Block>
                                <p>{idx + 1}. {elem.question}</p>
                            </Block>
                            <Block style={{marginBottom: 0}}>
                                <BlockTitle>Respuesta</BlockTitle>
                                <List strong inset dividers>
                                    {
                                        elem.answers.map((elem, idx) => (
                                            <ListItem key={elem.questionID} radio title={elem.answer} value={idx} name={`radio-answer-${elem.questionID}`} onChange={responseQuestion}/>
                                        ))
                                    }
                                </List>
                                <BlockFooter id={`eval-q${elem.id}`} style={{display: 'none'}}>
                                    <div className="grid grid-cols-1 grid-gap">
                                        <Chip id={`result-q${elem.id}`} style={{display: 'none'}} text="Respuesta incorrecta" color="red"><Icon f7="xmark" slot="media" color="red"></Icon></Chip>
                                        <Chip id={`correct-q${elem.id}`} style={{display: 'none'}} text="Respuesta correcta" color="green"><Icon f7="checkmark" slot="media" color="green"></Icon></Chip>
                                        <Chip id={`correct-answer-q${elem.id}`} style={{display: 'none'}} text={`La respuesta correcta es: `}/>
                                    </div>
                                </BlockFooter>
                            </Block>
                        </Block>
                        </div>
                    ))
                }
            </Block>
            <Block style={{maxWidth: 720, justifySelf: 'center'}}>
                <Button fill onClick={evaluateAnswers}>Evaluar</Button>
            </Block>
            <BlockTitle style={{justifySelf: 'center'}} medium>Ejercicios {`1 al ${props.practice.length}`}</BlockTitle>
            <Block className="practices">
                {
                    props.practice.map((elem, idx) => (
                        <Block key={elem.id} inset stron outline style={{maxWidth: 720, justifySelf: 'center'}}>
                            <Block>
                                <p>{idx + 1}. {elem.message}</p>
                            </Block>
                        </Block>
                    ))
                }
            </Block>
        </Page>
    );
};

export default QuestionsPage;