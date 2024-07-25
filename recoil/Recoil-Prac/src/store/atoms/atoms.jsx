import { atom } from "recoil";

export const listOfTasks = atom(
    {
        key : "taskList",
        default : []
    }
);