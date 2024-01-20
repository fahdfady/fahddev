export default function Terminal() {
    return (
        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="text-sm">bash</p>
            </div>
            <div className="mt-4">
                <p className="text-green-400">$ npm install tailwindcss</p>
                <p className="text-white">+ tailwindcss@2.2.16</p>
                <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
                <p className="text-green-400">$</p>
            </div>
        </aside>
    )
}