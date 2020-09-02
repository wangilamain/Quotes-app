export class Quote {
  showDescription: boolean;
  upvote: number;
  downvote: number;
  author: string;
  constructor(public id: number,public name: string,public description:string, public postDate: Date){
    this.showDescription=false;
  }
}
