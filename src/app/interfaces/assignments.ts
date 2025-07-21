import { Block } from "./blocks";
import { Question } from "./questions";


// Tracking metrics 
export interface Assignments {
    sid: string;
    uid: string;
    date: Date;
    deadline: Date;
    status: 'done' | 'started' | 'todo'; 
}