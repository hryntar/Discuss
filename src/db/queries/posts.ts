import type { Post } from "@prisma/client";
import { db } from "@/db";

export type PostForListDisplay = Awaited<ReturnType<typeof fetchPostsByTopicSlug>>[number]

export function fetchPostsByTopicSlug(slug: string) {
   return db.post.findMany({
      where: { topic: { slug } },
      include: {
         topic: { select: { slug: true } },
         user: { select: { name: true } },   
         _count: { select: { comments: true } }
      }
   })
}

export type TopPostForListDisplay = Awaited<ReturnType<typeof fetchTopPosts>>[number]

export function fetchTopPosts() {
   return db.post.findMany({
      orderBy: [{
         comments: {
            _count: "desc"
         }
      }],
      include: {
         topic: { select: { slug: true } },
         user: { select: { name: true, image: true } },
         _count: { select: { comments: true } }
      },
      take: 5,
   })
}