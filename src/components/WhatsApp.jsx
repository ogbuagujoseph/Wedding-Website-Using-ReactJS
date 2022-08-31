import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import WhatsappLogo from '../assets/images/whatsapp.svg'

const WhatsApp = () => {
  return (
    <FloatingWhatsApp
    phoneNumber='2348137640333'
    accountName='PeeJay22'
    allowClickAway
    WhatsappLogo={WhatsappLogo}
    notification
    notificationDelay={30000}
    darkMode
    defaultMessage={'Hello PeeJay22'}
    />
  )
}

export default WhatsApp