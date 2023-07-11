import Link from "next/link";

// NOTE: Static Data Fetching, 기본적으로 fetch는 자동으로 데이터를 가져오고 캐시함
async function getPost() {
  /**
   * NOTE: Refresh on every request
   * {cache: 'no-store'}
   * 캐시가 안되게 하고 모든 요청마다 다시 가져올 수 있도록 함
   * getServerSideProps와 유사!
   */
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

const postsPage = async () => {
  const posts = await getPost();
  return (
    <section>
      <h1>Posts</h1>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </section>
  );
};

export default postsPage;

const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};
  return (
    <Link href={`/posts/${id}`}>
      <div>
        <h2>{title}</h2>
        <p>{created}</p>
      </div>
    </Link>
  );
};
