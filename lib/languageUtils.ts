// 言語コードを日本語に変換するマップ
export const languageMap: { [key: string]: string } = {
	en: "英語",
	ja: "日本語",
	fr: "フランス語",
	de: "ドイツ語",
	es: "スペイン語",
	it: "イタリア語",
	ru: "ロシア語",
	ko: "韓国語",
	zh: "中国語",
	pt: "ポルトガル語",
	ar: "アラビア語",
	hi: "ヒンディー語",
	tr: "トルコ語",
	pl: "ポーランド語",
	nl: "オランダ語",
	sv: "スウェーデン語",
	da: "デンマーク語",
	no: "ノルウェー語",
	fi: "フィンランド語",
	cs: "チェコ語",
	el: "ギリシャ語",
	th: "タイ語",
	hu: "ハンガリー語",
	ro: "ルーマニア語",
	he: "ヘブライ語",
	id: "インドネシア語",
	vi: "ベトナム語",
	ms: "マレー語",
	sk: "スロバキア語",
	sr: "セルビア語",
	uk: "ウクライナ語",
	bn: "ベンガル語",
	pa: "パンジャビ語",
	ta: "タミル語",
	te: "テルグ語",
	ml: "マラヤーラム語",
	mr: "マラーティー語",
	kn: "カンナダ語",
	gu: "グジャラート語"
};

// 言語コードを日本語に変換する関数
export const getLanguageName = (code: string): string => {
  return languageMap[code] || code;
};