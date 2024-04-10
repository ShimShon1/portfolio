import ContactForm from "./ContactForm";
import Title from "./Title";

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="py-2 text-left"
      id="contact"
    >
      <Title name="contact" />
      <ContactForm />
    </section>
  );
}
