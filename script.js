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
    facts: [
      ["震度6強", "2000年鳥取県西部地震", "境港市東本町で観測。地震時の液状化・避難行動も考える"],
      ["2021年3月", "ハザードマップ更新", "津波・洪水の浸水予測と避難ルートを確認"],
      ["0859-47-1071", "防災危機管理課", "防災行政無線、避難所、ハザードマップの確認窓口"],
    ],
    disasterArticle: {
      pastEvents: [
        {
          label: "地震",
          value: "震度6強",
          title: "2000年鳥取県西部地震",
          text: "2000年10月6日13時30分、境港市東本町で震度6強、最大加速度762.7galを観測。低地のまちでは、建物だけでなく地盤、道路、港湾施設、避難路の通行可否まで考える必要があります。",
        },
        {
          label: "津波",
          value: "繰り返し",
          title: "津波は一度で終わらない",
          text: "境港市は、海岸近くで地震を感じたら海岸から離れ、2階建て以上の頑丈な建物や津波一時避難所へ避難するよう案内しています。警報解除まで戻らないことが基本です。",
        },
        {
          label: "風水害",
          value: "事前行動",
          title: "台風・豪雨は早めの準備",
          text: "風水害は、気象情報を集め、停電、非常持ち出し品、飛散物、側溝・排水溝の確認を早めに行うことで被害を小さくできます。強風雨の中で海辺や水路を見に行かないことも重要です。",
        },
      ],
      flow: [
        {
          title: "1. 自宅を確認",
          summary: "津波・洪水ハザードマップで、浸水想定、家の階数、近くの高い建物を確認する。",
          details: [
            "家が浸水想定区域に入るか、何階まで使えるか、夜間でも上がれる安全な場所があるかを確認します。",
            "自宅だけでなく、職場、学校、よく行く店、親族宅からの逃げ先も同じように見ておきます。",
            "地震後は液状化や段差で道路が通れない場合があるため、地図上の最短ルートだけに頼らないことが大切です。",
          ],
        },
        {
          title: "2. 逃げ先を決める",
          summary: "指定緊急避難場所、津波避難ビル、親族・友人宅など、状況別の行き先を複数持つ。",
          details: [
            "津波や高潮では、遠くへ移動するより、近くの高い場所や頑丈な建物へ早く上がる判断が必要になることがあります。",
            "指定避難所は一定期間生活する場所、指定緊急避難場所は命を守るために急いで逃げる場所として分けて考えます。",
            "高齢者、乳幼児、ペット、車いす利用者がいる場合は、実際に入れる場所か、移動に何分かかるかも確認します。",
          ],
        },
        {
          title: "3. 道順を歩く",
          summary: "夜、雨、子ども・高齢者と一緒の場合も想定し、段差、暗い道、橋、冠水しやすい道を見ておく。",
          details: [
            "晴れた昼だけでなく、雨の日、夕方、荷物を持った状態でも歩けるかを確認します。",
            "橋、水路沿い、海岸沿い、狭い道、ブロック塀の近くは、災害時に通りにくくなる可能性があります。",
            "観光客が多い場所では、案内表示、駅、商店街、港から避難場所までの分かりやすさも重要です。",
          ],
        },
        {
          title: "4. 情報を受ける",
          summary: "防災行政無線、あんしんトリピーメール、市ホームページ、広報車など複数の受け取り方を用意する。",
          details: [
            "屋外放送は雨風や建物内では聞こえにくいことがあるため、メール、スマホ通知、家族からの連絡を重ねます。",
            "高齢者や子どもには、情報が届いた後に誰が声をかけるか、誰と一緒に動くかまで決めておく必要があります。",
            "観光客には地名だけでは伝わりにくいため、駅、港、商店街、現在地から見た逃げ方で案内できると安心です。",
          ],
        },
        {
          title: "5. 戻らない",
          summary: "津波や高潮・洪水では、一度水が引いた後や雨が弱まった後も危険が残るため、解除や安全確認まで戻らない。",
          details: [
            "津波は二度目、三度目の波が大きくなることがあり、警報や注意報が解除されるまで海岸部へ戻らないことが基本です。",
            "大雨後は道路冠水、側溝、マンホール、倒木、停電など、見た目では分かりにくい危険が残ります。",
            "家族や近所で『誰かを探しに戻らない』『海や水路を見に行かない』という約束を先に決めておくことが大切です。",
          ],
        },
      ],
      signals: [
        ["防災行政無線", "大津波警報・津波警報、避難情報、訓練放送、生活安全情報を地域へ伝える基礎インフラ。"],
        ["あんしんトリピーメール", "屋外放送が聞こえにくい時や外出中でも情報を受け取るため、事前登録しておきたい手段。"],
        ["高齢者・子ども", "聞こえたか、理解できたか、動けるかを近所・家族・学校・福祉とつなげて確認する。"],
      ],
      portRoles: [
        {
          title: "避難と立入規制",
          summary: "岸壁、漁港、海辺の観光地は、津波・高潮時に近づかないルールを明確にする。",
          details: [
            "港や岸壁は水位変化が見えにくく、津波・高潮時には短時間で危険な場所になります。",
            "水木しげるロード、境港駅、港周辺など観光客が多い場所では、現在地から海へ近づかない導線を示すことが重要です。",
            "港湾関係者、漁業者、観光事業者、警察・消防が同じ判断基準で立入規制を伝えられると、混乱を減らせます。",
          ],
        },
        {
          title: "物資と燃料",
          summary: "災害時は道路だけでなく港湾・空港・広域物流の復旧が生活物資の確保に関わる。",
          details: [
            "道路が冠水・損傷した場合、港湾、空港、周辺自治体との広域物流が生活物資や燃料確保の支えになります。",
            "燃料、飲料水、食料、医薬品、発電機などは、届くまでの時間差を考えて家庭・地域側でも備蓄が必要です。",
            "港の復旧が遅れると、住民生活だけでなく水産加工、冷凍保管、観光、商店の仕入れにも影響が広がります。",
          ],
        },
        {
          title: "事業継続",
          summary: "水産、冷凍・加工、観光船、フェリーなど、港が止まると地域経済と食の流通に影響が出る。",
          details: [
            "境港の産業は漁港、市場、冷凍・加工、物流がつながっているため、一部の停止が連鎖しやすい構造です。",
            "停電、断水、道路寸断、通信障害が起きた時に、どの業務を優先して再開するかを事前に整理しておく必要があります。",
            "観光客が滞在中に災害が起きた場合、帰宅困難、宿泊、交通案内、避難場所案内も港町の事業継続に含めて考えます。",
          ],
        },
      ],
      checklist: [
        {
          title: "家族で集合場所、連絡方法、避難先を決める",
          details: [
            "自宅、学校、職場、外出先で別々に被災した場合の集合場所を複数決めます。",
            "電話がつながらない時のために、災害用伝言サービス、SNS、親族経由の連絡方法も決めておきます。",
            "避難先は、津波、洪水、地震、火災で適した場所が変わるため、災害種別ごとに分けて確認します。",
          ],
        },
        {
          title: "非常持ち出し品、薬、眼鏡、充電器、モバイルバッテリーをまとめる",
          details: [
            "すぐ持ち出す袋には、水、食料、ライト、電池、携帯トイレ、現金、保険証情報、常備薬を入れます。",
            "高齢者や子どもがいる家庭では、お薬手帳、紙おむつ、ミルク、アレルギー対応食、補聴器用電池も確認します。",
            "スマホは情報収集と安否確認の要になるため、充電器とモバイルバッテリーは普段から同じ場所に置きます。",
          ],
        },
        {
          title: "ハザードマップで浸水想定と避難場所を確認する",
          details: [
            "自宅だけでなく、通勤・通学路、よく行く店、親族宅が浸水想定に入るかも確認します。",
            "避難場所までの道に橋、水路、海岸沿い、暗い道、狭い道がある場合は別ルートも考えます。",
            "地図を見るだけでなく、家族で一度歩いてみると、時間、段差、夜間の見え方が具体的になります。",
          ],
        },
        {
          title: "高齢者、子ども、観光客にもわかる声かけを決めておく",
          details: [
            "『逃げて』だけでなく、『どこへ』『誰と』『何を持って』動くかを短い言葉で伝える準備をします。",
            "近所に一人暮らしの高齢者や支援が必要な人がいる場合、誰が声をかけるかを地域で決めておくと安心です。",
            "観光客には地名よりも、駅、港、商店街、見えている建物を基準に案内すると伝わりやすくなります。",
          ],
        },
        {
          title: "港、海岸、水路を見に行かないことを家族で共有する",
          details: [
            "津波、高潮、大雨では、様子を見に行く行動そのものが危険になります。",
            "家族や知人が心配でも、警報・避難情報が出ている間は海辺や水路へ戻らない約束をしておきます。",
            "写真や動画を撮りに行かない、車で冠水道路に入らないなど、してはいけない行動も事前に共有します。",
          ],
        },
      ],
      notes: [
        "境港市は令和3年3月に津波・洪水ハザードマップを更新しており、浸水予想場所と避難ルートの確認を呼びかけています。",
        "指定緊急避難場所は、地震、津波、洪水・高潮等、大規模火災など災害種別ごとに指定されています。",
        "避難情報は、防災行政無線、あんしんトリピーメール、市ホームページ、広報車などで伝えられます。",
        "2000年鳥取県西部地震では境港市東本町で震度6強を観測。低地では水害だけでなく地震時の地盤・道路・港湾への影響も重ねて見る必要があります。",
      ],
      source: "境港市公式 防災情報、津波に備える、風水害に備える、指定避難所・指定緊急避難場所、防災行政無線情報、気象庁 強震波形（2000年鳥取県西部地震）",
    },
    sections: [
      { heading: "このテーマで伝えること", body: "津波、高潮、大雨、避難所、家庭備蓄、防災行政無線を、暮らしの目線で整理します。とくに境港市は海、日本海、中海、境水道、港湾に囲まれたまちなので、どこに逃げるかだけでなく、いつ判断し、誰に伝え、どの道を使うかまで日常の中で確認しておくことが大切です。" },
      { heading: "見るポイント", items: ["自宅から避難場所までの動線を、昼・夜・雨の日で確認する", "高齢者や子どもに情報が届き、実際に動ける仕組みがあるか", "港湾・物流が止まった時、生活物資、燃料、水産業、観光にどんな影響が出るか", "過去の地震や水害の教訓を、避難ルートと備蓄に落とし込めているか"] },
      { heading: "参考にした主な情報", items: ["境港市公式: 防災情報（自助・共助、避難所、原子力防災 他）", "境港市公式: 津波に備える、津波・洪水ハザードマップ（令和3年3月更新）", "境港市公式: 風水害に備える", "境港市公式: 指定避難所・指定緊急避難場所", "境港市公式: 防災行政無線情報、あんしんトリピーメール", "気象庁: 平成12年（2000年）鳥取県西部地震 強震波形"] },
      { heading: "考察", body: "防災は特別な日だけのテーマではありません。境港市では、津波・高潮・大雨の水のリスク、2000年鳥取県西部地震のような強い揺れ、港湾・物流が止まるリスクが重なります。だからこそ、観光客にも住民にもわかる表示、複数の情報伝達、日常の移動と避難経路を重ねた確認が重要です。地図を見て終わりではなく、実際に歩き、家族や近所と話し、港や海辺に近づかない判断を早くできるまちほど、被害を小さくできます。" },
    ],
  },
  transport: {
    id: "007",
    category: "交通・移動",
    title: "暮らしの移動",
    lead: "駅、空港、バス、自転車、徒歩を、生活と観光の両面で見直します。",
    facts: [
      ["7:00-20:00", "みなとーる", "予約型乗合バス。年末年始は運休"],
      ["100円", "市内の移動運賃", "大人・小児。障がい者・介助者50円"],
      ["約10分", "空港-境港駅", "米子鬼太郎空港から車での目安"],
    ],
    transportArticle: {
      photos: [
        {
          src: "https://commons.wikimedia.org/wiki/Special:FilePath/150321_Yonago_Airport_Yonago_Tottori_pref_Japan02s3.jpg?width=1200",
          alt: "米子鬼太郎空港の外観",
          title: "米子鬼太郎空港",
          text: "広域から境港へ入る玄関口。空港からJR、バス、みなとーる、タクシーへつなぐ視点で見ます。",
          credit: "Photo: 663highland / Wikimedia Commons / CC BY-SA 3.0",
        },
        {
          src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sakaiminato_Station_1.jpg?width=1200",
          alt: "境港駅の駅舎",
          title: "JR境港駅",
          text: "JR境線の終点。駅前から水木しげるロード、港、バス・タクシーへ回遊が始まります。",
          credit: "Photo: Wikimedia Commons / CC BY-SA",
        },
        {
          src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kiha40_2115.jpg?width=1200",
          alt: "鬼太郎のキャラクターが描かれたJR境線の列車",
          title: "鬼太郎列車",
          text: "JR境線そのものが観光体験になります。移動中から境港らしさを感じられる、まちの入口の演出です。",
          credit: "Photo: Wikimedia Commons / CC BY-SA",
        },
        {
          src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mizuki_Shigeru_Road_Taxi.jpg?width=1200",
          alt: "水木しげるロードを走るタクシー",
          title: "水木しげるロードのタクシー",
          text: "駅、ロード、港、空港をつなぐ移動手段として、観光と暮らしの両方を支えます。",
          credit: "Photo: Wikimedia Commons / CC BY-SA",
        },
      ],
      nodes: [
        ["米子鬼太郎空港", "広域の玄関口", "境港駅まで車で約10分。JR米子空港駅、空港バス、みなとーる、タクシーへ接続。"],
        ["JR境港駅", "観光と生活の結節点", "JR境線の終点。水木しげるロード、隠岐汽船、バス・タクシーへの入口。"],
        ["みなとーる", "生活の足", "AIが予約状況に応じてルートを作る予約型乗合バス。通院・買い物の近距離移動に向く。"],
        ["徒歩・自転車", "まち歩きの質", "駅から水木しげるロードへ歩く観光導線と、日常の買い物・通院の安心感を支える。"],
      ],
      dailyCare: [
        {
          title: "高齢者の通院",
          text: "病院、薬局、市役所、地域包括支援センターへ行く移動は、予約のしやすさ、待ち時間、帰りの便が重要です。",
          points: ["電話予約も残す", "乗降場所を増やす", "帰りの時間も考える"],
        },
        {
          title: "買い物の移動",
          text: "免許返納後もスーパー、金融機関、郵便局、商店へ行けるかが、暮らし続けやすさに直結します。",
          points: ["荷物を持って乗れる", "店の近くで降りられる", "雨の日も使える"],
        },
        {
          title: "福祉との接続",
          text: "移動手段は福祉そのものではありませんが、相談先や居場所へ行けることで孤立を防ぐ基盤になります。",
          points: ["見守りとつなげる", "予約支援を用意する", "介護タクシーと役割分担"],
        },
      ],
      touristFlow: [
        ["空港到着", "JR米子空港駅、空港バス、みなとーる、タクシーの選び方を到着前から見せる。"],
        ["境港駅へ", "JRは米子空港駅-境港駅190円、空港から境港方面のみなとーるは100円・約30分から。"],
        ["まち歩き", "境港駅から水木しげるロード、店舗、記念館へ歩きやすくつなぐ。"],
        ["周遊", "レンタサイクルや徒歩で港、海辺、商店街、文化施設へ回遊を広げる。"],
        ["帰路", "空港、米子駅、松江方面、隠岐航路への接続情報を分かりやすく戻す。"],
      ],
      modeCards: [
        ["JR境線", "米子駅-米子空港駅240円、米子空港駅-境港駅190円。ICOCA対応駅もあり、観光客にも説明しやすい。"],
        ["空港バス", "米子空港-米子駅は連絡バス640円・約25分。境港方面はみなとーる等と組み合わせる。"],
        ["みなとーる", "2025年4月導入。アプリ、LINE、電話予約を前提に、市内の生活移動を面で支える。"],
        ["タクシー", "早朝・夜間、荷物が多い時、船や飛行機の接続が厳しい時の確実な選択肢。"],
      ],
      walkIdeas: [
        ["駅前の分かりやすさ", "到着してすぐ、水木しげるロード、バス乗り場、タクシー、トイレ、観光案内が見えること。"],
        ["休める道", "高齢者や親子が歩くには、ベンチ、日陰、雨宿り、段差の少なさが満足度を左右します。"],
        ["夜と雨の日", "照明、足元、横断しやすさ、屋内に入れる場所があると、車なしでも動きやすくなります。"],
      ],
      notes: [
        "はまるーぷバスは2025年3月31日で廃止され、2025年4月から予約型乗合バス「みなとーる」が導入されています。",
        "みなとーるは午前7時から午後8時まで運行し、大人・小児100円、障がい者・介助者50円です。",
        "米子鬼太郎空港は境港市佐斐神町にあり、境港駅まで車で約10分。JR、バス、タクシー、予約型乗合バスを組み合わせる視点が必要です。",
        "観光客の二次交通は、到着前に選択肢が分かること、到着後に迷わないこと、帰りの接続を逃さないことが重要です。",
      ],
      source: "境港市公式 公共交通・予約型乗合バス「みなとーる」、米子鬼太郎空港 アクセス・駐車場、JRおでかけネット駅情報、Wikimedia Commons掲載写真",
    },
    sections: [
      { heading: "このテーマで伝えること", body: "米子鬼太郎空港、JR境港駅、JR境線、予約型乗合バス、タクシー、自転車、徒歩をつなげ、車がなくても動きやすいまちの可能性を考えます。生活では通院・買い物・手続き、観光では空港や駅から水木しげるロード、港、周辺施設へ迷わず移動できることが重要です。" },
      { heading: "見るポイント", items: ["高齢者が通院・買い物・市役所へ行く時、予約、待ち時間、帰りの便が使いやすいか", "観光客が空港、JR、バス、タクシー、徒歩を迷わず選べるか", "駅前から水木しげるロード、港、商店街へ歩きたくなる道になっているか", "はまるーぷバス廃止後のみなとーるを、生活交通としてどう定着させるか"] },
      { heading: "参考にした主な情報", items: ["境港市公式: 公共交通、予約型乗合バス「みなとーる」", "境港市公式: はまるーぷバス廃止のお知らせ", "米子鬼太郎空港: アクセス・駐車場、バス、列車、タクシー", "JRおでかけネット: JR境線各駅情報"] },
      { heading: "考察", body: "移動手段は人口、観光、福祉を横断する基盤です。境港市では、みなとーるのような面で支える生活交通と、JR境線・空港・徒歩観光をどうつなぐかが鍵になります。便数だけでなく、予約の分かりやすさ、乗り換えの見つけやすさ、歩いて楽しい道、雨の日や夜でも安心できる環境が満足度を左右します。車を持つ人だけを前提にしないことが、高齢者の暮らし、観光客の滞在、中心部の回遊を同時に支えます。" },
    ],
  },
  environment: {
    id: "008",
    category: "環境・景観",
    title: "海辺の景観",
    lead: "海、街、山が見える風景を、まちの価値として守り育てます。",
    facts: [
      ["海・港", "境港らしさの軸", "漁港、岸壁、航路、海辺の眺め"],
      ["大山", "背景になる山", "海越し・街越しに見える広域景観"],
      ["日常風景", "守るべき資産", "散歩、通学、買い物の中にある眺め"],
    ],
    environmentArticle: {
      focusCards: [
        {
          title: "写真を撮りたくなる場所",
          label: "View Point",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%A2%83%E6%B8%AF%20-%20panoramio.jpg?width=1200",
            alt: "境港の海辺と港の風景",
            credit: "Photo: Wikimedia Commons / CC BY-SA",
          },
          text: "海、船、港の施設、街並み、大山が同時に見える場所は、境港らしさを一枚で伝えられる景観資源です。",
          points: ["海と山が同じ画面に入るか", "朝夕で見え方が変わるか", "歩行者が安全に立ち止まれるか"],
        },
        {
          title: "海辺で過ごせる公共空間",
          label: "Stay",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%BC%93%E3%82%B1%E6%B5%9C%E6%B5%B7%E5%B2%B8.jpg?width=1200",
            alt: "弓ヶ浜海岸の海辺の風景",
            credit: "Photo: Wikimedia Commons / CC BY-SA",
          },
          text: "眺めるだけでなく、座る、歩く、休む、子どもと過ごす場所があると、景観は暮らしの質になります。",
          points: ["ベンチ・日陰・トイレ", "段差や車との距離", "雨・風の強い日の逃げ場"],
        },
        {
          title: "ごみ・景観・安全のバランス",
          label: "Care",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Takenouchi%20Sakaiminatocity%20Tottoripref%20No%201.jpg?width=1200",
            alt: "竹内団地周辺の港湾景観",
            credit: "Photo: Wikimedia Commons / CC BY-SA",
          },
          text: "きれいな景観は清掃だけでなく、看板、照明、防護柵、駐車、釣り利用、観光客の動線まで含めて整える必要があります。",
          points: ["ごみ箱と持ち帰りの案内", "夜間照明と眩しさ", "海への転落防止と見晴らし"],
        },
      ],
      placeIdeas: [
        ["境水道沿い", "船の往来、対岸、港の施設が見える。散歩と写真の両方で使いやすい場所として整理したい。"],
        ["境港駅周辺", "到着直後にまちの印象を決める入口。駅から水木しげるロード、港へ向かう道の見え方が大切。"],
        ["海岸・夕日の見える場所", "夕日や水面の色は観光写真になりやすい。安全に立ち止まれる場所と案内が必要。"],
        ["港湾・市場周辺", "働く港の風景は境港の個性。産業景観として見せる範囲と、安全管理する範囲を分けたい。"],
      ],
      checks: [
        ["視点場", "写真を撮れる場所が、車道・作業区域・危険箇所に重なっていないか。"],
        ["連続性", "駅、ロード、港、海辺へ歩く時に、景色が途切れず期待感が続くか。"],
        ["管理", "草刈り、清掃、看板更新、ベンチ補修など、日常管理の担当が見えるか。"],
        ["共存", "釣り、散歩、観光、物流、漁業がぶつからないルールや表示があるか。"],
      ],
      actions: [
        "市民が好きな景色を投稿・記録できる仕組みを作り、季節ごとの景観アーカイブにする。",
        "写真スポットは、撮影位置、歩道、駐車、トイレ、転落防止をセットで確認する。",
        "海辺のベンチや休憩場所は、観光客だけでなく高齢者や親子の散歩にも役立つ場所として整える。",
        "ごみ対策は注意看板だけで終わらせず、清掃活動、持ち帰り案内、店舗・団体との連携で続く仕組みにする。",
      ],
      source: "境港市の港湾・観光エリア、境水道沿いの海辺空間、景観まちづくりの一般的な整理、Wikimedia Commons掲載写真をもとに作成",
    },
    sections: [
      { heading: "このテーマで伝えること", body: "境港らしい景観、海辺の空間、夕日、港の風景、緑を、観光資源としてだけでなく暮らしの質として整理します。写真映えだけでなく、歩きやすさ、休みやすさ、安全、清掃、産業活動との共存まで含めて、日常の景色を地域資産として扱います。" },
      { heading: "見るポイント", items: ["写真を撮りたくなる場所が、安全に立ち止まれる場所として整っているか", "海辺で過ごせる公共空間に、ベンチ、日陰、トイレ、歩きやすい道があるか", "ごみ、看板、照明、防護柵、駐車、釣り利用が景観と安全の両方を損ねていないか", "港や市場の働く風景を、観光資源として見せる範囲と立入管理する範囲に分けられているか"] },
      { heading: "考察", body: "景観は一度失うと戻しにくい地域資産です。境港市の場合、海、港、街、大山が重なる眺めに強みがあります。ただし、眺めの良さだけでは滞在にはつながりません。安全に歩ける、座れる、迷わない、きれいに保たれている、働く港の邪魔をしないという条件がそろって、初めて暮らしにも観光にも効く景観になります。日常の風景を市民が誇れる形で記録し、観光客にも伝えることで、まちの印象は強くなります。" },
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
  const disasterArticle = theme.disasterArticle
    ? renderDisasterArticle(theme.disasterArticle)
    : "";
  const transportArticle = theme.transportArticle
    ? renderTransportArticle(theme.transportArticle)
    : "";
  const environmentArticle = theme.environmentArticle
    ? renderEnvironmentArticle(theme.environmentArticle)
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
    ${disasterArticle}
    ${transportArticle}
    ${environmentArticle}
    ${contactMarkup}
    <div class="detail-grid">${sections}</div>
  `;
}

function renderEnvironmentArticle(article) {
  const focusCards = article.focusCards
    .map(
      (item) => `
        <article class="environment-focus-card">
          <figure>
            <img src="${item.image.src}" alt="${item.image.alt}" loading="lazy" />
            <figcaption>${item.image.credit}</figcaption>
          </figure>
          <span>${item.label}</span>
          <h5>${item.title}</h5>
          <p>${item.text}</p>
          <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");

  const placeItems = article.placeIdeas
    .map(
      ([title, text]) => `
        <li>
          <strong>${title}</strong>
          <span>${text}</span>
        </li>
      `,
    )
    .join("");

  const checkCards = article.checks
    .map(
      ([title, text]) => `
        <article class="environment-check-card">
          <h5>${title}</h5>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  const actionItems = article.actions.map((item) => `<li>${item}</li>`).join("");

  return `
    <div class="environment-article">
      <section class="environment-panel environment-focus-panel">
        <div class="panel-heading">
          <p class="section-kicker">View Points</p>
          <h4>見るポイントを深掘りする</h4>
          <p>景観を「きれい」で終わらせず、撮る、過ごす、守るという行動に分けて見ます。</p>
        </div>
        <div class="environment-focus-grid">${focusCards}</div>
      </section>

      <section class="environment-panel environment-place-panel">
        <div class="panel-heading">
          <p class="section-kicker">Places</p>
          <h4>境港らしさが出る場所</h4>
          <p>海、街、山、港の重なりを、どこで感じられるかを整理します。</p>
        </div>
        <ul class="environment-place-list">${placeItems}</ul>
      </section>

      <section class="environment-panel environment-check-panel">
        <div class="panel-heading">
          <p class="section-kicker">Checklist</p>
          <h4>景観を守るための確認軸</h4>
          <p>見晴らしと安全、利用と管理を同時に見ます。</p>
        </div>
        <div class="environment-check-grid">${checkCards}</div>
      </section>

      <section class="environment-panel environment-action-panel">
        <div class="panel-heading">
          <p class="section-kicker">Action</p>
          <h4>次に進めること</h4>
          <p>景観を記録し、使い、守るための小さな実践です。</p>
        </div>
        <ul>${actionItems}</ul>
        <p class="source-note">${article.source}</p>
      </section>
    </div>
  `;
}

function renderTransportArticle(article) {
  const photoCards = article.photos
    .map(
      (photo) => `
        <figure class="transport-photo-card">
          <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
          <figcaption>
            <strong>${photo.title}</strong>
            <span>${photo.text}</span>
            <small>${photo.credit}</small>
          </figcaption>
        </figure>
      `,
    )
    .join("");

  const nodeCards = article.nodes
    .map(
      ([title, label, text]) => `
        <article class="transport-node-card">
          <span>${label}</span>
          <h5>${title}</h5>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  const dailyCards = article.dailyCare
    .map(
      (item) => `
        <article class="transport-care-card">
          <h5>${item.title}</h5>
          <p>${item.text}</p>
          <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");

  const touristSteps = article.touristFlow
    .map(
      ([title, text]) => `
        <li>
          <strong>${title}</strong>
          <span>${text}</span>
        </li>
      `,
    )
    .join("");

  const modeCards = article.modeCards
    .map(
      ([title, text]) => `
        <article class="transport-mode-card">
          <h5>${title}</h5>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  const walkIdeas = article.walkIdeas
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
    <div class="transport-article">
      <section class="transport-panel transport-photo-panel">
        <div class="panel-heading">
          <p class="section-kicker">Photos</p>
          <h4>写真で見る移動の入口</h4>
          <p>空港、駅、まち歩きの風景を、生活と観光をつなぐ導線として見ます。</p>
        </div>
        <div class="transport-photo-grid">${photoCards}</div>
      </section>

      <section class="transport-panel transport-node-panel">
        <div class="panel-heading">
          <p class="section-kicker">Network</p>
          <h4>駅・空港・バス・徒歩をつなぐ</h4>
          <p>境港の移動は、広域アクセスと市内の短い移動を分けて考えると見えやすくなります。</p>
        </div>
        <div class="transport-node-grid">${nodeCards}</div>
      </section>

      <section class="transport-panel transport-care-panel">
        <div class="panel-heading">
          <p class="section-kicker">Daily Life</p>
          <h4>高齢者の通院・買い物</h4>
          <p>免許返納後も、病院、買い物、手続き、居場所へ行けるかを見ます。</p>
        </div>
        <div class="transport-care-grid">${dailyCards}</div>
      </section>

      <section class="transport-panel transport-tourist-panel">
        <div class="panel-heading">
          <p class="section-kicker">Tourist Flow</p>
          <h4>観光客の二次交通</h4>
          <p>空港や駅に着いてから、まち歩き、港、帰路まで迷わない導線にします。</p>
        </div>
        <ol class="transport-tourist-flow">${touristSteps}</ol>
      </section>

      <section class="transport-panel transport-mode-panel">
        <div class="panel-heading">
          <p class="section-kicker">Modes</p>
          <h4>手段ごとの役割</h4>
          <p>JR、バス、みなとーる、タクシーを競合ではなく役割分担として見ます。</p>
        </div>
        <div class="transport-mode-grid">${modeCards}</div>
      </section>

      <section class="transport-panel transport-walk-panel">
        <div class="panel-heading">
          <p class="section-kicker">Walkability</p>
          <h4>歩きたくなる道の整備</h4>
          <p>観光の満足度と、生活の安心感は、歩く環境の質で変わります。</p>
        </div>
        <ul class="transport-walk-list">${walkIdeas}</ul>
      </section>

      <section class="transport-panel transport-insight-panel">
        <div class="panel-heading">
          <p class="section-kicker">Insight</p>
          <h4>移動を暮らしの基盤として見る</h4>
        </div>
        <ul>${notes}</ul>
        <p class="source-note">${article.source}</p>
      </section>
    </div>
  `;
}

function renderDisasterArticle(article) {
  const pastCards = article.pastEvents
    .map(
      (event) => `
        <article class="disaster-event-card">
          <span>${event.label}</span>
          <strong>${event.value}</strong>
          <h5>${event.title}</h5>
          <p>${event.text}</p>
        </article>
      `,
    )
    .join("");

  const flowSteps = article.flow
    .map(
      (step) => `
        <li>
          <details class="disaster-flow-detail">
            <summary>
              <strong>${step.title}</strong>
              <span>${step.summary}</span>
            </summary>
            <div class="disaster-flow-more">
              <p>詳しく見るポイント</p>
              <ul>${step.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
            </div>
          </details>
        </li>
      `,
    )
    .join("");

  const signalCards = article.signals
    .map(
      ([title, text]) => `
        <article class="disaster-signal-card">
          <h5>${title}</h5>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  const portRoles = article.portRoles
    .map(
      (role) => `
        <li>
          <details class="disaster-expand-detail">
            <summary>
              <strong>${role.title}</strong>
              <span>${role.summary}</span>
            </summary>
            <div class="disaster-expand-more">
              <p>詳しく見るポイント</p>
              <ul>${role.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
            </div>
          </details>
        </li>
      `,
    )
    .join("");

  const checklist = article.checklist
    .map(
      (item) => `
        <li>
          <details class="disaster-expand-detail">
            <summary>
              <strong>${item.title}</strong>
            </summary>
            <div class="disaster-expand-more">
              <p>詳しく見るポイント</p>
              <ul>${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
            </div>
          </details>
        </li>
      `,
    )
    .join("");
  const notes = article.notes.map((note) => `<li>${note}</li>`).join("");

  return `
    <div class="disaster-article">
      <section class="disaster-panel disaster-history-panel">
        <div class="panel-heading">
          <p class="section-kicker">Past Data</p>
          <h4>過去データから見る注意点</h4>
          <p>水害だけでなく、強い揺れ、津波、台風・豪雨を重ねて見ます。</p>
        </div>
        <div class="disaster-event-grid">${pastCards}</div>
      </section>

      <section class="disaster-panel disaster-flow-panel">
        <div class="panel-heading">
          <p class="section-kicker">Evacuation</p>
          <h4>避難を日常の動線にする</h4>
          <p>地図で確認して終わりにせず、実際に歩ける道順として考えます。</p>
        </div>
        <ol class="disaster-flow-list">${flowSteps}</ol>
      </section>

      <section class="disaster-panel disaster-signal-panel">
        <div class="panel-heading">
          <p class="section-kicker">Information</p>
          <h4>情報が届く仕組み</h4>
          <p>屋外放送だけに頼らず、メール、家族、近所、学校、福祉の連絡網を重ねます。</p>
        </div>
        <div class="disaster-signal-grid">${signalCards}</div>
      </section>

      <section class="disaster-panel disaster-port-panel">
        <div class="panel-heading">
          <p class="section-kicker">Port & Logistics</p>
          <h4>港湾・物流の災害時の役割</h4>
          <p>港は産業だけでなく、物資、燃料、復旧、地域経済を支える基盤です。</p>
        </div>
        <ul class="disaster-port-list">${portRoles}</ul>
      </section>

      <section class="disaster-panel disaster-check-panel">
        <div class="panel-heading">
          <p class="section-kicker">Checklist</p>
          <h4>家庭で先に決めること</h4>
        </div>
        <ul class="disaster-check-list">${checklist}</ul>
      </section>

      <section class="disaster-panel disaster-insight-panel">
        <div class="panel-heading">
          <p class="section-kicker">Insight</p>
          <h4>どこで、どんな変化が起きるか</h4>
        </div>
        <ul>${notes}</ul>
        <p class="source-note">${article.source}</p>
      </section>
    </div>
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
