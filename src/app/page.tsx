import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">
          Najnovšie články
        </h1>
        <div className="grid gap-8">
          {allPosts.map((post) => (
            <ArticleCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
