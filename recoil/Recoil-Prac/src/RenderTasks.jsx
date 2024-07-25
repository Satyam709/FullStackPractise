import Task from "./Task";
export default function RenderTasks({ arrayOfTasks }) {
  return (
    <>{arrayOfTasks.map(function (item,key){<Task key={key} task={item} />})}</>
  );
}
