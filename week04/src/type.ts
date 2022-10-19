export interface ITodo {
  id: string;
  content: string;
  finished: boolean;
  ctime: string;
  mtime: string;
}

export class Todo implements ITodo {
  id: string;
  content: string;
  finished: boolean;
  ctime: string;
  mtime: string;
  ele:  HTMLElement;

  constructor (obj: ITodo) {
    this.id = obj.id;
    this.content = obj.content;
    this.finished = obj.finished;
    this.ctime  = obj.ctime;
    this.mtime = obj.mtime;
    this.ele = null;
  }
}