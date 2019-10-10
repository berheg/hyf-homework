import React from "react";

class TaskItem extends React.Component {
  render() {
    const { description, deadline } = this.props;
    return (
      <li>
        <h3>
          {description}, {deadline}
        </h3>
      </li>
    );
  }
}

export default TaskItem;