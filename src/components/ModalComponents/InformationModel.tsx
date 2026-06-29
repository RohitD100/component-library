import { useState } from 'react'
import BaseModal from './BaseModal'
import './modalStyling.css'

export interface InformationModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

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
      <div className="modal-body">

        {/* Header */}
        <div className="modal-header">
          <div className="modal-icon">📋</div>
          <h2 className="modal-title">Terms & Conditions</h2>
        </div>

        {/* Scrollable content */}
        <div className="modal-scroll-content">
          <p className="section-heading">1. Acceptance of Terms</p>
          <p>
            By accessing or using our service, you agree to be bound by these Terms and Conditions.
            If you do not agree, please do not use our service.
          </p>

          <p className="section-heading">2. Use of Service</p>
          <p>
            You agree to use the service only for lawful purposes and in a way that does not
            infringe the rights of others or restrict their use of the service.
          </p>

          <p className="section-heading">3. Privacy Policy</p>
          <p>
            Your use of the service is also governed by our Privacy Policy, which is incorporated
            into these terms by reference.
          </p>

          <p className="section-heading">4. Changes to Terms</p>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the service
            after changes constitutes acceptance of the new terms.
          </p>
        </div>

        {/* Checkbox */}
        <label className="modal-checkbox-label">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          I have read and agree to the Terms & Conditions
        </label>

        {/* Footer */}
        <div className="modal-footer">
          <button onClick={handleClose} className="btn-cancel">
            Cancel
          </button>
          <button
            onClick={handleAccept}
            disabled={!checked}
            className="btn-primary"
          >
            Accept & Continue
          </button>
        </div>

      </div>
    </BaseModal>
  )
}
