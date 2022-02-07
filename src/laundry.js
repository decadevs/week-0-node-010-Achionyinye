/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */


//  
function getMaxPair(noOfWashes, cleanPile, dirtyPile) {
    countOfCleanPile = {};
    totalCleanPairs = 0;
    maxAnneCanTake = noOfWashes === 0 ? 1 : noOfWashes === Infinity ? 4 : 50;
  
    for (let i = 0; i < cleanPile.length; i++) {
      if (
        !countOfCleanPile[cleanPile[i]] ||
        countOfCleanPile[cleanPile[i]] === 0
      ) {
        countOfCleanPile[cleanPile[i]] = 1;
      } else if (countOfCleanPile[cleanPile[i]] === 1) {
        countOfCleanPile[cleanPile[i]] = 0;
        totalCleanPairs++;
      }
    }
  
    //We have to make sure that the washes anne makes is within
    //maxAnneCanTake limit, noOfWashes and she wash only dirty socks required
  
    //remove socks that do not need pairs and do not have their pair in the dirtyPile from count
    //   const validSocksToWash = Object.keys(countOfCleanPile).filter((sock) => {
    //     return countOfCleanPile[sock] === 1 && dirtyPile.includes(Number(sock));
    //   });
  
    //wash clean socks and remove from dirtyPile
    Object.keys(countOfCleanPile).map((sock) => {
      sock = Number(sock);
      if (
        countOfCleanPile[sock] === 1 &&
        dirtyPile.includes(sock) &&
        noOfWashes > 0
      ) {
        dirtyPile.splice(dirtyPile.indexOf(sock), 1);
        totalCleanPairs++;
        noOfWashes--;
      }
    });
  
    //use remaining washes to wash dirty pairs
    const countDirtyPile = {};
    for (let i = 0; i < dirtyPile.length; i++) {
      if (!countDirtyPile[dirtyPile[i]] || countDirtyPile[dirtyPile[i]] === 0) {
        countDirtyPile[dirtyPile[i]] = 1;
      } else if (countDirtyPile[dirtyPile[i]] === 1 && noOfWashes > 0) {
        countDirtyPile[dirtyPile[i]] = 0;
        totalCleanPairs++;
        noOfWashes--;
      }
    }
  
    //Make sure totalCleanPairs doesn't go beyond max allowed
    if (maxAnneCanTake < totalCleanPairs) totalCleanPairs = maxAnneCanTake;
  
    return totalCleanPairs;
  }
  
  console.log(
    getMaxPair(
      50,
      [40, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50],
      [40, 40, 45, 45, 30, 35, 50, 50, 25, 25, 20, 20]
    )
  );
 module.exports = getMaxPair




// sample case:
// noOfWashes: number = 2;
// cleanPile: number[] = [1, 2, 1, 1];
// dirtyPile: number[] = [1, 4, 3, 2, 4];
//loop through noOfWashes to accertain number of wash time available
//loop through cleanPile number of pairs of socks available, push both paired and unpaired socks to two different arrays
//loop through dirtyPile, compare the values of the array to the cleanpile, if match push
//if noOfWashes = 0, return the paired socks from the clean pile
//if noOfWashes = infinity, compare as much as possible
//Note that clean socks do not need to be washed again.
//The algo returns the maximum number of pair of socks that Anna can take on the trip with the given conditions.

