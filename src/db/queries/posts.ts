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