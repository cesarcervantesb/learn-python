import advanceQuestions from "../variables/questions/advance";
import basicQuestions from "../variables/questions/basic";
import intermediateQuestions from "../variables/questions/intermediate";
import masterQuestions from "../variables/questions/master";
import APP_CONSTANTS from "../variables/constants";
import Practice from "../variables/questions/practice";

const Questions = {
    getAllBasicQuestions: function () {
        return basicQuestions;
    },
    getAllIntermediateQuestions: function () {
      return intermediateQuestions;  
    },
    getAllAdvanceQuestions: function () {
        return advanceQuestions;
    },
    getAllMasterQuestions: function () {
        return masterQuestions;
    },
    getAllQuestions: function () {
        return basicQuestions + intermediateQuestions + advanceQuestions + masterQuestions;
    },
    generateQuiz: function(type = "basic", amountQ = 15, includePractice = true, amountP = 3) {
        let arrQuestions = [];
        let arrPractices = [];
        switch (type) {
            case APP_CONSTANTS.QTypes.BASIC:
                arrQuestions = Questions.shuffleArray(basicQuestions, amountQ);
                arrPractices = Questions.shuffleArray(Practice.basic, amountP);
                break;
            case APP_CONSTANTS.QTypes.INTERMEDIATE:
                arrQuestions = Questions.shuffleArray(intermediateQuestions, amountQ);
                arrPractices = Questions.shuffleArray(Practice.intermediate, amountP);
                break;
            case APP_CONSTANTS.QTypes.ADVANCE:
                arrQuestions = Questions.shuffleArray(advanceQuestions, amountQ);
                arrPractices = Questions.shuffleArray(Practice.advance, amountP);
                break;
            case APP_CONSTANTS.QTypes.MASTER:
                arrQuestions = Questions.shuffleArray(masterQuestions, amountQ);
                arrPractices = Questions.shuffleArray(Practice.master, amountP);
                break;
            default:
                break;
        }
        return {
            questions: arrQuestions,
            practice: (includePractice) ? arrPractices : [],
        };
    },
    shuffleArray: function(inArr=[], amount = 15) {
        let auxArr = inArr;
        const length = auxArr.length;
        for( var i=0; i<length; i++) {
            const randomPos = (Math.random() * length).toString();
            const shuffle = auxArr[i];
            auxArr[i] = auxArr[randomPos];
            aux[randomPos] = shuffle;
        }
        return auxArr.slice(0, amount);
    },
};

export default Questions;