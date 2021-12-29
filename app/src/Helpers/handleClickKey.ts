export const handleClickKey = (event: any, handleSubmit: () => any) => {
  if (event.charCode === 13) {
    if (event.ctrlKey === true) {
      let caret = event.target.selectionStart;
      event.target.setRangeText("\n", caret, caret, "end");
    } else {
      handleSubmit();
      event.preventDefault();
    }
  }
};
