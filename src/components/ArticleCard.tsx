import Link from "next/link";

type ArticleCardProps = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const ArticleCard = ({ slug, title, date, excerpt }: ArticleCardProps) => {
  return (
    <article className="border border-slate-200 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        <Link
          href={`/posts/${slug}`}
          className="transition-colors hover:text-blue-600"
        >
          {title}
        </Link>
      </h2>
      <p className="text-slate-500 mb-4">
        <time dateTime={date}>
          {new Date(date).toLocaleDateString("sk-SK", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </p>
      <p className="text-slate-600">{excerpt}</p>
    </article>
  );
};

export default ArticleCard;
