import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.isDragging ? '#f5f7fb' : '#fff'};
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(192,208,230,.8);
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color .2s ease;
`;
