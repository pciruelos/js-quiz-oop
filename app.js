import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import {UI} from './models/UI.js'

const renderPage = (quiz, ui) =>  {
    if (quiz.isEnded()){
        ui.showScores(quiz.score);
        }
    else {

        /** dsd quiz le vas a pasar el getquistionidex() que retorna un objeto y de este objeto solo quiero su propiedad text */
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().question, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz,ui);
        });
        ui.showProgress(quiz.questionsIndex +1, quiz.questions.length);
    }
};

function main() { 

    const quiz = new Quiz(questions);
    const ui = new UI();

    renderPage(quiz,ui)



}

main()