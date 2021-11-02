export const required = (value) => {
  if (value) {
    return undefined;
  } else {
    return "You entered an empty field";
  }
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return "You have exceeded the allowed character value ("+maxLength+")";
  } else {
    return 0;
  }
};

export const maxLength20 = (value) => {
  if (value.length > 20) {
    return "You have exceeded the allowed character value (20)";
  } else {
    return undefined;
  }
};

export const maxLength150 = (value) => {
  if (value.length > 150) {
    return "You have exceeded the allowed character value (150)";
  } else {
    return undefined;
  }
};
