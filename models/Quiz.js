//@ts-check
import { Question } from "./Question.js";

export class Quiz {
  questionsIndex = 0;
  score = 0;
/**
 * 
 * @param {Question[]} questions va a recibir un arreglo de Question
 */
  constructor(questions) {
    /**
     * este objeto que se va a crear va a tener una propiedad que se va a llamar questoins y va a tener el valor que se le este pasando en el paremetro incialmente al constructor
     */
    this.questions = questions;
  }
  /**
   *
   * @returns este metodo es para obtener el numero index (prop) de la pregunta. de la (this) question (pregunta) quiero saber el (question Index que es una propiedad)
   */
  getQuestionIndex() {
    return this.questions[this.questionsIndex];
  }


  isEnded(){
      return this.questions.length === this.questionsIndex
  }

  /**
   *
   * el parametro de guess va a ser una posible respuesta, una vez me den una rta incremento el index y gracias a eso el getquestionindex me va a devolver otra pregunta.pero necesito verificar que la pregunta es valida o no para incrementar. por eso creo un score (prop)
   */
  guess(answer) {
    /**
     * si de la pregunta actual atravez de su metodo correctanswer te pasan el valor que te pasan en guess y es correcto vamos a incrementar en 1 el score
     *
     * a su vez getQuestionIndex no sabe que me retorna un objeto question
     */
    console.log(answer);
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }

    this.questionsIndex++;
  }
}
