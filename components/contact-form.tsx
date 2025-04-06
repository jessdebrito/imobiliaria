"use client";

import { useState, FormEvent, ChangeEvent } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({});
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 py-6 px-6 md:px-8">
        <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
        <p className="text-teal-100 mt-1">We'd love to hear from you</p>
      </div>

      <div className="p-6 md:p-8">
        {submitStatus.message && (
          <div
            className={`p-4 mb-6 rounded-md ${
              submitStatus.success
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-150 ease-in-out ${
                errors.name ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="Seu nome"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-150 ease-in-out ${
                errors.email ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="exemplo@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-150 ease-in-out ${
                errors.subject ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="Sobre o quê é a sua mensagem"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-150 ease-in-out ${
                errors.message ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="Escreva a sua mensagem aqui"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
