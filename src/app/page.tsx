import PostList from "@/components/posts/PostList";
import TopicCreateForm from "@/components/topics/TopicCreateForm";
import TopicsList from "@/components/topics/TopicsList";
import { fetchTopPosts } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";

export default function Home() {
   return (
      <div className="grid grid-cols-4 p-4 gap-4">
         <div className="col-span-3">
            <h1 className="text-xl m-2">Top Posts</h1>
            <PostList fetchData={fetchTopPosts} />
         </div>
         <div className="border px-2 py-3 shadow">
            <TopicCreateForm />
            <Divider className="my-2" />
            <h3 className="text-lg">Topics</h3>
            <TopicsList />
         </div>
      </div>
   );
}
