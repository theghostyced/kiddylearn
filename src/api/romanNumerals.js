const romanMap = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': '9',
  'V': 5,
  'IV': 4,
  'I': 1
}

const toRoman = (value) => {
  let roman = '';
  let i;

  // TODO: Add a toast notification over here!
  if (isNaN(value)) return;

  for (i in romanMap) {
    const currentValue = romanMap[i];

    while(value >= currentValue) {
      roman = roman + i;
      value = value - currentValue;
    }
  }

  return roman;
};

const fromRoman = (value) => {
  let sum = 0;

  // Splitting the string into a list so we can perform operations
  // on each index
  const arr = value.toUpperCase().split('');

  if (arr.length === 1) return romanMap[arr[0]]

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const currValue = romanMap[current];

    const next = arr[i + 1];
    const nextValue = romanMap[next];

    if (currValue < nextValue) {
      sum = sum - currValue;
    } else {
      sum =  sum + currValue;
    }
  }

  return sum;
};

const RomanNumerals = {
  toRoman,
  fromRoman
};

export default RomanNumerals;
