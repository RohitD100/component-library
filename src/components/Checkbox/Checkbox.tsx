import { forwardRef, useRef, useEffect, useId } from "react";
import type { CheckboxProps } from "./types";
import { injectStyles } from "./checkboxStyle";

function CheckIcon() {
  return (
    <svg className="cb-icon" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IndeterminateIcon() {
  return (
    <svg className="cb-icon" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6H9.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    label,
    description,
    error,
    checked,
    defaultChecked,
    indeterminate = false,
    disabled = false,
    size = "md",
    onChange,
    className = "",
    id: idProp,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    ...rest
  },
  ref
) {
  useEffect(() => { injectStyles(); }, []);

  const uid = useId();
  const inputId = idProp ?? `cb-${uid}`;
  const descId = description ? `${inputId}-desc` : undefined;
  const errId = error ? `${inputId}-err` : undefined;

  const innerRef = useRef<HTMLInputElement>(null);

  function setRef(node: HTMLInputElement | null) {
    (innerRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
  }

  useEffect(() => {
    if (innerRef.current) innerRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const describedBy = [ariaDescribedBy, descId, errId].filter(Boolean).join(" ") || undefined;
  const isChecked = checked !== undefined ? checked : false;

  const boxClasses = [
    "cb-box",
    (isChecked || indeterminate) && "cb-box--checked",
    indeterminate && "cb-box--indeterminate",
    error && "cb-box--error",
    disabled && "cb-box--disabled",
  ].filter(Boolean).join(" ");

  const rootClasses = [
    "cb-root",
    `cb-root--${size}`,
    disabled && "cb-root--disabled",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={rootClasses}>
      <label className="cb-row" htmlFor={inputId}>
        <input
          {...rest}
          ref={setRef}
          id={inputId}
          type="checkbox"
          className="cb-input"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          aria-label={!label ? ariaLabel : undefined}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          aria-checked={indeterminate ? "mixed" : undefined}
        />
        <span className={boxClasses} aria-hidden="true">
          {indeterminate ? <IndeterminateIcon /> : isChecked ? <CheckIcon /> : null}
        </span>
        {label && <span className="cb-label">{label}</span>}
      </label>

      {description && <span id={descId} className="cb-description">{description}</span>}
      {error && <span id={errId} className="cb-error-msg" role="alert">{error}</span>}
    </div>
  );
});

Checkbox.displayName = "Checkbox";
export { Checkbox };