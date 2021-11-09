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

export const maxLength15 = maxLengthCreator(15);
export const maxLength100 = maxLengthCreator(100);
export const maxLength150 = maxLengthCreator(150);
export const maxLength430 = maxLengthCreator(430);
