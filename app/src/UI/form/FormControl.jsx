


export const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div>
        {props.dataType === "textarea" && (
          <textarea {...input} {...props}></textarea>
        )}
        {props.dataType === "input" && <input {...input} {...props} />}
        {/* {hasError && <span className={style.errorSpan}>{meta.error}</span>} */}
      </div>
      
    </div>
  );
};
