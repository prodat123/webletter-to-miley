import React, { useState } from 'react'

function Contact_4() {

    const [body, setBody] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const handleEmailClick = () => {
        const email = 'maxwellwijaya00@gmail.com';
        const subject = 'Contact Form Submission';
        const emailBody = 'Name: ' + name + '\n' + 'Phone Number: ' + phoneNumber + '\n' + 'Message: ' + '\n' + body 
    
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
        window.location.href = mailtoUrl;
    };

    return (
        <div>
            
            <main className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                        <h3 className="text-primary font-semibold">
                            Contact
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Get in touch
                        </p>
                        <p>
                            We’d love to hear from you! Please fill out the form bellow.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >
                            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                                <div>
                                    <label className="font-medium">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Phone number
                                </label>
                                <div className="relative mt-2">
                                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                        <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                            <option>ID</option>
                                        
                                        </select>
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="+62 xxx-xxxx-xxxx"
                                        required
                                        className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Message
                                </label>
                                <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-secondary active:bg-secondary rounded-lg duration-150"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
        </main>

        </div>
    )
}

export default Contact_4