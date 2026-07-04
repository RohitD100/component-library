import { useEffect } from 'react'
import type { BaseModalProps } from './types'
import { modalOverlay, modalPanel, modalCloseBtn } from './modalStyling'

export default function BaseModal({
  isOpen,
  onClose,
  children,
  overlayClassName,
  panelClassName,
}: BaseModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className={overlayClassName ?? modalOverlay}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={panelClassName ?? modalPanel}
      >
        <button onClick={onClose} aria-label="Close" className={modalCloseBtn}>
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}