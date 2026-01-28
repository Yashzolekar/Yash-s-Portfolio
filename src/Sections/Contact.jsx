import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import confetti from "canvas-confetti";
import toast, { Toaster } from "react-hot-toast";
import { Instagram, Github, Linkedin, Mail, Phone, MapPin, ArrowUp, Send, Loader2 } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef();

    // --- GOLDEN CONFETTI LOGIC ---
    const fireConfetti = () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            
            // Strictly Golden & White Colors
            const colors = ['#f0b638', '#FFD700', '#FFA500', '#ffffff']; 

            confetti({
                ...defaults, 
                particleCount,
                colors: colors,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults, 
                particleCount,
                colors: colors,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // 1. Trigger Loading Toast
        const toastId = toast.loading("Sending message...");

        // --- EMAILJS CONFIGURATION ---
        const SERVICE_ID = "service_s6tbet8";
        const PUBLIC_KEY = "EHeufEXv1-hSyfjqv";
        
        // 👇 PASTE YOUR TWO TEMPLATE IDs HERE
        const TEMPLATE_ID_OWNER = "template_57jvsrd";      // 1. Template that sends email to YOU
        const TEMPLATE_ID_REPLY = "template_gknql2h"; // 2. Template that sends "Thank you" to USER

        // Step 1: Send Email to Owner
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_OWNER, form.current, PUBLIC_KEY)
            .then((result) => {
                
                // Step 2: Send Auto-Reply to User (We don't wait for this one to finish to show success)
                emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_REPLY, form.current, PUBLIC_KEY);

                // Step 3: Success Logic
                toast.success("Message sent! I'll get back to you soon.", {
                    id: toastId,
                    icon: '🚀',
                    duration: 5000,
                    style: {
                        background: '#0d1117',
                        color: '#fff',
                        border: '1px solid #f0b638',
                    },
                });
                fireConfetti();
                e.target.reset();
            }, (error) => {
                // Step 4: Error Logic
                console.log(error.text);
                toast.error("Failed to send. Please check your connection.", {
                    id: toastId,
                    style: {
                        background: '#0d1117',
                        color: '#fff',
                        border: '1px solid red',
                    },
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="Contact" className="relative text-white min-h-screen py-20 px-5 bg-[#05070a]">
            {/* Toast Container (Renders the notifications) */}
            <Toaster position="bottom-right" reverseOrder={false} />

            {/* Header Section */}
            <div className="text-center mb-16">
                <h3 className="font-bold text-4xl mb-2">
                    Get In <span className="text-[#f0b638]">Touch</span>
                </h3>
                <div className="border-b-4 w-20 border-[#f0b638] mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out. 
                    I'm always open to discussing new opportunities.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                
                {/* Left Side: Contact Info */}
                <div className="space-y-8 p-8 bg-[#0d1117]/50 rounded-2xl border border-gray-800">
                    <h4 className="text-2xl font-bold text-[#f0b638]">Contact Information</h4>
                    
                    <div className="space-y-6">
                        <ContactItem 
                            icon={<Mail className="text-[#f0b638]" />} 
                            label="Email" 
                            value="zolekaryash2003@gmail.com" 
                            href="mailto:zolekaryash2003@gmail.com" 
                        />
                        <ContactItem 
                            icon={<Phone className="text-[#f0b638]" />} 
                            label="Phone" 
                            value="+91 8600766687" 
                            href="tel:+918600766687" 
                        />
                        <ContactItem 
                            icon={<MapPin className="text-[#f0b638]" />} 
                            label="Location" 
                            value="Nashik, India" 
                            href="#" 
                        />
                    </div>

                    <div className="pt-8 border-t border-gray-800">
                        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Social Profiles</p>
                        <div className="flex gap-4">
                            <SocialLink href="https://www.linkedin.com/in/yash-zolekar-8b9366270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<Linkedin size={20}/>} />
                            <SocialLink href="https://instagram.com/Iam_yashzolekar" icon={<Instagram size={20}/>} />
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="bg-[#0d1117] p-8 rounded-2xl border border-gray-800 shadow-2xl relative">
                    <form ref={form} onSubmit={sendEmail} className="space-y-5">
                        <h4 className="text-xl font-bold mb-4">Send a Message</h4>
                        
                        <div className="grid grid-cols-1 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-400">Full Name</label>
                                {/* NOTE: name="name" must match your EmailJS template variable {{name}} */}
                                <input 
                                    type="text" name="name" required
                                    placeholder="Enter your name"
                                    className="p-3 rounded-lg bg-[#05070a] border border-gray-700 focus:border-[#f0b638] focus:ring-1 focus:ring-[#f0b638] outline-none transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-400">Email Address</label>
                                {/* NOTE: name="email" must match your EmailJS template variable {{email}} */}
                                <input 
                                    type="email" name="email" required
                                    placeholder="you@example.com"
                                    className="p-3 rounded-lg bg-[#05070a] border border-gray-700 focus:border-[#f0b638] focus:ring-1 focus:ring-[#f0b638] outline-none transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                {/* NOTE: name="message" must match your EmailJS template variable {{message}} */}
                                <textarea 
                                    name="message" required rows="4"
                                    placeholder="How can I help you?"
                                    className="p-3 rounded-lg bg-[#05070a] border border-gray-700 focus:border-[#f0b638] focus:ring-1 focus:ring-[#f0b638] outline-none transition-all resize-none"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-[#f0b638] text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#d9a42d] transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Scroll to Top */}
            <a href="#Home" className="fixed bottom-8 right-8 bg-[#f0b638] text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50">
                <ArrowUp size={24} />
            </a>
        </section>
    );
}

// Helper Components
function ContactItem({ icon, label, value, href }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-[#f0b638]/10 transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{label}</p>
                <a href={href} className="text-gray-200 hover:text-[#f0b638] transition-colors">{value}</a>
            </div>
        </div>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a 
            href={href} target="_blank" rel="noopener noreferrer"
            className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:text-[#f0b638] hover:border-[#f0b638]/50 transition-all"
        >
            {icon}
        </a>
    );
}