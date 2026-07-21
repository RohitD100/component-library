import { useState } from 'react'
import BaseModal from './BaseModal'
import { Checkbox } from "../Checkbox/Checkbox" 
import type { InformationModalProps } from './types'
import { defaultSections } from './helper'
import {
  modalBody,
  modalHeader,
  modalIcon,
  modalTitle,
  modalScrollContent,
  sectionHeading,
  modalCheckboxLabel,
  modalFooter,
  btnCancel,
  btnPrimary,
} from './modalStyling'

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
        <div className={modalHeader}>
          <div className={modalIcon}>{icon}</div>
          <h2 className={modalTitle}>{title}</h2>
        </div>

        <div className={modalScrollContent}>
          {sections.map((section, index) => (
            <div key={index}>
              <p className={sectionHeading}>{section.heading}</p>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          label={checkboxLabel}
          className={modalCheckboxLabel}
        />

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