import React, { useState } from "react";
import {
  handleInputChange,
  refreshSudoku,
  toggleInsert,
  solveSudoku,
} from "./SudokuLogic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sudoku = () => {
  const [matrix, setMatrix] = useState(
    Array(5)
      .fill()
      .map(() => Array(5).fill(0))
  );

  const [editable, setEditable] = useState(false);

  const handleSolveSudoku = () => {
    const isSolved = solveSudoku(setMatrix, matrix);
    if (isSolved) {
      toast.success("Sudoku is solved!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("No solution available!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-green-600 text-4xl font-semibold">
        SUDOKU PROBLEM SOLVER
      </h1>
      <div className="w-1/2 h-3/4 bg-tier2 border-b-4 border-l-4 border-green-800 rounded-md mt-5">
        <table className="table-fixed w-full h-full">
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t-4 border-green-800">
                {row.map((value, colIndex) => (
                  <td
                    className="w-1/5 text-center border-r-4 border-green-800"
                    key={colIndex}
                  >
                    {editable ? (
                      <input
                        className="w-1/3 bg-gray-300 rounded-sm text-lg"
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
                      <span className="text-lg">{value}</span>
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
          className="bg-tier2 hover:bg-tier3 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-700 rounded mr-5"
          onClick={() => refreshSudoku(setMatrix, setEditable)}
        >
          Refresh
        </button>
        <button
          className="bg-tier2 hover:bg-tier3 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-700 rounded mr-5"
          onClick={() => toggleInsert(editable, setEditable)}
        >
          {editable ? "Save" : "Insert"}
        </button>
        <button
          className="bg-tier2 hover:bg-tier3 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-700 rounded"
          onClick={handleSolveSudoku}
        >
          Solve
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sudoku;
