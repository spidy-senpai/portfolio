import React, { useState } from 'react';
import CustomTextField from './TextField';
import { IoSend } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Details } from '../constants/contents';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // CHANGE THIS TO YOUR EMAIL
    const YOUR_EMAIL = 'witharyanimprove@gmail.com';

    const emailEntries = (Details.emails && Details.emails.length > 0 ? Details.emails : [Details.email || '']).filter(Boolean).map((e) => ({
        icons: <MdMailOutline />,
        name: 'Email',
        sub: e,
        content: 'Write to Me',
        link: `mailto:${e}`,
    }));

    const contactDetails = [
        ...emailEntries,
        { icons: <MdMailOutline />, name: "LinkedIn", sub: "Aman Aryan", content: "Let's Connect", link: "https://www.linkedin.com/in/aman-aryan-2625b3395" }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name || !email || !message) {
            toast.warning("Please fill in all fields");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setIsSubmitting(true);
        
        try {
            const formData = new FormData();
            formData.append('name', name.trim());
            formData.append('email', email.trim());
            formData.append('message', message.trim());

            const response = await fetch(`https://formsubmit.co/${YOUR_EMAIL}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                toast.success('✅ Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send message. Please try again or email me directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='max-w-4xl mx-auto p-5'>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>Contact Me</h1>
                <p className='text-sm pt-2'>Get In Touch</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                <div>
                    <h2 className='text-2xl font-semibold mb-4 text-center'>Talk To Me</h2>
                    <ul className='items-center space-y-4 w-80 mx-auto'>
                        {contactDetails.map((detail, index) => (
                            <li key={index} className='flex flex-col items-center text-center border border-gray-300 w-full md:w-80 p-4 rounded-lg'>
                                <p className='text-2xl mb-2'>{detail.icons}</p>
                                <p className='font-semibold'>{detail.name}</p>
                                <p className='text-gray-600'>{detail.sub}</p>
                                <div className='flex items-center gap-2'>
                                    <p className='text-gray-800'>{detail.content}</p>
                                    <a href={detail.link} target="_blank" rel="noopener noreferrer">
                                        <FaArrowRight className='text-gray-800 cursor-pointer text-md scale-x-95 transition-transform duration-300 ease-in-out hover:translate-x-2' />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='text-center'>
                    <h2 className='text-2xl font-semibold mb-4'>Write Me Your Message</h2>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <CustomTextField
                            id="name"
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            rows={1}
                            disabled={isSubmitting}
                        />
                        <CustomTextField
                            id="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            rows={1}
                            disabled={isSubmitting}
                        />
                        <CustomTextField
                            id="message"
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            multiline
                            rows={3}
                            disabled={isSubmitting}
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='flex items-center justify-center text-lg border border-black rounded-lg p-3 w-48 gap-2 bg-black text-white hover:bg-gray-800 transition-colors duration-300 mx-auto disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'} 
                            {!isSubmitting && <IoSend className='ml-2' />}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;