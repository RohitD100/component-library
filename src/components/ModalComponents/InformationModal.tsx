import { useState } from 'react'
import BaseModal from './BaseModal'
import type { InformationModalProps, InformationSection } from './types'
import {
  modalBody,
  modalHeader,
  modalIcon,
  modalTitle,
  modalScrollContent,
  sectionHeading,
  modalCheckboxLabel,
  modalCheckboxInput,
  modalFooter,
  btnCancel,
  btnPrimary,
} from './modalStyling'

const defaultSections: InformationSection[] = [
  {
    heading: '1. Acceptance of Terms',
    content: 'By accessing or using our service, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our service.',
  },
  {
    heading: '2. Use of Service',
    content: 'You agree to use the service only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the service.',
  },
  {
    heading: '3. Privacy Policy',
    content: 'Your use of the service is also governed by our Privacy Policy, which is incorporated into these terms by reference.',
  },
  {
    heading: '4. Changes to Terms',
    content: 'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.',
  },
]

export default function InformationModal({
  isOpen,
  onClose,
  onAccept,
  title = 'Terms & Conditions',
  icon = '📋',
  sections = defaultSections,
  checkboxLabel = 'I have read and agree to the Terms & Conditions',
  acceptText = 'Accept & Continue',
  cancelText = 'Cancel',
}: InformationModalProps) {
  const [checked, setChecked] = useState(false)

  const handleClose = () => {
    setChecked(false)
    onClose()
  }

  const handleAccept = () => {
    if (!checked) return
    setChecked(false)
    onAccept()
  }

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose}>
      <div className={modalBody}>

        {/* Header */}
        <div className={modalHeader}>
          <div className={modalIcon}>{icon}</div>
          <h2 className={modalTitle}>{title}</h2>
        </div>

        {/* Scrollable content */}
        <div className={modalScrollContent}>
          {sections.map((section, index) => (
            <div key={index}>
              <p className={sectionHeading}>{section.heading}</p>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        {/* Checkbox */}
        <label className={modalCheckboxLabel}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className={modalCheckboxInput}
          />
          {checkboxLabel}
        </label>

        {/* Footer */}
        <div className={modalFooter}>
          <button onClick={handleClose} className={btnCancel}>
            {cancelText}
          </button>
          <button onClick={handleAccept} disabled={!checked} className={btnPrimary}>
            {acceptText}
          </button>
        </div>

      </div>
    </BaseModal>
  )
}