/** @jsxImportSource @emotion/react */

"use client";
import { css } from "@emotion/react";
import { Card } from "antd";

import { StarTwoTone } from "@ant-design/icons";

import Link from "next/link";

const MovieCard = () => {
  const reviewText = css`
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  `;
  const genreText = css`
    font-size: 12px;
    color: #696969;
  `;
  const dateText = css`
    font-size: 11px;
    color: #808080;
    text-align: right;
  `;
  return (
    <Link href="#">
      <Card title="アベンジャーズ">
        <p css={dateText}>2025.1.12</p>
        <div className="starWrap">
          <StarTwoTone twoToneColor="#ffa500" />
          <StarTwoTone twoToneColor="#ffa500" />
          <StarTwoTone twoToneColor="#ffa500" />
          <StarTwoTone twoToneColor="#ffa500" />
        </div>
        <p css={genreText}>アクション・アメコミヒーロー</p>
        <p css={reviewText}>
          マーベルコミックスのヒーロー映画です。マーベルコミックスのヒーロー映画です。マーベルコミックスのヒーロー映画です。マーベルコミックスのヒーロー映画です。
        </p>
      </Card>
    </Link>
  );
};

export default MovieCard;
