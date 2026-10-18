/* ========================================================
  REN PRIVATE ROOM / ストーリー本文の編集はこのファイルだけでOK

  category: "main"（本編） / "romance"（恋愛） / "short"（短編）
  unlockLevel: 必要な親密度レベル
  requires: 先に読み終えてほしい話のID。不要なら null
  rewardXp: 初回読了でもらえる親密度
  name: "蓮" / "user" / "地の文" など
  choices: 分岐の選択肢（選んだ後の文章は steps に書く）

  現在のストーリー本文は【すべて仮のサンプル】です。
  『四人の飼育。逃げ場なし』の公式設定や実際の展開ではありません。
  話を増やす場合は、末尾の } の後のカンマに注意してください。
======================================================== */
window.REN_STORIES = [
  {
    "id": "main-01",
    "category": "main",
    "title": "夜の呼び声",
    "episode": "PROLOGUE 01",
    "unlockLevel": 1,
    "requires": null,
    "description": "本編の導入を想定した仮のエピソード。",
    "background": "ren.jpg",
    "rewardXp": 10,
    "sample": true,
    "steps": [
      {
        "name": "地の文",
        "text": "これは、本編ストーリーの表示方法を確認するためのサンプルです。実際の設定・展開に合わせて自由に書き換えられます。"
      },
      {
        "name": "地の文",
        "text": "夜の静けさに、足音だけが近づいてくる。"
      },
      {
        "name": "蓮",
        "text": "……何してんだ。こんなところで。"
      },
      {
        "name": "地の文",
        "text": "目を上げると、蓮がこちらを見ていた。"
      },
      {
        "choices": [
          {
            "label": "「蓮を待ってた」",
            "bonusXp": 4,
            "steps": [
              {
                "name": "蓮",
                "text": "……は？ 俺を？ ……先に言えよ。"
              }
            ]
          },
          {
            "label": "「ちょっと考えごとをしてた」",
            "bonusXp": 2,
            "steps": [
              {
                "name": "蓮",
                "text": "……そうかよ。なら、少し付き合う。"
              }
            ]
          }
        ]
      },
      {
        "name": "地の文",
        "text": "ふたりの間に、小さな沈黙が落ちる。"
      }
    ]
  },
  {
    "id": "main-02",
    "category": "main",
    "title": "扉の向こう",
    "episode": "MAIN 02",
    "unlockLevel": 3,
    "requires": "main-01",
    "description": "前の話を読み終えると解放される続き。",
    "background": "ren.jpg",
    "rewardXp": 15,
    "sample": true,
    "steps": [
      {
        "name": "地の文",
        "text": "※本編第2話の仮テキストです。設定が決まったら、この文章を差し替えてください。"
      },
      {
        "name": "蓮",
        "text": "……ここから先は、勝手に動くなよ。"
      },
      {
        "name": "地の文",
        "text": "蓮は立ち止まり、振り返った。"
      },
      {
        "name": "蓮",
        "text": "何かあったら、俺を呼べ。いいな？"
      }
    ]
  },
  {
    "id": "love-01",
    "category": "romance",
    "title": "もう少しだけ",
    "episode": "ROMANCE 01",
    "unlockLevel": 1,
    "requires": null,
    "description": "距離が縮まる短い会話のサンプル。",
    "background": "ren.jpg",
    "rewardXp": 10,
    "sample": true,
    "steps": [
      {
        "name": "地の文",
        "text": "※恋愛ストーリーの仮テキストです。"
      },
      {
        "name": "蓮",
        "text": "……もう帰んのか？"
      },
      {
        "choices": [
          {
            "label": "「まだ一緒にいたい」",
            "bonusXp": 5,
            "steps": [
              {
                "name": "蓮",
                "text": "……そうかよ。じゃあ、もう少しだけ。"
              }
            ]
          },
          {
            "label": "「蓮くんはどうしたい？」",
            "bonusXp": 3,
            "steps": [
              {
                "name": "蓮",
                "text": "俺に聞くなよ。……いや、帰んなくてもいいけど。"
              }
            ]
          }
        ]
      },
      {
        "name": "地の文",
        "text": "その声は、さっきより少しだけ柔らかかった。"
      }
    ]
  },
  {
    "id": "love-02",
    "category": "romance",
    "title": "触れた指先",
    "episode": "ROMANCE 02",
    "unlockLevel": 5,
    "requires": "love-01",
    "description": "親密度LV.5と前話クリアで解放。",
    "background": "ren.jpg",
    "rewardXp": 18,
    "sample": true,
    "steps": [
      {
        "name": "地の文",
        "text": "※恋愛ストーリー第2話の仮テキストです。"
      },
      {
        "name": "地の文",
        "text": "手が触れた瞬間、蓮がわずかに目を伏せる。"
      },
      {
        "name": "蓮",
        "text": "……別に、離さなくていい。"
      },
      {
        "choices": [
          {
            "label": "そっと握り返す",
            "bonusXp": 5,
            "steps": [
              {
                "name": "蓮",
                "text": "……ん。"
              }
            ]
          },
          {
            "label": "照れて目を逸らす",
            "bonusXp": 2,
            "steps": [
              {
                "name": "蓮",
                "text": "……お前まで照れるなよ。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "short-01",
    "category": "short",
    "title": "缶コーヒー",
    "episode": "SHORT 01",
    "unlockLevel": 1,
    "requires": null,
    "description": "気軽に読める日常の一幕。",
    "background": "ren.jpg",
    "rewardXp": 8,
    "sample": true,
    "steps": [
      {
        "name": "地の文",
        "text": "※短編イベントの仮テキストです。"
      },
      {
        "name": "蓮",
        "text": "……これ、俺に？"
      },
      {
        "name": "地の文",
        "text": "差し出されたた缶コーヒーを受け取り、蓮は小さく笑った。"
      },
      {
        "name": "蓮",
        "text": "……ありがとな。"
      }
    ]
  },
  {
    "id": "short-02",
    "category": "short",
    "title": "雨宿り",
    "episode": "SHORT 02",
    "unlockLevel": 3,
    "requires": null,
    "description": "親密度LV.3で解放される短編。",
    "background": "ren.jpg",
    "rewardXp": 12,
    "sample": true,
    "steps": [
      {
        "name": "地の文",
        "text": "※短編イベント第2話の仮テキストです。"
      },
      {
        "name": "地の文",
        "text": "突然の雨に、ふたりは軒下へ駆け込んだ。"
      },
      {
        "name": "蓮",
        "text": "……濡れてねえか？"
      },
      {
        "choices": [
          {
            "label": "「ちょっとだけ」",
            "bonusXp": 2,
            "steps": [
              {
                "name": "蓮",
                "text": "……ほら、こっち寄れ。"
              }
            ]
          },
          {
            "label": "「蓮くんは大丈夫？」",
            "bonusXp": 4,
            "steps": [
              {
                "name": "蓮",
                "text": "俺より自分の心配しろって。"
              }
            ]
          }
        ]
      }
    ]
  }
];
