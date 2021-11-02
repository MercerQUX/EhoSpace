import style from "./FormControl.module.css";

export const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={hasError && style.error}>
        {props.dataType === "textarea" && (
          <textarea {...input} {...props}></textarea>
        )}
        {props.dataType === "input" && <input {...input} {...props} />}
      </div>
      {hasError && <span className={style.errorSpan}>{meta.error}</span>}
    </div>
  );
};
