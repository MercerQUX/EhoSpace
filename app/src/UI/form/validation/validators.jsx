export const required = (value) => {
  if (value) {
    return undefined;
  } else {
    return "You entered an empty field";
  }
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value !== undefined) {
    if (value.length > maxLength) {
      return (
        "You have exceeded the allowed character value (" + maxLength + ")"
      );
    } else {
      return 0;
    }
  }
};

export const maxLength15 = (value) => {
  if (value !== undefined) {
    if (value.length > 15) {
      return "You have exceeded the allowed character value (15)";
    } else {
      return undefined;
    }
  }
};

export const maxLength150 = (value) => {
  if (value !== undefined) {
    if (value.length > 150) {
      return "You have exceeded the allowed character value (150)";
    } else {
      return undefined;
    }
  }
};

export const maxLength100 = (value) => {
  if (value !== undefined) {
    if (value.length > 100) {
      return "You have exceeded the allowed character value (100)";
    } else {
      return undefined;
    }
  }
};
