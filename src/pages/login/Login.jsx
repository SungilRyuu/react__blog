import React from "react";
import "./login.css";

export default function Login() {
  return (
    <main id="contents">
      <h2 className="ir_so">컨텐츠 영역</h2>
      <section className="join-type gray">
        <div className="login-form">
          <h3>로그인</h3>
          <form action="#" name="login" method="post">
            <fieldset>
              <legend className="ir_so">로그인 입력폼</legend>
              <div className="join-box">
                <div>
                  <label htmlFor="youEmail">이메일</label>
                  <input
                    type="email"
                    id="youEmail"
                    name="youEmail"
                    placeholder="Sample@naver.com"
                    autoComplete="off"
                    autoFocus
                    required
                  />
                </div>
                <div>
                  <label htmlFor="youPass">비밀번호</label>
                  <input
                    type="password"
                    id="youPass"
                    name="youPass"
                    maxLength="20"
                    placeholder="비밀번호를 적어주세요!"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <button id="loginBtn" className="login-submit" type="submit">
                로그인
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </main>
  );
}
