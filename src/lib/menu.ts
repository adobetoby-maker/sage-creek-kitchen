export type DietaryTag = 'gf' | 'v' | 'vg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  dietary: DietaryTag[];
  seasonal?: boolean;
  featured?: boolean;
}

export interface WineItem {
  id: string;
  name: string;
  producer: string;
  region: string;
  vintage: string;
  glass?: number;
  bottle: number;
  varietal: string;
}

export interface CocktailItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const starters: MenuItem[] = [
  { id: 's1', name: 'Snake River Trout Crudo', description: 'Idaho spring water trout, cucumber, dill oil, lemon crème fraîche', price: 18, dietary: ['gf'] },
  { id: 's2', name: 'Roasted Beet Salad', description: 'Local beets, Idaho chèvre, candied walnuts, Purple Sage herb vinaigrette', price: 16, dietary: ['gf', 'v'], seasonal: true },
  { id: 's3', name: 'Charcuterie Board', description: 'House-cured meats, seasonal preserves, local honey, grilled sourdough', price: 24, dietary: [] },
  { id: 's4', name: 'Wild Mushroom Crostini', description: 'Foraged mushrooms, tarragon cream, truffle oil, aged Gruyère', price: 17, dietary: ['v'] },
  { id: 's5', name: 'Burrata & Stone Fruit', description: "Kelley's Canyon peaches, burrata, prosciutto, aged balsamic, basil", price: 19, dietary: [], seasonal: true },
  { id: 's6', name: 'Idaho Lamb Tartare', description: 'Magic Valley lamb, caperberries, Dijon, quail egg, grilled baguette', price: 22, dietary: ['gf'] },
  { id: 's7', name: 'Corn Bisque', description: 'Magic Valley sweet corn, crème fraîche, smoked paprika oil', price: 14, dietary: ['gf', 'v'], seasonal: true },
  { id: 's8', name: 'Crispy Artichoke', description: 'Lemon aioli, shaved Parmesan, microgreens', price: 15, dietary: ['v'] },
];

export const mains: MenuItem[] = [
  { id: 'm1', name: 'Pan-Seared Rainbow Trout', description: "Riverence Magic Valley trout, spring pea purée, Kelley's Canyon apricot gastrique, crispy capers", price: 34, dietary: ['gf'], seasonal: true, featured: true },
  { id: 'm2', name: 'Snake River Wagyu Bavette', description: 'American Wagyu beef, fingerling potato confit, heirloom tomato relish, herbed butter', price: 54, dietary: ['gf'], featured: true },
  { id: 'm3', name: 'Herb-Roasted Half Chicken', description: 'Magic Valley air-chilled chicken, sage jus, roasted root vegetables, grilled lemon', price: 36, dietary: ['gf'] },
  { id: 'm4', name: 'Idaho Sturgeon en Papillote', description: 'Idaho white sturgeon, summer vegetables, lemon-herb broth, focaccia', price: 42, dietary: [], seasonal: true },
  { id: 'm5', name: 'Wild Mushroom Risotto', description: 'Idaho morel and porcini, aged Parmigiano, truffle oil, chives', price: 32, dietary: ['gf', 'v'] },
  { id: 'm6', name: 'Braised Snake River Lamb Shank', description: 'Local lamb, red wine reduction, creamy polenta, gremolata', price: 48, dietary: ['gf'] },
  { id: 'm7', name: 'Pasta al Pomodoro', description: 'Idaho heritage wheat pasta, San Marzano tomatoes, basil, burrata', price: 28, dietary: ['v'] },
  { id: 'm8', name: 'Duck Confit', description: 'Local duck leg, cherry gastrique, lentils, roasted fennel', price: 44, dietary: [] },
  { id: 'm9', name: 'Idaho Fingerling Gratin', description: 'Seasonal vegetables en gratin, gruyère, herbed breadcrumbs', price: 26, dietary: ['v'] },
  { id: 'm10', name: 'Seared Day Boat Scallops', description: 'Pacific scallops, Idaho corn succotash, smoked paprika butter, chives', price: 46, dietary: ['gf'], seasonal: true },
];

export const desserts: MenuItem[] = [
  { id: 'd1', name: 'Stone Fruit Galette', description: "Kelley's Canyon peaches & apricots, Idaho honey, vanilla bean ice cream", price: 12, dietary: ['v'], seasonal: true },
  { id: 'd2', name: 'Lavender Crème Brûlée', description: 'Purple Sage lavender, crispy sugar crust', price: 11, dietary: ['gf', 'v'] },
  { id: 'd3', name: 'Chocolate Olive Oil Cake', description: 'Idaho hazelnut praline, sea salt, vanilla cream', price: 13, dietary: ['v'] },
  { id: 'd4', name: 'Idaho Huckleberry Sorbet', description: 'Wild huckleberries, lemon, mint', price: 10, dietary: ['gf', 'vg'] },
  { id: 'd5', name: 'Cheese Course', description: 'Three Idaho and Pacific Northwest cheeses, honeycomb, seasonal jam', price: 18, dietary: ['gf', 'v'] },
];

export const brunch: MenuItem[] = [
  { id: 'b1', name: 'Trout & Eggs Benedict', description: 'Riverence smoked trout, potato latke, hollandaise, microgreens', price: 22, dietary: [], seasonal: true },
  { id: 'b2', name: 'Snake River Wagyu Burger', description: 'American Wagyu, white cheddar, caramelized onion, brioche', price: 26, dietary: [] },
  { id: 'b3', name: 'Idaho Hash', description: 'Fingerling potatoes, local sausage, roasted peppers, farm egg', price: 18, dietary: ['gf'] },
  { id: 'b4', name: 'Mushroom & Goat Cheese Frittata', description: 'Foraged mushrooms, Idaho chèvre, herbs, mixed greens', price: 20, dietary: ['gf', 'v'] },
  { id: 'b5', name: 'Buttermilk Pancakes', description: 'Huckleberry compote, local maple, whipped cream', price: 16, dietary: ['v'], seasonal: true },
  { id: 'b6', name: 'Avocado Toast', description: 'House sourdough, local radish, everything spice, soft-boiled egg', price: 17, dietary: ['v'] },
  { id: 'b7', name: 'Beet Gravlax', description: 'House-cured salmon, beet, crème fraîche, bagel chips', price: 24, dietary: [] },
  { id: 'b8', name: 'Granola Bowl', description: 'House granola, seasonal fruit, honey, whole milk yogurt', price: 14, dietary: ['v'] },
];

export const brunchCocktails: CocktailItem[] = [
  { id: 'bc1', name: 'Sage Bloody Mary', description: 'House Bloody mix, Snake River vodka, crispy bacon', price: 14 },
  { id: 'bc2', name: 'Stone Fruit Bellini', description: "Kelley's Canyon peach purée, Cinder sparkling", price: 13 },
  { id: 'bc3', name: 'Garden Mimosa', description: 'Fresh-pressed orange, Telaya sparkling wine', price: 12 },
  { id: 'bc4', name: 'Idaho Espresso Martini', description: 'Cold brew, Snake River vodka, vanilla', price: 15 },
];

export const wineByGlass: WineItem[] = [
  { id: 'w1', name: 'Cinder Viognier', producer: 'Cinder Wines', region: 'Snake River Valley, Idaho', vintage: '2023', glass: 16, bottle: 60, varietal: 'Viognier' },
  { id: 'w2', name: 'Telaya Rosé', producer: 'Telaya Wine Co.', region: 'Snake River Valley, Idaho', vintage: '2023', glass: 14, bottle: 52, varietal: 'Rosé Blend' },
  { id: 'w3', name: 'Split Rail GSM', producer: 'Split Rail Winery', region: 'Snake River Valley, Idaho', vintage: '2022', glass: 17, bottle: 65, varietal: 'Grenache-Syrah-Mourvèdre' },
  { id: 'w4', name: 'Telaya Merlot', producer: 'Telaya Wine Co.', region: 'Snake River Valley, Idaho', vintage: '2021', glass: 18, bottle: 68, varietal: 'Merlot' },
  { id: 'w5', name: 'Domaine Drouhin Pinot Noir', producer: 'Domaine Drouhin', region: 'Willamette Valley, Oregon', vintage: '2022', glass: 19, bottle: 72, varietal: 'Pinot Noir' },
  { id: 'w6', name: 'Whispering Bluff Chardonnay', producer: 'Whispering Bluff', region: 'Walla Walla, Washington', vintage: '2022', glass: 15, bottle: 58, varietal: 'Chardonnay' },
  { id: 'w7', name: 'Château Gaudrelle Vouvray', producer: 'Château Gaudrelle', region: 'Loire Valley, France', vintage: '2021', glass: 16, bottle: 62, varietal: 'Chenin Blanc' },
  { id: 'w8', name: 'Cinder Tempranillo', producer: 'Cinder Wines', region: 'Snake River Valley, Idaho', vintage: '2021', glass: 18, bottle: 68, varietal: 'Tempranillo' },
];

export const bottleList: WineItem[] = [
  { id: 'bl1', name: 'Cinder Viognier Reserve', producer: 'Cinder Wines', region: 'Snake River Valley, Idaho', vintage: '2022', bottle: 78, varietal: 'Viognier' },
  { id: 'bl2', name: 'Telaya Cabernet Sauvignon', producer: 'Telaya Wine Co.', region: 'Snake River Valley, Idaho', vintage: '2020', bottle: 85, varietal: 'Cabernet Sauvignon' },
  { id: 'bl3', name: 'Split Rail Syrah', producer: 'Split Rail Winery', region: 'Snake River Valley, Idaho', vintage: '2021', bottle: 72, varietal: 'Syrah' },
  { id: 'bl4', name: 'Three Horse Ranch Chardonnay', producer: '3 Horse Ranch Vineyards', region: 'Eagle Foothills, Idaho', vintage: '2022', bottle: 68, varietal: 'Chardonnay' },
  { id: 'bl5', name: 'Three Horse Ranch Cabernet Franc', producer: '3 Horse Ranch Vineyards', region: 'Eagle Foothills, Idaho', vintage: '2021', bottle: 82, varietal: 'Cabernet Franc' },
  { id: 'bl6', name: 'Holesinskey Riesling', producer: 'Holesinskey Vineyards', region: 'Hagerman Valley, Idaho', vintage: '2023', bottle: 58, varietal: 'Riesling' },
  { id: 'bl7', name: 'Holesinskey Pinot Gris', producer: 'Holesinskey Vineyards', region: 'Hagerman Valley, Idaho', vintage: '2023', bottle: 62, varietal: 'Pinot Gris' },
  { id: 'bl8', name: 'Domaine Drouhin Dundee Hills Pinot Noir', producer: 'Domaine Drouhin', region: 'Willamette Valley, Oregon', vintage: '2021', bottle: 95, varietal: 'Pinot Noir' },
  { id: 'bl9', name: 'Lingua Franca Avni Chardonnay', producer: 'Lingua Franca', region: 'Eola-Amity Hills, Oregon', vintage: '2022', bottle: 88, varietal: 'Chardonnay' },
  { id: 'bl10', name: 'Leonetti Cellar Merlot', producer: 'Leonetti Cellar', region: 'Walla Walla, Washington', vintage: '2020', bottle: 145, varietal: 'Merlot' },
  { id: 'bl11', name: 'Dunham Cellars Lewis Vineyard Cabernet', producer: 'Dunham Cellars', region: 'Columbia Valley, Washington', vintage: '2019', bottle: 110, varietal: 'Cabernet Sauvignon' },
  { id: 'bl12', name: 'Domaine Faiveley Bourgogne Rouge', producer: 'Domaine Faiveley', region: 'Burgundy, France', vintage: '2021', bottle: 92, varietal: 'Pinot Noir' },
  { id: 'bl13', name: 'Château Gaudrelle Vouvray Moelleux', producer: 'Château Gaudrelle', region: 'Loire Valley, France', vintage: '2020', bottle: 75, varietal: 'Chenin Blanc' },
  { id: 'bl14', name: 'Antinori Pèppoli Chianti Classico', producer: 'Antinori', region: 'Tuscany, Italy', vintage: '2021', bottle: 70, varietal: 'Sangiovese' },
  { id: 'bl15', name: 'Gaja Barbaresco', producer: 'Gaja', region: 'Piedmont, Italy', vintage: '2019', bottle: 220, varietal: 'Nebbiolo' },
];

export const cocktails: CocktailItem[] = [
  { id: 'c1', name: 'Sage & Smoke', description: 'Mezcal, sage syrup, lemon, activated charcoal salt rim', price: 15 },
  { id: 'c2', name: 'Bittersweet Ranch', description: 'Bourbon, Idaho honey, lemon, Angostura, rosemary', price: 14 },
  { id: 'c3', name: 'Cucumber Collins', description: 'Gin, house cucumber water, elderflower, lime', price: 13 },
  { id: 'c4', name: 'Snake River Mule', description: 'Vodka, fresh ginger beer, lime, mint', price: 12 },
  { id: 'c5', name: 'Harvest Negroni', description: 'Campari, local gin, sweet vermouth, blood orange peel', price: 15 },
  { id: 'c6', name: "Chef's Garden Martini", description: 'Gin, cucumber, dill, house-pickled green tomato', price: 16 },
];
