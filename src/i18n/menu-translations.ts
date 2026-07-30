import type { Locale } from './ui';

type Translations = Partial<Record<Exclude<Locale, 'es'>, string>>;

export const menuTranslations: Record<string, Translations> = {
	// Group names
	Dulces: { en: 'Sweets', de: 'Süßes', fr: 'Sucré', ko: '디저트', zh: '甜点', pt: 'Doces', it: 'Dolci' },
	Desayunos: {
		en: 'Breakfasts',
		de: 'Frühstück',
		fr: 'Petits-déjeuners',
		ko: '아침 식사',
		zh: '早餐',
		pt: 'Pequenos-almoços',
		it: 'Colazioni'
	},
	Bebidas: { en: 'Drinks', de: 'Getränke', fr: 'Boissons', ko: '음료', zh: '饮品', pt: 'Bebidas', it: 'Bevande' },

	// Category names
	'Tartas de horno': {
		en: 'Baked cakes',
		de: 'Gebackene Kuchen',
		fr: 'Gâteaux au four',
		ko: '구운 케이크',
		zh: '烤蛋糕',
		pt: 'Bolos de forno',
		it: 'Torte al forno'
	},
	Brownie: {
		en: 'Brownies',
		de: 'Brownies',
		fr: 'Brownies',
		ko: '브라우니',
		zh: '布朗尼',
		pt: 'Brownies',
		it: 'Brownie'
	},
	Kukis: {
		en: 'Kukis (cookies)',
		de: 'Kukis (Kekse)',
		fr: 'Kukis (cookies)',
		ko: '쿠키',
		zh: '曲奇',
		pt: 'Kukis (bolachas)',
		it: 'Kukis (biscotti)'
	},
	Bowl: { en: 'Bowls', de: 'Bowls', fr: 'Bowls', ko: '보울', zh: '碗餐', pt: 'Bowls', it: 'Bowl' },
	Tostas: {
		en: 'Toasts',
		de: 'Toasts',
		fr: 'Tartines',
		ko: '토스트',
		zh: '吐司',
		pt: 'Torradas',
		it: 'Toast'
	},
	Croissant: {
		en: 'Croissants',
		de: 'Croissants',
		fr: 'Croissants',
		ko: '크루아상',
		zh: '牛角包',
		pt: 'Croissants',
		it: 'Croissant'
	},
	Tortitas: {
		en: 'Pancakes',
		de: 'Pfannkuchen',
		fr: 'Pancakes',
		ko: '팬케이크',
		zh: '松饼',
		pt: 'Panquecas',
		it: 'Pancake'
	},
	Sandwich: {
		en: 'Sandwich',
		de: 'Sandwich',
		fr: 'Sandwich',
		ko: '샌드위치',
		zh: '三明治',
		pt: 'Sandes',
		it: 'Sandwich'
	},
	Bocadillos: {
		en: 'Baguette sandwiches',
		de: 'Baguette-Sandwiches',
		fr: 'Sandwichs baguette',
		ko: '바게트 샌드위치',
		zh: '法棍三明治',
		pt: 'Sandes de baguete',
		it: 'Panini in baguette'
	},
	Extras: {
		en: 'Extras',
		de: 'Extras',
		fr: 'Suppléments',
		ko: '추가 옵션',
		zh: '附加项目',
		pt: 'Extras',
		it: 'Extra'
	},
	Café: { en: 'Coffee', de: 'Kaffee', fr: 'Café', ko: '커피', zh: '咖啡', pt: 'Café', it: 'Caffè' },
	'Infusiones calientes': {
		en: 'Hot infusions',
		de: 'Heiße Aufgüsse',
		fr: 'Infusions chaudes',
		ko: '따뜻한 차',
		zh: '热饮花草茶',
		pt: 'Infusões quentes',
		it: 'Tisane calde'
	},
	'Infusiones frías': {
		en: 'Iced infusions',
		de: 'Kalte Aufgüsse',
		fr: 'Infusions froides',
		ko: '아이스 차',
		zh: '冰饮花草茶',
		pt: 'Infusões frias',
		it: 'Tisane fredde'
	},
	'Otras bebidas': {
		en: 'Other drinks',
		de: 'Andere Getränke',
		fr: 'Autres boissons',
		ko: '기타 음료',
		zh: '其他饮品',
		pt: 'Outras bebidas',
		it: 'Altre bevande'
	},
	'Gise-lata': {
		en: 'Gise-lata',
		de: 'Gise-lata',
		fr: 'Gise-lata',
		ko: 'Gise-lata',
		zh: 'Gise-lata',
		pt: 'Gise-lata',
		it: 'Gise-lata'
	},

	// Notes
	'3 panes': {
		en: '3 breads',
		de: '3 Brotsorten',
		fr: '3 pains',
		ko: '빵 3종',
		zh: '3种面包',
		pt: '3 pães',
		it: '3 pani'
	},
	'Tea-tac': { en: 'Tea-tac', de: 'Tea-tac', fr: 'Tea-tac', ko: 'Tea-tac', zh: 'Tea-tac', pt: 'Tea-tac', it: 'Tea-tac' },
	'Exclusivo en Gisela': {
		en: 'Exclusive to Gisela',
		de: 'Exklusiv bei Gisela',
		fr: 'Exclusivité Gisela',
		ko: 'Gisela 단독 메뉴',
		zh: 'Gisela 独家',
		pt: 'Exclusivo da Gisela',
		it: 'Esclusiva Gisela'
	},

	// Tartas de horno
	'Queso tradicional': {
		en: 'Traditional cheesecake',
		de: 'Traditioneller Käsekuchen',
		fr: 'Cheesecake traditionnel',
		ko: '트래디셔널 치즈케이크',
		zh: '经典芝士蛋糕',
		pt: 'Cheesecake tradicional',
		it: 'Cheesecake tradizionale'
	},
	'Manzana crumble': {
		en: 'Apple crumble',
		de: 'Apfel-Crumble',
		fr: 'Crumble aux pommes',
		ko: '애플 크럼블',
		zh: '苹果酥粒蛋糕',
		pt: 'Crumble de maçã',
		it: 'Crumble di mele'
	},
	'Queso con galleta lotus': {
		en: 'Cheesecake with Lotus biscuit',
		de: 'Käsekuchen mit Lotus-Keks',
		fr: 'Cheesecake au biscuit Lotus',
		ko: '로투스 치즈케이크',
		zh: '罗特斯饼干芝士蛋糕',
		pt: 'Cheesecake com bolacha Lotus',
		it: 'Cheesecake con biscotto Lotus'
	},
	'Queso con pistacho': {
		en: 'Cheesecake with pistachio',
		de: 'Käsekuchen mit Pistazie',
		fr: 'Cheesecake à la pistache',
		ko: '피스타치오 치즈케이크',
		zh: '开心果芝士蛋糕',
		pt: 'Cheesecake com pistácio',
		it: 'Cheesecake al pistacchio'
	},
	'Queso con fruta de temporada': {
		en: 'Cheesecake with seasonal fruit',
		de: 'Käsekuchen mit Saisonobst',
		fr: 'Cheesecake aux fruits de saison',
		ko: '제철 과일 치즈케이크',
		zh: '时令水果芝士蛋糕',
		pt: 'Cheesecake com fruta da época',
		it: 'Cheesecake con frutta di stagione'
	},

	// Brownie
	'Espelta (clásico)': {
		en: 'Spelt (classic)',
		de: 'Dinkel (klassisch)',
		fr: 'Épeautre (classique)',
		ko: '스펠트 (클래식)',
		zh: '斯佩尔特小麦（经典）',
		pt: 'Espelta (clássico)',
		it: 'Farro (classico)'
	},
	Centeno: { en: 'Rye', de: 'Roggen', fr: 'Seigle', ko: '호밀', zh: '黑麦', pt: 'Centeio', it: 'Segale' },
	Oreo: { en: 'Oreo', de: 'Oreo', fr: 'Oreo', ko: '오레오', zh: '奥利奥', pt: 'Oreo', it: 'Oreo' },
	Pistacho: {
		en: 'Pistachio',
		de: 'Pistazie',
		fr: 'Pistache',
		ko: '피스타치오',
		zh: '开心果',
		pt: 'Pistácio',
		it: 'Pistacchio'
	},
	'Cerveza Yunque': {
		en: 'Yunque beer',
		de: 'Yunque-Bier',
		fr: 'Bière Yunque',
		ko: '윤케 맥주',
		zh: 'Yunque 啤酒',
		pt: 'Cerveja Yunque',
		it: 'Birra Yunque'
	},
	'Vino tinto': {
		en: 'Red wine',
		de: 'Rotwein',
		fr: 'Vin rouge',
		ko: '레드 와인',
		zh: '红酒',
		pt: 'Vinho tinto',
		it: 'Vino rosso'
	},

	// Kukis
	'Pepitas de choco': {
		en: 'Chocolate chips',
		de: 'Schokostückchen',
		fr: 'Pépites de chocolat',
		ko: '초코칩',
		zh: '巧克力豆',
		pt: 'Pepitas de chocolate',
		it: 'Gocce di cioccolato'
	},
	'Rellena de crema de avellana': {
		en: 'Hazelnut cream filled',
		de: 'Gefüllt mit Haselnusscreme',
		fr: 'Fourré à la crème de noisette',
		ko: '헤이즐넛 크림 필링',
		zh: '榛子酱夹心',
		pt: 'Recheado com creme de avelã',
		it: 'Ripieno di crema di nocciola'
	},
	'Pistacho con frambuesa y choco-blanco': {
		en: 'Pistachio with raspberry and white chocolate',
		de: 'Pistazie mit Himbeere und weißer Schokolade',
		fr: 'Pistache, framboise et chocolat blanc',
		ko: '피스타치오 라즈베리 화이트초코',
		zh: '开心果覆盆子白巧克力',
		pt: 'Pistácio com framboesa e chocolate branco',
		it: 'Pistacchio con lampone e cioccolato bianco'
	},
	Lotus: { en: 'Lotus', de: 'Lotus', fr: 'Lotus', ko: '로투스', zh: '罗特斯', pt: 'Lotus', it: 'Lotus' },
	'Triki-Kuki': {
		en: 'Triki-Kuki',
		de: 'Triki-Kuki',
		fr: 'Triki-Kuki',
		ko: 'Triki-Kuki',
		zh: 'Triki-Kuki',
		pt: 'Triki-Kuki',
		it: 'Triki-Kuki'
	},
	'Choco-sal': {
		en: 'Chocolate & sea salt',
		de: 'Schokolade & Meersalz',
		fr: 'Chocolat & sel',
		ko: '초코 솔트',
		zh: '海盐巧克力',
		pt: 'Chocolate e sal',
		it: 'Cioccolato e sale'
	},

	// Bowl
	'Manzana asada del Bierzo con yogur griego, granola casera de Gisela y miel': {
		en: 'Baked El Bierzo apple with Greek yoghurt, Gisela homemade granola and honey',
		de: 'Gebackener Apfel aus dem Bierzo mit griechischem Joghurt, hausgemachtem Gisela-Granola und Honig',
		fr: 'Pomme rôtie du Bierzo, yaourt grec, granola maison Gisela et miel',
		ko: '비에르소 구운 사과, 그릭 요거트, 지셀라 홈메이드 그래놀라, 꿀',
		zh: '比耶尔索烤苹果配希腊酸奶、Gisela自制格兰诺拉麦片和蜂蜜',
		pt: 'Maçã assada do Bierzo com iogurte grego, granola caseira Gisela e mel',
		it: 'Mela cotta del Bierzo con yogurt greco, granola fatta in casa Gisela e miele'
	},
	'Pera conferencia asada con granola casera de Gisela y miel': {
		en: 'Baked Conference pear with Gisela homemade granola and honey',
		de: 'Gebackene Conference-Birne mit hausgemachtem Gisela-Granola und Honig',
		fr: 'Poire Conférence rôtie, granola maison Gisela et miel',
		ko: '구운 콘퍼런스 배, 지셀라 홈메이드 그래놀라, 꿀',
		zh: '烤考密斯梨配Gisela自制格兰诺拉麦片和蜂蜜',
		pt: 'Pera Conference assada com granola caseira Gisela e mel',
		it: 'Pera Conference cotta con granola fatta in casa Gisela e miele'
	},
	'Yogur griego de frutos rojos con fruta fresca y granola casera de Gisela': {
		en: 'Red berry Greek yoghurt with fresh fruit and Gisela homemade granola',
		de: 'Griechischer Joghurt mit roten Beeren, frischem Obst und hausgemachtem Gisela-Granola',
		fr: 'Yaourt grec aux fruits rouges, fruits frais et granola maison Gisela',
		ko: '레드베리 그릭 요거트, 신선한 과일, 지셀라 홈메이드 그래놀라',
		zh: '红莓希腊酸奶配新鲜水果和Gisela自制格兰诺拉麦片',
		pt: 'Iogurte grego de frutos vermelhos com fruta fresca e granola caseira Gisela',
		it: 'Yogurt greco ai frutti rossi con frutta fresca e granola fatta in casa Gisela'
	},
	'Salmón ahumado con cherrys especiados asados, huevo poché, crema de aguacate, maíz dulce y pepino, acompañado con salsa de yogur y panecillos': {
		en: 'Smoked salmon with spiced roasted cherry tomatoes, poached egg, avocado cream, sweetcorn and cucumber, served with yoghurt sauce and rolls',
		de: 'Geräucherter Lachs mit gewürzten gerösteten Kirschtomaten, pochiertem Ei, Avocadocreme, Mais und Gurke, dazu Joghurtsauce und Brötchen',
		fr: 'Saumon fumé, tomates cerises rôties épicées, œuf poché, crème d\'avocat, maïs doux et concombre, sauce au yaourt et petits pains',
		ko: '훈제 연어, 향신료 구운 방울토마토, 수란, 아보카도 크림, 스위트콘, 오이, 요거트 소스와 빵 곁들임',
		zh: '烟熏三文鱼配香料烤圣女果、水波蛋、牛油果酱、甜玉米和黄瓜，配酸奶酱和小面包',
		pt: 'Salmão fumado com tomate cereja especiado assado, ovo escalfado, creme de abacate, milho doce e pepino, acompanhado de molho de iogurte e paezinhos',
		it: 'Salmone affumicato con pomodorini speziati al forno, uovo in camicia, crema di avocado, mais dolce e cetriolo, servito con salsa allo yogurt e panini'
	},
	'Pechuga de pavo al horno con cherrys asados, huevo poché, crema de aguacate, maíz dulce y pepino, acompañado con salsa de yogur y panecillos': {
		en: 'Roast turkey breast with roasted cherry tomatoes, poached egg, avocado cream, sweetcorn and cucumber, served with yoghurt sauce and rolls',
		de: 'Gebratene Putenbrust mit gerösteten Kirschtomaten, pochiertem Ei, Avocadocreme, Mais und Gurke, dazu Joghurtsauce und Brötchen',
		fr: 'Blanc de dinde rôti, tomates cerises rôties, œuf poché, crème d\'avocat, maïs doux et concombre, sauce au yaourt et petits pains',
		ko: '오븐 구이 칠면조 가슴살, 구운 방울토마토, 수란, 아보카도 크림, 스위트콘, 오이, 요거트 소스와 빵 곁들임',
		zh: '烤火鸡胸肉配烤圣女果、水波蛋、牛油果酱、甜玉米和黄瓜，配酸奶酱和小面包',
		pt: 'Peito de peru assado com tomate cereja assado, ovo escalfado, creme de abacate, milho doce e pepino, acompanhado de molho de iogurte e paezinhos',
		it: 'Petto di tacchino arrosto con pomodorini al forno, uovo in camicia, crema di avocado, mais dolce e cetriolo, servito con salsa allo yogurt e panini'
	},

	// Tostas
	'Aceite de oliva virgen extra (AOVE)': {
		en: 'Extra virgin olive oil (EVOO)',
		de: 'Natives Olivenöl extra',
		fr: "Huile d'olive vierge extra",
		ko: '엑스트라 버진 올리브 오일',
		zh: '特级初榨橄榄油',
		pt: 'Azeite virgem extra',
		it: "Olio extravergine d'oliva"
	},
	'Tomate triturado y AOVE*': {
		en: 'Crushed tomato and EVOO*',
		de: 'Zerkleinerte Tomate und natives Olivenöl extra*',
		fr: "Tomate écrasée et huile d'olive vierge extra*",
		ko: '으깬 토마토와 올리브 오일*',
		zh: '番茄泥和特级初榨橄榄油*',
		pt: 'Tomate triturado e azeite virgem extra*',
		it: "Pomodoro schiacciato e olio extravergine d'oliva*"
	},
	'Mantequilla y mermelada (maracuyá o frambuesa)': {
		en: 'Butter and jam (passion fruit or raspberry)',
		de: 'Butter und Marmelade (Passionsfrucht oder Himbeere)',
		fr: 'Beurre et confiture (fruit de la passion ou framboise)',
		ko: '버터와 잼 (패션프루트 또는 라즈베리)',
		zh: '黄油和果酱（百香果或覆盆子）',
		pt: 'Manteiga e compota (maracujá ou framboesa)',
		it: 'Burro e marmellata (frutto della passione o lampone)'
	},
	'Crema de cacahuete, plátano y semillas': {
		en: 'Peanut butter, banana and seeds',
		de: 'Erdnusscreme, Banane und Samen',
		fr: 'Beurre de cacahuète, banane et graines',
		ko: '땅콩버터, 바나나, 씨앗',
		zh: '花生酱、香蕉和籽类',
		pt: 'Manteiga de amendoim, banana e sementes',
		it: 'Burro di arachidi, banana e semi'
	},
	'Crema de avellana y toppings': {
		en: 'Hazelnut cream and toppings',
		de: 'Haselnusscreme und Toppings',
		fr: 'Crème de noisette et garnitures',
		ko: '헤이즐넛 크림과 토핑',
		zh: '榛子酱和配料',
		pt: 'Creme de avelã e coberturas',
		it: 'Crema di nocciola e topping'
	},
	'Crema de pistacho': {
		en: 'Pistachio cream',
		de: 'Pistaziencreme',
		fr: 'Crème de pistache',
		ko: '피스타치오 크림',
		zh: '开心果酱',
		pt: 'Creme de pistácio',
		it: 'Crema di pistacchio'
	},
	'Crema kinder y toppings': {
		en: 'Kinder cream and toppings',
		de: 'Kinder-Creme und Toppings',
		fr: 'Crème Kinder et garnitures',
		ko: '킨더 크림과 토핑',
		zh: 'Kinder奇趣酱和配料',
		pt: 'Creme Kinder e coberturas',
		it: 'Crema Kinder e topping'
	},
	'Crema de aguacate con queso crema, ajo, especias y cherrys al horno': {
		en: 'Avocado cream with cream cheese, garlic, spices and roasted cherry tomatoes',
		de: 'Avocadocreme mit Frischkäse, Knoblauch, Gewürzen und gebackenen Kirschtomaten',
		fr: "Crème d'avocat, fromage frais, ail, épices et tomates cerises rôties",
		ko: '아보카도 크림, 크림치즈, 마늘, 향신료, 오븐 구이 방울토마토',
		zh: '牛油果酱配奶油奶酪、大蒜、香料和烤圣女果',
		pt: 'Creme de abacate com queijo creme, alho, especiarias e tomate cereja assado',
		it: 'Crema di avocado con formaggio cremoso, aglio, spezie e pomodorini al forno'
	},
	'Jamón serrano con tomate triturado': {
		en: 'Serrano ham with crushed tomato',
		de: 'Serrano-Schinken mit zerkleinerter Tomate',
		fr: 'Jambon serrano et tomate écrasée',
		ko: '세라노 햄과 으깬 토마토',
		zh: '塞拉诺火腿配番茄泥',
		pt: 'Presunto serrano com tomate triturado',
		it: 'Prosciutto serrano con pomodoro schiacciato'
	},
	'Crema de atún con salsa mayonesa, mostaza, pepinillos y cebolla crunchy': {
		en: 'Tuna cream with mayonnaise, mustard, pickles and crispy onion',
		de: 'Thunfischcreme mit Mayonnaise, Senf, Gewürzgurken und knusprigen Zwiebeln',
		fr: 'Crème de thon, mayonnaise, moutarde, cornichons et oignons croustillants',
		ko: '참치 크림, 마요네즈, 머스터드, 피클, 크리스피 어니언',
		zh: '金枪鱼酱配蛋黄酱、芥末、酸黄瓜和脆洋葱',
		pt: 'Creme de atum com maionese, mostarda, pickles e cebola crocante',
		it: 'Crema di tonno con maionese, senape, sottaceti e cipolla croccante'
	},
	'Bacon a la plancha, mozzarella y huevo revuelto': {
		en: 'Grilled bacon, mozzarella and scrambled egg',
		de: 'Gegrillter Bacon, Mozzarella und Rührei',
		fr: 'Bacon grillé, mozzarella et œufs brouillés',
		ko: '그릴드 베이컨, 모짜렐라, 스크램블 에그',
		zh: '煎培根、马苏里拉奶酪和炒蛋',
		pt: 'Bacon grelhado, mozzarela e ovo mexido',
		it: 'Bacon alla piastra, mozzarella e uova strapazzate'
	},
	'Cecina con mermelada de higos, AOVE* y lascas de parmesano': {
		en: 'Cecina (cured beef) with fig jam, EVOO* and shaved parmesan',
		de: 'Cecina (Rindertrockenfleisch) mit Feigenmarmelade, nativem Olivenöl extra* und Parmesanspänen',
		fr: "Cecina (bœuf séché), confiture de figues, huile d'olive vierge extra* et copeaux de parmesan",
		ko: '세시나(건조 소고기), 무화과 잼, 올리브 오일*, 파르메산 슬라이스',
		zh: '风干牛肉配无花果酱、特级初榨橄榄油*和帕玛森芝士片',
		pt: 'Cecina (vaca curada) com compota de figo, azeite virgem extra* e lascas de parmesão',
		it: 'Cecina (manzo essiccato) con marmellata di fichi, olio extravergine* e scaglie di parmigiano'
	},
	'Salmón ahumado con queso de cabra y crema de aguacate': {
		en: 'Smoked salmon with goat cheese and avocado cream',
		de: 'Geräucherter Lachs mit Ziegenkäse und Avocadocreme',
		fr: "Saumon fumé, fromage de chèvre et crème d'avocat",
		ko: '훈제 연어, 염소치즈, 아보카도 크림',
		zh: '烟熏三文鱼配山羊奶酪和牛油果酱',
		pt: 'Salmão fumado com queijo de cabra e creme de abacate',
		it: 'Salmone affumicato con formaggio di capra e crema di avocado'
	},
	'Queso de cabra con nueces, miel y polen del Bierzo "castanea"': {
		en: 'Goat cheese with walnuts, honey and "castanea" El Bierzo pollen',
		de: 'Ziegenkäse mit Walnüssen, Honig und "castanea"-Blütenpollen aus dem Bierzo',
		fr: 'Fromage de chèvre, noix, miel et pollen du Bierzo "castanea"',
		ko: '염소치즈, 호두, 꿀, 비에르소 "카스타네아" 화분',
		zh: '山羊奶酪配核桃、蜂蜜和比耶尔索"castanea"花粉',
		pt: 'Queijo de cabra com nozes, mel e pólen do Bierzo "castanea"',
		it: 'Formaggio di capra con noci, miele e polline del Bierzo "castanea"'
	},

	// Croissant
	'Pera conferencia, queso brie y miel': {
		en: 'Conference pear, brie cheese and honey',
		de: 'Conference-Birne, Brie-Käse und Honig',
		fr: 'Poire Conférence, brie et miel',
		ko: '콘퍼런스 배, 브리 치즈, 꿀',
		zh: '考密斯梨配布里奶酪和蜂蜜',
		pt: 'Pera Conference, queijo brie e mel',
		it: 'Pera Conference, formaggio brie e miele'
	},
	'Mozzarella y jamón serrano': {
		en: 'Mozzarella and Serrano ham',
		de: 'Mozzarella und Serrano-Schinken',
		fr: 'Mozzarella et jambon serrano',
		ko: '모짜렐라와 세라노 햄',
		zh: '马苏里拉奶酪配塞拉诺火腿',
		pt: 'Mozzarela e presunto serrano',
		it: 'Mozzarella e prosciutto serrano'
	},
	'Mozzarella y bacon': {
		en: 'Mozzarella and bacon',
		de: 'Mozzarella und Bacon',
		fr: 'Mozzarella et bacon',
		ko: '모짜렐라와 베이컨',
		zh: '马苏里拉奶酪配培根',
		pt: 'Mozzarela e bacon',
		it: 'Mozzarella e bacon'
	},
	'Crema de avellana': {
		en: 'Hazelnut cream',
		de: 'Haselnusscreme',
		fr: 'Crème de noisette',
		ko: '헤이즐넛 크림',
		zh: '榛子酱',
		pt: 'Creme de avelã',
		it: 'Crema di nocciola'
	},

	// Tortitas
	'Crema de cecina y mermelada de pimientos': {
		en: 'Cecina cream and pepper jam',
		de: 'Cecina-Creme und Paprikamarmelade',
		fr: 'Crème de cecina et confiture de poivrons',
		ko: '세시나 크림과 피망 잼',
		zh: '风干牛肉酱配甜椒果酱',
		pt: 'Creme de cecina e compota de pimentos',
		it: 'Crema di cecina e marmellata di peperoni'
	},
	'Crema de queso de cabra y bacon caramelizado': {
		en: 'Goat cheese cream and caramelised bacon',
		de: 'Ziegenkäsecreme und karamellisierter Bacon',
		fr: 'Crème de fromage de chèvre et bacon caramélisé',
		ko: '염소치즈 크림과 카라멜라이즈드 베이컨',
		zh: '山羊奶酪酱配焦糖培根',
		pt: 'Creme de queijo de cabra e bacon caramelizado',
		it: 'Crema di formaggio di capra e bacon caramellato'
	},
	'Mermelada de mango, pepitas de choco y choco miel': {
		en: 'Mango jam, chocolate chips and chocolate honey',
		de: 'Mangomarmelade, Schokostückchen und Schoko-Honig',
		fr: 'Confiture de mangue, pépites de chocolat et miel au chocolat',
		ko: '망고 잼, 초코칩, 초코 허니',
		zh: '芒果酱、巧克力豆和巧克力蜂蜜',
		pt: 'Compota de manga, pepitas de chocolate e mel de chocolate',
		it: 'Marmellata di mango, gocce di cioccolato e miele al cioccolato'
	},
	'Crema de avellana y frutas': {
		en: 'Hazelnut cream and fruit',
		de: 'Haselnusscreme und Früchte',
		fr: 'Crème de noisette et fruits',
		ko: '헤이즐넛 크림과 과일',
		zh: '榛子酱配水果',
		pt: 'Creme de avelã e frutas',
		it: 'Crema di nocciola e frutta'
	},

	// Sandwich
	'Jamón cocido, mantequilla y mozzarella': {
		en: 'Cooked ham, butter and mozzarella',
		de: 'Gekochter Schinken, Butter und Mozzarella',
		fr: 'Jambon blanc, beurre et mozzarella',
		ko: '햄, 버터, 모짜렐라',
		zh: '熟火腿、黄油和马苏里拉奶酪',
		pt: 'Fiambre, manteiga e mozzarela',
		it: 'Prosciutto cotto, burro e mozzarella'
	},
	'Bacon a la plancha, pollo al horno, pesto, tomate en rodajas, lechuga y pepinillos': {
		en: 'Grilled bacon, roast chicken, pesto, sliced tomato, lettuce and pickles',
		de: 'Gegrillter Bacon, gebratenes Hähnchen, Pesto, Tomatenscheiben, Salat und Gewürzgurken',
		fr: 'Bacon grillé, poulet rôti, pesto, tomate en rondelles, laitue et cornichons',
		ko: '그릴드 베이컨, 오븐 치킨, 페스토, 슬라이스 토마토, 양상추, 피클',
		zh: '煎培根、烤鸡肉、青酱、番茄片、生菜和酸黄瓜',
		pt: 'Bacon grelhado, frango assado, pesto, tomate em rodelas, alface e pickles',
		it: 'Bacon alla piastra, pollo arrosto, pesto, pomodoro a fette, lattuga e sottaceti'
	},
	'Jamón cocido, salsa de trufa, tomate en rodajas, lechuga, burrata, mozzarella y cebolla': {
		en: 'Cooked ham, truffle sauce, sliced tomato, lettuce, burrata, mozzarella and onion',
		de: 'Gekochter Schinken, Trüffelsauce, Tomatenscheiben, Salat, Burrata, Mozzarella und Zwiebel',
		fr: 'Jambon blanc, sauce truffe, tomate en rondelles, laitue, burrata, mozzarella et oignon',
		ko: '햄, 트러플 소스, 슬라이스 토마토, 양상추, 부라타, 모짜렐라, 양파',
		zh: '熟火腿、松露酱、番茄片、生菜、布拉塔奶酪、马苏里拉奶酪和洋葱',
		pt: 'Fiambre, molho de trufa, tomate em rodelas, alface, burrata, mozzarela e cebola',
		it: 'Prosciutto cotto, salsa al tartufo, pomodoro a fette, lattuga, burrata, mozzarella e cipolla'
	},

	// Bocadillos
	'Bacon a la plancha, queso de cabra y cebolla crunchy': {
		en: 'Grilled bacon, goat cheese and crispy onion',
		de: 'Gegrillter Bacon, Ziegenkäse und knusprige Zwiebeln',
		fr: 'Bacon grillé, fromage de chèvre et oignons croustillants',
		ko: '그릴드 베이컨, 염소치즈, 크리스피 어니언',
		zh: '煎培根、山羊奶酪和脆洋葱',
		pt: 'Bacon grelhado, queijo de cabra e cebola crocante',
		it: 'Bacon alla piastra, formaggio di capra e cipolla croccante'
	},
	'Pavo al horno, huevo cocido, tomate en rodajas, lechuga y salsa de trufa': {
		en: 'Roast turkey, boiled egg, sliced tomato, lettuce and truffle sauce',
		de: 'Gebratener Truthahn, gekochtes Ei, Tomatenscheiben, Salat und Trüffelsauce',
		fr: 'Dinde rôtie, œuf dur, tomate en rondelles, laitue et sauce truffe',
		ko: '오븐 칠면조, 삶은 계란, 슬라이스 토마토, 양상추, 트러플 소스',
		zh: '烤火鸡肉、水煮蛋、番茄片、生菜和松露酱',
		pt: 'Peru assado, ovo cozido, tomate em rodelas, alface e molho de trufa',
		it: 'Tacchino arrosto, uovo sodo, pomodoro a fette, lattuga e salsa al tartufo'
	},
	'Pechuga de pollo al horno con bacon a la plancha, mozzarella, miel y mostaza': {
		en: 'Roast chicken breast with grilled bacon, mozzarella, honey and mustard',
		de: 'Gebratene Hähnchenbrust mit gegrilltem Bacon, Mozzarella, Honig und Senf',
		fr: 'Blanc de poulet rôti, bacon grillé, mozzarella, miel et moutarde',
		ko: '오븐 닭가슴살, 그릴드 베이컨, 모짜렐라, 꿀, 머스터드',
		zh: '烤鸡胸肉配煎培根、马苏里拉奶酪、蜂蜜和芥末',
		pt: 'Peito de frango assado com bacon grelhado, mozzarela, mel e mostarda',
		it: 'Petto di pollo arrosto con bacon alla piastra, mozzarella, miele e senape'
	},

	// Extras (desayunos)
	'Cualquier modificación': {
		en: 'Any modification',
		de: 'Jede Änderung',
		fr: 'Toute modification',
		ko: '메뉴 변경',
		zh: '任何调整',
		pt: 'Qualquer alteração',
		it: 'Qualsiasi modifica'
	},
	'Jamón, cecina o salmón': {
		en: 'Ham, cecina or salmon',
		de: 'Schinken, Cecina oder Lachs',
		fr: 'Jambon, cecina ou saumon',
		ko: '햄, 세시나 또는 연어',
		zh: '火腿、风干牛肉或三文鱼',
		pt: 'Fiambre, cecina ou salmão',
		it: 'Prosciutto, cecina o salmone'
	},

	// Café
	Ristretto: {
		en: 'Ristretto',
		de: 'Ristretto',
		fr: 'Ristretto',
		ko: '리스트레토',
		zh: '意式浓缩短萃',
		pt: 'Ristretto',
		it: 'Ristretto'
	},
	Espresso: { en: 'Espresso', de: 'Espresso', fr: 'Espresso', ko: '에스프레소', zh: '浓缩咖啡', pt: 'Espresso', it: 'Espresso' },
	'Espresso doble': {
		en: 'Double espresso',
		de: 'Doppelter Espresso',
		fr: 'Espresso double',
		ko: '더블 에스프레소',
		zh: '双份浓缩咖啡',
		pt: 'Espresso duplo',
		it: 'Espresso doppio'
	},
	Americano: {
		en: 'Americano',
		de: 'Americano',
		fr: 'Americano',
		ko: '아메리카노',
		zh: '美式咖啡',
		pt: 'Americano',
		it: 'Americano'
	},
	'Café con leche': {
		en: 'Coffee with milk',
		de: 'Kaffee mit Milch',
		fr: 'Café au lait',
		ko: '카페라떼',
		zh: '牛奶咖啡',
		pt: 'Café com leite',
		it: 'Caffè con latte'
	},
	'Café desayuno': {
		en: 'Breakfast coffee',
		de: 'Frühstückskaffee',
		fr: 'Café petit-déjeuner',
		ko: '브렉퍼스트 커피',
		zh: '早餐咖啡',
		pt: 'Café de pequeno-almoço',
		it: 'Caffè per colazione'
	},
	Cappuccino: {
		en: 'Cappuccino',
		de: 'Cappuccino',
		fr: 'Cappuccino',
		ko: '카푸치노',
		zh: '卡布奇诺',
		pt: 'Cappuccino',
		it: 'Cappuccino'
	},
	Machiato: { en: 'Macchiato', de: 'Macchiato', fr: 'Macchiato', ko: '마키아토', zh: '玛奇朵', pt: 'Macchiato', it: 'Macchiato' },
	Bombón: { en: 'Bombón', de: 'Bombón', fr: 'Bombón', ko: '봄봉', zh: '炼奶浓缩咖啡', pt: 'Bombón', it: 'Bombón' },
	'Flat white': {
		en: 'Flat white',
		de: 'Flat White',
		fr: 'Flat White',
		ko: '플랫 화이트',
		zh: '澳白咖啡',
		pt: 'Flat white',
		it: 'Flat white'
	},
	'Iced coffee': {
		en: 'Iced coffee',
		de: 'Eiskaffee',
		fr: 'Café glacé',
		ko: '아이스 커피',
		zh: '冰咖啡',
		pt: 'Café gelado',
		it: 'Caffè freddo'
	},
	'Iced coffee con leche': {
		en: 'Iced coffee with milk',
		de: 'Eiskaffee mit Milch',
		fr: 'Café glacé au lait',
		ko: '아이스 카페라떼',
		zh: '冰牛奶咖啡',
		pt: 'Café gelado com leite',
		it: 'Caffè freddo con latte'
	},
	'Iced espresso tónica': {
		en: 'Iced espresso and tonic',
		de: 'Espresso Tonic',
		fr: 'Espresso tonic glacé',
		ko: '아이스 에스프레소 토닉',
		zh: '冰浓缩咖啡汤力',
		pt: 'Espresso gelado com tónica',
		it: 'Espresso ghiacciato e tonica'
	},
	'Latte chocolate': {
		en: 'Chocolate latte',
		de: 'Schoko-Latte',
		fr: 'Latte chocolat',
		ko: '초콜릿 라떼',
		zh: '巧克力拿铁',
		pt: 'Latte de chocolate',
		it: 'Latte al cioccolato'
	},
	'Latte caramelo': {
		en: 'Caramel latte',
		de: 'Karamell-Latte',
		fr: 'Latte caramel',
		ko: '카라멜 라떼',
		zh: '焦糖拿铁',
		pt: 'Latte de caramelo',
		it: 'Latte al caramello'
	},
	'Latte pistacho': {
		en: 'Pistachio latte',
		de: 'Pistazien-Latte',
		fr: 'Latte pistache',
		ko: '피스타치오 라떼',
		zh: '开心果拿铁',
		pt: 'Latte de pistácio',
		it: 'Latte al pistacchio'
	},
	'Latte simple': {
		en: 'Plain latte',
		de: 'Latte',
		fr: 'Latte nature',
		ko: '심플 라떼',
		zh: '经典拿铁',
		pt: 'Latte simples',
		it: 'Latte semplice'
	},
	'Pink latte': {
		en: 'Pink latte',
		de: 'Pink Latte',
		fr: 'Pink Latte',
		ko: '핑크 라떼',
		zh: '粉色拿铁',
		pt: 'Pink latte',
		it: 'Pink latte'
	},
	'Golden latte': {
		en: 'Golden latte',
		de: 'Golden Latte',
		fr: 'Golden Latte',
		ko: '골든 라떼',
		zh: '黄金拿铁',
		pt: 'Golden latte',
		it: 'Golden latte'
	},
	'Matcha clásico': {
		en: 'Classic matcha',
		de: 'Klassischer Matcha',
		fr: 'Matcha classique',
		ko: '클래식 말차',
		zh: '经典抹茶',
		pt: 'Matcha clássico',
		it: 'Matcha classico'
	},
	'Vainilla matcha': {
		en: 'Vanilla matcha',
		de: 'Vanille-Matcha',
		fr: 'Matcha vanille',
		ko: '바닐라 말차',
		zh: '香草抹茶',
		pt: 'Matcha de baunilha',
		it: 'Matcha alla vaniglia'
	},
	'Mango matcha': {
		en: 'Mango matcha',
		de: 'Mango-Matcha',
		fr: 'Matcha mangue',
		ko: '망고 말차',
		zh: '芒果抹茶',
		pt: 'Matcha de manga',
		it: 'Matcha al mango'
	},
	'Fresa matcha': {
		en: 'Strawberry matcha',
		de: 'Erdbeer-Matcha',
		fr: 'Matcha fraise',
		ko: '딸기 말차',
		zh: '草莓抹茶',
		pt: 'Matcha de morango',
		it: 'Matcha alla fragola'
	},

	// Infusiones calientes
	'Rooibos naranja y limón': {
		en: 'Rooibos with orange and lemon',
		de: 'Rooibos mit Orange und Zitrone',
		fr: 'Rooibos orange et citron',
		ko: '오렌지 레몬 루이보스',
		zh: '橙柠檬博士茶',
		pt: 'Rooibos de laranja e limão',
		it: 'Rooibos arancia e limone'
	},
	'Rooibos relax': {
		en: 'Relax rooibos',
		de: 'Rooibos Relax',
		fr: 'Rooibos relax',
		ko: '릴렉스 루이보스',
		zh: '舒缓博士茶',
		pt: 'Rooibos relax',
		it: 'Rooibos relax'
	},
	'Jengibre y limón': {
		en: 'Ginger and lemon',
		de: 'Ingwer und Zitrone',
		fr: 'Gingembre et citron',
		ko: '생강 레몬',
		zh: '姜柠檬茶',
		pt: 'Gengibre e limão',
		it: 'Zenzero e limone'
	},
	'Menta poleo': {
		en: 'Pennyroyal mint',
		de: 'Poleiminze',
		fr: 'Menthe poivrée',
		ko: '페니로얄 민트',
		zh: '薄荷茶',
		pt: 'Poejo',
		it: 'Menta poleggio'
	},
	Manzanilla: {
		en: 'Chamomile',
		de: 'Kamille',
		fr: 'Camomille',
		ko: '카모마일',
		zh: '洋甘菊',
		pt: 'Camomila',
		it: 'Camomilla'
	},
	'Té verde': { en: 'Green tea', de: 'Grüner Tee', fr: 'Thé vert', ko: '녹차', zh: '绿茶', pt: 'Chá verde', it: 'Tè verde' },
	'Té verde piña colada': {
		en: 'Piña colada green tea',
		de: 'Grüner Tee Piña Colada',
		fr: 'Thé vert piña colada',
		ko: '피나콜라다 녹차',
		zh: '椰林飘香绿茶',
		pt: 'Chá verde piña colada',
		it: 'Tè verde piña colada'
	},
	'Té verde limón y matcha': {
		en: 'Green tea with lemon and matcha',
		de: 'Grüner Tee mit Zitrone und Matcha',
		fr: 'Thé vert citron et matcha',
		ko: '레몬 말차 녹차',
		zh: '柠檬抹茶绿茶',
		pt: 'Chá verde de limão e matcha',
		it: 'Tè verde limone e matcha'
	},
	'Té rojo': { en: 'Red tea', de: 'Roter Tee', fr: 'Thé rouge', ko: '홍차(루이보스)', zh: '红茶', pt: 'Chá vermelho', it: 'Tè rosso' },
	'English breakfast': {
		en: 'English breakfast',
		de: 'English Breakfast',
		fr: 'English Breakfast',
		ko: '잉글리시 브렉퍼스트',
		zh: '英式早餐茶',
		pt: 'English breakfast',
		it: 'English breakfast'
	},
	'Té pakistaní': {
		en: 'Pakistani tea',
		de: 'Pakistanischer Tee',
		fr: 'Thé pakistanais',
		ko: '파키스탄 차',
		zh: '巴基斯坦茶',
		pt: 'Chá paquistanês',
		it: 'Tè pakistano'
	},
	'Frutos rojos': {
		en: 'Red berries',
		de: 'Rote Beeren',
		fr: 'Fruits rouges',
		ko: '레드베리',
		zh: '红莓',
		pt: 'Frutos vermelhos',
		it: 'Frutti rossi'
	},

	// Infusiones frías
	'Tea-tac mango': {
		en: 'Tea-tac mango',
		de: 'Tea-tac Mango',
		fr: 'Tea-tac mangue',
		ko: 'Tea-tac 망고',
		zh: 'Tea-tac 芒果',
		pt: 'Tea-tac manga',
		it: 'Tea-tac mango'
	},
	'Tea-tac frutos del bosque': {
		en: 'Tea-tac forest fruits',
		de: 'Tea-tac Waldfrüchte',
		fr: 'Tea-tac fruits des bois',
		ko: 'Tea-tac 베리믹스',
		zh: 'Tea-tac 森林莓果',
		pt: 'Tea-tac frutos silvestres',
		it: 'Tea-tac frutti di bosco'
	},
	'Tea-tac manzana': {
		en: 'Tea-tac apple',
		de: 'Tea-tac Apfel',
		fr: 'Tea-tac pomme',
		ko: 'Tea-tac 사과',
		zh: 'Tea-tac 苹果',
		pt: 'Tea-tac maçã',
		it: 'Tea-tac mela'
	},
	'Tea-tac limón': {
		en: 'Tea-tac lemon',
		de: 'Tea-tac Zitrone',
		fr: 'Tea-tac citron',
		ko: 'Tea-tac 레몬',
		zh: 'Tea-tac 柠檬',
		pt: 'Tea-tac limão',
		it: 'Tea-tac limone'
	},

	// Otras bebidas
	'Agua mineral': {
		en: 'Mineral water',
		de: 'Mineralwasser',
		fr: 'Eau minérale',
		ko: '미네랄 워터',
		zh: '矿泉水',
		pt: 'Água mineral',
		it: 'Acqua minerale'
	},
	'Agua de plástico': {
		en: 'Bottled water',
		de: 'Wasser (Plastikflasche)',
		fr: "Eau (bouteille plastique)",
		ko: '생수(페트병)',
		zh: '瓶装水',
		pt: 'Água em garrafa de plástico',
		it: 'Acqua in bottiglia di plastica'
	},
	'Agua con gas': {
		en: 'Sparkling water',
		de: 'Sprudelwasser',
		fr: 'Eau gazeuse',
		ko: '탄산수',
		zh: '气泡水',
		pt: 'Água com gás',
		it: 'Acqua frizzante'
	},
	'Aquarius de naranja': {
		en: 'Orange Aquarius',
		de: 'Aquarius Orange',
		fr: 'Aquarius orange',
		ko: '아쿠아리우스 오렌지',
		zh: 'Aquarius 橙味',
		pt: 'Aquarius de laranja',
		it: 'Aquarius arancia'
	},
	'Aquarius de limón': {
		en: 'Lemon Aquarius',
		de: 'Aquarius Zitrone',
		fr: 'Aquarius citron',
		ko: '아쿠아리우스 레몬',
		zh: 'Aquarius 柠檬味',
		pt: 'Aquarius de limão',
		it: 'Aquarius limone'
	},
	'Coca-cola': {
		en: 'Coca-Cola',
		de: 'Coca-Cola',
		fr: 'Coca-Cola',
		ko: '코카콜라',
		zh: '可口可乐',
		pt: 'Coca-Cola',
		it: 'Coca-Cola'
	},
	'Coca-cola zero': {
		en: 'Coca-Cola Zero',
		de: 'Coca-Cola Zero',
		fr: 'Coca-Cola Zero',
		ko: '코카콜라 제로',
		zh: '零度可乐',
		pt: 'Coca-Cola Zero',
		it: 'Coca-Cola Zero'
	},
	'Fuze tea de maracuyá': {
		en: 'Passion fruit Fuze Tea',
		de: 'Fuze Tea Passionsfrucht',
		fr: 'Fuze Tea fruit de la passion',
		ko: '퓨즈티 패션프루트',
		zh: '芬清茶 百香果味',
		pt: 'Fuze Tea de maracujá',
		it: 'Fuze Tea al frutto della passione'
	},
	'Fuze tea de limón': {
		en: 'Lemon Fuze Tea',
		de: 'Fuze Tea Zitrone',
		fr: 'Fuze Tea citron',
		ko: '퓨즈티 레몬',
		zh: '芬清茶 柠檬味',
		pt: 'Fuze Tea de limão',
		it: 'Fuze Tea al limone'
	},
	'Mosto blanco': {
		en: 'White grape juice',
		de: 'Weißer Traubenmost',
		fr: 'Moût de raisin blanc',
		ko: '화이트 포도주스',
		zh: '白葡萄汁',
		pt: 'Mosto branco',
		it: 'Mosto bianco'
	},
	'Mosto rojo': {
		en: 'Red grape juice',
		de: 'Roter Traubenmost',
		fr: 'Moût de raisin rouge',
		ko: '레드 포도주스',
		zh: '红葡萄汁',
		pt: 'Mosto tinto',
		it: 'Mosto rosso'
	},
	'Zumo de melocotón': {
		en: 'Peach juice',
		de: 'Pfirsichsaft',
		fr: 'Jus de pêche',
		ko: '복숭아 주스',
		zh: '桃汁',
		pt: 'Sumo de pêssego',
		it: 'Succo di pesca'
	},
	'Zumo de piña': {
		en: 'Pineapple juice',
		de: 'Ananassaft',
		fr: "Jus d'ananas",
		ko: '파인애플 주스',
		zh: '菠萝汁',
		pt: 'Sumo de ananás',
		it: "Succo d'ananas"
	},
	'Zumo de naranja': {
		en: 'Orange juice',
		de: 'Orangensaft',
		fr: "Jus d'orange",
		ko: '오렌지 주스',
		zh: '橙汁',
		pt: 'Sumo de laranja',
		it: "Succo d'arancia"
	},
	'Zumo de naranja (natural)': {
		en: 'Orange juice (fresh)',
		de: 'Orangensaft (frisch gepresst)',
		fr: "Jus d'orange (frais pressé)",
		ko: '생 오렌지 주스',
		zh: '鲜榨橙汁',
		pt: 'Sumo de laranja (natural)',
		it: "Succo d'arancia (spremuta fresca)"
	},
	'Batido de choco': {
		en: 'Chocolate milkshake',
		de: 'Schoko-Milchshake',
		fr: 'Milkshake chocolat',
		ko: '초코 밀크셰이크',
		zh: '巧克力奶昔',
		pt: 'Batido de chocolate',
		it: 'Frullato al cioccolato'
	},

	// Gise-lata
	Mango: { en: 'Mango', de: 'Mango', fr: 'Mangue', ko: '망고', zh: '芒果', pt: 'Manga', it: 'Mango' },
	Manzana: { en: 'Apple', de: 'Apfel', fr: 'Pomme', ko: '사과', zh: '苹果', pt: 'Maçã', it: 'Mela' },
	Limón: { en: 'Lemon', de: 'Zitrone', fr: 'Citron', ko: '레몬', zh: '柠檬', pt: 'Limão', it: 'Limone' },

	// Extras (bebidas)
	'Leche sin lactosa': {
		en: 'Lactose-free milk',
		de: 'Laktosefreie Milch',
		fr: 'Lait sans lactose',
		ko: '락토프리 우유',
		zh: '无乳糖牛奶',
		pt: 'Leite sem lactose',
		it: 'Latte senza lattosio'
	},
	'Leche de avena': {
		en: 'Oat milk',
		de: 'Hafermilch',
		fr: "Lait d'avoine",
		ko: '오트밀크',
		zh: '燕麦奶',
		pt: 'Bebida de aveia',
		it: "Latte d'avena"
	},
	'Para llevar': {
		en: 'To go',
		de: 'Zum Mitnehmen',
		fr: 'À emporter',
		ko: '테이크아웃',
		zh: '外带',
		pt: 'Para levar',
		it: 'Da asporto'
	},
	'Con hielo': {
		en: 'With ice',
		de: 'Mit Eis',
		fr: 'Avec glaçons',
		ko: '얼음 추가',
		zh: '加冰',
		pt: 'Com gelo',
		it: 'Con ghiaccio'
	}
};

export function translateMenuText(text: string, lang: Locale): string {
	if (lang === 'es') return text;
	return menuTranslations[text]?.[lang] ?? text;
}
