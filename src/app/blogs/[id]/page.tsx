'use client'

import blogs from "@/app/data/blogs";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Blog not found</h2>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div
        className="max-w-3xl mx-auto bg-black/40 rounded-xl p-6"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <h1 className="text-3xl font-bold text-white">{blog.name}</h1>
        <p className="text-gray-300 mt-4">{blog.summary}</p>

        <div className="mt-6 w-full h-48 md:h-64 relative rounded-md overflow-hidden">
          <Image
            src={blog.icon}
            alt={blog.name}
            fill
            className="object-contain"
          />
        </div>

        <div className="mt-6 prose prose-invert text-gray-200">
          <p>{blog.content}</p>
        </div>
      </div>
    </main>
  );
}
