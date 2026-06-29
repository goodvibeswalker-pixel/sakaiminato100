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
    sections: [
      { heading: "このテーマで伝えること", body: "境漁港は境港市の産業イメージを形づくる重要な現場です。水揚げ、市場、加工、物流、食の発信をつなげて見ることで、港が地域経済に与える広がりを整理します。" },
      { heading: "見るポイント", items: ["水揚げされる魚種と季節の変化", "市場・加工・冷凍・物流のつながり", "観光や食育への活用"] },
      { heading: "考察", body: "港は単なる産業施設ではなく、境港市のブランドそのものです。働く人の姿や流通の仕組みを見せることで、魚を食べる観光から、魚のまちを理解する観光へ広げられます。" },
    ],
  },
  tourism: {
    id: "003",
    category: "観光・文化",
    title: "水木しげるロード",
    lead: "妖怪文化を入口に、まち歩き、学び、滞在時間を伸ばす観光を考えます。",
    sections: [
      { heading: "このテーマで伝えること", body: "水木しげるロードは境港市を代表する観光資源です。写真を撮って終わる観光ではなく、商店街、駅前、記念館、食の体験へ回遊する流れを整理します。" },
      { heading: "見るポイント", items: ["来訪者が歩くルート", "親子・海外客・リピーターの楽しみ方", "夜や雨の日の過ごし方"] },
      { heading: "考察", body: "強い観光資源があるまちは、周辺への分散と滞在時間の設計が鍵になります。妖怪文化を入り口に、港町の歴史や食へ自然につなげることが重要です。" },
    ],
  },
  children: {
    id: "004",
    category: "子育て・教育",
    title: "子育てと学び",
    lead: "子どもたちが地域を知り、地域が子育てを支える仕組みを考えます。",
    sections: [
      { heading: "このテーマで伝えること", body: "保育、学校、通学路、放課後の居場所、ふるさと教育をつなげ、子育て世帯にとって必要な情報と、地域で支える視点を整理します。" },
      { heading: "見るポイント", items: ["親子で使える場所", "学校と地域産業の接点", "若者がまちに関わる機会"] },
      { heading: "考察", body: "人口を考えるうえで、子育て環境は最重要テーマの一つです。支援制度だけでなく、地域の人と場所が子どもの経験を増やせるかが定住にも関わります。" },
    ],
  },
  welfare: {
    id: "005",
    category: "福祉・医療",
    title: "地域医療と見守り",
    lead: "高齢者や単身世帯が安心して暮らし続けるための地域の支えを考えます。",
    sections: [
      { heading: "このテーマで伝えること", body: "医療機関、介護、地域包括ケア、見守り、移動支援をつなげ、暮らしの不安を小さくするための情報を整理します。" },
      { heading: "見るポイント", items: ["相談先がわかりやすいか", "買い物・通院の移動手段", "孤立を防ぐ地域の居場所"] },
      { heading: "考察", body: "世帯人数が小さくなるほど、家族だけで支える前提は弱くなります。医療と福祉だけでなく、交通、自治会、商店、近所づきあいまで含めた安心の設計が必要です。" },
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

  const populationArticle = theme.populationArticle
    ? renderPopulationArticle(theme.populationArticle)
    : "";

  themeDetail.innerHTML = `
    <div class="detail-header">
      <p class="section-kicker">Theme ${theme.id} / ${theme.category}</p>
      <h3>${theme.title}</h3>
      <p>${theme.lead}</p>
      ${factMarkup}
    </div>
    ${populationArticle}
    <div class="detail-grid">${sections}</div>
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

  return `
    <div class="population-article">
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
