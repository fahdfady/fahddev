import { BlogGrid } from "@/components/BlogGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Fahd Ashour",
    description: "Explore my blogs about web development, design, and technology.",
};

export default function BlogPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
                    <p className="text-xl text-muted-foreground">
                        My own thoughts, ideas, and insights, takes on web development, design, and Software
                    </p>
                </header>

                <BlogGrid />
            </div>
        </main>
    );
}