import { forwardRef, useRef, useEffect, useId } from "react";
import type { CheckboxProps } from "./types";
import { CheckIcon, IndeterminateIcon } from "./IconsSvg";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
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
    const uid = useId();
    const inputId = idProp ?? `cb-${uid}`;
    const descId = description ? `${inputId}-desc` : undefined;
    const errId = error ? `${inputId}-err` : undefined;

    const innerRef = useRef<HTMLInputElement>(null);

    function setRef(node: HTMLInputElement | null) {
      innerRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const describedBy =
      [ariaDescribedBy, descId, errId].filter(Boolean).join(" ") || undefined;

    const isChecked = checked ?? false;

    const sizeClasses = {
      sm: {
        box: "h-4 w-4",
        text: "text-sm",
        padding: "pl-6",
      },
      md: {
        box: "h-5 w-5",
        text: "text-sm",
        padding: "pl-7",
      },
      lg: {
        box: "h-6 w-6",
        text: "text-base",
        padding: "pl-8",
      },
    };

    const currentSize = sizeClasses[size];

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        <label
          htmlFor={inputId}
          className={`flex items-start gap-2 ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <input
            {...rest}
            ref={setRef}
            id={inputId}
            type="checkbox"
            className="sr-only"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onChange={onChange}
            aria-label={!label ? ariaLabel : undefined}
            aria-describedby={describedBy}
            aria-invalid={!!error}
            aria-checked={indeterminate ? "mixed" : undefined}
          />

          <span
            className={`
              ${currentSize.box}
              flex items-center justify-center
              rounded border transition-all duration-150
              ${
                isChecked || indeterminate
                  ? "bg-violet-500 border-violet-500 text-white"
                  : "bg-white border-gray-300"
              }
              ${error ? "border-red-500" : ""}
              ${
                disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-gray-400"
              }
            `}
            aria-hidden="true"
          >
            {indeterminate ? (
              <IndeterminateIcon />
            ) : isChecked ? (
              <CheckIcon />
            ) : null}
          </span>

          {label && (
            <span
              className={`${currentSize.text} ${
                disabled ? "text-gray-400" : "text-gray-900"
              }`}
            >
              {label}
            </span>
          )}
        </label>

        {description && (
          <span
            id={descId}
            className={`${currentSize.padding} text-sm text-gray-500`}
          >
            {description}
          </span>
        )}

        {error && (
          <span
            id={errId}
            role="alert"
            className={`${currentSize.padding} text-sm text-red-600`}
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };