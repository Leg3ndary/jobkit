import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jobkit",
    description: "Everything you need to find your next job.",
    keywords: ["job", "board", "developer", "remote"],

};

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <section className="inset-0 min-h-screen flex items-center justify-center flex-col w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]">
                <h1 className="mb-8 text-7xl font-black">
                    <span className="text-blue-500">Job</span>kit
                </h1>
                <div className="p-4 my-8 text-3xl">Scroll down to discover</div>
            </section>
            <section className="min-h-screen w-full">
            
            </section>
        </main>
    );
}
