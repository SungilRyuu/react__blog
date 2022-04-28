import React from "react";
import "./view.css";

export default function View() {
  return (
    <main id="contents">
      <h2 class="ir_so">컨텐츠 영역</h2>
      <section id="blog-type" class="center mb100">
        <div class="blog__label">
          <h3 class="section__title">블로그 View 제목입니다.</h3>
          <div className="info">
            <span class="author">
              <a href="#">선생님</a>
            </span>
            <span class="date">2022-04-11 20:04:06</span>
            <span class="modify">
              <a href="#">수정</a>
            </span>
            <span class="delete">
              <a href="#">삭제</a>
            </span>
          </div>
        </div>

        <div class="blog__layout">
          <div class="blog__left">
            <h4>블로그 View 제목입니다.</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error placeat veritatis alias vitae. Harum,
              illum quisquam! Harum animi quidem nesciunt debitis rerum provident laborum eligendi distinctio quos
              omnis, corrupti eos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error placeat veritatis
              alias vitae. Harum, illum quisquam! Harum animi quidem nesciunt debitis rerum provident laborum eligendi
              distinctio quos omnis, corrupti eos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              placeat veritatis alias vitae. Harum, illum quisquam! Harum animi quidem nesciunt debitis rerum provident
              laborum eligendi distinctio quos omnis, corrupti eos.
              <br />
              <br />
              해외 온라인 매체 더버지가 미국 MIT 연구팀의 로봇 움직임 학습용 머신러닝 개발 소식을 보도했다.
              <br />
              <br />
              MIT 연구팀은 인공지능(AI)을 활용해 사족보행 로봇 ‘미니 치타(Mini Cheetah)가 걷는 방법과 달리는 방법을
              학습하는 능력을 갖추도록 했다. <br />
              <br />
              연구팀은 미니치타에 머신러닝 기법 중 한 가지인 강화학습을 활용했다. 강화학습을 적용한 채로 로봇이 학습
              내용을 활용하는 과정에 따라 적절한 보상을 하면서 처음부터 걷고 뛰는 방법을 익히도록 한다. 다소 오랜 시간이
              걸릴 수 있지만, 시간이 지나면서 가상 환경을 경험하면서 높은 적응 능력을 갖추도록 지원할 수 있었다.
              <br />
              <br />
              출처 : 코딩월드뉴스(https://www.codingworldnews.com)
            </p>
          </div>
          <div class="blog__right">
            {/* 광고 들어갈 자리 */}
            <iframe
              src="https://ads-partners.coupang.com/widgets.html?id=572093&template=carousel&trackingCode=AF1920066&subId=&width=300&height=300"
              width="300"
              height="500"
              frameborder="0"
              scrolling="no"
              referrerpolicy="unsafe-url"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
