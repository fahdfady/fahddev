import { blogs } from "@/data/blogs";
import { BlogCard } from "./BlogCard";

export function BlogGrid() {
  return (
    <section aria-labelledby="blogs-heading">
      <h2 id="blogs-heading" className="sr-only">Blog Posts</h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        role="list"
        aria-label="Blog posts"
      >
        {blogs.length > 0 ? blogs.map((blog) => (
          <div key={blog.id} role="listitem">
            <BlogCard blog={blog} />
          </div>
        )) : (<h1>no blogs yet, sorry :(</h1>)}
      </div>
    </section>
  );
} 