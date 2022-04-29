import React from "react";
import "./posts.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <article className="blog">
      <Link to="/view">
        <figure className="blog__header" aria-hidden="true">
          <img src="https://source.unsplash.com/800x600/?nature,water" alt="" />
        </figure>
        <div className="blog__body">
          <span className="blog__cate">javascript</span>
          <div className="blog__title">포스트 제목입니다.</div>
          <div className="blog__desc">
            포스트 설명부분입니다.포스트 설명부분입니다.포스트 설명부분입니다.포스트 설명부분입니다.포스트
            설명부분입니다.포스트 설명부분입니다.
          </div>
          <div className="blog__info">
            <span className="author">선생님</span>
            <span className="date">2022-04-27</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
