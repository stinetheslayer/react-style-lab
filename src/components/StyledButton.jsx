import { styled } from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
  
  // Without a white space after & it's the button itself that should be hovered
  // With a white space between & and : you would be targeting child elements inside of the button that are being hovered
  &:hover {
    background-color: #f0920e;
  }
`;

export default StyledButton;