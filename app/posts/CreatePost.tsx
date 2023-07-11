/**
 * NOTE: 클라이언트 컴포넌트 사용
 * useState, useEffect와 같은 클라이언트 훅을 사용하는 경우
 * 구성 요소를 '클라이언트 사용'으로 표시하기만 하면 된다.
 *  */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// NOTE: POST요청 보내기
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    });
    setTitle("");
    /**
     * NOTE: refresh()
     * - next/navigation로 import해야 된다.
     * - 현재 경로가 서버에서 업데이트된 목록을 새로고침하고 가져온다.
     * - 브라우저 기록에 영향을 미치지 않지만 루트 레이아웃에서 아래로 데이터를 새로 고친다.
     * - React 및 브라우저 상태를 모두 포함하여 클라이언트 측 상태가 손실되지 않는다.
     *   ==> full page refresh를 안해도 된다.
     */
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
