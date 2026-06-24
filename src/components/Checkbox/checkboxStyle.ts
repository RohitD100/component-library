export const CHECKBOX_STYLES = `
:root {
  --cb-primary:         #8b5cf6;
  --cb-primary-hover:   #7c3aed;
  --cb-primary-ring:    rgba(139, 92, 246, 0.30);
  --cb-error:           #dc2626;
  --cb-error-ring:      rgba(220, 38, 38, 0.25);
  --cb-border:          #d1d5db;
  --cb-border-hover:    #9ca3af;
  --cb-bg:              #ffffff;
  --cb-check:           #ffffff;
  --cb-disabled-bg:     #f3f4f6;
  --cb-disabled-border: #d1d5db;
  --cb-disabled-text:   #9ca3af;
  --cb-label:           #111827;
  --cb-desc:            #6b7280;
  --cb-radius:          4px;
  --cb-dur:             150ms;
}

.cb-root { display: inline-flex; flex-direction: column; gap: 2px; font-family: inherit; }
.cb-root.cb-root--disabled { cursor: not-allowed; }

.cb-row { display: inline-flex; align-items: flex-start; gap: 10px; cursor: pointer; }
.cb-root--disabled .cb-row { cursor: not-allowed; }

.cb-input {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

.cb-box {
  position: relative; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  width: 18px; height: 18px; margin-top: 1px;
  background: var(--cb-bg);
  border: 1.5px solid var(--cb-border);
  border-radius: var(--cb-radius);
  transition: background var(--cb-dur) ease, border-color var(--cb-dur) ease, box-shadow var(--cb-dur) ease;
}

.cb-root--sm .cb-box { width: 14px; height: 14px; border-radius: 3px; }
.cb-root--lg .cb-box { width: 22px; height: 22px; border-radius: 5px; }

.cb-row:hover .cb-box { border-color: var(--cb-border-hover); }

.cb-input:focus-visible + .cb-box {
  outline: none;
  box-shadow: 0 0 0 3px var(--cb-primary-ring);
}

.cb-box--checked, .cb-box--indeterminate {
  background: var(--cb-primary);
  border-color: var(--cb-primary);
}
.cb-row:hover .cb-box--checked,
.cb-row:hover .cb-box--indeterminate {
  background: var(--cb-primary-hover);
  border-color: var(--cb-primary-hover);
}

.cb-box--error { border-color: var(--cb-error); }
.cb-input:focus-visible + .cb-box--error { box-shadow: 0 0 0 3px var(--cb-error-ring); }

.cb-box--disabled { background: var(--cb-disabled-bg); border-color: var(--cb-disabled-border); }
.cb-box--disabled.cb-box--checked,
.cb-box--disabled.cb-box--indeterminate {
  background: var(--cb-disabled-border);
  border-color: var(--cb-disabled-border);
}

.cb-icon {
  display: block; color: var(--cb-check); pointer-events: none;
  animation: cb-pop var(--cb-dur) ease both;
}
.cb-root--sm .cb-icon { width: 9px;  height: 9px; }
.cb-root--md .cb-icon { width: 11px; height: 11px; }
.cb-root--lg .cb-icon { width: 14px; height: 14px; }

@keyframes cb-pop {
  0%   { transform: scale(0.5); opacity: 0; }
  60%  { transform: scale(1.1); }
  100% { transform: scale(1);   opacity: 1; }
}

.cb-label { color: var(--cb-label); line-height: 1.5; user-select: none; }
.cb-root--sm .cb-label { font-size: 0.8125rem; }
.cb-root--md .cb-label { font-size: 0.875rem; }
.cb-root--lg .cb-label { font-size: 1rem; }
.cb-root--disabled .cb-label { color: var(--cb-disabled-text); }

.cb-description { color: var(--cb-desc); padding-left: 28px; }
.cb-root--sm .cb-description { font-size: 0.75rem;   padding-left: 24px; }
.cb-root--md .cb-description { font-size: 0.8125rem; padding-left: 28px; }
.cb-root--lg .cb-description { font-size: 0.875rem;  padding-left: 32px; }

.cb-error-msg { padding-left: 28px; font-size: 0.8125rem; color: var(--cb-error); }
.cb-root--sm .cb-error-msg { padding-left: 24px; font-size: 0.75rem; }
.cb-root--lg .cb-error-msg { padding-left: 32px; }

@media (prefers-reduced-motion: reduce) {
  .cb-box, .cb-icon { transition: none; animation: none; }
}
`;

export function injectStyles(): void {
  if (typeof document === "undefined") return;
  const id = "__cb_styles__";
  if (document.getElementById(id)) return;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = CHECKBOX_STYLES;
  document.head.appendChild(style);
}