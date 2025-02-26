/** @jsxImportSource @emotion/react */

"use client";
import { css } from "@emotion/react";

import MovieCard from "@/components/movieCard";

const movieList = () => {
  const movieList = css`
    display: flex;
    flex-wrap: wrap;
    > a {
      display: block;
      width: 23.5%;
      margin-left: 2%;
      margin-bottom: 2%;
      &:nth-of-type(4n + 1) {
        margin-left: 0;
      }
      @media screen and (min-width: 768px) {
        &:nth-last-of-type(1),
        &:nth-last-of-type(2),
        &:nth-last-of-type(3),
        &:nth-last-of-type(4) {
          margin-bottom: 0;
        }
      }
      @media screen and (max-width: 767px) {
        width: 49%;
        margin-bottom: 3%;
        &:nth-of-type(4n + 1) {
          margin-left: 2%;
        }
        &:nth-of-type(2n + 1) {
          margin-left: 0;
        }
        &:nth-last-of-type(1),
        &:nth-last-of-type(2) {
          margin-bottom: 0;
        }
      }
    }
  `;
  return (
    <>
      <h2>新着レビュー</h2>
      <div css={movieList}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
};

export default movieList;
