import ContactForm from '@/components/contact-form'
import React from 'react'

const headerContact = {
  title: "Contato",
  subtitle: "Reserve o quanto antes e não perca o imóvel dos seus sonhos.",
};
export default function Contact() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
    <div>
        <h2 className="mt-14  text-center tracking-wide text-gray-600 text-xl font-bold uppercase -mb-1">
          {headerContact.title}
        </h2>
        <h3 className="text-center tracking-wide text-black text-3xl pb-6">
          {headerContact.subtitle}
        </h3>
      </div>
      <ContactForm />
    </div>
)
}
