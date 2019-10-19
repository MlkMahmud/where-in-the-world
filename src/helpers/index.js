export const formatArrayItem = (item = []) => {
  if (item.length < 1) {
    return "";
  }
  const formattedItem = item.map(({ name }) => name);
  return formattedItem.join(', ');
};

