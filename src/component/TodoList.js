import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
  render() {
    return (
      <div>
        <ol>
          {(() => {
            return this.props.todos.map(item => (
              <TodoItem
                item={item}
                key={item.viewId}
                toggleActiveHandler={viewId =>
                  this.props.onToggleTodo(viewId, this.props.statusOfList)
                }
                updateItemContent={(viewId, content) =>
                  this.props.onUpdateTodo(viewId, content)
                }
              />
            ));
          })()}
        </ol>
      </div>
    );
  }
}

export default TodoList;
