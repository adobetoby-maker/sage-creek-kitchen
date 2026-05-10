export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  imageId: string;
  body: string;
}

export const articles: Article[] = [
  {
    slug: 'snake-river-trout-why-we-source-local',
    title: 'Snake River Trout: Why We Source Local',
    excerpt:
      "Our partnership with Riverence — the Magic Valley's spring-water trout farm — and why the 58°F aquifer water makes all the difference.",
    date: '2024-04-10',
    readTime: '4 min read',
    author: 'Elena Vasquez',
    imageId: 'QNI-67gMTeA',
    body: `<p>When Chef Elena first opened Sage Creek Kitchen in 2012, the trout question was simple: serve the best fish available within a day's drive. Twelve years later, the answer is the same — but the relationship has grown into something more like a partnership.</p><p>Riverence operates 14 farms across the Magic Valley, drawing water from the Snake River Plain Aquifer at a consistent 58°F year-round. That temperature isn't incidental. Cold, clean, fast-moving spring water produces a fish with firmer flesh, cleaner flavor, and a fat content that responds beautifully to a hot pan with brown butter.</p><p>We receive deliveries twice a week. The trout is never frozen. On the nights we serve it, it has been swimming that morning.</p>`,
  },
  {
    slug: 'guide-to-snake-river-valley-wines',
    title: 'A Guide to Snake River Valley Wines',
    excerpt:
      "Idaho's first AVA sits on the same latitude as the Rhône Valley of France. Here's what grows here, and why it matters.",
    date: '2024-03-22',
    readTime: '6 min read',
    author: 'Jordan Kamali',
    imageId: 'LojEnIVaGkk',
    body: `<p>Most people don't think of Idaho when they think of wine. That's about to change. The Snake River Valley AVA — established in 2007, Idaho's first American Viticultural Area — now encompasses more than 50 wineries across southwestern Idaho and two eastern Oregon counties.</p><p>The elevation helps: at 2,700 to 3,000 feet, the vineyards sit above the valley fog and benefit from intense summer sun and cold nights. That diurnal swing — sometimes 50°F between afternoon and after dark — slows ripening and preserves acidity, producing wines with depth and structure uncommon at this price point.</p><p>The flagship varieties here are Syrah, Viognier, Tempranillo, and Merlot. The volcanic basalt soils reward all of them in different ways.</p>`,
  },
  {
    slug: 'spring-menu-preview',
    title: "Spring Menu Preview: What's Coming to Sage Creek Kitchen",
    excerpt:
      'Morel mushrooms from the Sawtooth foothills, asparagus from the Snake River Valley, and the first stone fruits from Kelley\'s Canyon Orchard.',
    date: '2024-05-01',
    readTime: '3 min read',
    author: 'Elena Vasquez',
    imageId: 'EMDwcQL2VPw',
    body: `<p>Spring in the Magic Valley arrives quietly — a week of warmth, then a cold snap, then warmth again. The asparagus comes first, then the ramps, then the first morels from foragers who know where to look in the Sawtooth foothills. By late May, Kelley's Canyon Orchard calls with the first cherries.</p><p>This spring menu begins with a Snake River Trout Crudo — our local Riverence trout, sliced thin over cucumber, finished with dill oil and a crème fraîche made from Idaho dairy. The main that anchors the menu is a braised Snake River Lamb Shank with spring herbs and a polenta made from Idaho-grown corn.</p><p>The full menu launches Tuesday, May 7th. Reservations are recommended.</p>`,
  },
  {
    slug: 'how-we-design-a-seasonal-menu',
    title: 'How We Design a Seasonal Menu: From Farm to Plate',
    excerpt:
      'Every menu at Sage Creek Kitchen starts the same way: not with recipes, but with a phone call to a farmer.',
    date: '2024-02-14',
    readTime: '5 min read',
    author: 'Elena Vasquez',
    imageId: '4NQEvxW2_4w',
    body: `<p>Most restaurant menus are written once and adjusted slightly. Ours is rebuilt every six to eight weeks, sometimes sooner if something extraordinary becomes available — a batch of Wagyu from Snake River Farms, a windfall of huckleberries, a particularly good mushroom season in the Boise foothills.</p><p>The process starts with calls and visits: to Riverence about what's coming out of the trout ponds, to Kelley's Canyon about the orchard, to Peters Family Farms about what they're harvesting this week. Then we gather in the kitchen and work backwards: what do we have, and what's the best thing we can do with it?</p><p>There are dishes that have earned a permanent place on the menu. The Wagyu Bavette has been there since year two. The Beet Salad appears every fall. But the menu around them changes, because Idaho changes, and we follow it.</p>`,
  },
];
