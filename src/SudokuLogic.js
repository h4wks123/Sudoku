export const handleInputChange = (
  matrix,
  setMatrix,
  rowIndex,
  colIndex,
  newValue
) => {
  if (newValue >= 0 && newValue <= 5) {
    const newMatrix = matrix.map((row, r) =>
      row.map((value, c) =>
        r === rowIndex && c === colIndex ? newValue : value
      )
    );
    setMatrix(newMatrix);
  }
};

export const refreshSudoku = (setMatrix, setEditable) => {
  const newMatrix = Array(5)
    .fill()
    .map(() => Array(5).fill(0));
  setMatrix(newMatrix);
  setEditable(false);
};

export const toggleInsert = (editable, setEditable) => {
  setEditable(!editable);
};

// Validation function to check if initial inputs are valid
const isInitialInputValid = (matrix) => {
  // Check rows for duplicate values
  for (let row = 0; row < 5; row++) {
    const rowValues = new Set();
    for (let col = 0; col < 5; col++) {
      const value = matrix[row][col];
      if (value !== 0 && rowValues.has(value)) {
        return false;
      }
      rowValues.add(value);
    }
  }

  // Check columns for duplicate values
  for (let col = 0; col < 5; col++) {
    const colValues = new Set();
    for (let row = 0; row < 5; row++) {
      const value = matrix[row][col];
      if (value !== 0 && colValues.has(value)) {
        return false;
      }
      colValues.add(value);
    }
  }

  return true;
};

export const solveSudoku = (setMatrix, matrix) => {
  const newMatrix = matrix.map((row) => [...row]); // Create a copy of the input matrix.

  if (!isInitialInputValid(newMatrix)) {
    return false;
  }

  const isSafe = (row, col, num) => {
    // Check if 'num' is not already in the current row or column
    for (let i = 0; i < 5; i++) {
      if (newMatrix[row][i] === num || newMatrix[i][col] === num) {
        return false;
      }
    }

    return true;
  };

  const solve = () => {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (newMatrix[row][col] === 0) {
          for (let num = 1; num <= 5; num++) {
            if (isSafe(row, col, num)) {
              newMatrix[row][col] = num;
              if (solve()) {
                return true;
              }
              newMatrix[row][col] = 0; // If this path doesn't lead to a solution, backtrack.
            }
          }
          return false; // No valid number can be placed in this cell.
        }
      }
    }
    return true; // All cells are filled.
  };

  if (solve()) {
    setMatrix(newMatrix);
    return true;
  } else {
    return false;
  }
};
