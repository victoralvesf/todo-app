import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 8px;
  margin-bottom: 30px;
  border: 1px solid #ECF1F8;
  transition: background-color .2s ease;
  background-color: ${props => props.isDragging ? darken(0.06, '#ECF1F8') : '#ECF1F8'};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  padding: 10px;
`;

export const TaskList = styled.div`
  border-radius: 0px 0px 4px 4px;
  flex-grow: 1;
  min-width: 230px;
  min-height: 100px;
  padding: 10px;
  transition: background-color .2s ease;
  background-color: ${props => props.isDraggingOver ? darken(0.04, '#ECF1F8') : '#ECF1F8' };
`;