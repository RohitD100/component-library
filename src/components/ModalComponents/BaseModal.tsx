import { useEffect } from 'react'
import './modalStyling.css'

export interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  
}

export default function BaseModal({ isOpen, onClose, children }: BaseModalProps) {
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
      className="modal-overlay"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-panel"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="modal-close-btn"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

