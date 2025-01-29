const Contact = () => {
    return (
        <>
            <div className="mt-4 flex flex-col items-center p-6 bg-blue-100 rounded-xl shadow-lg max-w-md mx-auto relative">
                <h1 className="text-2xl mb-6">Contact Us</h1>
                <form className="w-full" onSubmit={e => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-3 mb-6 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button className="w-full p-3 bg-blue-100 text-black border-2 border-black font-semibold rounded-lg hover:bg-black hover:text-white transition duration-75">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Contact;