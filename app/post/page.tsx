"use client";

import { getMovieByTitle, getMovieGenre } from "@/lib/api";
import { getLanguageName } from "@/lib/languageUtils";
import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import jaJP from "antd/es/locale/ja_JP"; // 日本語ロケールのインポート
import Image from "next/image";
import { useEffect, useState } from "react";

interface Movie {
  title: string;
  overview: string;
  release_date: string;
  original_language: string;
  genre_ids: number[];
  poster_path: string | null;
}

interface selectedMovie {
  title: string;
  overview: string;
  release_date: string;
  original_language: string;
  genre: string[];
  poster_path: string | null;
}

interface Genre {
  id: number;
  name: string;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const { Option } = Select;

const Post = () => {
  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<selectedMovie>({
    title: "",
    overview: "",
    release_date: "",
    original_language: "",
    genre: [],
    poster_path: "",
  });
  const [genres, setGenres] = useState<Genre[]>([]);
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const searchMovie = async () => {
    try {
      setError("");
      const movieData = await getMovieByTitle(title);
      setMovie(movieData);
      console.log(movieData);
      setOpen(true);
    } catch (err) {
      setError("映画情報の取得に失敗しました");
      console.error(err);
    }
  };

  const fetchGenres = async () => {
    const genreData = await getMovieGenre();
    setGenres(genreData);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  // genreIdsのIDに基づいて、nameプロパティを取り出して配列にする関数
  const getGenre = (genreIds: number[]): string[] => {
    return genres
      .filter((genre) => genreIds.includes(genre.id))
      .map((genre) => genre.name);
  };

  const selectMovie = (movie: Movie): void => {
    const genre = getGenre(movie.genre_ids);

    const languageName = getLanguageName(movie.original_language);

    const selectedMovieData: selectedMovie = {
      ...movie,
      genre: genre,
      original_language: languageName,
    };
    setSelectedMovie(selectedMovieData);
    console.log(selectMovie);
    setOpen(false);
  };

  return (
    <>
      <h2>映画レビューを投稿する</h2>
      <ConfigProvider locale={jaJP}>
        <Form {...layout} form={form} name="control-hooks">
          <Form.Item
            name="title"
            label="映画タイトル"
            rules={[{ required: true }]}
          >
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Item>
          <div style={{ textAlign: "center", marginBottom: "4%" }}>
            <Button type="primary" onClick={searchMovie}>
              映画情報を検索する
            </Button>
            <Modal
              title="下記の映画がヒットしました"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={1000}
            >
              {movie.length > 0 ? (
                <Row gutter={[16, 16]}>
                  {movie.map((item, index) => (
                    <Col key={index} span={6}>
                      {item.poster_path && (
                        <Image
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          alt={item.title}
                          width={200}
                          height={200}
                        />
                      )}
                      <p className="title">{item.title}</p>
                      <p className="date">公開日: {item.release_date}</p>
                      <Button onClick={() => selectMovie(item)} type="primary">
                        この映画を選択する
                      </Button>
                    </Col>
                  ))}
                </Row>
              ) : (
                <p>映画が見つかりませんでした</p>
              )}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </Modal>
          </div>
          {selectedMovie ? (
            <Row gutter={16} justify="center" style={{ marginBottom: "4%" }}>
              <Col>
                {selectedMovie.poster_path && (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                    alt={selectedMovie.title}
                    width={200}
                    height={200}
                  />
                )}
              </Col>
              <Col>
                <p className="title">タイトル：{selectedMovie.title}</p>
                <p className="date">公開日：{selectedMovie.release_date}</p>
                <p className="jenre">
                  ジャンル：{selectedMovie.genre.join("・")}
                </p>
                <p className="review">国：{selectedMovie.original_language}</p>
              </Col>
            </Row>
          ) : (
            <p>映画情報がありません</p>
          )}
          <Form.Item name="review" label="評価" rules={[{ required: true }]}>
            <Select placeholder="選択してください" allowClear>
              <Option value="&#9733;">&#9733;</Option>
              <Option value="&#9733;&#9733;">&#9733;&#9733;</Option>
              <Option value="&#9733;&#9733;&#9733;">
                &#9733;&#9733;&#9733;
              </Option>
              <Option value="&#9733;&#9733;&#9733;&#9733;">
                &#9733;&#9733;&#9733;&#9733;
              </Option>
              <Option value="&#9733;&#9733;&#9733;&#9733;&#9733;">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="impression"
            label="感想"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>
          <Form.Item
            name="highlight"
            label="見どころ"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </>
  );
};

export default Post;
