import React from "react";
import "./mypage.css";

export default function Mypage() {
  return (
    <main id="contents">
      <h2 className="ir_so">컨텐츠 영역</h2>
      <section className="join-type gray">
        <div className="member-form">
          <h3>회원 정보</h3>
          <div className="join-intro">
            <div className="face">
              <img
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="photo"
              />
            </div>
            <div className="intro">자기소개를 해주세요!</div>
          </div>
          <div className="join-info">
            <ul>
              <li>
                <strong>이메일</strong>
                <span>abcde@naver.com</span>
              </li>
              <li>
                <strong>닉네임</strong>
                <span>네모</span>
              </li>
              <li>
                <strong>이름</strong>
                <span>김네모</span>
              </li>
              <li>
                <strong>생년월일</strong>
                <span>2022-04-30</span>
              </li>
              <li>
                <strong>연락처</strong>
                <span>010-0000-0000</span>
              </li>
              <li>
                <strong>성별</strong>
                <span>여자</span>
              </li>
            </ul>
          </div>
          <div className="join-btn">
            <a href="mypage.php">수정하기</a>
            <a href="../login/logout.php">로그아웃</a>
          </div>
        </div>
      </section>
    </main>
  );
}
