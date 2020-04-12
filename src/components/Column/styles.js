import styled from 'styled-components';

export const Container = styled.div`
  margin: 8px;
  margin-bottom: 30px;
  border: 1px solid #ECF1F8;
  background: #ECF1F8;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  padding: 10px;
`;

export const TaskList = styled.div`
  border-radius: 0px 0px 4px 4px;
  height: 100%;
  min-width: 230px;
  padding: 10px;
  transition: background-color .2s ease;
  background-color: ${props => props.isDraggingOver ? '#DDE4E9' : '#ECF1F8' };
`;