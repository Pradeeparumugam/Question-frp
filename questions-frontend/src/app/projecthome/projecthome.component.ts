import { Component, OnInit } from '@angular/core';
import { Question } from '../class/question';
import { Observable } from 'rxjs';
import { QuestionService } from '../service/questionService';


@Component({
  selector: 'app-projecthome',
  templateUrl: './projecthome.component.html',
  styleUrls: ['./projecthome.component.css']
})
export class ProjecthomeComponent implements OnInit {
  private questionService:QuestionService;
  constructor() { }

  ngOnInit(): void {
  }
  /*question:Question;
  updateQuestion(form:any){
    let data=form.value;
    let questionId=data.questionId;
    let questionOptions=data.questionOptions;
    let questionTitle=data.questionTitle;
    let questionAnswer=data.questionAnswer;
    let questionMarks=data.questionMarks;
    let chosenAnswer=data.chosenAnswer;
    let marksScored=data.marksScored;
    this.question=new Question(questionId,questionOptions, questionTitle,questionAnswer,
      questionMarks,chosenAnswer,marksScored);
      let successFun = (questionArg: Question) => {
        this.question= questionArg;
      };
  
      let errFun = err => {
        console.log("err in updatequestioncomponent " + err.message);
      }
  
      let observable: Observable<Question> = this.questionService.updateQuestion(this.question);
      observable.subscribe(successFun, errFun);
    }

*/
}
