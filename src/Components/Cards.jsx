
const Content = () => {
    return (
        <div className="flex flex-col gap-4 ">
            <div className="flex justify-between items-center w-full px-4">
                <h2 className="text-xl font-bold text-white">Dashboard User</h2>
                <i className="fa-solid fa-bars text-xl cursor-pointer text-white"></i>
            </div>
            {/* Catch for cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {/* card */}
                <div className=" rounded-lg py-4  bg-gradient-to-t from-main to-secondary p-2 shadow-lg rounded-sm">
                    <div className="flex items-center justify-between ">
                        <p className="text-white text-md">Earning</p>
                        <div className=" bg-white w-4 h-4 text-center rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-dollar text-xs text-main"></i>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-center">
                        <h3 className="text-white text-2xl sm:text-3xl p-2 py-3 my-2">$ 628</h3>
                    </div>
                </div>
                {/* card */}
                <div className=" rounded-lg py-4  bg-white p-2 shadow-xl rounded-sm">
                    <div className="flex items-center justify-between ">
                        <p className="text-main text-md">Share</p>
                        <div className=" bg-white w-4 h-4 text-center rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-share text-lg text-yellow-500"></i>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-center">
                        <h3 className="text-main text-2xl sm:text-3xl p-2 py-3 my-2">3698</h3>
                    </div>
                </div>
                {/* card */}
                <div className=" rounded-lg py-4  bg-white p-2 shadow-xl rounded-sm">
                    <div className="flex items-center justify-between ">
                        <p className="text-main text-md">Likes</p>
                        <div className=" bg-white w-4 h-4 text-center rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-thumbs-up text-lg text-yellow-600"></i>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-center">
                        <h3 className="text-main text-2xl sm:text-3xl p-2 py-3 my-2">12365</h3>
                    </div>
                </div>
                {/* card */}
                <div className=" rounded-lg py-4  bg-white p-2 shadow-xl rounded-sm">
                    <div className="flex items-center justify-between ">
                        <p className="text-main text-md">Rating</p>
                        <div className=" bg-white w-4 h-4 text-center rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-star text-lg text-yellow-600"></i>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-center">
                        <h3 className="text-main text-2xl sm:text-3xl p-2 py-3 my-2">8.5</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
