"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function ProfilePage() {
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("로그인이 필요합니다.");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/user", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.error("유저 데이터 가져오기 실패:", error);
        setMessage("서버 연결 오류!");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="container">
      <h2>프로필</h2>
      {user ? (
        <div>
          <p><strong>이름:</strong> {user.username}</p>
          <p><strong>이메일:</strong> {user.email}</p>
          <button onClick={handleLogout} className="logout-btn">
            로그아웃
          </button>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}
