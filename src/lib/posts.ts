import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// posts/ 폴더 경로
const postsDirectory = path.join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readTime: string;
}

export interface Post extends PostMeta {
  content: string; // MDX 원본 문자열
}

/**
 * 모든 포스트의 메타데이터를 가져온다 (목록용)
 * 최신순 정렬
 */
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        tags: data.tags ?? [],
        excerpt: data.excerpt ?? "",
        readTime: stats.text.replace("read", "").trim(), // "5 min read" → "5 min"
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1)); // 최신순

  return posts;
}

/**
 * 특정 slug의 포스트를 가져온다 (상세용)
 */
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? "",
    readTime: stats.text.replace("read", "").trim(),
    content, // MDX 원본 (frontmatter 제외)
  };
}

/**
 * 모든 slug 목록을 가져온다 (정적 경로 생성용)
 */
export function getAllSlugs(): string[] {
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
