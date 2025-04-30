import { Blog } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ blog }: { blog: Blog }) {
  const { title, description, date, type, link, coverImage, tags } = blog;
  
  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Determine if the link is external (for BLEU blogs) or internal
  const isExternal = type === "bleu";
  
  return (
    <article className="border border-solid border-muted rounded shadow-lg overflow-hidden h-full flex flex-col">
      {coverImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={coverImage} 
            alt={`Cover image for ${title}`} 
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      )}
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <time dateTime={date} className="text-sm text-muted-foreground">
            {formattedDate}
          </time>
          
          {type === "bleu" && (
            <div className="flex items-center">
              <Image 
                src="/bleulogo.svg" 
                alt="BLEU" 
                width={16} 
                height={16} 
                className="mr-1"
              />
              <span className="text-xs text-muted-foreground">BLEU</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 hover:text-purple-500 transition-colors">
          {isExternal ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="focus:outline-none focus:ring-2 focus:ring-purple-500">
              {title}
            </a>
          ) : (
            <Link href={link} className="focus:outline-none focus:ring-2 focus:ring-purple-500">
              {title}
            </Link>
          )}
        </h3>
        
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs bg-muted px-2 py-1 rounded-full"
                aria-label={`Tag: ${tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
} 