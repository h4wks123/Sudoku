import React, { useState } from "react";
import {
  handleInputChange,
  refreshSudoku,
  toggleInsert,
  solveSudoku,
} from "./SudokuLogic";

const Sudoku = () => {
  const [matrix, setMatrix] = useState(
    Array(5)
      .fill()
      .map(() => Array(5).fill(0))
  );
  const [editable, setEditable] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-green-600 text-4xl">SUDOKU</h1>
      <div className="w-1/2 h-3/4 bg-tier2 rounded-md mt-5">
        <table className="table-fixed w-full h-full">
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((value, colIndex) => (
                  <td className="w-1/5 text-center" key={colIndex}>
                    {editable ? (
                      <input
                        className="w-1/3"
                        value={value}
                        onChange={(e) => {
                          const newValue = parseInt(e.target.value, 10) || 0;
                          handleInputChange(
                            matrix,
                            setMatrix,
                            rowIndex,
                            colIndex,
                            newValue
                          );
                        }}
                      />
                    ) : (
                      <span>{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-5"
          onClick={() => refreshSudoku(setMatrix, setEditable)}
        >
          Refresh
        </button>
        <button
          className="bg-blue-500 hover-bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-5"
          onClick={() => toggleInsert(editable, setEditable)}
        >
          {editable ? "Save" : "Insert"}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => solveSudoku(setMatrix, matrix)}
        >
          Solve
        </button>
      </div>
    </div>
  );
};

export default Sudoku;
