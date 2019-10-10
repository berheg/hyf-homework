import React from "react";
import TaskItem from "./listItem"
class TaskList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.taskObject.map(task => {
            return <TaskItem description={task.description} deadline={task.deadline} />;
          })}
        </ul>
      );
    }
  }
  
  export default TaskList;