export const firstThreeMonths = (start, month, year) => {
  // TODO:Fix this function to account for year changes.

  let date = start.split("-");

  if (date[0] == year) {
    if (month - date[1] < 3) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
