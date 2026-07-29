export const locales = ['es', 'en', 'de', 'fr', 'ko', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
	es: 'Español',
	en: 'English',
	de: 'Deutsch',
	fr: 'Français',
	ko: '한국어',
	zh: '中文'
};

export const ui: Record<Locale, Record<string, string>> = {
	es: {
		'preloader.welcome': 'Bienvenido a nuestra pastelería',
		'nav.bcb': 'BCB',
		'nav.carta': 'Carta',
		'aria.openMenu': 'Abrir menú',

		'hero.badge': 'Repostería natural en Ponferrada',
		'hero.title': 'Dulces momentos hechos con ingredientes naturales',
		'hero.subtitle':
			'En Gisela Pastelería Natural elaboramos cada tarta y cada dulce de forma artesanal, cuidando el origen de nuestros ingredientes para que disfrutes de un sabor auténtico, día a día.',
		'hero.ctaOrder': 'Encarga tu tarta',
		'hero.ctaInstagram': 'Síguenos en Instagram',
		'hero.scroll': 'Sigue bajando',

		'historia.eyebrow': 'Nuestra historia',
		'historia.title': 'Un sueño hecho realidad desde 2010',
		'historia.p1':
			'En 2010 abrimos "Gisela" y hoy nos hemos trasladado a las puertas de nuestro castillo para invitarte a nuestra casa, tomarte un buen desayuno y disfrutar sin prisas de algo rico, real y único.',
		'historia.p2':
			'Trabajamos cada día con ingredientes honestos y, siempre que podemos, de kilómetro cero: pan de Panadería Álex, café de especialidad Bonarte y las infusiones de La Tetera Azúl.',
		'historia.badge1': 'La felicidad se come',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Alan, del equipo de Gisela, disfrutando de una de nuestras kukis',

		'especialidades.eyebrow': 'Especialidades',
		'especialidades.title': 'Lo que no te puedes perder',
		'especialidades.badge': 'Sin conservantes',
		'especialidades.item1.title': 'Nuestros dulces',
		'especialidades.item1.desc': 'Tartas, brownies y kukis horneados cada día en nuestro obrador.',
		'especialidades.item1.alt': 'Selección de vasitos de postre de Gisela Pastelería Natural',
		'especialidades.item2.title': 'Para regalar',
		'especialidades.item2.desc': 'Cajas y cestas para llevar un poquitín de Gisela donde quieras.',
		'especialidades.item2.alt': 'Caja de kukis de Gisela Pastelería Natural para regalar',
		'especialidades.item3.title': 'Café de especialidad',
		'especialidades.item3.desc': 'Blend Bonarte, preparado como a ti te guste.',
		'especialidades.item3.alt':
			'Imagen de ejemplo (placeholder, sustituir por foto real de café de especialidad)',

		'bcbTeaser.eyebrow': 'Para peregrinos del Camino de Santiago',
		'bcbTeaser.title': 'BCB · Buen Camino Breakfast',
		'bcbTeaser.text':
			'Regala un desayuno a un peregrino: a un amigo, a un familiar o a quien esté haciendo el Camino. La persona solo tiene que pasarse por Gisela Pastelería Natural y darnos su nombre para disfrutarlo.',
		'bcbTeaser.cta': 'Descubre BCB',
		'bcbTeaser.badge': 'Horneamos para ti',

		'bcbPage.title': 'BCB · Buen Camino Breakfast | Gisela Pastelería Natural',
		'bcbPage.description':
			'Regala un desayuno a un peregrino del Camino de Santiago a su paso por Ponferrada. Un proyecto de Gisela Pastelería Natural.',
		'bcbPage.poweredBy': 'Un proyecto de Gisela Pastelería Natural',
		'bcbPage.intro':
			'Para quien hace el Camino de Santiago y pasa por Ponferrada: un desayuno de verdad para reponer fuerzas. Regálaselo a un amigo, a un familiar o a quien esté caminando — solo tiene que pasarse por Gisela y darnos su nombre.',
		'bcbPage.badge1': 'Buen Camino',
		'bcbPage.badge2': 'Desayuno en Ponferrada',
		'bcbPage.regalar': 'Regalar',
		'bcbPage.proximamente': 'Próximamente',
		'bcbPage.disclaimer':
			'Precios orientativos, sujetos a ajuste. El desayuno se recoge en nuestro local en Ponferrada.',

		'tier.sencillo.name': 'Sencillo',
		'tier.sencillo.desc': 'Café de especialidad + tosta clásica.',
		'tier.completo.name': 'Completo',
		'tier.completo.desc': 'Bowl o tosta especial + bebida + dulce artesano.',
		'tier.premium.name': 'Premium',
		'tier.premium.desc': 'Selección premium + café de especialidad + dulce artesano.',

		'reviews.title': 'Lo que dicen nuestros clientes',
		'reviews.fallbackSubtitle': 'Reseñas verificadas de Google Business Profile.',
		'reviews.countSuffix': 'reseñas en Google',
		'reviews.fallbackText':
			'Muy pronto podrás ver aquí nuestras reseñas reales de Google. Mientras tanto, puedes consultarlas directamente en nuestra ficha de negocio.',
		'reviews.verMas': 'Ver más',
		'reviews.verTodas': 'Ver todas las reseñas en Google',

		'map.visitanos': 'Visítanos',
		'map.cta': 'Abrir en Google Maps →',
		'map.ariaLabel': 'Abrir la ubicación de Gisela Pastelería Natural en Google Maps',

		'footer.description':
			'Pastelería natural y artesanal, elaborada cada día en Ponferrada con ingredientes de calidad.',
		'footer.visitanos': 'Visítanos',
		'footer.horario': 'Horario',
		'footer.dias': 'Lunes a domingo',
		'footer.rights': 'Todos los derechos reservados.',

		'carta.title': 'Nuestra carta',
		'carta.intro':
			'Todo lo que ves, hueles y saboreas aquí —dulce y salado— lo elaboramos en nuestro propio obrador, con ingredientes honestos y, siempre que podemos, de kilómetro cero. Consulta a nuestro personal para información sobre alérgenos.',

		'meta.home.title': 'Gisela Pastelería Natural | Pastelería artesanal en Ponferrada',
		'meta.home.description':
			'Pastelería natural y artesanal en Ponferrada, León. Tartas, dulces y repostería casera elaborados cada día con ingredientes naturales.',
		'meta.carta.title': 'Carta | Gisela Pastelería Natural',
		'meta.carta.description':
			'Consulta la carta de Gisela Pastelería Natural: tartas, dulces, desayunos y bebidas elaborados a diario en nuestro obrador de Ponferrada.',
		'meta.historia.title': 'Nuestra historia | Gisela Pastelería Natural',
		'meta.historia.description':
			'Conoce la historia de Gisela Pastelería Natural, un sueño hecho realidad desde 2010 en Ponferrada.',

		'historiaPage.location': 'Gisela Pastelería Natural · Ponferrada, León',
		'historiaPage.title': 'Una traductora que eligió la <em>pastelería</em>',
		'historiaPage.heroSubtitle':
			'La historia de cómo tres idiomas se convirtieron en el prólogo de la mejor pastelería del Bierzo.',
		'historiaPage.p1':
			'Gisela nació en Alemania y construyó una carrera brillante como traductora jurada de inglés, alemán y chino. Tres idiomas. Tres mundos. Pero había algo que le tiraba con más fuerza que cualquier palabra: su amor por la pastelería, que nació en la cocina de su madre.',
		'historiaPage.p2':
			'Decidió dejarlo todo y abrió Gisela Pastelería Natural junto a su madre hace más de 16 años. Desde entonces no ha parado de formarse en técnicas de pastelería de todo el mundo, y ha construido un equipo unido que ella misma describe como "una masa madre: mezclados, unidos y burbujeantes de ideas".',
		'historiaPage.quote': '¿Sabes cuál es nuestro ingrediente secreto? Es no tener ingredientes secretos.',
		'historiaPage.p3':
			'Hoy, cada pieza que sale de su obrador lleva ingredientes de kilómetro cero, sin conservantes ni aditivos. Porque la felicidad se come, y aquí tenemos la receta.',
		'historiaPage.reviewsLabel': 'Reseñas de Google',
		'historiaPage.comingSoonBadge': 'Próximamente',
		'historiaPage.comingSoonTitle': 'Estamos preparando algo especial para contarte todo',
		'historiaPage.comingSoonText':
			'Aquí encontrarás la historia completa de Gisela: sus años como traductora jurada de inglés, alemán y chino, el momento en que decidió dejar las palabras por el obrador, y cómo junto a su madre construyeron la pastelería que Ponferrada merece. Una historia de valentía, masa madre y mucho amor por lo natural.',
		'historiaPage.backToSite': 'Volver a la web',
		'historiaPage.imageAlt': 'Selección de dulces de Gisela Pastelería Natural'
	},
	en: {
		'preloader.welcome': 'Welcome to our bakery',
		'nav.bcb': 'BCB',
		'nav.carta': 'Menu',
		'aria.openMenu': 'Open menu',

		'hero.badge': 'Natural bakery in Ponferrada',
		'hero.title': 'Sweet moments made with natural ingredients',
		'hero.subtitle':
			'At Gisela Pastelería Natural we handcraft every cake and every sweet, taking care with the origin of our ingredients so you can enjoy an authentic flavour, every day.',
		'hero.ctaOrder': 'Order your cake',
		'hero.ctaInstagram': 'Follow us on Instagram',
		'hero.scroll': 'Keep scrolling',

		'historia.eyebrow': 'Our story',
		'historia.title': 'A dream come true since 2010',
		'historia.p1':
			'In 2010 we opened "Gisela" and today we\'ve moved to the gates of our castle, to invite you into our home, enjoy a good breakfast and, without rushing, something delicious, real and unique.',
		'historia.p2':
			'We work every day with honest ingredients and, whenever we can, zero-kilometre ones: bread from Panadería Álex, speciality coffee from Bonarte, and infusions from La Tetera Azúl.',
		'historia.badge1': 'Happiness is edible',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Alan, from the Gisela team, enjoying one of our kukis',

		'especialidades.eyebrow': 'Specialities',
		'especialidades.title': "What you can't miss",
		'especialidades.badge': 'No preservatives',
		'especialidades.item1.title': 'Our sweets',
		'especialidades.item1.desc': 'Cakes, brownies and kukis baked fresh every day in our bakery.',
		'especialidades.item1.alt': 'Selection of dessert cups from Gisela Pastelería Natural',
		'especialidades.item2.title': 'To gift',
		'especialidades.item2.desc': 'Boxes and baskets to take a little bit of Gisela wherever you go.',
		'especialidades.item2.alt': 'Box of kukis from Gisela Pastelería Natural, ready to gift',
		'especialidades.item3.title': 'Speciality coffee',
		'especialidades.item3.desc': 'Bonarte blend, made just how you like it.',
		'especialidades.item3.alt': 'Example image (placeholder, to be replaced with a real speciality coffee photo)',

		'bcbTeaser.eyebrow': 'For pilgrims on the Camino de Santiago',
		'bcbTeaser.title': 'BCB · Buen Camino Breakfast',
		'bcbTeaser.text':
			'Gift a breakfast to a pilgrim: a friend, a family member, or anyone walking the Camino. They just need to stop by Gisela Pastelería Natural and give us their name to enjoy it.',
		'bcbTeaser.cta': 'Discover BCB',
		'bcbTeaser.badge': 'We bake for you',

		'bcbPage.title': 'BCB · Buen Camino Breakfast | Gisela Pastelería Natural',
		'bcbPage.description':
			'Gift a breakfast to a Camino de Santiago pilgrim passing through Ponferrada. A project by Gisela Pastelería Natural.',
		'bcbPage.poweredBy': 'A project by Gisela Pastelería Natural',
		'bcbPage.intro':
			'For anyone walking the Camino de Santiago through Ponferrada: a real breakfast to recharge your energy. Gift it to a friend, a family member, or anyone on the walk — they just need to stop by Gisela and give us their name.',
		'bcbPage.badge1': 'Buen Camino',
		'bcbPage.badge2': 'Breakfast in Ponferrada',
		'bcbPage.regalar': 'Gift it',
		'bcbPage.proximamente': 'Coming soon',
		'bcbPage.disclaimer':
			'Prices are approximate and subject to adjustment. Breakfast is collected at our shop in Ponferrada.',

		'tier.sencillo.name': 'Simple',
		'tier.sencillo.desc': 'Speciality coffee + classic toast.',
		'tier.completo.name': 'Complete',
		'tier.completo.desc': 'Bowl or special toast + drink + artisan sweet.',
		'tier.premium.name': 'Premium',
		'tier.premium.desc': 'Premium selection + speciality coffee + artisan sweet.',

		'reviews.title': 'What our customers say',
		'reviews.fallbackSubtitle': 'Verified reviews from Google Business Profile.',
		'reviews.countSuffix': 'reviews on Google',
		'reviews.fallbackText':
			"You'll soon be able to see our real Google reviews here. In the meantime, you can check them directly on our business listing.",
		'reviews.verMas': 'Read more',
		'reviews.verTodas': 'See all reviews on Google',

		'map.visitanos': 'Visit us',
		'map.cta': 'Open in Google Maps →',
		'map.ariaLabel': "Open Gisela Pastelería Natural's location in Google Maps",

		'footer.description':
			'Natural, handcrafted bakery, made fresh every day in Ponferrada with quality ingredients.',
		'footer.visitanos': 'Visit us',
		'footer.horario': 'Opening hours',
		'footer.dias': 'Monday to Sunday',
		'footer.rights': 'All rights reserved.',

		'carta.title': 'Our menu',
		'carta.intro':
			"Everything you see, smell and taste here — sweet and savoury — is made in our own bakery, with honest ingredients and, whenever we can, zero-kilometre ones. Ask our staff for allergen information.",

		'meta.home.title': 'Gisela Pastelería Natural | Artisan bakery in Ponferrada',
		'meta.home.description':
			'Natural, handcrafted bakery in Ponferrada, León. Cakes, sweets and homemade pastries made fresh every day with natural ingredients.',
		'meta.carta.title': 'Menu | Gisela Pastelería Natural',
		'meta.carta.description':
			"Check out Gisela Pastelería Natural's menu: cakes, sweets, breakfasts and drinks made fresh every day in our bakery in Ponferrada.",
		'meta.historia.title': 'Our story | Gisela Pastelería Natural',
		'meta.historia.description':
			'Discover the story of Gisela Pastelería Natural, a dream come true since 2010 in Ponferrada.',

		'historiaPage.location': 'Gisela Pastelería Natural · Ponferrada, León',
		'historiaPage.title': 'A translator who chose <em>pastry-making</em>',
		'historiaPage.heroSubtitle':
			"The story of how three languages became the prologue to El Bierzo's finest bakery.",
		'historiaPage.p1':
			'Gisela was born in Germany and built a brilliant career as a certified translator of English, German and Chinese. Three languages. Three worlds. But something pulled at her harder than any word: her love of pastry, born in her mother\'s kitchen.',
		'historiaPage.p2':
			'She decided to leave it all behind and opened Gisela Pastelería Natural with her mother more than 16 years ago. Since then she hasn\'t stopped training in pastry techniques from around the world, building a close-knit team she describes as "a sourdough starter: mixed together, united, and bubbling with ideas."',
		'historiaPage.quote': 'Want to know our secret ingredient? Having no secret ingredients.',
		'historiaPage.p3':
			'Today, every piece that leaves her bakery is made with zero-kilometre ingredients, no preservatives or additives. Because happiness is edible, and here we have the recipe.',
		'historiaPage.reviewsLabel': 'Google Reviews',
		'historiaPage.comingSoonBadge': 'Coming soon',
		'historiaPage.comingSoonTitle': "We're preparing something special to tell you everything",
		'historiaPage.comingSoonText':
			"Here you'll find Gisela's full story: her years as a certified translator of English, German and Chinese, the moment she decided to trade words for the bakery, and how she and her mother built the bakery Ponferrada deserves. A story of courage, sourdough, and a lot of love for all things natural.",
		'historiaPage.backToSite': 'Back to the site',
		'historiaPage.imageAlt': 'Selection of sweets from Gisela Pastelería Natural'
	},
	de: {
		'preloader.welcome': 'Willkommen in unserer Bäckerei',
		'nav.bcb': 'BCB',
		'nav.carta': 'Speisekarte',
		'aria.openMenu': 'Menü öffnen',

		'hero.badge': 'Natürliche Bäckerei in Ponferrada',
		'hero.title': 'Süße Momente aus natürlichen Zutaten',
		'hero.subtitle':
			'Bei Gisela Pastelería Natural stellen wir jede Torte und jede Süßigkeit von Hand her und achten auf die Herkunft unserer Zutaten, damit du jeden Tag einen authentischen Geschmack genießen kannst.',
		'hero.ctaOrder': 'Bestelle deine Torte',
		'hero.ctaInstagram': 'Folge uns auf Instagram',
		'hero.scroll': 'Weiter scrollen',

		'historia.eyebrow': 'Unsere Geschichte',
		'historia.title': 'Ein Traum, der seit 2010 wahr wurde',
		'historia.p1':
			'2010 eröffneten wir "Gisela" und heute sind wir an die Tore unserer Burg umgezogen, um dich zu uns einzuladen, ein gutes Frühstück zu genießen und dir ohne Eile etwas Leckeres, Echtes und Einzigartiges zu gönnen.',
		'historia.p2':
			'Wir arbeiten jeden Tag mit ehrlichen und, wann immer möglich, regionalen Zutaten: Brot von Panadería Álex, Spezialitätenkaffee von Bonarte und Aufgüsse von La Tetera Azúl.',
		'historia.badge1': 'Glück kann man essen',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Alan vom Gisela-Team genießt einen unserer Kukis',

		'especialidades.eyebrow': 'Spezialitäten',
		'especialidades.title': 'Was du nicht verpassen solltest',
		'especialidades.badge': 'Ohne Konservierungsstoffe',
		'especialidades.item1.title': 'Unsere Süßigkeiten',
		'especialidades.item1.desc': 'Torten, Brownies und Kukis, täglich frisch in unserer Backstube gebacken.',
		'especialidades.item1.alt': 'Auswahl an Dessertbechern von Gisela Pastelería Natural',
		'especialidades.item2.title': 'Zum Verschenken',
		'especialidades.item2.desc':
			'Boxen und Körbe, um ein Stückchen Gisela überallhin mitzunehmen.',
		'especialidades.item2.alt': 'Kukis-Box von Gisela Pastelería Natural zum Verschenken',
		'especialidades.item3.title': 'Spezialitätenkaffee',
		'especialidades.item3.desc': 'Bonarte-Blend, zubereitet ganz nach deinem Geschmack.',
		'especialidades.item3.alt':
			'Beispielbild (Platzhalter, wird durch ein echtes Foto vom Spezialitätenkaffee ersetzt)',

		'bcbTeaser.eyebrow': 'Für Pilger auf dem Jakobsweg',
		'bcbTeaser.title': 'BCB · Buen Camino Breakfast',
		'bcbTeaser.text':
			'Schenke einem Pilger ein Frühstück: einem Freund, einem Familienmitglied oder jemandem, der den Jakobsweg geht. Er muss nur bei Gisela Pastelería Natural vorbeikommen und uns seinen Namen nennen.',
		'bcbTeaser.cta': 'BCB entdecken',
		'bcbTeaser.badge': 'Wir backen für dich',

		'bcbPage.title': 'BCB · Buen Camino Breakfast | Gisela Pastelería Natural',
		'bcbPage.description':
			'Schenke einem Pilger auf dem Jakobsweg ein Frühstück bei seinem Aufenthalt in Ponferrada. Ein Projekt von Gisela Pastelería Natural.',
		'bcbPage.poweredBy': 'Ein Projekt von Gisela Pastelería Natural',
		'bcbPage.intro':
			'Für alle, die auf dem Jakobsweg durch Ponferrada wandern: ein richtiges Frühstück, um neue Kraft zu tanken. Schenke es einem Freund, einem Familienmitglied oder jemandem unterwegs — er muss nur bei Gisela vorbeikommen und seinen Namen nennen.',
		'bcbPage.badge1': 'Buen Camino',
		'bcbPage.badge2': 'Frühstück in Ponferrada',
		'bcbPage.regalar': 'Verschenken',
		'bcbPage.proximamente': 'Demnächst',
		'bcbPage.disclaimer':
			'Unverbindliche Preise, Änderungen vorbehalten. Das Frühstück wird in unserem Laden in Ponferrada abgeholt.',

		'tier.sencillo.name': 'Einfach',
		'tier.sencillo.desc': 'Spezialitätenkaffee + klassischer Toast.',
		'tier.completo.name': 'Komplett',
		'tier.completo.desc': 'Bowl oder spezieller Toast + Getränk + handgemachte Süßigkeit.',
		'tier.premium.name': 'Premium',
		'tier.premium.desc': 'Premium-Auswahl + Spezialitätenkaffee + handgemachte Süßigkeit.',

		'reviews.title': 'Was unsere Kunden sagen',
		'reviews.fallbackSubtitle': 'Verifizierte Bewertungen von Google Business Profile.',
		'reviews.countSuffix': 'Bewertungen auf Google',
		'reviews.fallbackText':
			'Bald kannst du hier unsere echten Google-Bewertungen sehen. In der Zwischenzeit kannst du sie direkt auf unserem Unternehmensprofil einsehen.',
		'reviews.verMas': 'Mehr lesen',
		'reviews.verTodas': 'Alle Bewertungen auf Google ansehen',

		'map.visitanos': 'Besuch uns',
		'map.cta': 'In Google Maps öffnen →',
		'map.ariaLabel': 'Standort von Gisela Pastelería Natural in Google Maps öffnen',

		'footer.description':
			'Natürliche, handwerkliche Bäckerei, täglich frisch in Ponferrada mit hochwertigen Zutaten hergestellt.',
		'footer.visitanos': 'Besuch uns',
		'footer.horario': 'Öffnungszeiten',
		'footer.dias': 'Montag bis Sonntag',
		'footer.rights': 'Alle Rechte vorbehalten.',

		'carta.title': 'Unsere Karte',
		'carta.intro':
			'Alles, was du hier siehst, riechst und schmeckst — süß und herzhaft — stellen wir in unserer eigenen Backstube her, mit ehrlichen und, wann immer möglich, regionalen Zutaten. Frag unser Personal nach Informationen zu Allergenen.',

		'meta.home.title': 'Gisela Pastelería Natural | Handwerksbäckerei in Ponferrada',
		'meta.home.description':
			'Natürliche, handwerkliche Bäckerei in Ponferrada, León. Torten, Süßigkeiten und hausgemachtes Gebäck, täglich frisch mit natürlichen Zutaten hergestellt.',
		'meta.carta.title': 'Speisekarte | Gisela Pastelería Natural',
		'meta.carta.description':
			'Entdecke die Karte von Gisela Pastelería Natural: Torten, Süßigkeiten, Frühstück und Getränke, täglich frisch in unserer Backstube in Ponferrada.',
		'meta.historia.title': 'Unsere Geschichte | Gisela Pastelería Natural',
		'meta.historia.description':
			'Entdecke die Geschichte von Gisela Pastelería Natural, ein Traum, der seit 2010 in Ponferrada wahr wurde.',

		'historiaPage.location': 'Gisela Pastelería Natural · Ponferrada, León',
		'historiaPage.title': 'Eine Übersetzerin, die sich für die <em>Patisserie</em> entschied',
		'historiaPage.heroSubtitle':
			'Die Geschichte, wie drei Sprachen zum Prolog der besten Bäckerei des Bierzo wurden.',
		'historiaPage.p1':
			'Gisela wurde in Deutschland geboren und machte eine brillante Karriere als vereidigte Übersetzerin für Englisch, Deutsch und Chinesisch. Drei Sprachen. Drei Welten. Doch etwas zog sie stärker an als jedes Wort: ihre Liebe zur Patisserie, die in der Küche ihrer Mutter geboren wurde.',
		'historiaPage.p2':
			'Sie entschied sich, alles hinter sich zu lassen, und eröffnete vor über 16 Jahren gemeinsam mit ihrer Mutter Gisela Pastelería Natural. Seitdem bildet sie sich unermüdlich in Backtechniken aus aller Welt weiter und hat ein Team aufgebaut, das sie selbst als „einen Sauerteig: vermischt, vereint und sprudelnd vor Ideen" beschreibt.',
		'historiaPage.quote': 'Weißt du, was unsere geheime Zutat ist? Keine geheimen Zutaten zu haben.',
		'historiaPage.p3':
			'Heute wird jedes Stück, das ihre Backstube verlässt, mit regionalen Zutaten ohne Konservierungs- oder Zusatzstoffe hergestellt. Denn Glück kann man essen, und hier haben wir das Rezept dafür.',
		'historiaPage.reviewsLabel': 'Google-Bewertungen',
		'historiaPage.comingSoonBadge': 'Demnächst',
		'historiaPage.comingSoonTitle': 'Wir bereiten etwas Besonderes vor, um dir alles zu erzählen',
		'historiaPage.comingSoonText':
			'Hier findest du Giselas ganze Geschichte: ihre Jahre als vereidigte Übersetzerin für Englisch, Deutsch und Chinesisch, den Moment, in dem sie beschloss, die Worte gegen die Backstube einzutauschen, und wie sie gemeinsam mit ihrer Mutter die Bäckerei aufbaute, die Ponferrada verdient. Eine Geschichte von Mut, Sauerteig und viel Liebe zum Natürlichen.',
		'historiaPage.backToSite': 'Zurück zur Website',
		'historiaPage.imageAlt': 'Auswahl an Süßigkeiten von Gisela Pastelería Natural'
	},
	fr: {
		'preloader.welcome': 'Bienvenue dans notre pâtisserie',
		'nav.bcb': 'BCB',
		'nav.carta': 'Carte',
		'aria.openMenu': 'Ouvrir le menu',

		'hero.badge': 'Pâtisserie naturelle à Ponferrada',
		'hero.title': "Des moments sucrés faits d'ingrédients naturels",
		'hero.subtitle':
			"Chez Gisela Pastelería Natural, nous élaborons chaque gâteau et chaque douceur de façon artisanale, en veillant à l'origine de nos ingrédients pour que vous profitiez d'une saveur authentique, jour après jour.",
		'hero.ctaOrder': 'Commandez votre gâteau',
		'hero.ctaInstagram': 'Suivez-nous sur Instagram',
		'hero.scroll': 'Continuez à défiler',

		'historia.eyebrow': 'Notre histoire',
		'historia.title': 'Un rêve devenu réalité depuis 2010',
		'historia.p1':
			'En 2010, nous avons ouvert "Gisela" et aujourd\'hui nous nous sommes installés aux portes de notre château pour vous inviter chez nous, prendre un bon petit-déjeuner et profiter, sans vous presser, de quelque chose de délicieux, vrai et unique.',
		'historia.p2':
			'Nous travaillons chaque jour avec des ingrédients honnêtes et, autant que possible, en circuit court : le pain de Panadería Álex, le café de spécialité de Bonarte et les infusions de La Tetera Azúl.',
		'historia.badge1': 'Le bonheur, ça se mange',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': "Alan, de l'équipe Gisela, savourant un de nos kukis",

		'especialidades.eyebrow': 'Spécialités',
		'especialidades.title': "Ce qu'il ne faut pas manquer",
		'especialidades.badge': 'Sans conservateurs',
		'especialidades.item1.title': 'Nos douceurs',
		'especialidades.item1.desc': 'Gâteaux, brownies et kukis cuits chaque jour dans notre atelier.',
		'especialidades.item1.alt': 'Sélection de verrines de dessert de Gisela Pastelería Natural',
		'especialidades.item2.title': 'À offrir',
		'especialidades.item2.desc':
			'Boîtes et paniers pour emporter un peu de Gisela partout avec vous.',
		'especialidades.item2.alt': 'Boîte de kukis de Gisela Pastelería Natural, prête à offrir',
		'especialidades.item3.title': 'Café de spécialité',
		'especialidades.item3.desc': "Mélange Bonarte, préparé comme vous l'aimez.",
		'especialidades.item3.alt':
			"Image d'exemple (temporaire, à remplacer par une vraie photo de café de spécialité)",

		'bcbTeaser.eyebrow': 'Pour les pèlerins du Chemin de Saint-Jacques',
		'bcbTeaser.title': 'BCB · Buen Camino Breakfast',
		'bcbTeaser.text':
			"Offrez un petit-déjeuner à un pèlerin : un ami, un proche, ou toute personne faisant le Chemin. Il lui suffit de passer chez Gisela Pastelería Natural et de nous donner son nom pour en profiter.",
		'bcbTeaser.cta': 'Découvrir BCB',
		'bcbTeaser.badge': 'Nous cuisinons pour vous',

		'bcbPage.title': 'BCB · Buen Camino Breakfast | Gisela Pastelería Natural',
		'bcbPage.description':
			'Offrez un petit-déjeuner à un pèlerin du Chemin de Saint-Jacques de passage à Ponferrada. Un projet de Gisela Pastelería Natural.',
		'bcbPage.poweredBy': 'Un projet de Gisela Pastelería Natural',
		'bcbPage.intro':
			"Pour tous ceux qui font le Chemin de Saint-Jacques en passant par Ponferrada : un vrai petit-déjeuner pour reprendre des forces. Offrez-le à un ami, un proche, ou toute personne en chemin — il lui suffit de passer chez Gisela et de nous donner son nom.",
		'bcbPage.badge1': 'Buen Camino',
		'bcbPage.badge2': 'Petit-déjeuner à Ponferrada',
		'bcbPage.regalar': 'Offrir',
		'bcbPage.proximamente': 'Bientôt disponible',
		'bcbPage.disclaimer':
			"Prix indicatifs, susceptibles d'être ajustés. Le petit-déjeuner se récupère dans notre boutique à Ponferrada.",

		'tier.sencillo.name': 'Simple',
		'tier.sencillo.desc': 'Café de spécialité + tartine classique.',
		'tier.completo.name': 'Complet',
		'tier.completo.desc': 'Bowl ou tartine spéciale + boisson + douceur artisanale.',
		'tier.premium.name': 'Premium',
		'tier.premium.desc': 'Sélection premium + café de spécialité + douceur artisanale.',

		'reviews.title': 'Ce que disent nos clients',
		'reviews.fallbackSubtitle': 'Avis vérifiés de Google Business Profile.',
		'reviews.countSuffix': 'avis sur Google',
		'reviews.fallbackText':
			'Vous pourrez bientôt voir ici nos vrais avis Google. En attendant, vous pouvez les consulter directement sur notre fiche établissement.',
		'reviews.verMas': 'Voir plus',
		'reviews.verTodas': 'Voir tous les avis sur Google',

		'map.visitanos': 'Venez nous voir',
		'map.cta': 'Ouvrir dans Google Maps →',
		'map.ariaLabel': 'Ouvrir la localisation de Gisela Pastelería Natural dans Google Maps',

		'footer.description':
			'Pâtisserie naturelle et artisanale, élaborée chaque jour à Ponferrada avec des ingrédients de qualité.',
		'footer.visitanos': 'Venez nous voir',
		'footer.horario': 'Horaires',
		'footer.dias': 'Du lundi au dimanche',
		'footer.rights': 'Tous droits réservés.',

		'carta.title': 'Notre carte',
		'carta.intro':
			"Tout ce que vous voyez, sentez et goûtez ici — sucré et salé — nous le préparons dans notre propre atelier, avec des ingrédients honnêtes et, autant que possible, en circuit court. Demandez à notre personnel des informations sur les allergènes.",

		'meta.home.title': 'Gisela Pastelería Natural | Pâtisserie artisanale à Ponferrada',
		'meta.home.description':
			'Pâtisserie naturelle et artisanale à Ponferrada, León. Gâteaux, douceurs et pâtisserie maison élaborés chaque jour avec des ingrédients naturels.',
		'meta.carta.title': 'Carte | Gisela Pastelería Natural',
		'meta.carta.description':
			'Découvrez la carte de Gisela Pastelería Natural : gâteaux, douceurs, petits-déjeuners et boissons élaborés chaque jour dans notre atelier à Ponferrada.',
		'meta.historia.title': 'Notre histoire | Gisela Pastelería Natural',
		'meta.historia.description':
			'Découvrez l\'histoire de Gisela Pastelería Natural, un rêve devenu réalité depuis 2010 à Ponferrada.',

		'historiaPage.location': 'Gisela Pastelería Natural · Ponferrada, León',
		'historiaPage.title': 'Une traductrice qui a choisi la <em>pâtisserie</em>',
		'historiaPage.heroSubtitle':
			"L'histoire de la façon dont trois langues sont devenues le prologue de la meilleure pâtisserie du Bierzo.",
		'historiaPage.p1':
			"Gisela est née en Allemagne et a construit une brillante carrière de traductrice assermentée en anglais, allemand et chinois. Trois langues. Trois mondes. Mais quelque chose la tirait plus fort que n'importe quel mot : son amour de la pâtisserie, né dans la cuisine de sa mère.",
		'historiaPage.p2':
			'Elle a décidé de tout quitter et a ouvert Gisela Pastelería Natural avec sa mère il y a plus de 16 ans. Depuis, elle n\'a cessé de se former aux techniques de pâtisserie du monde entier, construisant une équipe soudée qu\'elle décrit elle-même comme « un levain : mélangés, unis et pétillants d\'idées ».',
		'historiaPage.quote': "Vous voulez connaître notre ingrédient secret ? Ne pas avoir d'ingrédients secrets.",
		'historiaPage.p3':
			"Aujourd'hui, chaque pièce qui sort de son atelier est élaborée en circuit court, sans conservateurs ni additifs. Parce que le bonheur, ça se mange, et nous en avons la recette.",
		'historiaPage.reviewsLabel': 'Avis Google',
		'historiaPage.comingSoonBadge': 'Bientôt disponible',
		'historiaPage.comingSoonTitle': 'Nous préparons quelque chose de spécial pour tout vous raconter',
		'historiaPage.comingSoonText':
			"Vous trouverez ici l'histoire complète de Gisela : ses années de traductrice assermentée en anglais, allemand et chinois, le moment où elle a décidé de troquer les mots contre l'atelier, et comment, avec sa mère, elles ont construit la pâtisserie que Ponferrada mérite. Une histoire de courage, de levain et de beaucoup d'amour pour le naturel.",
		'historiaPage.backToSite': 'Retour au site',
		'historiaPage.imageAlt': 'Sélection de douceurs de Gisela Pastelería Natural'
	},
	ko: {
		'preloader.welcome': '저희 베이커리에 오신 것을 환영합니다',
		'nav.bcb': 'BCB',
		'nav.carta': '메뉴',
		'aria.openMenu': '메뉴 열기',

		'hero.badge': '폰페라다의 천연 베이커리',
		'hero.title': '천연 재료로 만든 달콤한 순간',
		'hero.subtitle':
			'지셀라 파스텔레리아 나투랄에서는 모든 케이크와 디저트를 정성껏 수제로 만들며, 재료의 원산지를 소중히 여겨 매일 진짜 맛을 즐기실 수 있도록 합니다.',
		'hero.ctaOrder': '케이크 주문하기',
		'hero.ctaInstagram': '인스타그램 팔로우',
		'hero.scroll': '아래로 스크롤',

		'historia.eyebrow': '우리의 이야기',
		'historia.title': '2010년부터 이어온 꿈',
		'historia.p1':
			'2010년, 우리는 "Gisela"를 열었고 지금은 성문 앞으로 자리를 옮겨 여러분을 저희 집으로 초대합니다. 좋은 아침 식사를 즐기고, 서두르지 않고 맛있고 진짜인, 특별한 무언가를 만끽하세요.',
		'historia.p2':
			'저희는 매일 정직한 재료로, 가능한 한 지역 재료로 작업합니다: Panadería Álex의 빵, Bonarte의 스페셜티 커피, La Tetera Azúl의 차.',
		'historia.badge1': '행복은 먹는 것',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': '지셀라 팀의 알란이 저희 쿠키를 즐기고 있는 모습',

		'especialidades.eyebrow': '스페셜 메뉴',
		'especialidades.title': '놓치면 안 될 메뉴',
		'especialidades.badge': '방부제 무첨가',
		'especialidades.item1.title': '우리의 디저트',
		'especialidades.item1.desc': '매일 저희 공방에서 갓 구운 케이크, 브라우니, 쿠키.',
		'especialidades.item1.alt': '지셀라 파스텔레리아 나투랄의 디저트 컵 모음',
		'especialidades.item2.title': '선물용',
		'especialidades.item2.desc': '어디든 지셀라의 특별함을 전할 수 있는 박스와 바구니.',
		'especialidades.item2.alt': '선물하기 좋은 지셀라 파스텔레리아 나투랄 쿠키 박스',
		'especialidades.item3.title': '스페셜티 커피',
		'especialidades.item3.desc': '보나르테 블렌드, 원하는 대로 즐기세요.',
		'especialidades.item3.alt': '예시 이미지 (임시, 추후 실제 스페셜티 커피 사진으로 교체 예정)',

		'bcbTeaser.eyebrow': '산티아고 순례길 순례자를 위해',
		'bcbTeaser.title': 'BCB · Buen Camino Breakfast',
		'bcbTeaser.text':
			'순례자에게 아침 식사를 선물하세요: 친구, 가족, 또는 카미노를 걷고 있는 누구에게나. 지셀라 파스텔레리아 나투랄에 들러 이름만 말하면 됩니다.',
		'bcbTeaser.cta': 'BCB 알아보기',
		'bcbTeaser.badge': '당신을 위해 굽습니다',

		'bcbPage.title': 'BCB · Buen Camino Breakfast | Gisela Pastelería Natural',
		'bcbPage.description':
			'폰페라다를 지나는 산티아고 순례길 순례자에게 아침 식사를 선물하세요. Gisela Pastelería Natural의 프로젝트입니다.',
		'bcbPage.poweredBy': 'Gisela Pastelería Natural의 프로젝트',
		'bcbPage.intro':
			'폰페라다를 지나는 산티아고 순례길을 걷는 모든 이들을 위해: 진짜 힘을 채워주는 아침 식사. 친구, 가족, 또는 길 위의 누군가에게 선물하세요 — 지셀라에 들러 이름만 말하면 됩니다.',
		'bcbPage.badge1': 'Buen Camino',
		'bcbPage.badge2': '폰페라다에서의 아침 식사',
		'bcbPage.regalar': '선물하기',
		'bcbPage.proximamente': '출시 예정',
		'bcbPage.disclaimer': '가격은 참고용이며 조정될 수 있습니다. 아침 식사는 폰페라다 매장에서 수령합니다.',

		'tier.sencillo.name': '심플',
		'tier.sencillo.desc': '스페셜티 커피 + 클래식 토스트.',
		'tier.completo.name': '컴플리트',
		'tier.completo.desc': '보울 또는 스페셜 토스트 + 음료 + 수제 디저트.',
		'tier.premium.name': '프리미엄',
		'tier.premium.desc': '프리미엄 셀렉션 + 스페셜티 커피 + 수제 디저트.',

		'reviews.title': '고객들의 후기',
		'reviews.fallbackSubtitle': 'Google 비즈니스 프로필의 인증된 리뷰.',
		'reviews.countSuffix': '개의 구글 리뷰',
		'reviews.fallbackText':
			'곧 이곳에서 실제 구글 리뷰를 보실 수 있습니다. 그동안 저희 비즈니스 프로필에서 바로 확인하실 수 있습니다.',
		'reviews.verMas': '더 보기',
		'reviews.verTodas': '구글에서 모든 리뷰 보기',

		'map.visitanos': '방문해 주세요',
		'map.cta': '구글 지도에서 열기 →',
		'map.ariaLabel': '구글 지도에서 Gisela Pastelería Natural 위치 열기',

		'footer.description': '폰페라다에서 매일 신선하게 만드는 천연 수제 베이커리, 좋은 재료로 만듭니다.',
		'footer.visitanos': '오시는 길',
		'footer.horario': '영업시간',
		'footer.dias': '월요일 - 일요일',
		'footer.rights': '모든 권리 보유.',

		'carta.title': '메뉴판',
		'carta.intro':
			'이곳에서 보고, 향을 맡고, 맛보는 모든 것 — 달콤한 것과 짭짤한 것 모두 — 저희 공방에서 정직한 재료로, 가능한 한 지역 재료로 직접 만듭니다. 알레르기 정보는 저희 직원에게 문의해 주세요.',

		'meta.home.title': 'Gisela Pastelería Natural | 폰페라다의 수제 베이커리',
		'meta.home.description':
			'스페인 폰페라다, 레온의 천연 수제 베이커리. 매일 천연 재료로 만드는 케이크, 디저트, 홈메이드 페이스트리.',
		'meta.carta.title': '메뉴 | Gisela Pastelería Natural',
		'meta.carta.description':
			'Gisela Pastelería Natural의 메뉴를 확인하세요: 폰페라다 공방에서 매일 만드는 케이크, 디저트, 아침 식사, 음료.',
		'meta.historia.title': '우리의 이야기 | Gisela Pastelería Natural',
		'meta.historia.description': '2010년부터 폰페라다에서 이어온 Gisela Pastelería Natural의 이야기를 만나보세요.',

		'historiaPage.location': 'Gisela Pastelería Natural · 폰페라다, 레온',
		'historiaPage.title': '<em>제과</em>를 선택한 번역가',
		'historiaPage.heroSubtitle': '세 가지 언어가 비에르소 최고의 파스텔레리아의 서막이 된 이야기.',
		'historiaPage.p1':
			'지셀라는 독일에서 태어나 영어, 독일어, 중국어 공인 번역가로 눈부신 경력을 쌓았습니다. 세 가지 언어. 세 개의 세계. 하지만 그 어떤 단어보다 강하게 그녀를 끌어당긴 것이 있었습니다: 어머니의 부엌에서 시작된 제과에 대한 사랑이었습니다.',
		'historiaPage.p2':
			'그녀는 모든 것을 내려놓고 16년 전 어머니와 함께 Gisela Pastelería Natural을 열었습니다. 그 이후로 전 세계의 제과 기술을 끊임없이 배우며, 스스로 "섞이고, 하나가 되고, 아이디어로 보글보글 끓어오르는 사워도우 반죽" 같다고 표현하는 끈끈한 팀을 만들어왔습니다.',
		'historiaPage.quote': '저희의 비밀 재료가 뭔지 아세요? 비밀 재료가 없다는 것입니다.',
		'historiaPage.p3':
			'오늘날 그녀의 공방에서 나오는 모든 제품은 방부제나 첨가물 없이 지역 재료로 만들어집니다. 행복은 먹는 것이니까요, 그리고 저희에게 그 레시피가 있습니다.',
		'historiaPage.reviewsLabel': '구글 리뷰',
		'historiaPage.comingSoonBadge': '출시 예정',
		'historiaPage.comingSoonTitle': '모든 것을 들려드릴 특별한 것을 준비하고 있습니다',
		'historiaPage.comingSoonText':
			'이곳에서 지셀라의 완전한 이야기를 만나보실 수 있습니다: 영어, 독일어, 중국어 공인 번역가로서의 시간들, 말 대신 공방을 선택한 순간, 그리고 어머니와 함께 폰페라다가 마땅히 누려야 할 파스텔레리아를 만들어간 과정까지. 용기와 사워도우, 그리고 천연 재료에 대한 깊은 사랑이 담긴 이야기입니다.',
		'historiaPage.backToSite': '웹사이트로 돌아가기',
		'historiaPage.imageAlt': 'Gisela Pastelería Natural의 디저트 모음'
	},
	zh: {
		'preloader.welcome': '欢迎光临我们的烘焙坊',
		'nav.bcb': 'BCB',
		'nav.carta': '菜单',
		'aria.openMenu': '打开菜单',

		'hero.badge': '蓬费拉达天然烘焙坊',
		'hero.title': '用天然食材制作的甜蜜时光',
		'hero.subtitle':
			'在Gisela天然烘焙坊，我们手工制作每一块蛋糕和每一款甜点，用心挑选食材产地，让您每天都能品尝到最地道的味道。',
		'hero.ctaOrder': '预定你的蛋糕',
		'hero.ctaInstagram': '关注我们的Instagram',
		'hero.scroll': '继续向下滑动',

		'historia.eyebrow': '我们的故事',
		'historia.title': '自2010年起梦想成真',
		'historia.p1':
			'2010年我们开设了"Gisela"，如今我们搬到了城堡门前，邀请您走进我们的家，享用一顿美味的早餐，不慌不忙地品味真实而独特的美味。',
		'historia.p2':
			'我们每天都用诚实的食材工作，并尽可能选用本地食材：来自Panadería Álex的面包、Bonarte的精品咖啡，以及La Tetera Azúl的花草茶。',
		'historia.badge1': '幸福是可以吃的',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Gisela团队的Alan正在享用我们的曲奇',

		'especialidades.eyebrow': '特色推荐',
		'especialidades.title': '不容错过的美味',
		'especialidades.badge': '无防腐剂',
		'especialidades.item1.title': '我们的甜点',
		'especialidades.item1.desc': '每天在我们的烘焙工坊新鲜出炉的蛋糕、布朗尼和曲奇。',
		'especialidades.item1.alt': 'Gisela天然烘焙坊的甜点杯精选',
		'especialidades.item2.title': '送礼佳选',
		'especialidades.item2.desc': '精美礼盒和礼篮，将Gisela的美味带到任何地方。',
		'especialidades.item2.alt': '适合送礼的Gisela天然烘焙坊曲奇礼盒',
		'especialidades.item3.title': '精品咖啡',
		'especialidades.item3.desc': 'Bonarte拼配咖啡，按您喜欢的方式冲泡。',
		'especialidades.item3.alt': '示例图片（占位图，稍后将替换为真实的精品咖啡照片）',

		'bcbTeaser.eyebrow': '为圣地亚哥朝圣者',
		'bcbTeaser.title': 'BCB · Buen Camino Breakfast',
		'bcbTeaser.text':
			'为朝圣者赠送一份早餐：朋友、家人，或任何正在走朝圣之路的人。他们只需到Gisela天然烘焙坊报上姓名即可享用。',
		'bcbTeaser.cta': '了解 BCB',
		'bcbTeaser.badge': '为你烘焙',

		'bcbPage.title': 'BCB · Buen Camino Breakfast | Gisela Pastelería Natural',
		'bcbPage.description':
			'为途经蓬费拉达的圣地亚哥朝圣者赠送一份早餐。Gisela天然烘焙坊出品。',
		'bcbPage.poweredBy': 'Gisela天然烘焙坊出品',
		'bcbPage.intro':
			'献给所有途经蓬费拉达的圣地亚哥朝圣之路行者：一份真正能补充体力的早餐。将它送给朋友、家人，或任何正在路上的人——他们只需到Gisela报上姓名即可。',
		'bcbPage.badge1': 'Buen Camino',
		'bcbPage.badge2': '蓬费拉达的早餐',
		'bcbPage.regalar': '赠送',
		'bcbPage.proximamente': '即将推出',
		'bcbPage.disclaimer': '价格仅供参考，可能会调整。早餐需在我们蓬费拉达的门店领取。',

		'tier.sencillo.name': '简单款',
		'tier.sencillo.desc': '精品咖啡+经典吐司。',
		'tier.completo.name': '完整款',
		'tier.completo.desc': '碗餐或特色吐司+饮品+手工甜点。',
		'tier.premium.name': '高级款',
		'tier.premium.desc': '高级精选+精品咖啡+手工甜点。',

		'reviews.title': '顾客评价',
		'reviews.fallbackSubtitle': '来自Google商家资料的认证评价。',
		'reviews.countSuffix': '条谷歌评价',
		'reviews.fallbackText': '很快您将能在这里看到我们真实的谷歌评价。同时，您可以直接在我们的商家资料中查看。',
		'reviews.verMas': '查看更多',
		'reviews.verTodas': '在谷歌查看全部评价',

		'map.visitanos': '欢迎光临',
		'map.cta': '在谷歌地图中打开 →',
		'map.ariaLabel': '在谷歌地图中打开Gisela天然烘焙坊的位置',

		'footer.description': '天然手工烘焙坊，每天在蓬费拉达用优质食材新鲜制作。',
		'footer.visitanos': '门店地址',
		'footer.horario': '营业时间',
		'footer.dias': '周一至周日',
		'footer.rights': '版权所有。',

		'carta.title': '我们的菜单',
		'carta.intro':
			'您在这里看到、闻到和品尝到的一切——无论甜点还是咸食——都是我们在自己的烘焙工坊制作的，使用诚实的食材，并尽可能选用本地食材。请向我们的员工咨询过敏原信息。',

		'meta.home.title': 'Gisela Pastelería Natural | 蓬费拉达手工烘焙坊',
		'meta.home.description':
			'西班牙莱昂省蓬费拉达的天然手工烘焙坊。每天用天然食材制作的蛋糕、甜点和自制糕点。',
		'meta.carta.title': '菜单 | Gisela Pastelería Natural',
		'meta.carta.description':
			'查看Gisela天然烘焙坊的菜单：每天在蓬费拉达工坊制作的蛋糕、甜点、早餐和饮品。',
		'meta.historia.title': '我们的故事 | Gisela Pastelería Natural',
		'meta.historia.description': '了解Gisela天然烘焙坊的故事，自2010年起在蓬费拉达梦想成真。',

		'historiaPage.location': 'Gisela Pastelería Natural · 蓬费拉达，莱昂',
		'historiaPage.title': '选择了<em>甜点</em>的翻译官',
		'historiaPage.heroSubtitle': '三种语言如何成为比耶尔索最好烘焙坊序章的故事。',
		'historiaPage.p1':
			'Gisela出生于德国，曾是一名出色的英语、德语和中文认证翻译官，事业辉煌。三种语言，三个世界。但有一样东西比任何言语都更强烈地牵引着她：她对甜点的热爱，这份热爱源于母亲的厨房。',
		'historiaPage.p2':
			'她决定放下一切，16多年前与母亲一起开设了Gisela天然烘焙坊。从那以后，她不断学习世界各地的烘焙技艺，打造了一支她形容为"像酸种面团一样：融合、团结、充满创意"的团队。',
		'historiaPage.quote': '想知道我们的秘密食材是什么吗？就是没有秘密食材。',
		'historiaPage.p3':
			'如今，从她的工坊出品的每一件甜点都采用本地食材制作，不含防腐剂和添加剂。因为幸福是可以吃的，而我们拥有这个配方。',
		'historiaPage.reviewsLabel': '谷歌评价',
		'historiaPage.comingSoonBadge': '即将推出',
		'historiaPage.comingSoonTitle': '我们正在准备一些特别的内容，即将全部呈现给您',
		'historiaPage.comingSoonText':
			'在这里，您将了解Gisela的完整故事：她作为英语、德语和中文认证翻译官的岁月，她决定放下文字、投身烘焙坊的那一刻，以及她与母亲如何共同打造出蓬费拉达应得的这家烘焙坊。这是一段关于勇气、酸种面团和对天然食材深深热爱的故事。',
		'historiaPage.backToSite': '返回网站',
		'historiaPage.imageAlt': 'Gisela天然烘焙坊的甜点精选'
	}
};
