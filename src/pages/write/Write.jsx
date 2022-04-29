import React from "react";
import "./write.css";

function Write() {
  return (
    <main id="contents">
      <h2 className="ir_so">컨텐츠 영역</h2>
      <section id="board-type" className="section center mb100">
        <h3 className="section__title">게시판 글쓰기</h3>
        <p className="section__desc">무엇이든 써주세요. 제~발~</p>
        <div className="board__inner">
          <div className="board__modify">
            <form action="boardWriteSave.php" name="boardWrite" method="post">
              <fieldset>
                <legend className="ir_so">게시판 작성 영역</legend>
                <div>
                  <label htmlFor="boardTitle">제목</label>
                  <input type="text" name="boardTitle" id="boardTitle" placeholder="제목을 작성해주세요." required />
                </div>
                <div>
                  <label htmlFor="boardContents">내용</label>
                  <textarea
                    name="boardContents"
                    id="boardContents"
                    placeholder="내용을 작성해주세요."
                    required
                  ></textarea>
                </div>
                <div className="board__btn">
                  <button type="submit" value="저장하기">
                    저장하기
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Write;
