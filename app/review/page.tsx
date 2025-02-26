/** @jsxImportSource @emotion/react */

"use client";
import { css } from "@emotion/react";

import { StarTwoTone } from "@ant-design/icons";

const Review = () => {
  const reviewWrap = css`
    .date_text {
      margin-bottom: 1em;
    }
    .review_star {
      font-size: 22px;
      margin-bottom: 1em;
    }
    .cat_text {
      margin-bottom: 1em;
    }
    h3 {
      margin-top: 4%;
    }
  `;
  return (
    <div css={reviewWrap}>
      <h2>アベンジャーズ</h2>
      <p className="date_text">2025.2.2</p>
      <p className="cat_text">アクション・アメコミヒーロー</p>
      <div className="review_star">
        <StarTwoTone twoToneColor="#ffa500" />
        <StarTwoTone twoToneColor="#ffa500" />
        <StarTwoTone twoToneColor="#ffa500" />
        <StarTwoTone twoToneColor="#ffa500" />
      </div>
      <h3>感想</h3>
      <p>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
      <h3>見どころ</h3>
      <p>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
};

export default Review;
