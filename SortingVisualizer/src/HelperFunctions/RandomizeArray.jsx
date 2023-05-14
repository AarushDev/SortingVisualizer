export default function RandomizeArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * (100 - 1 + 1) + 1));
  }

  return array;
}
