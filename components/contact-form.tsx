"use client"

import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, User, MessagesSquare, Bookmark, Send, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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

export default function ContactFormOption4() {
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
        description: "Houve um erro ao enviar sua mensagem, por favor tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="bg-gradient-to-br from-[#f5ef50] via-[#f5ef50] to-[#e6dd47] p-8 text-gray-800 md:w-2/5 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Entre em contato</h2>
          <p className="mb-6 opacity-90">Não perca tempo e marque uma visita ao imóvel dos seus sonhos</p>
          <div className="hidden md:block">
            <div className="flex items-center mb-4">
              <div className="bg-black/10 p-2 rounded-full mr-3">
                <Mail className="h-5 w-5" />
              </div>
              <span className="text-sm">contato@exemplo.com</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-black/10 p-2 rounded-full mr-3">
                <User className="h-5 w-5" />
              </div>
              <span className="text-sm">(11) 98765-4321</span>
            </div>
          </div>
        </div>
        <Card className="border-0 shadow-none flex-1 rounded-none bg-white">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
                  <User className="w-4 h-4 mr-2 text-[#f5ef50]" />
                  <span>Nome</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#f5ef50] focus:border-transparent transition ${
                    errors.name ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
                  <Mail className="w-4 h-4 mr-2 text-[#f5ef50]" />
                  <span>E-mail</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#f5ef50] focus:border-transparent transition ${
                    errors.email ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="exemplo@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
                  <Bookmark className="w-4 h-4 mr-2 text-[#f5ef50]" />
                  <span>Assunto</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#f5ef50] focus:border-transparent transition ${
                    errors.subject ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="Sobre o quê é a sua mensagem"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
                  <MessagesSquare className="w-4 h-4 mr-2 text-[#f5ef50]" />
                  <span>Mensagem</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#f5ef50] focus:border-transparent transition ${
                    errors.message ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="Escreva a sua mensagem aqui"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <CardFooter className="px-0 pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#f5ef50] text-gray-800 font-medium rounded-lg hover:bg-[#e6dd47] focus:outline-none focus:ring-2 focus:ring-[#f5ef50] focus:ring-offset-2 transition disabled:opacity-70 flex items-center gap-2"
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
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}