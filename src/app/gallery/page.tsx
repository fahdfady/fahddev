import Image from "next/image";
import { gallery } from "./gallery";

export default function GalleryPage() {
    return (
        <main className="text-left">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center gap-1">
                {gallery.map((item, index) => (
                    <Image key={index} src={`/gallery/${item.path}`} alt={item.alt ?? ""} title={item.alt} width={400} height={400} className="object-contain size-[400px]" />
                ))}
            </div>
        </main>
    )
}