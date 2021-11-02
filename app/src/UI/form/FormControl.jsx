import style from "./FormControl.module.css";

export const FormControl = ({ input, meta, ...props }) => {
  console.log(props, input, meta);
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={hasError && style.error}>
        {props.type === "textarea" && (
          <textarea {...input} {...props}></textarea>
        )}
        {props.type === "input" && <input {...input} {...props} />}
      </div>
      {hasError && <span className={style.errorSpan}>{meta.error}</span>}
    </div>
  );
};
