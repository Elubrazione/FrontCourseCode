export interface todoProps {
    mtime: number,
    finished: boolean,
    content: string
}

export interface ITodo {
    id: string;
    content: string;
    finished: boolean;
    ctime: number;
    mtime: number;
  }