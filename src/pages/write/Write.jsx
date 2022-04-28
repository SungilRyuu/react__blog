import React from "react";
import "./write.css";

function Write() {
  return (
    <main id="contents">
      <h2 class="ir_so">컨텐츠 영역</h2>
      <section id="board-type" class="section center mb100">
        <h3 class="section__title">게시판 글쓰기</h3>
        <p class="section__desc">무엇이든 써주세요. 제~발~</p>
        <div class="board__inner">
          <div class="board__modify">
            <form action="boardWriteSave.php" name="boardWrite" method="post">
              <fieldset>
                <legend class="ir_so">게시판 작성 영역</legend>
                <div>
                  <label for="boardTitle">제목</label>
                  <input type="text" name="boardTitle" id="boardTitle" placeholder="제목을 작성해주세요." required />
                </div>
                <div>
                  <label for="boardContents">내용</label>
                  <textarea
                    name="boardContents"
                    id="boardContents"
                    placeholder="내용을 작성해주세요."
                    required
                  ></textarea>
                </div>
                <div class="board__btn">
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
