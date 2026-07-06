(() => {
const themeDetails = {
  population: {
    id: "001",
    category: "人口・暮らし",
    title: "境港市の人口",
    lead: "人口は、子育て、産業、交通、防災、福祉など、あらゆるテーマの土台になる数字です。",
    facts: [
      ["31,714人", "総人口", "2026年5月末"],
      ["15,456世帯", "世帯数", "2026年5月末"],
      ["34.0%", "65歳以上", "2026年5月末"],
    ],
    populationArticle: {
      subThemes: [
        {
          id: "001-1",
          title: "総人口と世帯数",
          summary: "境港市全体の人口規模と、1世帯あたりの暮らしの単位を見る入口。",
          data: "31,714人 / 15,456世帯",
        },
        {
          id: "001-2",
          title: "町別人口",
          summary: "どの町に人が多く住んでいるかを見て、生活機能を考える。",
          data: "外江町・渡町・上道町が上位",
        },
        {
          id: "001-3",
          title: "年齢別人口",
          summary: "子ども世代、働く世代、高齢者層の厚みから支援の優先度を見る。",
          data: "65歳以上 34.0%",
        },
        {
          id: "001-4",
          title: "人口推移",
          summary: "数年単位で人口がどう変わっているかを追い、減少の速度を見る。",
          data: "2021年度末から約1,300人減",
        },
        {
          id: "001-5",
          title: "暮らしへの影響",
          summary: "人口の変化を、医療、福祉、交通、子育て、商業に結びつけて考える。",
          data: "地域ごとの備えを考える",
        },
      ],
      townRanking: [
        ["外江町", 3831, -2],
        ["渡町", 3589, 3],
        ["上道町", 3376, 1],
        ["中野町", 2173, 1],
        ["竹内町", 2029, 2],
        ["夕日ヶ丘1丁目", 1348, -3],
        ["誠道町", 1089, -2],
        ["小篠津町", 1030, 0],
      ],
      ageGroups: [
        ["0-14歳", 3462, "10.9%"],
        ["15-64歳", 17464, "55.1%"],
        ["65歳以上", 10788, "34.0%"],
        ["75歳以上", 6424, "20.3%"],
      ],
      trend: [
        ["2021年度末", 33011],
        ["2022年度末", 32774],
        ["2023年度末", 32525],
        ["2024年度末", 32159],
        ["2025年度末", 31765],
        ["2026年5月", 31714],
      ],
      notes: [
        "人口が多い町は外江町・渡町・上道町で、上位3町だけで約1.08万人、全体の約34%を占めます。",
        "65歳以上は10,788人で34.0%。75歳以上も6,424人、20.3%に達しており、医療・福祉・移動支援の重要度が高い構造です。",
        "2021年度末から2026年5月までに、総人口は33,011人から31,714人へ減少。約1,300人規模の変化が起きています。",
      ],
      source: "境港市公式 月別住民基本台帳登録数・人口集計（2026年5月末）",
    },
    sections: [
      {
        heading: "このテーマで伝えること",
        body: "境港市の人口がどこに集まり、どの年齢層が厚く、ここ数年でどう変化しているのかを見ます。人口は単なる人数ではなく、子育て、医療、交通、商業、防災を考えるための地図です。",
      },
      {
        heading: "見るポイント",
        items: [
          "総人口と世帯数は、月ごとにどう変わっているのか",
          "年齢別人口から、子育て・高齢者支援の課題が見えるか",
          "人口の変化を、地域の仕事や公共交通とどう結びつけるか",
        ],
      },
      {
        heading: "考察",
        body: "2026年5月末の人口31,714人、世帯数15,456世帯を見ると、1世帯あたりの人数はおよそ2.05人です。町別では人口の多い地域がはっきりしている一方、年齢別では高齢化率の高さが見えます。人口減少だけを課題にするのではなく、どの地域に暮らしの機能を残し、どこに移動・見守り・子育て支援を厚くするかを具体的に考える段階に来ています。",
      },
      {
        heading: "次に見る問い",
        body: "町別の増減を数か月単位で追うと、住宅地、港周辺、中心部で違う動きが見える可能性があります。今後は町別の前月比だけでなく、数年単位の増減も重ねて見ていきます。",
      },
    ],
  },
  port: {
    id: "002",
    category: "産業・経済",
    title: "境漁港と水産業",
    lead: "魚のまちを支える港、市場、加工、流通を、暮らしと経済の両面から見つめます。",
    facts: [
      ["12.0万t", "水揚量", "令和5年"],
      ["245億円", "水揚金額", "令和5年"],
      ["全国3位", "水揚量順位", "令和5年"],
    ],
    portArticle: {
      fishTypes: [
        ["いわし", 53700, "45%"],
        ["さば", 34382, "29%"],
        ["あじ", 8799, "7%"],
        ["べにずわいがに", 5741, "5%"],
        ["くろまぐろ", 1099, "1%"],
        ["その他", 15972, "13%"],
      ],
      trend: [
        ["H30", 115381],
        ["R1", 85678],
        ["R2", 98289],
        ["R3", 93829],
        ["R4", 104948],
        ["R5", 120108],
      ],
      flow: [
        ["漁船", "まき網・かにかご・いか釣など"],
        ["市場", "入札・セリで価格が決まる"],
        ["買受人", "加工32・小売25・出荷13"],
        ["加工", "冷凍食品・カニ・サバ・アジなど"],
        ["食卓・観光", "魚のまちのブランドになる"],
      ],
      notes: [
        "令和5年の境漁港は、水揚量12.0万トン余で全国3位、水揚金額245億円余で全国5位です。",
        "魚種別では、いわしが45%、さばが29%を占め、まき網で獲る回遊魚が水揚げの大きな柱です。",
        "ベニズワイガニは年間約5千トンで、境漁港に水揚げされる量は全国の約5割のシェアがあります。",
        "市場で終わらず、冷凍・加工・販売・観光PRまでつながるところが、境港の水産業の強みです。",
      ],
      source: "境港市公式「境港の水産（令和5年版）」",
    },
    sections: [
      { heading: "このテーマで伝えること", body: "境漁港は境港市の産業イメージを形づくる重要な現場です。水揚げ、市場、加工、物流、食の発信をつなげて見ることで、港が地域経済に与える広がりを整理します。" },
      { heading: "見るポイント", items: ["水揚げされる魚種と季節の変化", "市場・加工・冷凍・物流のつながり", "観光や食育への活用"] },
      { heading: "考察", body: "港は単なる産業施設ではなく、境港市のブランドそのものです。水揚量ではいわし・さばの存在感が大きく、加工や冷凍の仕組みがあることで地域内に仕事と価値が残ります。魚を食べる観光から、魚が水揚げされ、値がつき、加工され、全国へ届く流れを理解する観光へ広げることが重要です。" },
    ],
  },
  tourism: {
    id: "003",
    category: "観光・文化",
    title: "水木しげるロード",
    lead: "妖怪文化を入口に、まち歩き、学び、滞在時間を伸ばす観光を考えます。",
    facts: [
      ["約800m", "散策距離", "JR境港駅から東へ"],
      ["178体", "妖怪ブロンズ像", "2024年春時点"],
      ["35個", "スタンプ", "妖怪スタンプラリー"],
    ],
    tourismArticle: {
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mizuki_Shigeru_Road_-02.jpg?width=1200",
        alt: "水木しげるロードの街路と時計型サイン",
        credit: "Photo: Aimaimyi / Wikimedia Commons / CC BY-SA 3.0",
      },
      route: [
        ["JR境港駅", "列車・駅前広場から妖怪の世界へ入る"],
        ["ゲゲゲの広場", "休憩、記念撮影、親子の滞在ポイント"],
        ["水木しげるロード", "約800mの商店街を歩きながら妖怪像を巡る"],
        ["店舗・食べ歩き", "土産、スイーツ、海鮮などで滞在時間を伸ばす"],
        ["水木しげる記念館", "作品世界と作者の人生を深く知る"],
      ],
      points: [
        ["街歩き", "駅から記念館まで歩いて回れる", "回遊しやすい"],
        ["写真", "サイン、広場、商店街が撮影スポットになる", "SNS向き"],
        ["学び", "妖怪ガイドブックや記念館で作品理解が深まる", "親子向き"],
        ["消費", "飲食、土産、グッズへ自然につながる", "商店街向き"],
      ],
      visitorStats: [
        ["4,290万人", "累計来訪者", "1993年開設から30周年時点の報道ベース"],
        ["年143万人規模", "単純平均", "累計を30年で割った参考値。年度別実数とは分けて扱う"],
        ["多言語MAP", "インバウンド導線", "英語・中国語・韓国語の観光MAPが用意されている"],
        ["港・空港", "広域アクセス", "クルーズ港、米子鬼太郎空港、境港駅が観光導線を支える"],
      ],
      shopSignals: [
        ["新スポット", "2024年春にゲゲゲの広場、鬼太郎のコインロッカーなどが登場し、駅前の滞在要素が増えています。"],
        ["スイーツ", "公式記事では、まんじゅう、いちご専門店のパフェ、さつまいも専門店のスイーツなどが紹介されています。"],
        ["店舗数", "店舗数の年次増加を示す公式の連続データは未確認です。現時点では、店の数そのものより、食べ歩き・土産・写真向きの商品が目立つ傾向として見るのが安全です。"],
      ],
      notes: [
        "水木しげるロードは、駅から記念館へ向かう約800mの道そのものが観光資源です。",
        "178体のブロンズ像、35個のスタンプラリー、広場や店舗が重なることで、歩く理由が連続して生まれます。",
        "来訪者数は累計では大きな実績があり、年間の実数は年度ごとの公表データを確認しながら更新する必要があります。",
        "インバウンド効果は、外国語MAP、クルーズ港、空港アクセスを入口に、写真・食べ歩き・土産へ消費をつなげられる点にあります。",
        "今後は昼だけでなく、夜の影絵や雨の日の楽しみ方も見せると、滞在時間をさらに伸ばせます。",
      ],
      source: "境港観光ガイド「水木しげるロード」関連記事、観光MAP、観光庁 Cruise Port Guide of Japan、読売新聞報道、Wikimedia Commons",
    },
    sections: [
      { heading: "このテーマで伝えること", body: "水木しげるロードは境港市を代表する観光資源です。写真を撮って終わる観光ではなく、商店街、駅前、記念館、食の体験へ回遊する流れを整理します。" },
      { heading: "見るポイント", items: ["来訪者が歩くルート", "親子・海外客・リピーターの楽しみ方", "夜や雨の日の過ごし方"] },
      { heading: "考察", body: "強い観光資源があるまちは、周辺への分散と滞在時間の設計が鍵になります。水木しげるロードは、駅から記念館までの道を歩く体験そのものが価値になっており、そこに写真、スタンプ、買い物、食、学びを重ねられる点が強みです。妖怪文化を入口に、港町の歴史や食へ自然につなげることが重要です。" },
    ],
  },
  children: {
    id: "004",
    category: "子育て・教育",
    title: "子育てと学び",
    lead: "子どもたちが地域を知り、地域が子育てを支える仕組みを考えます。",
    facts: [
      ["6校", "市立小学校", "渡・外江・境・上道・余子・中浜"],
      ["3校", "市立中学校", "第一・第二・第三"],
      ["3,462人", "0-14歳人口", "2026年5月末"],
    ],
    childrenArticle: {
      schoolCounts: [
        ["市立小学校", 6, "渡・外江・境・上道・余子・中浜"],
        ["市立中学校", 3, "第一・第二・第三"],
        ["県立高校", 2, "境高校・境港総合技術高校"],
      ],
      childStats: [
        ["3,462人", "0-14歳人口", "2026年5月末の住民基本台帳ベース"],
        ["約2,100人", "小中学齢の目安", "0-14歳人口を6-14歳相当に単純按分した参考値"],
        ["9校", "小中学校の受け皿", "小学校6校・中学校3校で地域に学校が分散"],
        ["1校あたり約230人", "単純平均の目安", "小中学齢人口の目安を9校で割った参考値"],
      ],
      schoolMap: {
        googleEmbed:
          "https://www.google.com/maps?q=%E5%A2%83%E6%B8%AF%E5%B8%82%20%E5%AD%A6%E6%A0%A1&output=embed",
        bounds: {
          minLat: 35.508,
          maxLat: 35.545,
          minLng: 133.208,
          maxLng: 133.251,
        },
        zones: [
          ["外江小学校区", "外江", 4, 18, 28, 34],
          ["境小学校区", "境", 42, 3, 27, 24],
          ["上道小学校区", "上道", 55, 16, 27, 26],
          ["渡小学校区", "渡", 18, 55, 26, 34],
          ["余子小学校区", "余子", 56, 43, 29, 31],
          ["中浜小学校区", "中浜", 76, 63, 22, 32],
        ],
        schools: [
          ["渡小学校", "小学校", "渡町901番地", 35.516778, 133.218722],
          ["外江小学校", "小学校", "外江町2105番地", 35.534917, 133.209583],
          ["境小学校", "小学校", "湊町27番地", 35.54325, 133.2315],
          ["上道小学校", "小学校", "上道町3026番地", 35.537222, 133.235722],
          ["余子小学校", "小学校", "竹内町3117番地", 35.525444, 133.239972],
          ["中浜小学校", "小学校", "麦垣町432番地", 35.509068, 133.249472],
          ["第一中学校", "中学校", "上道町1840番地", 35.542333, 133.237972],
          ["第二中学校", "中学校", "竹内町2438番地", 35.520944, 133.231111],
          ["第三中学校", "中学校", "外江町1372番地", 35.52525, 133.215778],
          ["境高校", "高校", "上道町3030番地", 35.536472, 133.234222],
          ["境港総合技術高校", "高校", "竹内町925番地", 35.526083, 133.237389],
        ],
      },
      pathways: [
        ["小学校", "通学・地域行事・公民館と近い日常の学び"],
        ["中学校", "部活動、進路、地域活動を広げる時期"],
        ["高校", "水産、観光、技術、地域産業と接続する出口"],
        ["地域", "港、商店街、水木しげるロード、防災を教材にする"],
      ],
      challenges: [
        ["児童生徒数の減少", "0-14歳人口は全体の10.9%。学校数を維持しながら、クラス規模、教職員配置、部活動の選択肢をどう守るかが課題です。"],
        ["校区ごとの差", "人口の多い町と少ない町があるため、通学距離、放課後の居場所、地域行事への参加機会に差が出やすくなります。"],
        ["地域を学ぶ機会", "港、水産業、観光、防災、鬼太郎文化など、境港らしい教材は多いので、学校外の人や場所とつなぐ仕組みが重要です。"],
      ],
      notes: [
        "境港市には市立小学校6校、市立中学校3校があり、地域ごとに学校が配置されています。",
        "0-14歳人口は3,462人で、市全体の10.9%。将来の児童生徒数は人口減少の影響を受けやすい構造です。",
        "学校の数だけを見るのではなく、子どもが地域の大人、産業、文化、自然、防災に触れる機会を増やせるかが定住にも関わります。",
        "今後は、学校別の児童生徒数、学級数、通学区域の変化を追うことで、より具体的な課題が見えてきます。",
      ],
      source: "境港市公式 月別住民基本台帳登録数、境港市の学校一覧情報",
    },
    sections: [
      { heading: "このテーマで伝えること", body: "保育、学校、通学路、放課後の居場所、ふるさと教育をつなげ、子育て世帯にとって必要な情報と、地域で支える視点を整理します。" },
      { heading: "見るポイント", items: ["親子で使える場所", "学校と地域産業の接点", "若者がまちに関わる機会"] },
      { heading: "考察", body: "人口を考えるうえで、子育て環境は最重要テーマの一つです。境港市は小学校6校・中学校3校が地域に分散しているため、子どもが地域と近い距離で学べる強みがあります。一方で、0-14歳人口は3,462人で全体の10.9%にとどまり、児童生徒数の減少が進むと、学級規模、部活動、通学、放課後の居場所に影響が出ます。支援制度だけでなく、港・水産業・観光・防災・文化を学校の学びにつなげ、地域全体で子どもの経験を増やすことが定住にも関わります。" },
    ],
  },
  welfare: {
    id: "005",
    category: "福祉・医療",
    title: "地域医療と見守り",
    lead: "高齢者や単身世帯が安心して暮らし続けるための地域の支えを考えます。",
    facts: [
      ["市役所1階", "地域包括支援センター", "境港市上道町3000 / 市役所から徒歩0分"],
      ["0859-47-1131", "高齢者の総合相談", "FAX 0859-47-2120 / choju@city.sakaiminato.lg.jp"],
      ["7:00-20:00", "みなとーる運行時間", "予約型乗合バス。運賃100円、障がい者・介助者50円"],
    ],
    contacts: [
      {
        label: "高齢者の相談",
        name: "境港市地域包括支援センター",
        place: "境港市役所1階 / 鳥取県境港市上道町3000",
        time: "市役所から徒歩0分",
        phone: "0859-47-1131",
        sub: "FAX 0859-47-2120 / choju@city.sakaiminato.lg.jp",
      },
      {
        label: "市役所代表",
        name: "境港市役所",
        place: "〒684-8501 鳥取県境港市上道町3000",
        time: "各課への確認や手続きの入口",
        phone: "0859-44-2111",
        sub: "FAX 0859-44-3001",
      },
      {
        label: "休日の軽い症状",
        name: "境港日曜休日応急診療所",
        place: "境港市内の休日応急診療",
        time: "日曜・祝日など 10:00-12:00 / 13:30-17:00",
        phone: "0859-44-4173",
        sub: "受診前に電話確認。重い症状や緊急時は119番を優先。",
      },
      {
        label: "通院・買い物の移動",
        name: "予約型乗合バス みなとーる",
        place: "境港市内の予約型公共交通",
        time: "運行時間 7:00-20:00",
        phone: "運賃 大人・小児100円",
        sub: "障がい者・介助者50円。予約状況に応じてAIがルートを作成。",
      },
      {
        label: "広域医療",
        name: "鳥取県西部の救急・医療機関情報",
        place: "米子市を含む鳥取県西部圏域",
        time: "休日夜間や専門医療は広域情報も確認",
        phone: "緊急時は119番",
        sub: "境港市内の相談窓口と、県西部の医療資源を組み合わせて確認。",
      },
    ],
    sections: [
      { heading: "このテーマで伝えること", body: "医療機関、介護、地域包括支援センター、見守り、移動支援を一つの流れとして整理します。体調が悪くなってから探す情報ではなく、元気なうちから相談先、通院手段、家族以外の見守り、休日夜間の受診先まで見える状態にすることを目指します。" },
      { heading: "見るポイント", items: ["地域包括支援センターなど、最初に相談できる窓口がわかりやすいか", "買い物・通院・手続きに行ける移動手段があるか", "認知症、フレイル、孤立を早めに見つける地域の目があるか", "米子市を含む鳥取県西部の医療機関・介護施設とつながれているか"] },
      { heading: "境港市内で見る支え", body: "境港市地域包括支援センターは、高齢者の総合相談窓口として位置づけられています。介護保険のことだけでなく、認知症、フレイル予防、家族の介護負担、ひとり暮らしの不安などを、早い段階で相談できる入口として見せることが重要です。市内の医療機関、介護事業所、民生委員、自治会、商店、公共交通が別々に動くのではなく、困りごとを発見した人が適切な窓口へつなげられる設計が必要です。" },
      { heading: "他市・広域連携", body: "境港市だけで全ての医療・介護を完結させるのではなく、鳥取県西部地区の医療・介護施設情報、米子市内の小児・休日夜間救急、西部医師会急患診療所、鳥取県西部の病院・診療所検索など、広域の資源とつながる視点が欠かせません。また、中海・宍道湖・大山圏域市長会のように県境を越えた連携の枠組みもあり、医療そのものに限らず、移動、暮らし、産業、交流を含めた圏域連携の土台として見ることができます。" },
      { heading: "参考にした主な情報", items: ["境港市公式: 地域包括支援センター、包括支援センターってこんなところ", "境港市公式: 鳥取県西部地区の医療、介護施設のご案内", "境港市公式: 日曜・休日・夜間救急診療施設等のご案内", "境港市公式: 公共交通、予約型乗合バス「みなとーる」", "中海・宍道湖・大山圏域市長会: 県境を越えた広域連携の枠組み"] },
      { heading: "考察", body: "世帯人数が小さくなるほど、家族だけで支える前提は弱くなります。だからこそ、医療と福祉を『病気や介護が必要になった後の制度』として見るのではなく、日常の変化に早く気づく仕組みとして考える必要があります。たとえば、通院に行けない、買い物が難しい、近所づきあいが減った、認知症が心配、災害時に避難できるか不安といった小さなサインを、交通、自治会、商店、医療機関、介護事業者、地域包括支援センターが拾えるかが鍵になります。境港市の強みは市域が比較的コンパクトで、顔の見える関係を作りやすいことです。一方で専門医療や休日夜間対応は米子市など鳥取県西部の広域資源に頼る場面もあるため、市内の見守りと広域医療をどう接続するかが今後の課題です。" },
    ],
  },
  disaster: {
    id: "006",
    category: "防災・安全",
    title: "低地の防災",
    lead: "水辺に囲まれたまちだからこそ、避難、情報、備えを日常化します。",
    sections: [
      { heading: "このテーマで伝えること", body: "津波、高潮、大雨、避難所、家庭備蓄、防災行政無線などを、暮らしの目線でわかりやすく整理します。" },
      { heading: "見るポイント", items: ["自宅から避難場所までの動線", "高齢者や子どもへの情報伝達", "港湾・物流の災害時の役割"] },
      { heading: "考察", body: "防災は特別な日だけのテーマではありません。観光客にも住民にもわかる表示や、日常の移動と避難経路を重ねて考えることが、港町の安全を高めます。" },
    ],
  },
  transport: {
    id: "007",
    category: "交通・移動",
    title: "暮らしの移動",
    lead: "駅、空港、バス、自転車、徒歩を、生活と観光の両面で見直します。",
    sections: [
      { heading: "このテーマで伝えること", body: "米子鬼太郎空港、境港駅、バス、レンタサイクル、歩行空間をつなげ、車がなくても動きやすいまちの可能性を考えます。" },
      { heading: "見るポイント", items: ["高齢者の通院・買い物", "観光客の二次交通", "歩きたくなる道の整備"] },
      { heading: "考察", body: "移動手段は人口、観光、福祉を横断する基盤です。便数だけでなく、情報の見つけやすさ、乗り換えのわかりやすさ、歩く楽しさが満足度を左右します。" },
    ],
  },
  environment: {
    id: "008",
    category: "環境・景観",
    title: "海辺の景観",
    lead: "海、街、山が見える風景を、まちの価値として守り育てます。",
    sections: [
      { heading: "このテーマで伝えること", body: "境港らしい景観、海辺の空間、夕日、港の風景、緑を、観光資源としてだけでなく暮らしの質として整理します。" },
      { heading: "見るポイント", items: ["写真を撮りたくなる場所", "海辺で過ごせる公共空間", "ごみ・景観・安全のバランス"] },
      { heading: "考察", body: "景観は一度失うと戻しにくい地域資産です。日常の風景を市民が誇れる形で記録し、観光客にも伝えることで、まちの印象が強くなります。" },
    ],
  },
  participation: {
    id: "009",
    category: "市政・参加",
    title: "市民参加と議会",
    lead: "市政を身近にし、暮らしの声を政策につなげる入口をつくります。",
    sections: [
      { heading: "このテーマで伝えること", body: "市役所、議会、広報、予算、計画、意見募集を、市民が使える情報として整理します。" },
      { heading: "見るポイント", items: ["市政情報の探しやすさ", "若者や子育て世帯が参加しやすい方法", "議会で何が話されているか"] },
      { heading: "考察", body: "まちの課題は行政だけで解けません。市民が情報を理解し、意見を出し、結果を確認できる循環があるほど、100のテーマは実際の改善につながります。" },
    ],
  },
  future: {
    id: "010",
    category: "未来・編集",
    title: "100のこと更新会議",
    lead: "テーマを増やし続けるための編集ルールと参加の仕組みをつくります。",
    sections: [
      { heading: "このテーマで伝えること", body: "100テーマを一度に完成させるのではなく、写真、データ、現地メモ、市民の声を少しずつ追加して育てる運営方法を整理します。" },
      { heading: "見るポイント", items: ["次に追加するテーマの決め方", "情報の出典と更新日", "学校・地域・事業者との共同編集"] },
      { heading: "考察", body: "ホームページは完成品ではなく、対話の器です。更新の仕組みを先に作ることで、まちの変化に合わせて内容も育っていきます。" },
    ],
  },
};

const themeButtons = document.querySelectorAll(".theme-card-button");
const themeDetail = document.querySelector("#themeDetail");
const detailPrompt = document.querySelector("#detailPrompt");

function renderDetail(theme) {
  const factMarkup = theme.facts
    ? `<div class="population-facts" aria-label="主要データ">${theme.facts
        .map(
          ([value, label, note]) => `
            <div>
              <span>${value}</span>
              <strong>${label}</strong>
              <small>${note}</small>
            </div>
          `,
        )
        .join("")}</div>`
    : "";

  const sections = theme.sections
    .map((section) => {
      const content = section.items
        ? `<ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : `<p>${section.body}</p>`;
      return `
        <section>
          <h4>${section.heading}</h4>
          ${content}
        </section>
      `;
    })
    .join("");
  const contactMarkup = theme.contacts
    ? `
      <section class="contact-panel" aria-labelledby="contactPanelTitle">
        <div class="panel-heading">
          <p class="section-kicker">Contact</p>
          <h4 id="contactPanelTitle">主な連絡先・場所</h4>
        </div>
        <div class="contact-card-list">
          ${theme.contacts
            .map(
              (contact) => `
                <article class="contact-card">
                  <span class="contact-label">${contact.label}</span>
                  <h5>${contact.name}</h5>
                  <dl>
                    <div>
                      <dt>場所</dt>
                      <dd>${contact.place}</dd>
                    </div>
                    <div>
                      <dt>目安・時間</dt>
                      <dd>${contact.time}</dd>
                    </div>
                    <div>
                      <dt>電話・料金</dt>
                      <dd>${contact.phone}</dd>
                    </div>
                  </dl>
                  <p>${contact.sub}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `
    : "";

  const populationArticle = theme.populationArticle
    ? renderPopulationArticle(theme.populationArticle)
    : "";
  const portArticle = theme.portArticle
    ? renderPortArticle(theme.portArticle)
    : "";
  const tourismArticle = theme.tourismArticle
    ? renderTourismArticle(theme.tourismArticle)
    : "";
  const childrenArticle = theme.childrenArticle
    ? renderChildrenArticle(theme.childrenArticle)
    : "";

  themeDetail.innerHTML = `
    <div class="detail-header">
      <p class="section-kicker">Theme ${theme.id} / ${theme.category}</p>
      <h3>${theme.title}</h3>
      <p>${theme.lead}</p>
      ${factMarkup}
    </div>
    ${populationArticle}
    ${portArticle}
    ${tourismArticle}
    ${childrenArticle}
    ${contactMarkup}
    <div class="detail-grid">${sections}</div>
  `;
}

function renderChildrenArticle(article) {
  const schoolCards = article.schoolCounts
    .map(
      ([label, count, text]) => `
        <article class="education-school-card">
          <strong>${count}</strong>
          <span>${label}</span>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  const statCards = article.childStats
    .map(
      ([value, label, text]) => `
        <article class="education-stat-card">
          <strong>${value}</strong>
          <span>${label}</span>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  const { bounds, schools, zones } = article.schoolMap;
  const schoolZones = zones
    .map(
      ([name, label, left, top, width, height], index) => `
        <span class="education-school-zone zone-${index + 1}" style="left:${left}%; top:${top}%; width:${width}%; height:${height}%;">
          <strong>${label}</strong>
        </span>
      `,
    )
    .join("");

  const schoolZoneLegend = zones
    .map(
      ([name], index) => `
        <li><span class="zone-swatch zone-${index + 1}"></span>${name}</li>
      `,
    )
    .join("");

  const schoolMarkers = schools
    .map(([name, type, address, lat, lng]) => {
      const left = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100;
      const top = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 100;
      return `
        <button class="education-map-marker ${type === "小学校" ? "is-elementary" : type === "中学校" ? "is-junior" : "is-high"}" type="button" style="left:${left.toFixed(2)}%; top:${top.toFixed(2)}%;" aria-label="${name} ${address}">
          <span>${type === "小学校" ? "小" : type === "中学校" ? "中" : "高"}</span>
          <strong>${name}</strong>
        </button>
      `;
    })
    .join("");

  const schoolList = schools
    .map(
      ([name, type, address]) => `
        <li>
          <strong>${name}</strong>
          <span>${type} / ${address}</span>
        </li>
      `,
    )
    .join("");

  const pathways = article.pathways
    .map(
      ([title, text]) => `
        <li>
          <strong>${title}</strong>
          <span>${text}</span>
        </li>
      `,
    )
    .join("");

  const challenges = article.challenges
    .map(
      ([title, text]) => `
        <article class="education-challenge-card">
          <h5>${title}</h5>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  const notes = article.notes.map((note) => `<li>${note}</li>`).join("");

  return `
    <div class="education-article">
      <section class="education-panel education-school-panel">
        <div class="panel-heading">
          <p class="section-kicker">Schools</p>
          <h4>学校数から見る学びの土台</h4>
          <p>小学校・中学校・高校が地域にどう配置されているかを、子どもの経験につなげて見ます。</p>
        </div>
        <div class="education-school-grid">${schoolCards}</div>
      </section>

      <section class="education-panel education-map-panel">
        <div class="panel-heading">
          <p class="section-kicker">School Map</p>
          <h4>地図上で見る学校の位置と校区の目安</h4>
          <p>Googleマップを背景に、小学校区の目安を薄い色で分け、その上に小学校・中学校・高校の位置を重ねて表示します。</p>
        </div>
        <div class="education-map-wrap">
          <div class="education-map" aria-label="境港市内の学校位置マップ">
            <iframe
              class="education-google-map"
              title="Googleマップで見る境港市の学校"
              src="${article.schoolMap.googleEmbed}"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="education-map-overlay" aria-hidden="true">
              ${schoolZones}
            </div>
            <div class="education-marker-layer">
              ${schoolMarkers}
            </div>
          </div>
          <div class="education-map-side">
            <div class="education-zone-legend">
              <strong>小学校区の色分け</strong>
              <ul>${schoolZoneLegend}</ul>
            </div>
            <ul class="education-map-list">${schoolList}</ul>
          </div>
        </div>
        <p class="source-note">背景地図はGoogleマップを使用しています。校区の色分けは位置関係を伝えるための目安です。正確な通学区域は境港市教育委員会の最新情報を確認してください。</p>
      </section>

      <section class="education-panel education-stat-panel">
        <div class="panel-heading">
          <p class="section-kicker">Children</p>
          <h4>児童生徒数の見方</h4>
          <p>正確な学校別人数は今後追いながら、まずは0-14歳人口から小中学齢の規模感を見ます。</p>
        </div>
        <div class="education-stat-grid">${statCards}</div>
      </section>

      <section class="education-panel education-path-panel">
        <div class="panel-heading">
          <p class="section-kicker">Learning Path</p>
          <h4>地域を知る学びの流れ</h4>
          <p>学校の中だけでなく、港、観光、防災、文化を教材にできることが境港の強みです。</p>
        </div>
        <ol class="education-path-list">${pathways}</ol>
      </section>

      <section class="education-panel education-challenge-panel">
        <div class="panel-heading">
          <p class="section-kicker">Issues</p>
          <h4>今後の課題</h4>
        </div>
        <div class="education-challenge-grid">${challenges}</div>
      </section>

      <section class="education-panel education-insight-panel">
        <div class="panel-heading">
          <p class="section-kicker">Insight</p>
          <h4>学校を地域の入口として見る</h4>
        </div>
        <ul>${notes}</ul>
        <p class="source-note">${article.source}</p>
      </section>
    </div>
  `;
}

function renderTourismArticle(article) {
  const routeSteps = article.route
    .map(
      ([title, text]) => `
        <li>
          <strong>${title}</strong>
          <span>${text}</span>
        </li>
      `,
    )
    .join("");

  const pointCards = article.points
    .map(
      ([title, text, label]) => `
        <article class="tourism-point-card">
          <span>${label}</span>
          <h5>${title}</h5>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  const notes = article.notes.map((note) => `<li>${note}</li>`).join("");
  const visitorStats = article.visitorStats
    .map(
      ([value, label, text]) => `
        <article class="tourism-stat-card">
          <strong>${value}</strong>
          <span>${label}</span>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
  const shopSignals = article.shopSignals
    .map(
      ([title, text]) => `
        <li>
          <strong>${title}</strong>
          <span>${text}</span>
        </li>
      `,
    )
    .join("");

  return `
    <div class="tourism-article">
      <section class="tourism-photo-panel">
        <img src="${article.image.src}" alt="${article.image.alt}" />
        <p>${article.image.credit}</p>
      </section>

      <section class="tourism-panel tourism-map-panel">
        <div class="panel-heading">
          <p class="section-kicker">Route</p>
          <h4>駅から記念館まで、歩く観光導線</h4>
          <p>水木しげるロードは、約800mの道に見どころを連続させることで回遊を生みます。</p>
        </div>
        <ol class="tourism-route">${routeSteps}</ol>
      </section>

      <section class="tourism-panel tourism-visitor-panel">
        <div class="panel-heading">
          <p class="section-kicker">Visitors</p>
          <h4>来訪者数とインバウンド効果</h4>
          <p>累計来訪者の大きさと、港・空港・多言語MAPを使った海外客への入口を分けて見ます。</p>
        </div>
        <div class="tourism-stat-grid">${visitorStats}</div>
      </section>

      <section class="tourism-panel tourism-point-panel">
        <div class="panel-heading">
          <p class="section-kicker">Experience</p>
          <h4>観光体験を4つに分ける</h4>
          <p>写真、学び、買い物、食が重なるほど、まち歩きは長く濃くなります。</p>
        </div>
        <div class="tourism-point-grid">${pointCards}</div>
      </section>

      <section class="tourism-panel tourism-shop-panel">
        <div class="panel-heading">
          <p class="section-kicker">Shop Trend</p>
          <h4>店舗とスイーツの見え方</h4>
          <p>店舗数の増減は断定せず、観光客が歩きながら買いやすい商品が増えているかを見ます。</p>
        </div>
        <ul class="tourism-shop-list">${shopSignals}</ul>
      </section>

      <section class="tourism-panel tourism-insight-panel">
        <div class="panel-heading">
          <p class="section-kicker">Insight</p>
          <h4>水木しげるロードをどう見るか</h4>
        </div>
        <ul>${notes}</ul>
        <p class="source-note">${article.source}</p>
      </section>
    </div>
  `;
}

function renderPortArticle(article) {
  const maxFish = Math.max(...article.fishTypes.map(([, value]) => value));
  const maxTrend = Math.max(...article.trend.map(([, value]) => value));
  const minTrend = Math.min(...article.trend.map(([, value]) => value));
  const rangeTrend = maxTrend - minTrend || 1;

  const fishBars = article.fishTypes
    .map(([name, value, ratio]) => {
      const width = Math.round((value / maxFish) * 100);
      return `
        <div class="fish-row">
          <span>${name}</span>
          <strong>${value.toLocaleString()}t</strong>
          <em>${ratio}</em>
          <i style="--bar:${width}%"></i>
        </div>
      `;
    })
    .join("");

  const trendBars = article.trend
    .map(([label, value]) => {
      const height = 34 + Math.round(((value - minTrend) / rangeTrend) * 66);
      return `
        <div class="fish-trend-column">
          <span>${value.toLocaleString()}</span>
          <i style="--bar:${height}%"></i>
          <strong>${label}</strong>
        </div>
      `;
    })
    .join("");

  const flowSteps = article.flow
    .map(
      ([title, text]) => `
        <li>
          <strong>${title}</strong>
          <span>${text}</span>
        </li>
      `,
    )
    .join("");

  const notes = article.notes.map((note) => `<li>${note}</li>`).join("");

  return `
    <div class="port-article">
      <section class="port-panel fish-map-panel">
        <div class="panel-heading">
          <p class="section-kicker">Catch</p>
          <h4>令和5年の水揚げ構成</h4>
          <p>境漁港の水揚げは、いわし・さばを中心に、カニやマグロもブランドを支えています。</p>
        </div>
        <div class="fish-chart">${fishBars}</div>
      </section>

      <section class="port-panel">
        <div class="panel-heading">
          <p class="section-kicker">Trend</p>
          <h4>近年の水揚量推移</h4>
          <p>令和元年に落ち込んだ後、令和5年は12万トン台まで増えています。</p>
        </div>
        <div class="fish-trend-chart">${trendBars}</div>
      </section>

      <section class="port-panel fish-flow-panel">
        <div class="panel-heading">
          <p class="section-kicker">Flow</p>
          <h4>魚が価値に変わる流れ</h4>
          <p>水揚げされた魚は、市場、買受人、加工、販売を通って、地域の仕事とブランドになります。</p>
        </div>
        <ol class="fish-flow">${flowSteps}</ol>
      </section>

      <section class="port-panel fish-insight-panel">
        <div class="panel-heading">
          <p class="section-kicker">Insight</p>
          <h4>水産業をどう見るか</h4>
        </div>
        <ul>${notes}</ul>
        <p class="source-note">${article.source}</p>
      </section>
    </div>
  `;
}

function renderPopulationArticle(article) {
  const maxTown = Math.max(...article.townRanking.map(([, value]) => value));
  const maxTrend = Math.max(...article.trend.map(([, value]) => value));
  const minTrend = Math.min(...article.trend.map(([, value]) => value));
  const rangeTrend = maxTrend - minTrend || 1;

  const townRows = article.townRanking
    .map(([name, population, change]) => {
      const width = Math.round((population / maxTown) * 100);
      const changeLabel = change > 0 ? `+${change}` : `${change}`;
      return `
        <tr>
          <th scope="row">${name}</th>
          <td>${population.toLocaleString()}人</td>
          <td class="${change < 0 ? "is-minus" : change > 0 ? "is-plus" : ""}">${changeLabel}</td>
          <td><span class="mini-bar" style="--bar:${width}%"></span></td>
        </tr>
      `;
    })
    .join("");

  const ageBars = article.ageGroups
    .map(([label, value, ratio]) => {
      const width = label === "75歳以上" ? Math.round((value / 31714) * 100) : Number.parseFloat(ratio);
      return `
        <div class="age-row">
          <span>${label}</span>
          <strong>${value.toLocaleString()}人</strong>
          <em>${ratio}</em>
          <i style="--bar:${width}%"></i>
        </div>
      `;
    })
    .join("");

  const trendBars = article.trend
    .map(([label, value]) => {
      const height = 34 + Math.round(((value - minTrend) / rangeTrend) * 66);
      return `
        <div class="trend-column">
          <span class="trend-value">${value.toLocaleString()}</span>
          <i style="--bar:${height}%"></i>
          <span class="trend-label">${label}</span>
        </div>
      `;
    })
    .join("");

  const notes = article.notes.map((note) => `<li>${note}</li>`).join("");
  const subThemeCards = article.subThemes
    .map(
      (item) => `
        <article class="subtheme-card">
          <span>${item.id}</span>
          <h5>${item.title}</h5>
          <p>${item.summary}</p>
          <strong>${item.data}</strong>
        </article>
      `,
    )
    .join("");

  return `
    <div class="population-article">
      <section class="population-panel subtheme-panel">
        <div class="panel-heading">
          <p class="section-kicker">Theme 001</p>
          <h4>境港市の人口を5つに分類</h4>
          <p>100テーマへ広げていくために、人口テーマを小さく分けて更新しやすくします。</p>
        </div>
        <div class="subtheme-grid">${subThemeCards}</div>
      </section>

      <section class="population-panel town-panel">
        <div class="panel-heading">
          <p class="section-kicker">Town</p>
          <h4>町別人口 上位8町</h4>
          <p>2026年5月末時点。前月比も合わせて見ると、どこに小さな変化が出ているかが見えます。</p>
        </div>
        <div class="table-wrap">
          <table class="town-table">
            <thead>
              <tr>
                <th>町名</th>
                <th>人口</th>
                <th>前月比</th>
                <th>規模</th>
              </tr>
            </thead>
            <tbody>${townRows}</tbody>
          </table>
        </div>
      </section>

      <section class="population-panel">
        <div class="panel-heading">
          <p class="section-kicker">Age</p>
          <h4>年齢別人口の見取り図</h4>
          <p>高齢者層の厚さと、子ども世代の規模を並べて確認します。</p>
        </div>
        <div class="age-chart">${ageBars}</div>
      </section>

      <section class="population-panel trend-panel">
        <div class="panel-heading">
          <p class="section-kicker">Trend</p>
          <h4>過去数年の人口推移</h4>
          <p>年度末人口を中心に、直近の2026年5月末までをつないでいます。</p>
        </div>
        <div class="trend-chart" aria-label="人口推移グラフ">${trendBars}</div>
      </section>

      <section class="population-panel insight-panel">
        <div class="panel-heading">
          <p class="section-kicker">Insight</p>
          <h4>どこで、どんな変化が起きているか</h4>
        </div>
        <ul>${notes}</ul>
        <p class="source-note">${article.source}</p>
      </section>
    </div>
  `;
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = themeDetails[button.dataset.theme];
    if (!theme) return;

    themeButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-expanded", "false");
    });

    renderDetail(theme);
    button.classList.add("is-active");
    button.setAttribute("aria-expanded", "true");
    detailPrompt.classList.add("is-hidden");
    themeDetail.classList.add("is-visible");
    themeDetail.focus({ preventScroll: true });
  });
});
})();
