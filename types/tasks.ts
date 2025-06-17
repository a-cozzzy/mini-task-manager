export interface ITask{
    id:string;
    title:string;
    status: 'pending'|'done';
    createdAt:string;
}