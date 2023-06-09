import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import { todosRemaining } from '../redux/selectors'
import { todoListSlice } from './TodoListSlice';

export default function TodoList() {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  
  const todoList = useSelector(todosRemaining);

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  }

  const handleSelectChange = (value) => {
    setPriority(value);
  }

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
      id: uuidv4(),
      name: todoName,
      completed: false,
      priority: priority
    }))
    setTodoName('');
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
       
        {todoList && todoList.map(todo => {
          return <Todo key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} id={todo.id} />
        })

        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" onChange={handleSelectChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
