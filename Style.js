import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
`;

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const CalculatorWrapper = styled.div`
  width: 320px;
  background: #333;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const DisplayStyled = styled.div`
  background: #000;
  color: #ffa500;
  font-size: 2em;
  padding: 20px;
  text-align: right;
  border-radius: 10px 10px 0 0;
  min-height: 60px;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
`;

export const ButtonStyled = styled.button`
  background: #666;
  color: white;
  border: none;
  font-size: 1.5em;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background: #888;
  }

  &:active {
    background: #aaa;
  }
`;

export const primaryButtons = [
  '(', ')', 'mc', 'm+', 'm-', 'mr',
  '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ',
  '1/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀',
  'x!', 'sin', 'cos', 'tan', 'e', 'EE',
  'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand',
  '7', '8', '9', '÷', 'AC',
  '4', '5', '6', '×', '+/-',
  '1', '2', '3', '−', '%',
  '0', '.', '=', '+'
];

export const secondaryButtons = [
  '(', ')', 'mc', 'm+', 'm-', 'mr',
  '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ',
  '1/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀',
  'x!', 'sin', 'cos', 'tan', 'e', 'EE',
  'Deg', 'sinh', 'cosh', 'tanh', 'π', 'Rand',
  '7', '8', '9', '÷', 'AC',
  '4', '5', '6', '×', '+/-',
  '1', '2', '3', '−', '%',
  '0', '.', '=', '+'
];
