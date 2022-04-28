import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <article class="blog">
      <Link to="/view">
        <figure class="blog__header" aria-hiddsen="true">
          <img src="https://source.unsplash.com/800x600/?nature,water" alt="" />
        </figure>
        <div class="blog__body">
          <span class="blog__cate">javascript</span>
          <div class="blog__title">포스트 제목입니다.</div>
          <div class="blog__desc">
            포스트 설명부분입니다.포스트 설명부분입니다.포스트 설명부분입니다.포스트 설명부분입니다.포스트
            설명부분입니다.포스트 설명부분입니다.
          </div>
          <div class="blog__info">
            <span class="author">선생님</span>
            <span class="date">2022-04-27</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
