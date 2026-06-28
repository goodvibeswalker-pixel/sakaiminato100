const themeDetails = {
  population: {
    id: "001",
    category: "人口・暮らし",
    title: "境港市の人口",
    lead: "人口は、子育て、産業、交通、防災、福祉など、あらゆるテーマの土台になる数字です。",
    facts: [
      ["31,714人", "総人口", "2026年5月末"],
      ["15,456世帯", "世帯数", "2026年5月末"],
      ["29.11km²", "面積", "2019年10月1日現在"],
    ],
    sections: [
      {
        heading: "このテーマで伝えること",
        body: "境港市の人口がどのように変化しているのかを見ながら、まちの規模、暮らしの単位、将来必要になる支援や仕事を考えます。数字を入口に、現場で感じる暮らしの実感とつなげていきます。",
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
        body: "2026年5月末の人口31,714人、世帯数15,456世帯を見ると、1世帯あたりの人数はおよそ2.05人です。人口そのものだけでなく、世帯が小さくなっている可能性にも注目すると、単身高齢者、子育て世帯、移動手段、見守り、住宅政策などを一体で考える必要が見えてきます。",
      },
      {
        heading: "次の更新で入れたい内容",
        body: "町別人口、年齢別人口、過去数年の推移グラフを追加し、「どこで、どんな変化が起きているか」が一目でわかる記事に育てます。",
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

  themeDetail.innerHTML = `
    <div class="detail-header">
      <p class="section-kicker">Theme ${theme.id} / ${theme.category}</p>
      <h3>${theme.title}</h3>
      <p>${theme.lead}</p>
      ${factMarkup}
    </div>
    <div class="detail-grid">${sections}</div>
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
