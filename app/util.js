export function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.charAt(0) === '"' || word.charAt(0) === "(")
        return word.charAt(1).toUpperCase() + word.slice(2).toLowerCase();

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
