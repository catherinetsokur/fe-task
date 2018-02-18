export const getColor = (rating: number): string => { // eslint-disable-line
  switch (rating) {
    case 1:
      return 'red';
    case 2:
      return 'orange';
    case 3:
      return 'yellow';
    case 4:
      return 'olive';
    case 5:
      return 'green';
    default:
      return 'green';
  }
};
