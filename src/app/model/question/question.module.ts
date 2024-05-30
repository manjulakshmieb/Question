
export class QuestionModule { 
  id!: number;
  question!: any;
  options!: any[];
  correctans!: any;
  clientans!: any;
  constructor(id:any,question:any,options:any[],correctans:any,clientans:any){
    this.id=id,
    this.question=question,
    this.options=options,
    this.correctans=correctans,
    this.clientans=clientans
  }
}
