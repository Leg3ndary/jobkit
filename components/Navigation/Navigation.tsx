export default function Navigation() {
    return (
        <div className="flex items-center justify-between w-full p-4 bg-white">
            <h1 className="text-2xl font-black">Jobkit</h1>
            <ul className="flex items-center space-x-4">
                <li>
                    <a href="#" className="text-blue-500">Home</a>
                </li>
                <li>
                    <a href="#" className="text-blue-500">Jobs</a>
                </li>
                <li>
                    <a href="#" className="text-blue-500">About</a>
                </li>
            </ul>
        </div>
    );
}