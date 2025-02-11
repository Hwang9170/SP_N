import Link from "next/link";
import "./globals.css"; // CSS 파일 적용

export default function Home() {
  return (
    <div className="main-container">
      <h1 className="logo">잔물결 🌊</h1>
      <p className="description">
        노인과 요양사를 연결하는 믿을 수 있는 서비스, <br />
        편리하게 요양 서비스를 찾고 제공하세요.
      </p>
      <div className="btn-group">
        <Link href="/signup" className="btn btn-signup">회원가입</Link>
        <Link href="/login" className="btn btn-login">로그인</Link>
      </div>
    </div>
  );
}
