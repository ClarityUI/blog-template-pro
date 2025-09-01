import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Newest posts</h1>
        <p>Here will be displayed posts.</p>
      </main>
      <Footer />
    </>
  );
}
