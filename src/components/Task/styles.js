import styled, { css } from 'styled-components';

const dragging = css`
  background-color: rgba(255,255,255,0.8);
  box-shadow: 0 4px 16px 0 rgba(192,208,230,.5);
  filter: blur(0.5px);
`;

const notDragging = css`
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(192,208,230,.8);
`;

export const Container = styled.div`
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
  transition: all .2s ease;
  ${props => props.isDragging ? dragging : notDragging}
`;
