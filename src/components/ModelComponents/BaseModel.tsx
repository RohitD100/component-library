import { useEffect } from 'react'

export interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
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
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: 12,
          border: '0.5px solid #e5e5e5',
          width: 420,
          maxWidth: '90vw',
          padding: '1.5rem',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            border: 'none',
            background: 'transparent',
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            cursor: 'pointer',
            fontSize: 18,
            color: '#080101',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
