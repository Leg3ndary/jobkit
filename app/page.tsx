export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="inset-0 min-h-screen flex items-center justify-center flex-col w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
                    <h1 className="mb-8 text-7xl font-black">
                        <span className="text-blue-500">Job</span>kit
                    </h1>
                    <div className="p-4 my-8 text-3xl">
                        Scroll down to discover
                    </div>
                </div>
            </div>
        </main>
    );
}
