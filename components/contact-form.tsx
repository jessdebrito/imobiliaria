"use client"
import { useState, FormEvent, ChangeEvent } from "react";
import {
  Mail,
  User,
  MessagesSquare,
  Bookmark,
  Send,
  Loader2,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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

export default function ContactFormOption5() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

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
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Por favor, insira um e-mail válido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "A mensagem deve ter pelo menos 10 caracteres";
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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Agradecemos sua mensagem, em breve retornaremos.",
        variant: "default",
        className: "bg-green-50 border-green-200 text-green-800",
      });
    } catch {
      toast({
        title: "Erro ao enviar",
        description:
          "Houve um erro ao enviar sua mensagem, por favor tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto relative">

      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-amber-400 opacity-50"></div>
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-amber-400 opacity-30"></div>
      <div className="absolute top-1/3 -right-4 w-10 h-10 rounded-full bg-teal-400 opacity-40"></div>

      <div className="backdrop-blur-sm bg-white/80 rounded-2xl border border-gray-100 shadow-xl overflow-hidden relative z-10">
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-8">
          <div className="flex items-center space-x-2 mb-2">
            <MessagesSquare className="w-6 h-6 text-amber-100" />
            <h2 className="text-2xl font-bold text-white">Entre em contato</h2>
          </div>
          <p className="text-amber-100/90">
            Estamos ansiosos para atender você
          </p>
        </div>

        <div className="p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group">
              <label
                htmlFor="name"
                className="flex items-center text-sm font-medium mb-2 text-gray-700 group-focus-within:text-amber-600 transition-colors"
              >
                <User className="w-4 h-4 mr-2 text-amber-500" />
                <span>Nome</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 ${
                  errors.name ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-1.5"></span>
                  {errors.name}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="flex items-center text-sm font-medium mb-2 text-gray-700 group-focus-within:text-amber-600 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-amber-500" />
                <span>E-mail</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 ${
                  errors.email ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="exemplo@email.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-1.5"></span>
                  {errors.email}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="subject"
                className="flex items-center text-sm font-medium mb-2 text-gray-700 group-focus-within:text-amber-600 transition-colors"
              >
                <Bookmark className="w-4 h-4 mr-2 text-amber-500" />
                <span>Assunto</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 ${
                  errors.subject ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="Sobre o quê é a sua mensagem"
              />
              {errors.subject && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-1.5"></span>
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="flex items-center text-sm font-medium mb-2 text-gray-700 group-focus-within:text-amber-600 transition-colors"
              >
                <MessagesSquare className="w-4 h-4 mr-2 text-amber-500" />
                <span>Mensagem</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 ${
                  errors.message ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="Escreva a sua mensagem aqui"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-1.5"></span>
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex justify-end pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar mensagem</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
