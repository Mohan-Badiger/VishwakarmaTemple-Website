import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Sending....");
        const formData = new FormData(event.target);

        // ----- Enter your Web3 Forms Access key below---------

        formData.append("access_key", "d2ebae31-4a62-4d7e-8fee-bc974f2063ab");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };


    return (
        <div id="contact" className="w-full px-5 md:px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none font-outfit mb-10">

            <h4 className="text-center text-yellow-800 mb-2 text-lg font-cinzel">Connect with me</h4>
            <h2 className="text-center text-yellow-800 text-5xl font-cinzel">Get in touch</h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mt-5 mb-12 font-outfit">I&apos;d love to hear from you! If you have any questions, comments or feedback,<br /> please use the form below.</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <input type="hidden" name="subject" value="Mohan Badiger - New form Submission" />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-600 bg-transparent dark:bg-darkHover/30" required name="name" />

                    <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-600 bg-transparent dark:bg-darkHover/30" required name="email" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-600 bg-transparent mb-6 dark:bg-darkHover/30" required name="message"></textarea>
               <div className='flex justify-center'>
                 <button type='submit' className="px-6 py-3 active:scale-95 transition bg-gray-500/15 border border-gray-500 text-gray-900 text-sm md:text-base">
                Submit now
                </button>
               </div>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}