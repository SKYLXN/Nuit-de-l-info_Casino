import React from 'react';
import { useEffect, useState, useRef } from 'react';
import '../css/homePage.css';

const ROWS = 20;
const COLS = 10;
const EMPTY_CELL = 0;
const BLOCK_SIZE = 30;

const shapes = [
  [[1, 1, 1, 1]],
  [[1, 1], [1, 1]],
  [[1, 1, 1], [1, 0, 0]],
  [[1, 1, 1], [0, 0, 1]],
  [[1, 1, 1], [0, 1, 0]],
];

export default function Page404() {
  const [board, setBoard] = useState(Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY_CELL)));
  const [currentShape, setCurrentShape] = useState(null);
  const [position, setPosition] = useState({ row: 0, col: Math.floor(COLS / 2) - 1 });
  const [gameOver, setGameOver] = useState(false);

  const requestRef = useRef();

  const drawShape = () => {
    if (!currentShape) return;
    const newBoard = board.map(row => row.slice());
    const { row, col } = position;
    currentShape.forEach((rowShape, i) => {
      rowShape.forEach((cell, j) => {
        if (cell) {
          newBoard[row + i][col + j] = 1;
        }
      });
    });
    setBoard(newBoard);
  };

  const removeCompleteRows = () => {
    const newBoard = board.filter(row => row.includes(EMPTY_CELL));
    const removedRows = ROWS - newBoard.length;
    for (let i = 0; i < removedRows; i++) {
      newBoard.unshift(Array(COLS).fill(EMPTY_CELL));
    }
    setBoard(newBoard);
  };

  const checkCollision = (shape, pos) => {
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j] && (board[pos.row + i] && board[pos.row + i][pos.col + j]) !== EMPTY_CELL) {
          return true;
        }
      }
    }
    return false;
  };

  const moveShape = (direction) => {
    const newPosition = { ...position };
    if (direction === 'left') {
      newPosition.col -= 1;
    } else if (direction === 'right') {
      newPosition.col += 1;
    } else if (direction === 'down') {
      newPosition.row += 1;
    }

    if (!checkCollision(currentShape, newPosition)) {
      setPosition(newPosition);
    }
  };

  const rotateShape = () => {
    const newShape = currentShape[0].map((val, i) =>
      currentShape.map(row => row[i]).reverse()
    );
    if (!checkCollision(newShape, position)) {
      setCurrentShape([newShape]);
    }
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        moveShape('left');
        break;
      case 'ArrowRight':
        moveShape('right');
        break;
      case 'ArrowDown':
        moveShape('down');
        break;
      case 'ArrowUp':
        rotateShape();
        break;
      default:
        break;
    }
  };

  const gameLoop = () => {
    moveShape('down');
  };

  const startGame = () => {
    setBoard(Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY_CELL)));
    setCurrentShape(shapes[Math.floor(Math.random() * shapes.length)]);
    setPosition({ row: 0, col: Math.floor(COLS / 2) - 1 });
    setGameOver(false);
    requestRef.current = requestAnimationFrame(gameLoop);
  };

  const endGame = () => {
    setGameOver(true);
    cancelAnimationFrame(requestRef.current);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    if (gameOver) {
      alert('Game Over! Your score is: ');
      endGame();
    } else {
      drawShape();
      removeCompleteRows();
      if (position.row + currentShape.length === ROWS || checkCollision(currentShape, { ...position, row: position.row + 1 })) {
        endGame();
      }
    }
  }, [board, currentShape, gameOver, position]);

  return (
    <div>
      <div>
        {board.map((row, i) => (
          <div key={i} style={{ display: 'flex' }}>
            {row.map((cell, j) => (
              <div
                key={j}
                style={{
                  width: BLOCK_SIZE,
                  height: BLOCK_SIZE,
                  backgroundColor: cell ? 'black' : 'white',
                  border: '1px solid #ccc',
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};