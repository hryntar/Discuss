import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function TopicsList() {
   const topics = await db.topic.findMany();

   const renderedTopics = topics.map((topic) => (
      <div key={topic.id}>
         <Link href={paths.topicShow(topic.slug)}>
            <Chip color="warning" variant="shadow">
               {topic.slug}
            </Chip>
         </Link>
      </div>
   ))

   return (
      <div className="flex flex-wrap flex-row gap-2">
         {renderedTopics}
      </div>
   );
}