import { useState } from 'react'
import BaseModal from './BaseModal'
import type { InformationModalProps } from './types'
import { modalBody, modalHeader, modalIcon, modalTitle, modalScrollContent, sectionHeading, modalCheckboxLabel, modalCheckboxInput, modalFooter, btnCancel, btnPrimary } from './modalStyling'

export default function InformationModal({
  isOpen,
  onClose,
  onAccept,
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
          <div className={modalIcon}>📋</div>
          <h2 className={modalTitle}>Terms & Conditions</h2>
        </div>
        <div className={modalScrollContent}>
          <p className={sectionHeading}>1. Acceptance of Terms</p>
          <p>By accessing or using our service, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our service.</p>
          <p className={sectionHeading}>2. Use of Service</p>
          <p>You agree to use the service only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the service.</p>
          <p className={sectionHeading}>3. Privacy Policy</p>
          <p>Your use of the service is also governed by our Privacy Policy, which is incorporated into these terms by reference.</p>
          <p className={sectionHeading}>4. Changes to Terms</p>
          <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
        </div>
        <label className={modalCheckboxLabel}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className={modalCheckboxInput}
          />
          I have read and agree to the Terms & Conditions
        </label>
        <div className={modalFooter}>
          <button onClick={handleClose} className={btnCancel}>Cancel</button>
          <button onClick={handleAccept} disabled={!checked} className={btnPrimary}>
            Accept & Continue
          </button>
        </div>
      </div>
    </BaseModal>
  )
}