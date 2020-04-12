import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Task from '../Task';

import { Container, Title, TaskList } from './styles';

export default function Column({ column, tasks, index }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Title
            {...provided.dragHandleProps}
          >{column.title}</Title>

          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />)
                  )}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}
