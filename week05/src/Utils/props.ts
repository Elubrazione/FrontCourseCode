export interface ITodo {
  id: string;
  content: string;
  finished: boolean;
  ctime: number;
  mtime: number;
}
export class Todo implements ITodo {
  id: string;
  content: string;
  finished: boolean;
  ctime: number;
  mtime: number;

  constructor (obj: ITodo) {
    this.id = obj.id;
    this.content = obj.content;
    this.finished = obj.finished;
    this.ctime  = obj.ctime;
    this.mtime = obj.mtime;
  }
}