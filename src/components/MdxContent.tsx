import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

// MDX 안에서 사용할 커스텀 컴포넌트
const components = {
  // 헤딩
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-3xl font-bold mt-12 mb-4" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-2xl font-semibold mt-10 mb-3" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-xl font-semibold mt-8 mb-2" {...props} />
  ),

  // 텍스트
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-base leading-relaxed mb-4" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-(--text)" {...props} />
  ),

  // 리스트
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc list-inside mb-4 space-y-1" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="text-base leading-relaxed" {...props} />
  ),

  // 테이블
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto">
      <table
        {...props}
        className="w-full border-collapse text-sm border border-[var(--border)]"
      />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead {...props} className="bg-emerald-500/10" />
  ),
  tbody: (props: ComponentPropsWithoutRef<"tbody">) => <tbody {...props} />,
  tr: (props: ComponentPropsWithoutRef<"tr">) => (
    <tr {...props} className="border-b border-[var(--border)]" />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      {...props}
      className="text-left font-semibold px-3 py-2 border border-[var(--border)] text-[var(--text)]"
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td
      {...props}
      className="px-3 py-2 border border-[var(--border)] text-[var(--text-sub)]"
    />
  ),

  // 인용
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-emerald-500/40 pl-4 py-2 my-6 italic text-(--text-sub)"
      {...props}
    />
  ),

  // 코드
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="text-sm px-1.5 py-0.5 rounded bg-(--code-bg) text-emerald-400"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="text-sm p-4 rounded-xl my-6 overflow-x-auto bg-(--code-bg) border border-(--border)"
      {...props}
    />
  ),

  // 링크
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  // 구분선
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-8 border-(--border)" {...props} />
  ),

  // 이미지
  img: (props: ComponentPropsWithoutRef<"img">) => (
    // next-mdx-remote의 동적 이미지에는 width/height가 없을 수 있어 기본 img를 사용합니다.
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-xl my-6 w-full" loading="lazy" {...props} />
  ),
};

interface Props {
  source: string;
}

export async function MdxContent({ source }: Props) {
  return (
    <article className="prose-custom">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: "github-dark-dimmed",
                  keepBackground: true,
                },
              ],
            ],
          },
        }}
        components={components}
      />
    </article>
  );
}
