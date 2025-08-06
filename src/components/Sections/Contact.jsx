import RevealOnScroll from "../RevealOnScroll";
import emailjs from 'emailjs-com';
import {useState} from 'react';

const Contact = () => {
     const [formData, setFormData] = useState({
         name: '',
         email: '',
         message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            alert("Message sent successfully!");
            setFormData({ name: '', email: '', messages: ''})
        })
        .catch(() => alert("Failed to send message. Please try again later."));
        ;
    }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="px-4 max-w-5/6 w-screen mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-800
             to-purple-500 bg-clip-text text-transparent">
                Contact Me
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-purple-800 transition-colors">
                    Send Message
                </button>
            </form>
        </div>
        </RevealOnScroll>
    </section>
  )
}
export default Contact