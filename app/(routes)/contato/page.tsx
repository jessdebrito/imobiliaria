import ContactForm from '@/components/contact-form'
import React from 'react'

export default function Contact() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Entre em contato</h1>
      <p className="text-gray-500 mb-8">Reserve o quanto antes e não perca o imóvel dos seus sonhos.</p>
      <ContactForm />
    </div>
  </div>
)
}
