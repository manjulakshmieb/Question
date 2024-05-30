import { Component } from '@angular/core';
import { QuestionModule } from 'src/app/model/question/question.module';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  questions: QuestionModule[] = [];
  currentQuesIndex: number = 0;
  score: number = 0;
  total: number = 0;
  validatemsg: string = '';
  resultMsg: string = '';
  succesmsg:any=''
   constructor(private qa:QuestionService){

   }

   ngOnInit(): void {
      // Questions get function
    this.questions = this.qa.getQuestions();
  }

  
  // next button function
  next(): void {
    if (this.currentQuesIndex < this.questions.length - 1) {
      this.currentQuesIndex++;
    }
  }

  // previous button function

  prev(): void {
    if (this.currentQuesIndex > 0) {
      this.currentQuesIndex--;
    }
  }

  // submitt button function

  submit(): void {
    if (this.questions.some((question) => !question.clientans)) {
      this.validatemsg = 'All questions are mandatory. Please answer all questions.';
      return;
    }
    this.validatemsg= '';
    const result = this.qa.checkAnswers();
    this.score = result.score;
    this.total = result.total;

    if (this.score < 60) {
      this.resultMsg = `Your score is ${this.score}/${this.total}. Please re-take the assessment.`;
    } else {
      this.succesmsg = `Congratulations! Your score is ${this.score}/${this.total}.`;
    }
  }

  reload(){
     window.location.reload()
  }

}
