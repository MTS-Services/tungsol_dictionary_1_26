import FrontendLayout from '@/layouts/frontend-layout';
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';

export default function Contact() {
    const {data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.submit'), {
            onSuccess: () => {
                toast.success('Message sent successfully.');
                setData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            },
            onError: () => {
                toast.error('Failed to send message.');
            },
        });
    };


    const contactInfos = [
        {
            title: 'Email Us',
            description: 'For general inquiries and support',
            link: 'mailto:support@wordwise.com',
            linkText: 'support@wordwise.com',
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            ),
        },
        {
            title: 'Feedback',
            description:
                'We value your feedback and work to improve daily. Let us know how we can serve you better.',
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            ),
        },
    ];

    return (
        <FrontendLayout>
            <section className="relative min-h-screen overflow-hidden bg-[var(--mobilebg)] px-4 py-8 lg:py-20">
                {/* Desktop Background Layer */}
                <div
                    className="absolute inset-0 z-0 hidden bg-cover bg-center lg:block"
                    style={{
                        backgroundImage:
                            'linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url("assets/images/backgrounds.png")',
                    }}
                />

                <div className="relative z-10 mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 backdrop-blur-sm">
                                <svg
                                    className="h-10 w-10 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h1 className="mb-4 text-4xl font-extrabold text-slate-900 lg:text-5xl">
                            Contact Us
                        </h1>
                        <p className="mx-auto max-w-lg font-medium text-slate-600">
                            Have a question, suggestion, or feedback? We'd love
                            to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="rounded-3xl border border-white/20 bg-white p-8 shadow-xl backdrop-blur-md">
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="text-primari mb-2 block font-arial font-medium">
                                                Name *
                                            </label>
                                            <input
                                                
                                                type="text"
                                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                                placeholder="Your name"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        name: e.target.value,
                                                    })
                                                }
                                                
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="text-primari mb-2 block font-arial font-medium">
                                                Email *
                                            </label>
                                            <input
                                                
                                                type="email"
                                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                                placeholder="your@email.com"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-primari mb-2 block font-arial font-medium">
                                            Subject *
                                        </label>
                                        <input
                                            
                                            type="text"
                                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                            placeholder="What is this about?"
                                            value={data.subject}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    subject: e.target.value,
                                                })
                                            }

                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                    </div>
                                    <div>
                                        <label className="text-primari mb-2 block font-arial font-medium">
                                            Message *
                                        </label>
                                        <textarea
                                            
                                            rows={5}
                                            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                            placeholder="Tell us more..."
                                            value={data.message}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    message: e.target.value,
                                                })
                                            }
                                        />
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-arial font-medium text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            />
                                        </svg>
                                        {processing ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-6">
                            {contactInfos.map((info, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-3xl border border-white/40 bg-white p-8 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                                        <svg
                                            className="h-7 w-7 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            {info.icon}
                                        </svg>
                                    </div>
                                    <h3 className="mb-3 font-arial text-xl font-medium text-primary">
                                        {info.title}
                                    </h3>
                                    <p className="mb-4 leading-relaxed text-slate-500">
                                        {info.description}
                                    </p>
                                    {info.link && (
                                        <a
                                            href={info.link}
                                            className="font-bold text-primary hover:underline"
                                        >
                                            {info.linkText}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
