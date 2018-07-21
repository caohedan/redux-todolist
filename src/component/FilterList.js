import Todo from '../model/Todo';
import classNames from 'classnames';
import React, { Component } from 'react';
export default class FilterList extends Component {
  showFilterList(event) {
    const statusOfList = event.target.attributes.getNamedItem('data-filter')
      .value;
    this.props.onFilterTodos(statusOfList);
  }

  render() {
    return (
      <div>
        <ul className="filters">
          <li>
            <a
              href="#all"
              onClick={e => this.showFilterList(e)}
              data-filter="all"
              className={classNames({
                selected: this.statusOfList === Todo.ALL
              })}
            >
              ALL
            </a>
          </li>
          <li>
            <a
              href="#active"
              onClick={e => this.showFilterList(e)}
              data-filter="active"
              className={classNames({
                selected: this.statusOfList === Todo.ACTIVE
              })}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#completed"
              onClick={e => this.showFilterList(e)}
              data-filter="completed"
              className={classNames({
                selected: this.statusOfList === Todo.COMPLETED
              })}
            >
              Complete
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
