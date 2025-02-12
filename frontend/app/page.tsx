import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <h1 className="logo">잔물결 🌊</h1>
      <p className="description">
        노인과 요양사를 연결하는 믿을 수 있는 서비스, <br />
        편리하게 요양 서비스를 찾고 제공하세요.
      </p>

      <div className="btn-group">
        {/* 센터 관계자 선택 */}
        <Link href="/signup/center" className="option-card">
          <p className="option-description">어르신을 돌봐줄 보호사님을 찾으세요?</p>
          <p className="option-title">센터 관계자로 시작하기 →</p>
        </Link>

        {/* 요양 보호사 선택 */}
        <Link href="/signup/caregiver" className="option-card">
          <p className="option-description">일자리를 찾으세요?</p>
          <p className="option-title">요양 보호사로 시작하기 →</p>
        </Link>
      </div>

      {/* 로그인 버튼 */}
      <Link href="/login" className="btn btn-login">
        바로 로그인 하기
      </Link>
    </div>
  );
}
