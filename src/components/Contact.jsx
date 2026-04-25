import { useState } from "react";
import { CONTACT_ITEMS } from "../data";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const headerRef = useReveal();
  const leftRef = useReveal();
  const rightRef = useReveal();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    try {
      await emailjs.send(
        "service_2qk32o9",
        "template_m4nt6ks",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "HZd5Tsv6-D9gFIa8e",
      );

      setSent(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Não foi possível enviar a mensagem.");
    }
  };

  return (
    <section id="contato" className="contact-section">
      <div className="sec-header reveal" ref={headerRef}>
        <h2 className="sec-tag">Contato</h2>
        <div className="sec-line" />
      </div>

      <div className="contato-layout">
        <div className="contato-left reveal" ref={leftRef}>
          <h3>
            Vamos trabalhar
            <br />
            <span>juntos?</span>
          </h3>
          <p>
            Estou interessado em oportunidades para iniciar minha carreira como
            desenvolvedor. Se você tiver alguma dúvida ou proposta, não hesite
            em entrar em contato.
          </p>

          <div className="contact-items">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-item"
                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
              >
                <div>
                  <p className="ci-label">{item.label}</p>
                  <p className="ci-value">{item.value}</p>
                </div>
                <span className="ci-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form reveal" ref={rightRef}>
          {sent && (
            <div className="form-success">
              ✓ Mensagem enviada! Entrarei em contato em breve.
            </div>
          )}

          <div className="cf-group">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="cf-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="cf-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              placeholder="Oi Gustavo, tenho uma oportunidade..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-fill" onClick={handleSubmit}>
            Enviar mensagem →
          </button>
        </form>
      </div>
    </section>
  );
}
