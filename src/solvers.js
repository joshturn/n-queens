/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var boardMatrix = board.rows();
  var count = 0;

  var func = function(matrix) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        matrix[i][j] = 1;
        count++;
        if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
          matrix[i][j] = 0;
          count--;
        }
        if (count === n) {
          return matrix;
        }
      }
    }
    return matrix;
  }

  var solution = func(boardMatrix);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var tempArray = [];
  var solutionArray = [];
  var board = new Board({n: n});
  var boardMatrix = board.rows();
  var count = 0;

  var func = function(matrix) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        matrix[i][j] = 1;
        count++;
        if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
          matrix[i][j] = 0;
          count--;
        }
        tempArray.push([i,j]);
        if (count === n) {
          solutionArray.push(matrix);
          matrix[tempArray[tempArray.length-1][0], tempArray[tempArray.length-1][1]] = 0;
          count--;
          tempArray.splice(-1);
        }
        if (i === (n-1) && j === (n-1)) {
          if (tempArray.length > 0) {
            //Undo the last addition to matrix
            matrix[tempArray[tempArray.length-1][0], tempArray[tempArray.length-1][1]] = 0;
            i = tempArray[tempArray.length-1][0];
            j = tempArray[tempArray.length-1][1];
          }
        }
      }
    }
  };
  func(boardMatrix);
  var solutionCount = solutionArray.length; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
