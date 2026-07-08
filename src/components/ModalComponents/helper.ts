// src/components/ModalComponents/helper.ts
import type { InformationSection } from './types'

export const defaultSections: InformationSection[] = [
  {
    heading: '1. Acceptance of Terms',
    content:
      'By accessing or using our service, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our service.',
  },
  {
    heading: '2. Use of Service',
    content:
      'You agree to use the service only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the service.',
  },
  {
    heading: '3. Privacy Policy',
    content:
      'Your use of the service is also governed by our Privacy Policy, which is incorporated into these terms by reference.',
  },
  {
    heading: '4. Changes to Terms',
    content:
      'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.',
  },
]