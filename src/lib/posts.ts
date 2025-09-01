import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Cesta k priečinku s našimi článkami
const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  // Získame názvy všetkých súborov v priečinku
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Odstránime ".md" z názvu súboru, aby sme získali ID (slug)
    const slug = fileName.replace(/\.md$/, "");

    // Prečítame obsah súboru
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Použijeme gray-matter na spracovanie metadát
    const matterResult = matter(fileContents);

    // Vrátime dáta spolu so slugom
    return {
      slug,
      ...(matterResult.data as {
        title: string;
        date: string;
        excerpt: string;
        coverImage: string;
      }),
    };
  });

  // Zoradíme články podľa dátumu od najnovšieho po najstarší
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
