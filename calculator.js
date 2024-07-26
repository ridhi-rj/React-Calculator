import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import ConfettiExplosion from 'react-confetti-explosion';
import Button from './Button';
import Display from './Display';
import {
  CalculatorContainer,
  CalculatorWrapper,
  ButtonGrid,
  primaryButtons,
  secondaryButtons,
} from './styles';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [prevResult, setPrevResult] = useState(null);
  const [memory, setMemory] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [radians, setRadians] = useState(true);

  const handleClick = (value) => {
    switch (value) {
      case 'AC':
        setDisplay('');
        setPrevResult(null);
        break;
      case '=':
        try {
          const result = evaluate(display.replace('×', '*').replace('÷', '/'));
          if (isNaN(result) || !isFinite(result)) {
            setDisplay('Error');
          } else {
            setDisplay(result.toString());
            setPrevResult(result);
            checkForConfettiExplosion(display);
          }
        } catch (error) {
          setDisplay('Error');
        }
        break;
      case '+/-':
        setDisplay((prevDisplay) => {
          if (prevDisplay.startsWith('-')) {
            return prevDisplay.substring(1);
          } else {
            return '-' + prevDisplay;
          }
        });
        break;
      case '%':
        setDisplay((prevDisplay) => (parseFloat(prevDisplay) / 100).toString());
        break;
      case 'MC':
        setMemory(0);
        break;
      case 'M+':
        setMemory((prevMemory) => prevMemory + parseFloat(display));
        break;
      case 'M-':
        setMemory((prevMemory) => prevMemory - parseFloat(display));
        break;
      case 'MR':
        setDisplay(memory.toString());
        break;
      case '2nd':
        setSecondary(!secondary);
        break;
      case 'x²':
        setDisplay((prevDisplay) => Math.pow(parseFloat(prevDisplay), 2).toString());
        break;
      case 'x³':
        setDisplay((prevDisplay) => Math.pow(parseFloat(prevDisplay), 3).toString());
        break;
      case 'xʸ':
        setDisplay((prevDisplay) => `${prevDisplay}^`);
        break;
      case 'eˣ':
        setDisplay((prevDisplay) => Math.exp(parseFloat(prevDisplay)).toString());
        break;
      case '10ˣ':
        setDisplay((prevDisplay) => Math.pow(10, parseFloat(prevDisplay)).toString());
        break;
      case '¹/x':
        setDisplay((prevDisplay) => (1 / parseFloat(prevDisplay)).toString());
        break;
      case '²√x':
        setDisplay((prevDisplay) => Math.sqrt(parseFloat(prevDisplay)).toString());
        break;
      case '³√x':
        setDisplay((prevDisplay) => Math.cbrt(parseFloat(prevDisplay)).toString());
        break;
      case 'ʸ√x':
        setDisplay((prevDisplay) => `${prevDisplay}^(1/`);
        break;
      case 'ln':
        setDisplay((prevDisplay) => Math.log(parseFloat(prevDisplay)).toString());
        break;
      case 'log₁₀':
        setDisplay((prevDisplay) => Math.log10(parseFloat(prevDisplay)).toString());
        break;
      case 'x!':
        const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
        setDisplay((prevDisplay) => factorial(parseFloat(prevDisplay)).toString());
        break;
      case 'sin':
        setDisplay((prevDisplay) => (radians ? Math.sin(parseFloat(prevDisplay)) : Math.sin((parseFloat(prevDisplay) * Math.PI) / 180)).toString());
        break;
      case 'cos':
        setDisplay((prevDisplay) => (radians ? Math.cos(parseFloat(prevDisplay)) : Math.cos((parseFloat(prevDisplay) * Math.PI) / 180)).toString());
        break;
      case 'tan':
        setDisplay((prevDisplay) => (radians ? Math.tan(parseFloat(prevDisplay)) : Math.tan((parseFloat(prevDisplay) * Math.PI) / 180)).toString());
        break;
      case 'e':
        setDisplay((prevDisplay) => prevDisplay + Math.E.toString());
        break;
      case 'EE':
        setDisplay((prevDisplay) => prevDisplay + 'e');
        break;
      case 'Rad':
      case 'Deg':
        setRadians(!radians);
        break;
      case 'sinh':
        setDisplay((prevDisplay) => Math.sinh(parseFloat(prevDisplay)).toString());
        break;
      case 'cosh':
        setDisplay((prevDisplay) => Math.cosh(parseFloat(prevDisplay)).toString());
        break;
      case 'tanh':
        setDisplay((prevDisplay) => Math.tanh(parseFloat(prevDisplay)).toString());
        break;
      case 'π':
        setDisplay((prevDisplay) => prevDisplay + Math.PI.toString());
        break;
      case 'Rand':
        setDisplay(Math.random().toString());
        break;
      default:
        if (['+', '−', '×', '÷'].includes(value) && prevResult !== null) {
          setDisplay(prevResult + value);
          setPrevResult(null);
        } else {
          setDisplay(display + value);
        }
        break;
    }
  };

  const checkForConfettiExplosion = (expression) => {
    const confettiTrigger = /(5\s*[\+\-\*\/]\s*6)|(6\s*[\+\-\*\/]\s*5)/;
    if (confettiTrigger.test(expression)) {
      setIsExploding(true);
      setTimeout(() => setIsExploding(false), 3000); // 3 seconds confetti explosion
    }
  };

  return (
    <CalculatorContainer>
      {isExploding && <ConfettiExplosion />}
      <CalculatorWrapper>
        <Display value={display} />
        <ButtonGrid>
          {(secondary ? secondaryButtons : primaryButtons).map((btn, index) => (
            <Button key={index} label={btn} onClick={() => handleClick(btn)} />
          ))}
        </ButtonGrid>
      </CalculatorWrapper>
    </CalculatorContainer>
  );
};

export default Calculator;
