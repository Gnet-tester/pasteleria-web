export const locales = ['es', 'en', 'de', 'fr', 'pt', 'it', 'ko', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
	es: 'Español',
	en: 'English',
	de: 'Deutsch',
	fr: 'Français',
	pt: 'Português',
	it: 'Italiano',
	ko: '한국어',
	zh: '中文'
};

export const ui: Record<Locale, Record<string, string>> = {
	es: {
		'nav.bcb': 'BCB',
		'nav.carta': 'Carta',
		'aria.openMenu': 'Abrir menú',

		'hero.badge1': 'Obrador familiar',
		'hero.badge2': 'Honestamente natural',
		'hero.title': 'La felicidad se come y tenemos la receta',
		'hero.subtitle':
			'En Gisela Pastelería Natural elaboramos cada tarta y cada dulce de forma artesanal, cuidando el origen de nuestros ingredientes para que disfrutes de un sabor auténtico, día a día.',
		'hero.imageAlt': 'Tarta de manzana artesanal de Gisela Pastelería Natural',
		'hero.ctaOrder': 'Encarga tu tarta',
		'hero.ctaInstagram': 'Síguenos en Instagram',
		'hero.scroll': 'Sigue bajando',

		'historia.eyebrow': 'Nuestra historia',
		'historia.title': 'Un sueño hecho realidad desde 2010',
		'historia.p1':
			'En 2010 abrimos "Gisela" y ya hace más de un año que nos trasladamos a las puertas de nuestro castillo para invitarte a nuestra casa, tomarte un buen desayuno y disfrutar sin prisas de algo rico, real y único.',
		'historia.p2':
			'Trabajamos cada día con ingredientes honestos y, siempre que podemos, de kilómetro cero: pan de Panadería Álex, café de especialidad Bonarte y las infusiones de La Tetera Azúl.',
		'historia.badge1': 'La felicidad se come',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Alan, del equipo de Gisela, disfrutando de una de nuestras kukis',

		'especialidades.eyebrow': 'Especialidades',
		'especialidades.title': 'Lo que no te puedes perder',
		'especialidades.badge': 'Sin conservantes',
		'especialidades.item1.title': 'Desayunos',
		'especialidades.item1.desc':
			'Empieza el día con un desayuno completo y recién hecho, con nuestro pan y dulces de cada mañana.',
		'especialidades.item1.alt': 'Desayuno de Gisela Pastelería Natural con tarta y fruta fresca',
		'especialidades.item2.title': 'Catering para empresas',
		'especialidades.item2.desc':
			'Dulces y salados para reuniones, eventos y celebraciones de empresa, preparados a tu medida.',
		'especialidades.item2.alt': 'Selección de dulces de Gisela Pastelería Natural para catering de empresas',
		'especialidades.item3.title': 'Tartas personalizadas',
		'especialidades.item3.desc':
			'Elige el tamaño, el sabor y la decoración — cada tarta se hace a tu gusto.',
		'especialidades.item3.alt': 'Tarta de manzana personalizada de Gisela Pastelería Natural',

		'especialidadesPage.intro':
			'Desde desayunos recién hechos hasta catering para tu empresa y tartas a tu medida: esto es lo que no te puedes perder cuando nos visites.',
		'especialidadesPage.ctaTitle': '¿Te apetece ver toda la carta?',
		'especialidadesPage.ctaText':
			'Descubre todos nuestros dulces, tartas y salados en nuestra carta completa.',

		'nav.encargaTuTarta': 'Encarga tu tarta',
		'meta.encargaTuTarta.title': 'Encarga tu tarta | Gisela Pastelería Natural',
		'meta.encargaTuTarta.description':
			'Descubre cómo son nuestras tartas personalizadas antes de contarnos cómo la quieres, en Gisela Pastelería Natural, Ponferrada.',
		'encargaTuTartaPage.eyebrow': 'En la pastelería',
		'encargaTuTartaPage.title': 'Encarga tu tarta',
		'encargaTuTartaPage.subtitle':
			'Esta página es una guía para que veas cómo son nuestras tartas antes de contárnoslo en persona — no encargamos tartas por internet, ven a contarnos tu tarta ideal a la pastelería.',
		'encargaTuTartaPage.diagram.bizcocho': 'Bizcocho',
		'encargaTuTartaPage.diagram.mousse': 'Mousse',
		'encargaTuTartaPage.diagram.decoracion': 'Decoración',
		'encargaTuTartaPage.sizesTitle': 'Elige el tamaño',
		'encargaTuTartaPage.sizesIntro': 'Todas nuestras tartas se hacen por raciones pares.',
		'encargaTuTartaPage.sizeUnit': 'personas',
		'encargaTuTartaPage.sizesMore':
			'Y tamaños mayores también, siempre en raciones pares — solo tienes que decírnoslo.',
		'encargaTuTartaPage.flavorsTitle': 'Elige tu sabor',
		'encargaTuTartaPage.flavorsNote':
			'Normalmente se eligen dos sabores, salvo en las tartas de sabor tradicional.',
		'encargaTuTartaPage.flavorsCategory.mousse': 'Mousse de frutas naturales',
		'encargaTuTartaPage.flavorsCategory.chocolate': 'Chocolate',
		'encargaTuTartaPage.flavorsCategory.galletas': 'Galletas',
		'encargaTuTartaPage.flavorsCategory.frutosSecos': 'Frutos secos',
		'encargaTuTartaPage.flavorsCategory.clasicos': 'Clásicos',
		'encargaTuTartaPage.traditionalTitle': 'Sabores para tartas tradicionales',

		'encargaTuTartaPage.philosophyTitle': 'Nuestras tartas',
		'encargaTuTartaPage.philosophy1.title': 'Tartas altas',
		'encargaTuTartaPage.philosophy1.desc':
			'Con varias capas de bizcocho y mousse, para que cada porción tenga presencia real.',
		'encargaTuTartaPage.philosophy2.title': 'Mousses naturales',
		'encargaTuTartaPage.philosophy2.desc': 'Rellenamos con mousse de verdad, con el sabor que elijas.',
		'encargaTuTartaPage.philosophy3.title': 'Cobertura de nata o trufa',
		'encargaTuTartaPage.philosophy3.desc':
			'Cubrimos con nata montada o trufa de chocolate, nunca con fondant.',
		'encargaTuTartaPage.philosophy4.title': 'Nada de fondant',
		'encargaTuTartaPage.philosophy4.desc':
			'El fondant, al final, no deja de ser una pasta de azúcar con colorante. Preferimos que disfrutes tu tarta entera, sin que sobre nada.',
		'encargaTuTartaPage.philosophy5.title': 'Sabor y decoración a tu gusto',
		'encargaTuTartaPage.philosophy5.desc':
			'Tú eliges el relleno y cómo la quieres decorar — cada tarta es distinta porque cada cliente lo es.',
		'encargaTuTartaPage.closingText':
			'Ven a la pastelería y cuéntanos cómo la quieres — entre los dos le damos forma.',

		'servicesGrid.title': 'Todo lo que Gisela puede hacer por ti',
		'servicesGrid.subtitle':
			'Desde el desayuno de tu equipo hasta la tarta de tus sueños — descubre todo lo que preparamos para ti.',
		'servicesGrid.empresas.title': 'Para empresas',
		'servicesGrid.empresas.tagline': 'Desayunos, catering y detalles corporativos',
		'servicesGrid.empresas.alt': 'Cajas de dulces de Gisela Pastelería Natural preparadas para empresas',
		'servicesGrid.horno.title': 'Desayunos y cestas personalizados',
		'servicesGrid.horno.tagline': 'Del horno a tu casa, cuando tú quieras',
		'servicesGrid.horno.alt': 'Desayuno artesanal de Gisela Pastelería Natural listo para llevar a casa',
		'servicesGrid.tartas.title': 'Tartas personalizadas',
		'servicesGrid.tartas.tagline': 'El tamaño, el sabor y la decoración, a tu gusto',
		'servicesGrid.tartas.alt': 'Tarta personalizada de Gisela Pastelería Natural',
		'servicesGrid.mesasDulces.title': 'Mesas dulces para tus eventos',
		'servicesGrid.mesasDulces.tagline': 'Bodas, comuniones y celebraciones a tu medida',
		'servicesGrid.mesasDulces.alt': 'Mesa dulce decorada de Gisela Pastelería Natural',

		'meta.paraEmpresas.title': 'Gisela para empresas | Gisela Pastelería Natural',
		'meta.paraEmpresas.description':
			'Desayunos de trabajo, catering para eventos y detalles corporativos con el sabor artesanal de Gisela Pastelería Natural, en Ponferrada.',
		'paraEmpresasPage.eyebrow': 'Para empresas',
		'paraEmpresasPage.title': 'Gisela para empresas',
		'paraEmpresasPage.subtitle':
			'Desayunos de trabajo, catering para eventos y detalles corporativos, con el sabor artesanal de siempre — para que tu empresa también disfrute de Gisela.',
		'paraEmpresasPage.item1.title': 'Desayunos de trabajo',
		'paraEmpresasPage.item1.desc':
			'Bandejas de dulces y salados recién hechos para empezar bien las reuniones de tu equipo.',
		'paraEmpresasPage.item2.title': 'Catering para eventos',
		'paraEmpresasPage.item2.desc':
			'Propuestas dulces y saladas a medida para presentaciones, formaciones o celebraciones de empresa.',
		'paraEmpresasPage.item3.title': 'Detalles corporativos',
		'paraEmpresasPage.item3.desc':
			'Cajas y cestas personalizables para regalar a clientes, proveedores o a tu propio equipo.',
		'paraEmpresasPage.item4.title': 'Facturación para empresas',
		'paraEmpresasPage.item4.desc': 'Pedidos con factura, para que la gestión con tu empresa sea sencilla.',
		'paraEmpresasPage.ctaTitle': '¿Hablamos de tu próximo evento?',
		'paraEmpresasPage.ctaText':
			'Cuéntanos qué necesitas y lo preparamos juntos — escríbenos o pásate por la pastelería.',
		'paraEmpresasPage.ctaEmail': 'Escríbenos',
		'paraEmpresasPage.ctaCall': 'Llámanos',
		'paraEmpresasPage.cateringTitle': 'Catering salado',
		'paraEmpresasPage.cateringText':
			'Para tus reuniones, coffee breaks y eventos de empresa: bocados salados variados, listos para compartir.',
		'paraEmpresasPage.cateringAlt1': 'Tostas variadas de aguacate, tomate y queso para catering de empresa',
		'paraEmpresasPage.cateringAlt2':
			'Selección de empanadillas, croissants rellenos y mini bocadillos para catering',

		'meta.delHorno.title': 'Del horno a tu casa | Gisela Pastelería Natural',
		'meta.delHorno.description':
			'Desayunos y cestas personalizadas de Gisela Pastelería Natural, recién horneados y listos para llevar a tu casa.',
		'delHornoPage.eyebrow': 'A domicilio',
		'delHornoPage.title': 'Del horno a tu casa',
		'delHornoPage.subtitle':
			'Desayunos y cestas personalizadas, recién horneados y listos para sorprender allá donde estés.',
		'delHornoPage.item1.title': 'Desayunos a domicilio',
		'delHornoPage.item1.desc':
			'Elige entre nuestras propuestas de desayuno y te lo llevamos calentito a primera hora.',
		'delHornoPage.item2.title': 'Cestas personalizadas',
		'delHornoPage.item2.desc':
			'Combina dulces, salados y bebidas para crear una cesta a tu gusto — perfecta para regalar.',
		'delHornoPage.item3.title': 'Ocasiones especiales',
		'delHornoPage.item3.desc': 'Cumpleaños, aniversarios o un día cualquiera que merece un detalle dulce.',
		'delHornoPage.item4.title': 'Cómo pedir',
		'delHornoPage.item4.desc':
			'Escríbenos con la fecha y lo que te apetece, y nosotros nos encargamos del resto.',
		'delHornoPage.ctaTitle': '¿Te preparamos tu cesta?',
		'delHornoPage.ctaText':
			'Cuéntanos la ocasión y lo que te apetece — escríbenos o pásate por la pastelería.',
		'delHornoPage.ctaEmail': 'Escríbenos',
		'delHornoPage.ctaCall': 'Llámanos',

		'meta.mesasDulces.title': 'Mesas dulces para eventos | Gisela Pastelería Natural',
		'meta.mesasDulces.description':
			'Mesas dulces personalizadas y tartas de boda para tus celebraciones: bodas, comuniones, cumpleaños y eventos de empresa.',

		'mesasDulcesPage.eyebrow': 'Para tus eventos',
		'mesasDulcesPage.title': 'Mesas dulces que enamoran',
		'mesasDulcesPage.subtitle':
			'Bodas, comuniones, cumpleaños y celebraciones de empresa — creamos mesas dulces a medida, con el estilo y los sabores de Gisela.',
		'mesasDulcesPage.item1.title': 'Mesas dulces personalizadas',
		'mesasDulcesPage.item1.desc':
			'Diseñamos la selección de dulces según la temática, los colores y el número de invitados de tu evento.',
		'mesasDulcesPage.item2.title': 'Tartas de boda y celebración',
		'mesasDulcesPage.item2.desc': 'Tartas a medida para el gran día, con el sabor y el estilo que imaginas.',
		'mesasDulcesPage.item3.title': 'Detalles para invitados',
		'mesasDulcesPage.item3.desc':
			'Cajitas y dulces individuales para que tus invitados se lleven un recuerdo delicioso.',
		'mesasDulcesPage.item4.title': 'Asesoramiento y montaje',
		'mesasDulcesPage.item4.desc':
			'Te acompañamos desde el primer boceto hasta el montaje el día del evento.',
		'mesasDulcesPage.galleryTitle': 'Personalízala a tu gusto',
		'mesasDulcesPage.gallerySubtitle':
			'Ven a la pastelería y hablamos contigo en persona para concretar cada detalle.',
		'mesasDulcesPage.gallery.alt1': 'Mesa dulce decorada con macarons, cupcakes y flores',
		'mesasDulcesPage.gallery.alt2': 'Porción de tarta individual decorada',
		'mesasDulcesPage.gallery.alt3': 'Tarta de manzana artesanal de Gisela',
		'mesasDulcesPage.gallery.alt4': 'Selección de postres de Gisela Pastelería Natural',
		'mesasDulcesPage.ctaTitle': '¿Tienes un evento en mente?',
		'mesasDulcesPage.ctaText':
			'Cuéntanos la fecha, el estilo y el número de invitados, y diseñamos juntos tu mesa dulce perfecta.',
		'mesasDulcesPage.ctaEmail': 'Escríbenos',
		'mesasDulcesPage.ctaCall': 'Llamar ahora',

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
		'footer.designedBy': 'Diseñada por',

		'carta.title': 'Nuestra carta',
		'carta.intro':
			'Todo lo que ves, hueles y saboreas aquí —dulce y salado— lo elaboramos en nuestro propio obrador, con ingredientes honestos y, siempre que podemos, de kilómetro cero. Consulta a nuestro personal para información sobre alérgenos.',

		'meta.home.title': 'Gisela Pastelería Natural | Pastelería artesanal en Ponferrada',
		'meta.home.description':
			'Pastelería natural y artesanal en Ponferrada, León. Tartas, dulces y repostería casera elaborados cada día con ingredientes naturales.',
		'meta.carta.title': 'Carta | Gisela Pastelería Natural',
		'meta.carta.description':
			'Consulta la carta de Gisela Pastelería Natural: tartas, dulces, desayunos y bebidas elaborados a diario en nuestro obrador de Ponferrada.',
		'meta.especialidades.title': 'Especialidades | Gisela Pastelería Natural',
		'meta.especialidades.description':
			'Descubre nuestros dulces artesanales, cajas para regalar y café de especialidad en Gisela Pastelería Natural, Ponferrada.',
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
		'nav.bcb': 'BCB',
		'nav.carta': 'Menu',
		'aria.openMenu': 'Open menu',

		'hero.badge1': 'Family-run bakery',
		'hero.badge2': 'Honestly natural',
		'hero.title': 'Happiness can be eaten, and we have the recipe',
		'hero.imageAlt': "Gisela Pastelería Natural's handmade apple cake",
		'hero.subtitle':
			'At Gisela Pastelería Natural we handcraft every cake and every sweet, taking care with the origin of our ingredients so you can enjoy an authentic flavour, every day.',
		'hero.ctaOrder': 'Order your cake',
		'hero.ctaInstagram': 'Follow us on Instagram',
		'hero.scroll': 'Keep scrolling',

		'historia.eyebrow': 'Our story',
		'historia.title': 'A dream come true since 2010',
		'historia.p1':
			'In 2010 we opened "Gisela" and it\'s now been over a year since we moved to the gates of our castle, to invite you into our home, enjoy a good breakfast and, without rushing, something delicious, real and unique.',
		'historia.p2':
			'We work every day with honest ingredients and, whenever we can, zero-kilometre ones: bread from Panadería Álex, speciality coffee from Bonarte, and infusions from La Tetera Azúl.',
		'historia.badge1': 'Happiness is edible',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Alan, from the Gisela team, enjoying one of our kukis',

		'especialidades.eyebrow': 'Specialities',
		'especialidades.title': "What you can't miss",
		'especialidades.badge': 'No preservatives',
		'especialidades.item1.title': 'Breakfasts',
		'especialidades.item1.desc':
			'Start the day with a full, freshly made breakfast, with our bread and morning sweets.',
		'especialidades.item1.alt': 'Breakfast at Gisela Pastelería Natural with cake and fresh fruit',
		'especialidades.item2.title': 'Corporate catering',
		'especialidades.item2.desc':
			'Sweet and savoury treats for meetings, events and company celebrations, made to your needs.',
		'especialidades.item2.alt': 'Selection of treats from Gisela Pastelería Natural for corporate catering',
		'especialidades.item3.title': 'Custom cakes',
		'especialidades.item3.desc': 'Choose the size, the flavour and the decoration — every cake is made your way.',
		'especialidades.item3.alt': 'Custom apple cake from Gisela Pastelería Natural',

		'especialidadesPage.intro':
			"From freshly made breakfasts to corporate catering and cakes made to order: this is what you can't miss when you visit us.",
		'especialidadesPage.ctaTitle': 'Want to see the full menu?',
		'especialidadesPage.ctaText':
			'Discover all our sweets, cakes and savoury treats in our full menu.',

		'nav.encargaTuTarta': 'Order your cake',
		'meta.encargaTuTarta.title': 'Order your cake | Gisela Pastelería Natural',
		'meta.encargaTuTarta.description':
			"See what our custom cakes look like before telling us how you'd like yours at Gisela Pastelería Natural, Ponferrada.",
		'encargaTuTartaPage.eyebrow': 'At the bakery',
		'encargaTuTartaPage.title': 'Order your cake',
		'encargaTuTartaPage.subtitle':
			"This page is a guide to see what our cakes are like before you tell us in person — we don't take cake orders online, come tell us your ideal cake at the bakery.",
		'encargaTuTartaPage.diagram.bizcocho': 'Sponge cake',
		'encargaTuTartaPage.diagram.mousse': 'Mousse',
		'encargaTuTartaPage.diagram.decoracion': 'Decoration',
		'encargaTuTartaPage.sizesTitle': 'Choose the size',
		'encargaTuTartaPage.sizesIntro': 'All our cakes are made in even serving sizes.',
		'encargaTuTartaPage.sizeUnit': 'people',
		'encargaTuTartaPage.sizesMore': 'And larger sizes too, always in even numbers — just tell us.',
		'encargaTuTartaPage.flavorsTitle': 'Choose your flavour',
		'encargaTuTartaPage.flavorsNote':
			'Two flavours are usually chosen, except for our traditional-flavour cakes.',
		'encargaTuTartaPage.flavorsCategory.mousse': 'Natural fruit mousse',
		'encargaTuTartaPage.flavorsCategory.chocolate': 'Chocolate',
		'encargaTuTartaPage.flavorsCategory.galletas': 'Cookies',
		'encargaTuTartaPage.flavorsCategory.frutosSecos': 'Nuts',
		'encargaTuTartaPage.flavorsCategory.clasicos': 'Classics',
		'encargaTuTartaPage.traditionalTitle': 'Traditional cake flavours',

		'encargaTuTartaPage.philosophyTitle': 'Our cakes',
		'encargaTuTartaPage.philosophy1.title': 'Tall cakes',
		'encargaTuTartaPage.philosophy1.desc':
			'Several layers of sponge and mousse, so every slice has real presence.',
		'encargaTuTartaPage.philosophy2.title': 'Natural mousses',
		'encargaTuTartaPage.philosophy2.desc': 'Filled with real mousse, made with the flavour you choose.',
		'encargaTuTartaPage.philosophy3.title': 'Cream or truffle coating',
		'encargaTuTartaPage.philosophy3.desc':
			'Covered in whipped cream or chocolate truffle, never fondant.',
		'encargaTuTartaPage.philosophy4.title': 'No fondant',
		'encargaTuTartaPage.philosophy4.desc':
			"Fondant is, in the end, sugar paste with colouring. We'd rather you enjoy your whole cake, with nothing left over.",
		'encargaTuTartaPage.philosophy5.title': 'Flavour and decoration, your way',
		'encargaTuTartaPage.philosophy5.desc':
			'You choose the filling and how you want it decorated — every cake is different because every customer is.',
		'encargaTuTartaPage.closingText':
			"Come to the bakery and tell us how you want it — together we'll shape it.",

		'servicesGrid.title': 'Everything Gisela Can Do For You',
		'servicesGrid.subtitle':
			"From your team's breakfast to the cake of your dreams — discover everything we prepare for you.",
		'servicesGrid.empresas.title': 'For businesses',
		'servicesGrid.empresas.tagline': 'Breakfasts, catering and corporate gifts',
		'servicesGrid.empresas.alt': 'Boxes of sweets from Gisela Pastelería Natural prepared for businesses',
		'servicesGrid.horno.title': 'Breakfasts & custom baskets',
		'servicesGrid.horno.tagline': 'From our oven to your door, whenever you like',
		'servicesGrid.horno.alt': 'Handmade breakfast from Gisela Pastelería Natural ready to take home',
		'servicesGrid.tartas.title': 'Custom cakes',
		'servicesGrid.tartas.tagline': 'The size, the flavour and the decoration, your way',
		'servicesGrid.tartas.alt': 'Custom cake from Gisela Pastelería Natural',
		'servicesGrid.mesasDulces.title': 'Sweet tables for your events',
		'servicesGrid.mesasDulces.tagline': 'Weddings, communions and celebrations, your way',
		'servicesGrid.mesasDulces.alt': 'Decorated sweet table from Gisela Pastelería Natural',

		'meta.paraEmpresas.title': 'Gisela for businesses | Gisela Pastelería Natural',
		'meta.paraEmpresas.description':
			'Work breakfasts, event catering and corporate gifts with the handmade taste of Gisela Pastelería Natural, in Ponferrada.',
		'paraEmpresasPage.eyebrow': 'For businesses',
		'paraEmpresasPage.title': 'Gisela for businesses',
		'paraEmpresasPage.subtitle':
			'Work breakfasts, event catering and corporate gifts, with the same handmade taste — so your business can enjoy Gisela too.',
		'paraEmpresasPage.item1.title': 'Work breakfasts',
		'paraEmpresasPage.item1.desc':
			'Trays of freshly made sweet and savoury treats to kick off your team meetings.',
		'paraEmpresasPage.item2.title': 'Event catering',
		'paraEmpresasPage.item2.desc':
			'Sweet and savoury spreads tailored for presentations, training sessions or company celebrations.',
		'paraEmpresasPage.item3.title': 'Corporate gifts',
		'paraEmpresasPage.item3.desc':
			'Customisable boxes and baskets to gift to clients, suppliers or your own team.',
		'paraEmpresasPage.item4.title': 'Invoicing for businesses',
		'paraEmpresasPage.item4.desc': 'Orders with an invoice, so managing it with your company is easy.',
		'paraEmpresasPage.ctaTitle': 'Shall we talk about your next event?',
		'paraEmpresasPage.ctaText':
			"Tell us what you need and we'll prepare it together — write to us or drop by the bakery.",
		'paraEmpresasPage.ctaEmail': 'Email us',
		'paraEmpresasPage.ctaCall': 'Call us',
		'paraEmpresasPage.cateringTitle': 'Savoury catering',
		'paraEmpresasPage.cateringText':
			'For your meetings, coffee breaks and company events: a varied selection of savoury bites, ready to share.',
		'paraEmpresasPage.cateringAlt1': 'Assorted avocado, tomato and cheese toasts for corporate catering',
		'paraEmpresasPage.cateringAlt2': 'Selection of pastries, filled croissants and mini sandwiches for catering',

		'meta.delHorno.title': 'From our oven to your home | Gisela Pastelería Natural',
		'meta.delHorno.description':
			'Custom breakfasts and baskets from Gisela Pastelería Natural, freshly baked and ready to bring to your home.',
		'delHornoPage.eyebrow': 'Home delivery',
		'delHornoPage.title': 'From our oven to your home',
		'delHornoPage.subtitle':
			'Custom breakfasts and baskets, freshly baked and ready to surprise you wherever you are.',
		'delHornoPage.item1.title': 'Breakfast delivery',
		'delHornoPage.item1.desc':
			'Choose from our breakfast options and we bring it to you warm, first thing in the morning.',
		'delHornoPage.item2.title': 'Custom baskets',
		'delHornoPage.item2.desc':
			'Mix sweets, savoury bites and drinks to build a basket your way — perfect as a gift.',
		'delHornoPage.item3.title': 'Special occasions',
		'delHornoPage.item3.desc': 'Birthdays, anniversaries, or just an ordinary day that deserves something sweet.',
		'delHornoPage.item4.title': 'How to order',
		'delHornoPage.item4.desc': "Tell us the date and what you fancy, and we'll take care of the rest.",
		'delHornoPage.ctaTitle': 'Shall we prepare your basket?',
		'delHornoPage.ctaText': 'Tell us the occasion and what you fancy — write to us or drop by the bakery.',
		'delHornoPage.ctaEmail': 'Email us',
		'delHornoPage.ctaCall': 'Call us',

		'meta.mesasDulces.title': 'Sweet tables for events | Gisela Pastelería Natural',
		'meta.mesasDulces.description':
			'Custom sweet tables and wedding cakes for your celebrations: weddings, communions, birthdays and corporate events.',

		'mesasDulcesPage.eyebrow': 'For your events',
		'mesasDulcesPage.title': 'Sweet tables to fall in love with',
		'mesasDulcesPage.subtitle':
			'Weddings, communions, birthdays and corporate celebrations — we create bespoke sweet tables with Gisela\'s own style and flavours.',
		'mesasDulcesPage.item1.title': 'Custom sweet tables',
		'mesasDulcesPage.item1.desc':
			'We design the selection of sweets around your theme, colours and number of guests.',
		'mesasDulcesPage.item2.title': 'Wedding and celebration cakes',
		'mesasDulcesPage.item2.desc': 'Bespoke cakes for the big day, with the flavour and style you imagine.',
		'mesasDulcesPage.item3.title': 'Favours for your guests',
		'mesasDulcesPage.item3.desc':
			'Little boxes and individual sweets so your guests take home a delicious memory.',
		'mesasDulcesPage.item4.title': 'Guidance and set-up',
		'mesasDulcesPage.item4.desc':
			'We\'re with you from the first sketch through to the set-up on the day of your event.',
		'mesasDulcesPage.galleryTitle': 'Make it your own',
		'mesasDulcesPage.gallerySubtitle':
			"Come by the bakery and let's talk in person to work out every detail.",
		'mesasDulcesPage.gallery.alt1': 'Sweet table decorated with macarons, cupcakes and flowers',
		'mesasDulcesPage.gallery.alt2': 'Decorated individual cake slice',
		'mesasDulcesPage.gallery.alt3': 'Handmade apple cake from Gisela',
		'mesasDulcesPage.gallery.alt4': 'Selection of desserts from Gisela Pastelería Natural',
		'mesasDulcesPage.ctaTitle': 'Got an event in mind?',
		'mesasDulcesPage.ctaText':
			'Tell us the date, the style and the number of guests, and we\'ll design your perfect sweet table together.',
		'mesasDulcesPage.ctaEmail': 'Email us',
		'mesasDulcesPage.ctaCall': 'Call now',

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
		'footer.designedBy': 'Designed by',

		'carta.title': 'Our menu',
		'carta.intro':
			"Everything you see, smell and taste here — sweet and savoury — is made in our own bakery, with honest ingredients and, whenever we can, zero-kilometre ones. Ask our staff for allergen information.",

		'meta.home.title': 'Gisela Pastelería Natural | Artisan bakery in Ponferrada',
		'meta.home.description':
			'Natural, handcrafted bakery in Ponferrada, León. Cakes, sweets and homemade pastries made fresh every day with natural ingredients.',
		'meta.carta.title': 'Menu | Gisela Pastelería Natural',
		'meta.carta.description':
			"Check out Gisela Pastelería Natural's menu: cakes, sweets, breakfasts and drinks made fresh every day in our bakery in Ponferrada.",
		'meta.especialidades.title': 'Specialities | Gisela Pastelería Natural',
		'meta.especialidades.description':
			'Discover our handmade sweets, gift boxes and speciality coffee at Gisela Pastelería Natural, Ponferrada.',
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
		'nav.bcb': 'BCB',
		'nav.carta': 'Speisekarte',
		'aria.openMenu': 'Menü öffnen',

		'hero.badge1': 'Familienbetrieb',
		'hero.badge2': 'Ehrlich natürlich',
		'hero.title': 'Glück kann man essen, und wir haben das Rezept dafür',
		'hero.imageAlt': 'Handgemachte Apfeltorte von Gisela Pastelería Natural',
		'hero.subtitle':
			'Bei Gisela Pastelería Natural stellen wir jede Torte und jede Süßigkeit von Hand her und achten auf die Herkunft unserer Zutaten, damit du jeden Tag einen authentischen Geschmack genießen kannst.',
		'hero.ctaOrder': 'Bestelle deine Torte',
		'hero.ctaInstagram': 'Folge uns auf Instagram',
		'hero.scroll': 'Weiter scrollen',

		'historia.eyebrow': 'Unsere Geschichte',
		'historia.title': 'Ein Traum, der seit 2010 wahr wurde',
		'historia.p1':
			'2010 eröffneten wir "Gisela" und vor mittlerweile über einem Jahr sind wir an die Tore unserer Burg umgezogen, um dich zu uns einzuladen, ein gutes Frühstück zu genießen und dir ohne Eile etwas Leckeres, Echtes und Einzigartiges zu gönnen.',
		'historia.p2':
			'Wir arbeiten jeden Tag mit ehrlichen und, wann immer möglich, regionalen Zutaten: Brot von Panadería Álex, Spezialitätenkaffee von Bonarte und Aufgüsse von La Tetera Azúl.',
		'historia.badge1': 'Glück kann man essen',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Alan vom Gisela-Team genießt einen unserer Kukis',

		'especialidades.eyebrow': 'Spezialitäten',
		'especialidades.title': 'Was du nicht verpassen solltest',
		'especialidades.badge': 'Ohne Konservierungsstoffe',
		'especialidades.item1.title': 'Frühstück',
		'especialidades.item1.desc':
			'Starte den Tag mit einem vollständigen, frisch zubereiteten Frühstück, mit unserem Brot und den Morgen-Süßigkeiten.',
		'especialidades.item1.alt': 'Frühstück bei Gisela Pastelería Natural mit Torte und frischem Obst',
		'especialidades.item2.title': 'Firmen-Catering',
		'especialidades.item2.desc':
			'Süßes und Herzhaftes für Meetings, Events und Firmenfeiern, ganz nach deinen Wünschen zubereitet.',
		'especialidades.item2.alt': 'Auswahl an Köstlichkeiten von Gisela Pastelería Natural für Firmen-Catering',
		'especialidades.item3.title': 'Individuelle Torten',
		'especialidades.item3.desc':
			'Wähle die Größe, den Geschmack und die Dekoration — jede Torte wird ganz nach deinem Geschmack gemacht.',
		'especialidades.item3.alt': 'Individuelle Apfeltorte von Gisela Pastelería Natural',

		'especialidadesPage.intro':
			'Von frisch zubereiteten Frühstücken über Firmen-Catering bis hin zu Torten nach Maß: Das solltest du bei deinem Besuch nicht verpassen.',
		'especialidadesPage.ctaTitle': 'Möchtest du die ganze Karte sehen?',
		'especialidadesPage.ctaText':
			'Entdecke all unsere Süßigkeiten, Torten und herzhaften Köstlichkeiten in unserer vollständigen Karte.',

		'nav.encargaTuTarta': 'Torte bestellen',
		'meta.encargaTuTarta.title': 'Torte bestellen | Gisela Pastelería Natural',
		'meta.encargaTuTarta.description':
			'Sieh dir an, wie unsere individuellen Torten aussehen, bevor du uns bei Gisela Pastelería Natural in Ponferrada deine Wünsche verrätst.',
		'encargaTuTartaPage.eyebrow': 'In der Bäckerei',
		'encargaTuTartaPage.title': 'Torte bestellen',
		'encargaTuTartaPage.subtitle':
			'Diese Seite zeigt dir, wie unsere Torten aussehen, bevor du es uns persönlich erzählst — Tortenbestellungen nehmen wir nicht online entgegen, komm vorbei und beschreib uns deine Wunschtorte in der Bäckerei.',
		'encargaTuTartaPage.diagram.bizcocho': 'Biskuit',
		'encargaTuTartaPage.diagram.mousse': 'Mousse',
		'encargaTuTartaPage.diagram.decoracion': 'Dekoration',
		'encargaTuTartaPage.sizesTitle': 'Wähle die Größe',
		'encargaTuTartaPage.sizesIntro': 'Alle unsere Torten werden in geraden Portionsgrößen gemacht.',
		'encargaTuTartaPage.sizeUnit': 'Personen',
		'encargaTuTartaPage.sizesMore': 'Und größere Größen, immer in geraden Zahlen — sag es uns einfach.',
		'encargaTuTartaPage.flavorsTitle': 'Wähle deinen Geschmack',
		'encargaTuTartaPage.flavorsNote':
			'In der Regel werden zwei Geschmacksrichtungen gewählt, außer bei unseren traditionellen Torten.',
		'encargaTuTartaPage.flavorsCategory.mousse': 'Mousse aus natürlichen Früchten',
		'encargaTuTartaPage.flavorsCategory.chocolate': 'Schokolade',
		'encargaTuTartaPage.flavorsCategory.galletas': 'Kekse',
		'encargaTuTartaPage.flavorsCategory.frutosSecos': 'Nüsse',
		'encargaTuTartaPage.flavorsCategory.clasicos': 'Klassiker',
		'encargaTuTartaPage.traditionalTitle': 'Geschmacksrichtungen für traditionelle Torten',

		'encargaTuTartaPage.philosophyTitle': 'Unsere Torten',
		'encargaTuTartaPage.philosophy1.title': 'Hohe Torten',
		'encargaTuTartaPage.philosophy1.desc':
			'Mehrere Schichten aus Biskuit und Mousse, damit jedes Stück wirklich etwas hermacht.',
		'encargaTuTartaPage.philosophy2.title': 'Natürliche Mousses',
		'encargaTuTartaPage.philosophy2.desc': 'Gefüllt mit echter Mousse, im Geschmack deiner Wahl.',
		'encargaTuTartaPage.philosophy3.title': 'Sahne- oder Trüffel-Überzug',
		'encargaTuTartaPage.philosophy3.desc':
			'Überzogen mit Schlagsahne oder Schokoladentrüffel, niemals mit Fondant.',
		'encargaTuTartaPage.philosophy4.title': 'Kein Fondant',
		'encargaTuTartaPage.philosophy4.desc':
			'Fondant ist letztlich nichts als gefärbte Zuckerpaste. Wir möchten lieber, dass du deine ganze Torte genießt, ohne dass etwas übrig bleibt.',
		'encargaTuTartaPage.philosophy5.title': 'Geschmack und Dekoration nach deinem Geschmack',
		'encargaTuTartaPage.philosophy5.desc':
			'Du wählst die Füllung und wie sie dekoriert werden soll — jede Torte ist anders, weil jeder Kunde es ist.',
		'encargaTuTartaPage.closingText':
			'Komm in die Bäckerei und erzähl uns, wie du sie haben möchtest — gemeinsam geben wir ihr Form.',

		'servicesGrid.title': 'Alles, was Gisela für dich tun kann',
		'servicesGrid.subtitle':
			'Vom Frühstück für dein Team bis zur Torte deiner Träume — entdecke alles, was wir für dich vorbereiten.',
		'servicesGrid.empresas.title': 'Für Unternehmen',
		'servicesGrid.empresas.tagline': 'Frühstück, Catering und Firmengeschenke',
		'servicesGrid.empresas.alt': 'Süßigkeitenboxen von Gisela Pastelería Natural für Unternehmen',
		'servicesGrid.horno.title': 'Frühstück & individuelle Körbe',
		'servicesGrid.horno.tagline': 'Aus unserem Ofen zu dir nach Hause, wann immer du willst',
		'servicesGrid.horno.alt': 'Handgemachtes Frühstück von Gisela Pastelería Natural, zum Mitnehmen bereit',
		'servicesGrid.tartas.title': 'Individuelle Torten',
		'servicesGrid.tartas.tagline': 'Größe, Geschmack und Dekoration ganz nach deinem Wunsch',
		'servicesGrid.tartas.alt': 'Individuelle Torte von Gisela Pastelería Natural',
		'servicesGrid.mesasDulces.title': 'Süße Tische für deine Events',
		'servicesGrid.mesasDulces.tagline': 'Hochzeiten, Kommunionen und Feiern nach Maß',
		'servicesGrid.mesasDulces.alt': 'Dekorierter süßer Tisch von Gisela Pastelería Natural',

		'meta.paraEmpresas.title': 'Gisela für Unternehmen | Gisela Pastelería Natural',
		'meta.paraEmpresas.description':
			'Arbeitsfrühstück, Event-Catering und Firmengeschenke mit dem handwerklichen Geschmack von Gisela Pastelería Natural, in Ponferrada.',
		'paraEmpresasPage.eyebrow': 'Für Unternehmen',
		'paraEmpresasPage.title': 'Gisela für Unternehmen',
		'paraEmpresasPage.subtitle':
			'Arbeitsfrühstück, Event-Catering und Firmengeschenke, mit demselben handwerklichen Geschmack — damit auch dein Unternehmen Gisela genießen kann.',
		'paraEmpresasPage.item1.title': 'Arbeitsfrühstück',
		'paraEmpresasPage.item1.desc':
			'Tabletts mit frisch zubereiteten süßen und herzhaften Leckereien für einen guten Start in die Teambesprechung.',
		'paraEmpresasPage.item2.title': 'Event-Catering',
		'paraEmpresasPage.item2.desc':
			'Süße und herzhafte Angebote nach Maß für Präsentationen, Schulungen oder Firmenfeiern.',
		'paraEmpresasPage.item3.title': 'Firmengeschenke',
		'paraEmpresasPage.item3.desc':
			'Individuell gestaltbare Boxen und Körbe zum Verschenken an Kunden, Lieferanten oder das eigene Team.',
		'paraEmpresasPage.item4.title': 'Rechnungsstellung für Unternehmen',
		'paraEmpresasPage.item4.desc': 'Bestellungen mit Rechnung, damit die Abwicklung mit deinem Unternehmen einfach ist.',
		'paraEmpresasPage.ctaTitle': 'Lass uns über dein nächstes Event sprechen',
		'paraEmpresasPage.ctaText':
			'Erzähl uns, was du brauchst, und wir bereiten es gemeinsam vor — schreib uns oder komm in der Bäckerei vorbei.',
		'paraEmpresasPage.ctaEmail': 'Schreib uns',
		'paraEmpresasPage.ctaCall': 'Ruf uns an',
		'paraEmpresasPage.cateringTitle': 'Herzhaftes Catering',
		'paraEmpresasPage.cateringText':
			'Für Meetings, Kaffeepausen und Firmenevents: eine vielfältige Auswahl herzhafter Häppchen zum Teilen.',
		'paraEmpresasPage.cateringAlt1': 'Verschiedene Toasts mit Avocado, Tomate und Käse für Firmen-Catering',
		'paraEmpresasPage.cateringAlt2':
			'Auswahl an Pasteten, gefüllten Croissants und Mini-Sandwiches für Catering',

		'meta.delHorno.title': 'Vom Ofen zu dir nach Hause | Gisela Pastelería Natural',
		'meta.delHorno.description':
			'Individuelle Frühstücke und Körbe von Gisela Pastelería Natural, frisch gebacken und bereit für dein Zuhause.',
		'delHornoPage.eyebrow': 'Lieferung nach Hause',
		'delHornoPage.title': 'Vom Ofen zu dir nach Hause',
		'delHornoPage.subtitle':
			'Individuelle Frühstücke und Körbe, frisch gebacken und bereit, dich zu überraschen, wo immer du bist.',
		'delHornoPage.item1.title': 'Frühstückslieferung',
		'delHornoPage.item1.desc': 'Wähle aus unseren Frühstücksangeboten und wir bringen es dir warm am frühen Morgen.',
		'delHornoPage.item2.title': 'Individuelle Körbe',
		'delHornoPage.item2.desc':
			'Kombiniere Süßes, Herzhaftes und Getränke zu einem Korb ganz nach deinem Geschmack — perfekt zum Verschenken.',
		'delHornoPage.item3.title': 'Besondere Anlässe',
		'delHornoPage.item3.desc': 'Geburtstage, Jubiläen oder einfach ein ganz normaler Tag, der etwas Süßes verdient.',
		'delHornoPage.item4.title': 'So bestellst du',
		'delHornoPage.item4.desc': 'Schreib uns das Datum und was du dir wünschst, und wir kümmern uns um den Rest.',
		'delHornoPage.ctaTitle': 'Sollen wir deinen Korb vorbereiten?',
		'delHornoPage.ctaText':
			'Erzähl uns den Anlass und was du dir wünschst — schreib uns oder komm in der Bäckerei vorbei.',
		'delHornoPage.ctaEmail': 'Schreib uns',
		'delHornoPage.ctaCall': 'Ruf uns an',

		'meta.mesasDulces.title': 'Süße Tische für Events | Gisela Pastelería Natural',
		'meta.mesasDulces.description':
			'Individuelle süße Tische und Hochzeitstorten für deine Feiern: Hochzeiten, Kommunionen, Geburtstage und Firmenevents.',

		'mesasDulcesPage.eyebrow': 'Für deine Events',
		'mesasDulcesPage.title': 'Süße Tische, die verzaubern',
		'mesasDulcesPage.subtitle':
			'Hochzeiten, Kommunionen, Geburtstage und Firmenfeiern — wir gestalten süße Tische nach Maß, mit dem Stil und den Aromen von Gisela.',
		'mesasDulcesPage.item1.title': 'Individuelle süße Tische',
		'mesasDulcesPage.item1.desc':
			'Wir gestalten die Süßigkeitenauswahl passend zum Motto, den Farben und der Gästeanzahl deines Events.',
		'mesasDulcesPage.item2.title': 'Hochzeits- und Festtorten',
		'mesasDulcesPage.item2.desc':
			'Torten nach Maß für den großen Tag, mit dem Geschmack und Stil, den du dir vorstellst.',
		'mesasDulcesPage.item3.title': 'Aufmerksamkeiten für deine Gäste',
		'mesasDulcesPage.item3.desc':
			'Kleine Boxen und einzelne Süßigkeiten, damit deine Gäste eine köstliche Erinnerung mit nach Hause nehmen.',
		'mesasDulcesPage.item4.title': 'Beratung und Aufbau',
		'mesasDulcesPage.item4.desc':
			'Wir begleiten dich vom ersten Entwurf bis zum Aufbau am Tag deines Events.',
		'mesasDulcesPage.galleryTitle': 'Ganz nach deinem Geschmack',
		'mesasDulcesPage.gallerySubtitle':
			'Komm in die Bäckerei vorbei und lass uns persönlich jedes Detail besprechen.',
		'mesasDulcesPage.gallery.alt1': 'Süßer Tisch dekoriert mit Macarons, Cupcakes und Blumen',
		'mesasDulcesPage.gallery.alt2': 'Dekoriertes einzelnes Tortenstück',
		'mesasDulcesPage.gallery.alt3': 'Handgemachte Apfeltorte von Gisela',
		'mesasDulcesPage.gallery.alt4': 'Auswahl an Desserts von Gisela Pastelería Natural',
		'mesasDulcesPage.ctaTitle': 'Hast du ein Event geplant?',
		'mesasDulcesPage.ctaText':
			'Erzähl uns das Datum, den Stil und die Anzahl der Gäste, und wir gestalten gemeinsam deinen perfekten süßen Tisch.',
		'mesasDulcesPage.ctaEmail': 'Schreib uns',
		'mesasDulcesPage.ctaCall': 'Jetzt anrufen',

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
		'footer.designedBy': 'Gestaltet von',

		'carta.title': 'Unsere Karte',
		'carta.intro':
			'Alles, was du hier siehst, riechst und schmeckst — süß und herzhaft — stellen wir in unserer eigenen Backstube her, mit ehrlichen und, wann immer möglich, regionalen Zutaten. Frag unser Personal nach Informationen zu Allergenen.',

		'meta.home.title': 'Gisela Pastelería Natural | Handwerksbäckerei in Ponferrada',
		'meta.home.description':
			'Natürliche, handwerkliche Bäckerei in Ponferrada, León. Torten, Süßigkeiten und hausgemachtes Gebäck, täglich frisch mit natürlichen Zutaten hergestellt.',
		'meta.carta.title': 'Speisekarte | Gisela Pastelería Natural',
		'meta.carta.description':
			'Entdecke die Karte von Gisela Pastelería Natural: Torten, Süßigkeiten, Frühstück und Getränke, täglich frisch in unserer Backstube in Ponferrada.',
		'meta.especialidades.title': 'Spezialitäten | Gisela Pastelería Natural',
		'meta.especialidades.description':
			'Entdecke unsere handgemachten Süßigkeiten, Geschenkboxen und Spezialitätenkaffee bei Gisela Pastelería Natural in Ponferrada.',
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
		'nav.bcb': 'BCB',
		'nav.carta': 'Carte',
		'aria.openMenu': 'Ouvrir le menu',

		'hero.badge1': 'Atelier familial',
		'hero.badge2': 'Honnêtement naturel',
		'hero.title': 'Le bonheur, ça se mange, et nous en avons la recette',
		'hero.imageAlt': 'Tarte aux pommes artisanale de Gisela Pastelería Natural',
		'hero.subtitle':
			"Chez Gisela Pastelería Natural, nous élaborons chaque gâteau et chaque douceur de façon artisanale, en veillant à l'origine de nos ingrédients pour que vous profitiez d'une saveur authentique, jour après jour.",
		'hero.ctaOrder': 'Commandez votre gâteau',
		'hero.ctaInstagram': 'Suivez-nous sur Instagram',
		'hero.scroll': 'Continuez à défiler',

		'historia.eyebrow': 'Notre histoire',
		'historia.title': 'Un rêve devenu réalité depuis 2010',
		'historia.p1':
			'En 2010, nous avons ouvert "Gisela" et cela fait maintenant plus d\'un an que nous nous sommes installés aux portes de notre château pour vous inviter chez nous, prendre un bon petit-déjeuner et profiter, sans vous presser, de quelque chose de délicieux, vrai et unique.',
		'historia.p2':
			'Nous travaillons chaque jour avec des ingrédients honnêtes et, autant que possible, en circuit court : le pain de Panadería Álex, le café de spécialité de Bonarte et les infusions de La Tetera Azúl.',
		'historia.badge1': 'Le bonheur, ça se mange',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': "Alan, de l'équipe Gisela, savourant un de nos kukis",

		'especialidades.eyebrow': 'Spécialités',
		'especialidades.title': "Ce qu'il ne faut pas manquer",
		'especialidades.badge': 'Sans conservateurs',
		'especialidades.item1.title': 'Petits-déjeuners',
		'especialidades.item1.desc':
			'Commencez la journée avec un petit-déjeuner complet et fraîchement préparé, avec notre pain et nos douceurs du matin.',
		'especialidades.item1.alt': 'Petit-déjeuner chez Gisela Pastelería Natural avec gâteau et fruits frais',
		'especialidades.item2.title': 'Traiteur pour entreprises',
		'especialidades.item2.desc':
			"Douceurs et salés pour réunions, événements et fêtes d'entreprise, préparés sur mesure.",
		'especialidades.item2.alt':
			"Sélection de douceurs de Gisela Pastelería Natural pour traiteur d'entreprise",
		'especialidades.item3.title': 'Gâteaux personnalisés',
		'especialidades.item3.desc':
			'Choisissez la taille, la saveur et la décoration — chaque gâteau est réalisé à votre goût.',
		'especialidades.item3.alt': 'Gâteau aux pommes personnalisé de Gisela Pastelería Natural',

		'especialidadesPage.intro':
			"Des petits-déjeuners frais au traiteur pour entreprises en passant par des gâteaux sur mesure : voici ce qu'il ne faut pas manquer lors de votre visite.",
		'especialidadesPage.ctaTitle': 'Envie de voir toute la carte ?',
		'especialidadesPage.ctaText':
			'Découvrez toutes nos douceurs, gâteaux et salés dans notre carte complète.',

		'nav.encargaTuTarta': 'Commander votre gâteau',
		'meta.encargaTuTarta.title': 'Commander votre gâteau | Gisela Pastelería Natural',
		'meta.encargaTuTarta.description':
			'Découvrez à quoi ressemblent nos gâteaux personnalisés avant de nous dire comment vous le voulez, chez Gisela Pastelería Natural à Ponferrada.',
		'encargaTuTartaPage.eyebrow': 'À la pâtisserie',
		'encargaTuTartaPage.title': 'Commander votre gâteau',
		'encargaTuTartaPage.subtitle':
			"Cette page est un guide pour voir à quoi ressemblent nos gâteaux avant de nous le dire en personne — nous ne prenons pas de commandes de gâteaux en ligne, venez nous raconter votre gâteau idéal à la pâtisserie.",
		'encargaTuTartaPage.diagram.bizcocho': 'Génoise',
		'encargaTuTartaPage.diagram.mousse': 'Mousse',
		'encargaTuTartaPage.diagram.decoracion': 'Décoration',
		'encargaTuTartaPage.sizesTitle': 'Choisissez la taille',
		'encargaTuTartaPage.sizesIntro': 'Tous nos gâteaux sont réalisés en nombre de parts pair.',
		'encargaTuTartaPage.sizeUnit': 'personnes',
		'encargaTuTartaPage.sizesMore':
			'Et des tailles plus grandes aussi, toujours en nombre pair — dites-le nous simplement.',
		'encargaTuTartaPage.flavorsTitle': 'Choisissez votre saveur',
		'encargaTuTartaPage.flavorsNote':
			'On choisit généralement deux saveurs, sauf pour nos gâteaux aux saveurs traditionnelles.',
		'encargaTuTartaPage.flavorsCategory.mousse': 'Mousse aux fruits naturels',
		'encargaTuTartaPage.flavorsCategory.chocolate': 'Chocolat',
		'encargaTuTartaPage.flavorsCategory.galletas': 'Biscuits',
		'encargaTuTartaPage.flavorsCategory.frutosSecos': 'Fruits secs',
		'encargaTuTartaPage.flavorsCategory.clasicos': 'Classiques',
		'encargaTuTartaPage.traditionalTitle': 'Saveurs pour gâteaux traditionnels',

		'encargaTuTartaPage.philosophyTitle': 'Nos gâteaux',
		'encargaTuTartaPage.philosophy1.title': 'Des gâteaux hauts',
		'encargaTuTartaPage.philosophy1.desc':
			'Plusieurs couches de génoise et de mousse, pour que chaque part ait une vraie présence.',
		'encargaTuTartaPage.philosophy2.title': 'Mousses naturelles',
		'encargaTuTartaPage.philosophy2.desc':
			"Garnis d'une vraie mousse, avec la saveur de votre choix.",
		'encargaTuTartaPage.philosophy3.title': 'Couverture chantilly ou truffe',
		'encargaTuTartaPage.philosophy3.desc':
			'Recouverts de crème chantilly ou de truffe au chocolat, jamais de pâte à sucre.',
		'encargaTuTartaPage.philosophy4.title': 'Sans pâte à sucre',
		'encargaTuTartaPage.philosophy4.desc':
			"La pâte à sucre n'est, au fond, qu'une pâte sucrée colorée. Nous préférons que vous profitiez de tout votre gâteau, sans rien laisser.",
		'encargaTuTartaPage.philosophy5.title': 'Saveur et décoration à votre goût',
		'encargaTuTartaPage.philosophy5.desc':
			'Vous choisissez la garniture et la décoration — chaque gâteau est différent, comme chaque client.',
		'encargaTuTartaPage.closingText':
			'Venez à la pâtisserie nous dire comment vous le voulez — nous lui donnerons forme ensemble.',

		'servicesGrid.title': 'Tout ce que Gisela peut faire pour vous',
		'servicesGrid.subtitle':
			'Du petit-déjeuner de votre équipe au gâteau de vos rêves — découvrez tout ce que nous préparons pour vous.',
		'servicesGrid.empresas.title': 'Pour les entreprises',
		'servicesGrid.empresas.tagline': "Petits-déjeuners, traiteur et cadeaux d'entreprise",
		'servicesGrid.empresas.alt':
			'Boîtes de douceurs de Gisela Pastelería Natural préparées pour les entreprises',
		'servicesGrid.horno.title': 'Petits-déjeuners et paniers personnalisés',
		'servicesGrid.horno.tagline': 'De notre four à votre porte, quand vous le souhaitez',
		'servicesGrid.horno.alt': 'Petit-déjeuner artisanal de Gisela Pastelería Natural prêt à emporter',
		'servicesGrid.tartas.title': 'Gâteaux personnalisés',
		'servicesGrid.tartas.tagline': 'La taille, la saveur et la décoration, à votre goût',
		'servicesGrid.tartas.alt': 'Gâteau personnalisé de Gisela Pastelería Natural',
		'servicesGrid.mesasDulces.title': 'Tables sucrées pour vos événements',
		'servicesGrid.mesasDulces.tagline': 'Mariages, communions et fêtes sur mesure',
		'servicesGrid.mesasDulces.alt': 'Table sucrée décorée de Gisela Pastelería Natural',

		'meta.paraEmpresas.title': 'Gisela pour les entreprises | Gisela Pastelería Natural',
		'meta.paraEmpresas.description':
			"Petits-déjeuners de travail, traiteur d'événements et cadeaux d'entreprise avec la saveur artisanale de Gisela Pastelería Natural, à Ponferrada.",
		'paraEmpresasPage.eyebrow': 'Pour les entreprises',
		'paraEmpresasPage.title': 'Gisela pour les entreprises',
		'paraEmpresasPage.subtitle':
			"Petits-déjeuners de travail, traiteur d'événements et cadeaux d'entreprise, avec la même saveur artisanale — pour que votre entreprise profite aussi de Gisela.",
		'paraEmpresasPage.item1.title': 'Petits-déjeuners de travail',
		'paraEmpresasPage.item1.desc':
			'Plateaux de douceurs et salés fraîchement préparés pour bien démarrer les réunions de votre équipe.',
		'paraEmpresasPage.item2.title': "Traiteur d'événements",
		'paraEmpresasPage.item2.desc':
			"Propositions sucrées et salées sur mesure pour présentations, formations ou fêtes d'entreprise.",
		'paraEmpresasPage.item3.title': "Cadeaux d'entreprise",
		'paraEmpresasPage.item3.desc':
			'Boîtes et paniers personnalisables à offrir à vos clients, fournisseurs ou à votre équipe.',
		'paraEmpresasPage.item4.title': 'Facturation pour entreprises',
		'paraEmpresasPage.item4.desc': 'Commandes avec facture, pour simplifier la gestion avec votre entreprise.',
		'paraEmpresasPage.ctaTitle': 'Parlons de votre prochain événement ?',
		'paraEmpresasPage.ctaText':
			'Dites-nous ce dont vous avez besoin et préparons-le ensemble — écrivez-nous ou passez à la pâtisserie.',
		'paraEmpresasPage.ctaEmail': 'Écrivez-nous',
		'paraEmpresasPage.ctaCall': 'Appelez-nous',
		'paraEmpresasPage.cateringTitle': 'Traiteur salé',
		'paraEmpresasPage.cateringText':
			"Pour vos réunions, pauses café et événements d'entreprise : une sélection variée de bouchées salées, prêtes à partager.",
		'paraEmpresasPage.cateringAlt1':
			"Assortiment de toasts à l'avocat, tomate et fromage pour traiteur d'entreprise",
		'paraEmpresasPage.cateringAlt2': 'Sélection de chaussons, croissants garnis et mini-sandwichs pour traiteur',

		'meta.delHorno.title': 'De notre four à votre maison | Gisela Pastelería Natural',
		'meta.delHorno.description':
			'Petits-déjeuners et paniers personnalisés de Gisela Pastelería Natural, fraîchement préparés et prêts pour votre maison.',
		'delHornoPage.eyebrow': 'À domicile',
		'delHornoPage.title': 'De notre four à votre maison',
		'delHornoPage.subtitle':
			'Petits-déjeuners et paniers personnalisés, fraîchement préparés et prêts à vous surprendre où que vous soyez.',
		'delHornoPage.item1.title': 'Petit-déjeuner à domicile',
		'delHornoPage.item1.desc':
			"Choisissez parmi nos propositions de petit-déjeuner et nous vous l'apportons chaud, tôt le matin.",
		'delHornoPage.item2.title': 'Paniers personnalisés',
		'delHornoPage.item2.desc':
			'Combinez douceurs, salés et boissons pour créer un panier à votre goût — parfait à offrir.',
		'delHornoPage.item3.title': 'Occasions spéciales',
		'delHornoPage.item3.desc': "Anniversaires, fêtes ou simplement un jour ordinaire qui mérite une touche sucrée.",
		'delHornoPage.item4.title': 'Comment commander',
		'delHornoPage.item4.desc': 'Écrivez-nous la date et ce qui vous fait envie, et nous nous occupons du reste.',
		'delHornoPage.ctaTitle': 'On vous prépare votre panier ?',
		'delHornoPage.ctaText':
			"Dites-nous l'occasion et ce qui vous fait envie — écrivez-nous ou passez à la pâtisserie.",
		'delHornoPage.ctaEmail': 'Écrivez-nous',
		'delHornoPage.ctaCall': 'Appelez-nous',

		'meta.mesasDulces.title': 'Tables sucrées pour événements | Gisela Pastelería Natural',
		'meta.mesasDulces.description':
			'Tables sucrées personnalisées et gâteaux de mariage pour vos célébrations : mariages, communions, anniversaires et événements d\'entreprise.',

		'mesasDulcesPage.eyebrow': 'Pour vos événements',
		'mesasDulcesPage.title': 'Des tables sucrées à croquer',
		'mesasDulcesPage.subtitle':
			"Mariages, communions, anniversaires et fêtes d'entreprise — nous créons des tables sucrées sur mesure, avec le style et les saveurs de Gisela.",
		'mesasDulcesPage.item1.title': 'Tables sucrées personnalisées',
		'mesasDulcesPage.item1.desc':
			'Nous composons la sélection de douceurs selon le thème, les couleurs et le nombre d\'invités de votre événement.',
		'mesasDulcesPage.item2.title': 'Gâteaux de mariage et de fête',
		'mesasDulcesPage.item2.desc':
			'Des gâteaux sur mesure pour le grand jour, avec la saveur et le style que vous imaginez.',
		'mesasDulcesPage.item3.title': 'Attentions pour vos invités',
		'mesasDulcesPage.item3.desc':
			'Petites boîtes et douceurs individuelles pour que vos invités repartent avec un souvenir délicieux.',
		'mesasDulcesPage.item4.title': 'Conseil et installation',
		'mesasDulcesPage.item4.desc':
			"Nous vous accompagnons du premier croquis jusqu'à l'installation le jour de votre événement.",
		'mesasDulcesPage.galleryTitle': 'Personnalisez-la à votre goût',
		'mesasDulcesPage.gallerySubtitle':
			'Passez à la pâtisserie et discutons en personne de chaque détail.',
		'mesasDulcesPage.gallery.alt1': 'Table sucrée décorée de macarons, cupcakes et fleurs',
		'mesasDulcesPage.gallery.alt2': 'Part de gâteau individuelle décorée',
		'mesasDulcesPage.gallery.alt3': 'Tarte aux pommes artisanale de Gisela',
		'mesasDulcesPage.gallery.alt4': 'Sélection de desserts de Gisela Pastelería Natural',
		'mesasDulcesPage.ctaTitle': 'Un événement en tête ?',
		'mesasDulcesPage.ctaText':
			'Dites-nous la date, le style et le nombre d\'invités, et créons ensemble votre table sucrée parfaite.',
		'mesasDulcesPage.ctaEmail': 'Écrivez-nous',
		'mesasDulcesPage.ctaCall': 'Appelez maintenant',

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
		'footer.designedBy': 'Conçu par',

		'carta.title': 'Notre carte',
		'carta.intro':
			"Tout ce que vous voyez, sentez et goûtez ici — sucré et salé — nous le préparons dans notre propre atelier, avec des ingrédients honnêtes et, autant que possible, en circuit court. Demandez à notre personnel des informations sur les allergènes.",

		'meta.home.title': 'Gisela Pastelería Natural | Pâtisserie artisanale à Ponferrada',
		'meta.home.description':
			'Pâtisserie naturelle et artisanale à Ponferrada, León. Gâteaux, douceurs et pâtisserie maison élaborés chaque jour avec des ingrédients naturels.',
		'meta.carta.title': 'Carte | Gisela Pastelería Natural',
		'meta.carta.description':
			'Découvrez la carte de Gisela Pastelería Natural : gâteaux, douceurs, petits-déjeuners et boissons élaborés chaque jour dans notre atelier à Ponferrada.',
		'meta.especialidades.title': 'Spécialités | Gisela Pastelería Natural',
		'meta.especialidades.description':
			'Découvrez nos douceurs artisanales, nos coffrets cadeaux et notre café de spécialité chez Gisela Pastelería Natural, à Ponferrada.',
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
		'nav.bcb': 'BCB',
		'nav.carta': '메뉴',
		'aria.openMenu': '메뉴 열기',

		'hero.badge1': '가족이 운영하는 공방',
		'hero.badge2': '정직하게 자연스러운',
		'hero.title': '행복은 먹는 것, 그 레시피가 저희에게 있습니다',
		'hero.imageAlt': 'Gisela Pastelería Natural의 수제 애플 케이크',
		'hero.subtitle':
			'지셀라 파스텔레리아 나투랄에서는 모든 케이크와 디저트를 정성껏 수제로 만들며, 재료의 원산지를 소중히 여겨 매일 진짜 맛을 즐기실 수 있도록 합니다.',
		'hero.ctaOrder': '케이크 주문하기',
		'hero.ctaInstagram': '인스타그램 팔로우',
		'hero.scroll': '아래로 스크롤',

		'historia.eyebrow': '우리의 이야기',
		'historia.title': '2010년부터 이어온 꿈',
		'historia.p1':
			'2010년, 우리는 "Gisela"를 열었고 1년도 더 전에 성문 앞으로 자리를 옮겨 여러분을 저희 집으로 초대합니다. 좋은 아침 식사를 즐기고, 서두르지 않고 맛있고 진짜인, 특별한 무언가를 만끽하세요.',
		'historia.p2':
			'저희는 매일 정직한 재료로, 가능한 한 지역 재료로 작업합니다: Panadería Álex의 빵, Bonarte의 스페셜티 커피, La Tetera Azúl의 차.',
		'historia.badge1': '행복은 먹는 것',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': '지셀라 팀의 알란이 저희 쿠키를 즐기고 있는 모습',

		'especialidades.eyebrow': '스페셜 메뉴',
		'especialidades.title': '놓치면 안 될 메뉴',
		'especialidades.badge': '방부제 무첨가',
		'especialidades.item1.title': '조식',
		'especialidades.item1.desc': '매일 아침 갓 구운 빵과 디저트로 완성하는 든든한 아침 식사로 하루를 시작하세요.',
		'especialidades.item1.alt': 'Gisela Pastelería Natural의 케이크와 신선한 과일로 차린 아침 식사',
		'especialidades.item2.title': '기업 케이터링',
		'especialidades.item2.desc':
			'회의, 행사, 회사 축하 자리를 위한 디저트와 짭짤한 요리를 원하시는 대로 준비해 드립니다.',
		'especialidades.item2.alt': '기업 케이터링을 위한 Gisela Pastelería Natural의 디저트 모음',
		'especialidades.item3.title': '맞춤 케이크',
		'especialidades.item3.desc': '크기, 맛, 장식을 직접 선택하세요 — 모든 케이크를 원하는 대로 만들어 드립니다.',
		'especialidades.item3.alt': 'Gisela Pastelería Natural의 맞춤 애플 케이크',

		'especialidadesPage.intro':
			'갓 만든 조식부터 기업 케이터링, 맞춤 케이크까지. 방문하실 때 놓치면 안 될 것들입니다.',
		'especialidadesPage.ctaTitle': '전체 메뉴를 보고 싶으신가요?',
		'especialidadesPage.ctaText': '저희의 모든 디저트, 케이크, 짭짤한 메뉴를 전체 메뉴에서 확인하세요.',

		'nav.encargaTuTarta': '케이크 주문',
		'meta.encargaTuTarta.title': '케이크 주문 | Gisela Pastelería Natural',
		'meta.encargaTuTarta.description':
			'폰페라다의 Gisela Pastelería Natural에서 원하시는 케이크를 말씀해 주시기 전에, 저희의 맞춤 케이크가 어떤 모습인지 확인해 보세요.',
		'encargaTuTartaPage.eyebrow': '매장에서',
		'encargaTuTartaPage.title': '케이크 주문',
		'encargaTuTartaPage.subtitle':
			'이 페이지는 직접 말씀해 주시기 전에 저희 케이크가 어떤 모습인지 보여드리는 안내 페이지입니다 — 온라인으로는 케이크 주문을 받지 않으니, 매장에 오셔서 원하시는 케이크를 말씀해 주세요.',
		'encargaTuTartaPage.diagram.bizcocho': '스펀지 케이크',
		'encargaTuTartaPage.diagram.mousse': '무스',
		'encargaTuTartaPage.diagram.decoracion': '장식',
		'encargaTuTartaPage.sizesTitle': '크기 선택',
		'encargaTuTartaPage.sizesIntro': '저희 케이크는 모두 짝수 인분으로 제작됩니다.',
		'encargaTuTartaPage.sizeUnit': '인분',
		'encargaTuTartaPage.sizesMore': '더 큰 사이즈도 짝수 단위로 가능합니다 — 저희에게 말씀해 주세요.',
		'encargaTuTartaPage.flavorsTitle': '맛을 선택하세요',
		'encargaTuTartaPage.flavorsNote': '보통 두 가지 맛을 선택하며, 전통 맛 케이크는 예외입니다.',
		'encargaTuTartaPage.flavorsCategory.mousse': '천연 과일 무스',
		'encargaTuTartaPage.flavorsCategory.chocolate': '초콜릿',
		'encargaTuTartaPage.flavorsCategory.galletas': '쿠키',
		'encargaTuTartaPage.flavorsCategory.frutosSecos': '견과류',
		'encargaTuTartaPage.flavorsCategory.clasicos': '클래식',
		'encargaTuTartaPage.traditionalTitle': '전통 케이크 맛',

		'encargaTuTartaPage.philosophyTitle': '저희 케이크',
		'encargaTuTartaPage.philosophy1.title': '높은 케이크',
		'encargaTuTartaPage.philosophy1.desc':
			'여러 겹의 스펀지와 무스로, 한 조각에도 존재감이 느껴지도록 만듭니다.',
		'encargaTuTartaPage.philosophy2.title': '천연 무스',
		'encargaTuTartaPage.philosophy2.desc': '원하시는 맛으로 만든 진짜 무스로 채웁니다.',
		'encargaTuTartaPage.philosophy3.title': '생크림 또는 트러플 커버',
		'encargaTuTartaPage.philosophy3.desc': '생크림이나 초콜릿 트러플로 덮으며, 퐁당은 사용하지 않습니다.',
		'encargaTuTartaPage.philosophy4.title': '퐁당 사용 안 함',
		'encargaTuTartaPage.philosophy4.desc':
			'퐁당은 결국 색소를 넣은 설탕 반죽일 뿐입니다. 저희는 손님이 케이크를 남김없이 온전히 즐기시길 바랍니다.',
		'encargaTuTartaPage.philosophy5.title': '맛과 장식은 원하는 대로',
		'encargaTuTartaPage.philosophy5.desc':
			'속 재료와 장식 방법을 직접 선택하세요 — 고객님 한 분 한 분이 다르듯 케이크도 모두 다릅니다.',
		'encargaTuTartaPage.closingText': '매장으로 오셔서 원하시는 케이크를 말씀해 주세요 — 함께 만들어 가겠습니다.',

		'servicesGrid.title': 'Gisela가 당신을 위해 할 수 있는 모든 것',
		'servicesGrid.subtitle': '팀의 아침 식사부터 꿈꾸던 케이크까지 — 저희가 준비한 모든 것을 만나보세요.',
		'servicesGrid.empresas.title': '기업 고객',
		'servicesGrid.empresas.tagline': '조식, 케이터링, 기업 선물',
		'servicesGrid.empresas.alt': '기업을 위해 준비된 Gisela Pastelería Natural의 디저트 박스',
		'servicesGrid.horno.title': '맞춤 조식 & 바구니',
		'servicesGrid.horno.tagline': '오븐에서 집까지, 원하실 때 언제든지',
		'servicesGrid.horno.alt': '집으로 가져갈 준비가 된 Gisela Pastelería Natural의 수제 조식',
		'servicesGrid.tartas.title': '맞춤 케이크',
		'servicesGrid.tartas.tagline': '크기, 맛, 장식을 원하는 대로',
		'servicesGrid.tartas.alt': 'Gisela Pastelería Natural의 맞춤 케이크',
		'servicesGrid.mesasDulces.title': '이벤트를 위한 디저트 테이블',
		'servicesGrid.mesasDulces.tagline': '결혼식, 첫영성체, 각종 행사에 맞춘 맞춤 구성',
		'servicesGrid.mesasDulces.alt': 'Gisela Pastelería Natural의 장식된 디저트 테이블',

		'meta.paraEmpresas.title': '기업을 위한 Gisela | Gisela Pastelería Natural',
		'meta.paraEmpresas.description': '폰페라다의 Gisela Pastelería Natural이 선사하는 업무용 조식, 행사 케이터링, 기업 선물.',
		'paraEmpresasPage.eyebrow': '기업 고객',
		'paraEmpresasPage.title': '기업을 위한 Gisela',
		'paraEmpresasPage.subtitle': '업무용 조식, 행사 케이터링, 기업 선물까지 — 귀사도 Gisela의 맛을 누려보세요.',
		'paraEmpresasPage.item1.title': '업무용 조식',
		'paraEmpresasPage.item1.desc': '팀 회의를 위한 갓 만든 달콤하고 짭짤한 디저트 트레이.',
		'paraEmpresasPage.item2.title': '행사 케이터링',
		'paraEmpresasPage.item2.desc': '발표, 교육, 회사 행사를 위한 맞춤 디저트와 짭짤한 요리.',
		'paraEmpresasPage.item3.title': '기업 선물',
		'paraEmpresasPage.item3.desc': '고객, 협력사 또는 직원들에게 선물할 수 있는 맞춤형 박스와 바구니.',
		'paraEmpresasPage.item4.title': '기업용 세금계산서 발행',
		'paraEmpresasPage.item4.desc': '세금계산서 발행이 가능해 기업 관리가 간편합니다.',
		'paraEmpresasPage.ctaTitle': '다음 행사에 대해 이야기해 볼까요?',
		'paraEmpresasPage.ctaText': '필요하신 것을 알려주시면 함께 준비해 드립니다 — 메시지를 보내주시거나 매장을 방문해 주세요.',
		'paraEmpresasPage.ctaEmail': '메시지 보내기',
		'paraEmpresasPage.ctaCall': '전화하기',
		'paraEmpresasPage.cateringTitle': '세이보리 케이터링',
		'paraEmpresasPage.cateringText':
			'회의, 커피 브레이크, 기업 행사를 위한 다양한 짭짤한 핑거푸드 — 나눠 먹기 좋습니다.',
		'paraEmpresasPage.cateringAlt1': '기업 케이터링용 아보카도, 토마토, 치즈 토스트 모음',
		'paraEmpresasPage.cateringAlt2': '케이터링용 엠파나디야, 속을 채운 크루아상, 미니 샌드위치 모음',

		'meta.delHorno.title': '오븐에서 집까지 | Gisela Pastelería Natural',
		'meta.delHorno.description': '갓 구워 집까지 배달되는 Gisela Pastelería Natural의 맞춤 조식과 바구니.',
		'delHornoPage.eyebrow': '홈 딜리버리',
		'delHornoPage.title': '오븐에서 집까지',
		'delHornoPage.subtitle': '갓 구운 맞춤 조식과 바구니를 어디에 계시든 놀라운 순간으로 만들어 드립니다.',
		'delHornoPage.item1.title': '조식 배달',
		'delHornoPage.item1.desc': '원하시는 조식을 선택하시면 이른 아침 따뜻하게 배달해 드립니다.',
		'delHornoPage.item2.title': '맞춤 바구니',
		'delHornoPage.item2.desc': '디저트, 짭짤한 요리, 음료를 조합해 나만의 바구니를 만들어보세요 — 선물로도 완벽합니다.',
		'delHornoPage.item3.title': '특별한 날',
		'delHornoPage.item3.desc': '생일, 기념일, 혹은 달콤함이 필요한 평범한 하루까지.',
		'delHornoPage.item4.title': '주문 방법',
		'delHornoPage.item4.desc': '원하시는 날짜와 내용을 알려주시면 나머지는 저희가 준비합니다.',
		'delHornoPage.ctaTitle': '바구니를 준비해 드릴까요?',
		'delHornoPage.ctaText': '어떤 날인지, 무엇을 원하시는지 알려주세요 — 메시지를 보내주시거나 매장을 방문해 주세요.',
		'delHornoPage.ctaEmail': '메시지 보내기',
		'delHornoPage.ctaCall': '전화하기',

		'meta.mesasDulces.title': '이벤트를 위한 디저트 테이블 | Gisela Pastelería Natural',
		'meta.mesasDulces.description':
			'결혼식, 첫영성체, 생일, 기업 행사를 위한 맞춤 디저트 테이블과 웨딩 케이크.',

		'mesasDulcesPage.eyebrow': '이벤트를 위해',
		'mesasDulcesPage.title': '반하게 되는 디저트 테이블',
		'mesasDulcesPage.subtitle':
			'결혼식, 첫영성체, 생일, 기업 행사까지 — Gisela만의 스타일과 맛을 담은 맞춤 디저트 테이블을 만들어 드립니다.',
		'mesasDulcesPage.item1.title': '맞춤 디저트 테이블',
		'mesasDulcesPage.item1.desc': '행사의 테마, 색상, 하객 수에 맞춰 디저트 구성을 디자인합니다.',
		'mesasDulcesPage.item2.title': '웨딩 케이크 & 이벤트 케이크',
		'mesasDulcesPage.item2.desc': '원하시는 맛과 스타일로 특별한 날을 위한 맞춤 케이크를 만들어 드립니다.',
		'mesasDulcesPage.item3.title': '하객을 위한 답례품',
		'mesasDulcesPage.item3.desc': '하객들이 맛있는 추억을 가져갈 수 있도록 작은 상자와 개별 디저트를 준비합니다.',
		'mesasDulcesPage.item4.title': '상담 및 세팅',
		'mesasDulcesPage.item4.desc': '첫 스케치부터 행사 당일 세팅까지 함께합니다.',
		'mesasDulcesPage.galleryTitle': '당신의 취향대로 맞춤 제작',
		'mesasDulcesPage.gallerySubtitle': '빵집으로 오셔서 직접 만나 세부 사항을 함께 정해요.',
		'mesasDulcesPage.gallery.alt1': '마카롱, 컵케이크, 꽃으로 장식된 디저트 테이블',
		'mesasDulcesPage.gallery.alt2': '장식된 케이크 조각',
		'mesasDulcesPage.gallery.alt3': 'Gisela의 수제 애플 케이크',
		'mesasDulcesPage.gallery.alt4': 'Gisela Pastelería Natural의 디저트 모음',
		'mesasDulcesPage.ctaTitle': '계획 중인 행사가 있으신가요?',
		'mesasDulcesPage.ctaText':
			'날짜, 스타일, 하객 수를 알려주시면 함께 완벽한 디저트 테이블을 디자인해 드립니다.',
		'mesasDulcesPage.ctaEmail': '메시지 보내기',
		'mesasDulcesPage.ctaCall': '지금 전화하기',

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
		'footer.designedBy': '디자인:',

		'carta.title': '메뉴판',
		'carta.intro':
			'이곳에서 보고, 향을 맡고, 맛보는 모든 것 — 달콤한 것과 짭짤한 것 모두 — 저희 공방에서 정직한 재료로, 가능한 한 지역 재료로 직접 만듭니다. 알레르기 정보는 저희 직원에게 문의해 주세요.',

		'meta.home.title': 'Gisela Pastelería Natural | 폰페라다의 수제 베이커리',
		'meta.home.description':
			'스페인 폰페라다, 레온의 천연 수제 베이커리. 매일 천연 재료로 만드는 케이크, 디저트, 홈메이드 페이스트리.',
		'meta.carta.title': '메뉴 | Gisela Pastelería Natural',
		'meta.carta.description':
			'Gisela Pastelería Natural의 메뉴를 확인하세요: 폰페라다 공방에서 매일 만드는 케이크, 디저트, 아침 식사, 음료.',
		'meta.especialidades.title': '스페셜 메뉴 | Gisela Pastelería Natural',
		'meta.especialidades.description':
			'폰페라다의 Gisela Pastelería Natural에서 매일 구운 디저트, 선물용 박스, 스페셜티 커피를 만나보세요.',
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
		'nav.bcb': 'BCB',
		'nav.carta': '菜单',
		'aria.openMenu': '打开菜单',

		'hero.badge1': '家族经营的烘焙坊',
		'hero.badge2': '诚实天然',
		'hero.title': '幸福是可以品尝的，我们有这个秘方',
		'hero.imageAlt': 'Gisela天然烘焙坊的手工苹果蛋糕',
		'hero.subtitle':
			'在Gisela天然烘焙坊，我们手工制作每一块蛋糕和每一款甜点，用心挑选食材产地，让您每天都能品尝到最地道的味道。',
		'hero.ctaOrder': '预定你的蛋糕',
		'hero.ctaInstagram': '关注我们的Instagram',
		'hero.scroll': '继续向下滑动',

		'historia.eyebrow': '我们的故事',
		'historia.title': '自2010年起梦想成真',
		'historia.p1':
			'2010年我们开设了"Gisela"，一年多前我们搬到了城堡门前，邀请您走进我们的家，享用一顿美味的早餐，不慌不忙地品味真实而独特的美味。',
		'historia.p2':
			'我们每天都用诚实的食材工作，并尽可能选用本地食材：来自Panadería Álex的面包、Bonarte的精品咖啡，以及La Tetera Azúl的花草茶。',
		'historia.badge1': '幸福是可以吃的',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Gisela团队的Alan正在享用我们的曲奇',

		'especialidades.eyebrow': '特色推荐',
		'especialidades.title': '不容错过的美味',
		'especialidades.badge': '无防腐剂',
		'especialidades.item1.title': '早餐',
		'especialidades.item1.desc': '用我们每天新鲜出炉的面包和甜点，开启元气满满的一天。',
		'especialidades.item1.alt': 'Gisela天然烘焙坊的早餐，搭配蛋糕与新鲜水果',
		'especialidades.item2.title': '企业餐饮服务',
		'especialidades.item2.desc': '为会议、活动和企业庆典定制的甜点与咸点。',
		'especialidades.item2.alt': 'Gisela天然烘焙坊为企业餐饮服务准备的甜点精选',
		'especialidades.item3.title': '定制蛋糕',
		'especialidades.item3.desc': '选择尺寸、口味与装饰——每个蛋糕都按您的喜好制作。',
		'especialidades.item3.alt': 'Gisela天然烘焙坊的定制苹果蛋糕',

		'especialidadesPage.intro':
			'从新鲜早餐到企业餐饮服务，再到定制蛋糕：这些都是您来访时不容错过的。',
		'especialidadesPage.ctaTitle': '想看看完整菜单吗？',
		'especialidadesPage.ctaText': '在我们的完整菜单中探索所有甜点、蛋糕和咸点。',

		'nav.encargaTuTarta': '定制蛋糕',
		'meta.encargaTuTarta.title': '定制蛋糕 | Gisela Pastelería Natural',
		'meta.encargaTuTarta.description':
			'在蓬费拉达的Gisela天然烘焙坊，亲口告诉我们您想要的蛋糕之前，先了解我们定制蛋糕的样子。',
		'encargaTuTartaPage.eyebrow': '在烘焙坊',
		'encargaTuTartaPage.title': '定制蛋糕',
		'encargaTuTartaPage.subtitle':
			'这个页面是一份指南，让您在当面告诉我们之前，先看看我们的蛋糕是什么样子——我们不接受线上蛋糕订单，请到店里告诉我们您理想中的蛋糕。',
		'encargaTuTartaPage.diagram.bizcocho': '海绵蛋糕胚',
		'encargaTuTartaPage.diagram.mousse': '慕斯',
		'encargaTuTartaPage.diagram.decoracion': '装饰',
		'encargaTuTartaPage.sizesTitle': '选择尺寸',
		'encargaTuTartaPage.sizesIntro': '我们所有的蛋糕份数均为偶数。',
		'encargaTuTartaPage.sizeUnit': '人份',
		'encargaTuTartaPage.sizesMore': '也可以定制更大尺寸，同样为偶数——请直接告诉我们。',
		'encargaTuTartaPage.flavorsTitle': '选择您的口味',
		'encargaTuTartaPage.flavorsNote': '通常选择两种口味，传统口味蛋糕除外。',
		'encargaTuTartaPage.flavorsCategory.mousse': '天然水果慕斯',
		'encargaTuTartaPage.flavorsCategory.chocolate': '巧克力',
		'encargaTuTartaPage.flavorsCategory.galletas': '饼干',
		'encargaTuTartaPage.flavorsCategory.frutosSecos': '坚果',
		'encargaTuTartaPage.flavorsCategory.clasicos': '经典口味',
		'encargaTuTartaPage.traditionalTitle': '传统蛋糕口味',

		'encargaTuTartaPage.philosophyTitle': '我们的蛋糕',
		'encargaTuTartaPage.philosophy1.title': '高层蛋糕',
		'encargaTuTartaPage.philosophy1.desc': '多层海绵蛋糕与慕斯叠加，让每一块都分量十足。',
		'encargaTuTartaPage.philosophy2.title': '天然慕斯',
		'encargaTuTartaPage.philosophy2.desc': '选用真正的慕斯夹心，口味由您决定。',
		'encargaTuTartaPage.philosophy3.title': '奶油或松露外层',
		'encargaTuTartaPage.philosophy3.desc': '外层覆盖打发奶油或巧克力松露，绝不使用翻糖。',
		'encargaTuTartaPage.philosophy4.title': '不使用翻糖',
		'encargaTuTartaPage.philosophy4.desc':
			'翻糖说到底只是加了色素的糖膏。我们更希望您能享用整个蛋糕，不留下任何浪费。',
		'encargaTuTartaPage.philosophy5.title': '口味与装饰随心定制',
		'encargaTuTartaPage.philosophy5.desc':
			'您来选择夹心口味和装饰方式——每一个蛋糕都不同，正如每一位顾客都独一无二。',
		'encargaTuTartaPage.closingText': '欢迎到店告诉我们您想要的样子——我们一起把它做出来。',

		'servicesGrid.title': 'Gisela能为您做的一切',
		'servicesGrid.subtitle': '从团队的早餐到梦想中的蛋糕——探索我们为您准备的一切。',
		'servicesGrid.empresas.title': '企业服务',
		'servicesGrid.empresas.tagline': '早餐、餐饮服务与企业礼品',
		'servicesGrid.empresas.alt': '为企业准备的Gisela天然烘焙坊甜点礼盒',
		'servicesGrid.horno.title': '定制早餐与礼篮',
		'servicesGrid.horno.tagline': '新鲜出炉，随时送到您家',
		'servicesGrid.horno.alt': 'Gisela天然烘焙坊准备好带回家的手工早餐',
		'servicesGrid.tartas.title': '定制蛋糕',
		'servicesGrid.tartas.tagline': '尺寸、口味与装饰，随您心意',
		'servicesGrid.tartas.alt': 'Gisela天然烘焙坊的定制蛋糕',
		'servicesGrid.mesasDulces.title': '为您的活动打造甜品桌',
		'servicesGrid.mesasDulces.tagline': '婚礼、领圣体礼与各类庆典，尽在您的心意',
		'servicesGrid.mesasDulces.alt': 'Gisela天然烘焙坊装饰精美的甜品桌',

		'meta.paraEmpresas.title': '企业版Gisela | Gisela Pastelería Natural',
		'meta.paraEmpresas.description': '蓬费拉达Gisela天然烘焙坊为企业提供的工作早餐、活动餐饮与企业礼品。',
		'paraEmpresasPage.eyebrow': '企业服务',
		'paraEmpresasPage.title': '企业版Gisela',
		'paraEmpresasPage.subtitle': '工作早餐、活动餐饮与企业礼品——让您的企业也能享受Gisela的美味。',
		'paraEmpresasPage.item1.title': '工作早餐',
		'paraEmpresasPage.item1.desc': '新鲜制作的甜点与咸点拼盘，为团队会议开启美好的一天。',
		'paraEmpresasPage.item2.title': '活动餐饮',
		'paraEmpresasPage.item2.desc': '为演讲、培训或公司庆典量身定制的甜咸点心。',
		'paraEmpresasPage.item3.title': '企业礼品',
		'paraEmpresasPage.item3.desc': '可定制的礼盒和礼篮，赠予客户、供应商或您的团队。',
		'paraEmpresasPage.item4.title': '企业开票服务',
		'paraEmpresasPage.item4.desc': '订单可开具发票，方便企业管理。',
		'paraEmpresasPage.ctaTitle': '一起聊聊您的下一场活动吧？',
		'paraEmpresasPage.ctaText': '告诉我们您的需求，我们一起准备——请联系我们或亲临店内。',
		'paraEmpresasPage.ctaEmail': '联系我们',
		'paraEmpresasPage.ctaCall': '致电我们',
		'paraEmpresasPage.cateringTitle': '咸味餐饮服务',
		'paraEmpresasPage.cateringText': '为您的会议、茶歇和企业活动准备的多样咸味小食，方便分享。',
		'paraEmpresasPage.cateringAlt1': '为企业餐饮准备的牛油果、番茄和奶酪什锦吐司',
		'paraEmpresasPage.cateringAlt2': '餐饮用什锦小馅饼、夹馅牛角包和迷你三明治精选',

		'meta.delHorno.title': '从烤箱到您家 | Gisela Pastelería Natural',
		'meta.delHorno.description': 'Gisela天然烘焙坊的定制早餐与礼篮，新鲜出炉，随时送到您家。',
		'delHornoPage.eyebrow': '送货上门',
		'delHornoPage.title': '从烤箱到您家',
		'delHornoPage.subtitle': '新鲜出炉的定制早餐与礼篮，无论您在哪里，都能带来惊喜。',
		'delHornoPage.item1.title': '早餐配送',
		'delHornoPage.item1.desc': '选择您喜欢的早餐，我们会在清晨为您送上热腾腾的美味。',
		'delHornoPage.item2.title': '定制礼篮',
		'delHornoPage.item2.desc': '搭配甜点、咸点与饮品，打造专属礼篮——送礼首选。',
		'delHornoPage.item3.title': '特别时刻',
		'delHornoPage.item3.desc': '生日、纪念日，或只是平凡的一天，都值得一份甜蜜。',
		'delHornoPage.item4.title': '如何下单',
		'delHornoPage.item4.desc': '告诉我们日期和您的心意，其余的交给我们。',
		'delHornoPage.ctaTitle': '为您准备礼篮好吗？',
		'delHornoPage.ctaText': '告诉我们场合和您的心意——请联系我们或亲临店内。',
		'delHornoPage.ctaEmail': '联系我们',
		'delHornoPage.ctaCall': '致电我们',

		'meta.mesasDulces.title': '活动甜品桌 | Gisela Pastelería Natural',
		'meta.mesasDulces.description':
			'为您的婚礼、领圣体礼、生日与企业活动打造定制甜品桌与婚礼蛋糕。',

		'mesasDulcesPage.eyebrow': '为您的活动',
		'mesasDulcesPage.title': '令人心动的甜品桌',
		'mesasDulcesPage.subtitle':
			'婚礼、领圣体礼、生日与企业庆典——我们为您打造融入Gisela风格与风味的定制甜品桌。',
		'mesasDulcesPage.item1.title': '定制甜品桌',
		'mesasDulcesPage.item1.desc': '根据您活动的主题、色彩与宾客人数，为您设计甜品搭配。',
		'mesasDulcesPage.item2.title': '婚礼与庆典蛋糕',
		'mesasDulcesPage.item2.desc': '为您人生的重要时刻定制蛋糕，呈现您心中的风味与风格。',
		'mesasDulcesPage.item3.title': '宾客小礼',
		'mesasDulcesPage.item3.desc': '精致小盒与独立甜点，让宾客带走一份美味的回忆。',
		'mesasDulcesPage.item4.title': '咨询与现场布置',
		'mesasDulcesPage.item4.desc': '从最初的构思到活动当天的现场布置，我们全程陪伴。',
		'mesasDulcesPage.galleryTitle': '按你的喜好定制',
		'mesasDulcesPage.gallerySubtitle': '欢迎到店与我们当面沟通，敲定每一个细节。',
		'mesasDulcesPage.gallery.alt1': '以马卡龙、纸杯蛋糕与鲜花装饰的甜品桌',
		'mesasDulcesPage.gallery.alt2': '精心装饰的单人蛋糕块',
		'mesasDulcesPage.gallery.alt3': 'Gisela手工苹果蛋糕',
		'mesasDulcesPage.gallery.alt4': 'Gisela天然烘焙坊的甜点精选',
		'mesasDulcesPage.ctaTitle': '正在筹备活动吗？',
		'mesasDulcesPage.ctaText':
			'告诉我们日期、风格与宾客人数，我们一起为您设计完美的甜品桌。',
		'mesasDulcesPage.ctaEmail': '联系我们',
		'mesasDulcesPage.ctaCall': '立即致电',

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
		'footer.designedBy': '设计：',

		'carta.title': '我们的菜单',
		'carta.intro':
			'您在这里看到、闻到和品尝到的一切——无论甜点还是咸食——都是我们在自己的烘焙工坊制作的，使用诚实的食材，并尽可能选用本地食材。请向我们的员工咨询过敏原信息。',

		'meta.home.title': 'Gisela Pastelería Natural | 蓬费拉达手工烘焙坊',
		'meta.home.description':
			'西班牙莱昂省蓬费拉达的天然手工烘焙坊。每天用天然食材制作的蛋糕、甜点和自制糕点。',
		'meta.carta.title': '菜单 | Gisela Pastelería Natural',
		'meta.carta.description':
			'查看Gisela天然烘焙坊的菜单：每天在蓬费拉达工坊制作的蛋糕、甜点、早餐和饮品。',
		'meta.especialidades.title': '特色推荐 | Gisela Pastelería Natural',
		'meta.especialidades.description':
			'在蓬费拉达的Gisela天然烘焙坊，探索我们每日新鲜制作的甜点、礼盒和精品咖啡。',
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
	},
	pt: {
		'nav.bcb': 'BCB',
		'nav.carta': 'Menu',
		'aria.openMenu': 'Abrir menu',

		'hero.badge1': 'Obrador familiar',
		'hero.badge2': 'Honestamente natural',
		'hero.title': 'A felicidade come-se, e temos a receita',
		'hero.imageAlt': 'Bolo de maçã artesanal da Gisela Pastelería Natural',
		'hero.subtitle':
			'Na Gisela Pastelería Natural elaboramos cada bolo e cada doce de forma artesanal, cuidando a origem dos nossos ingredientes para que possa desfrutar de um sabor autêntico, todos os dias.',
		'hero.ctaOrder': 'Encomende o seu bolo',
		'hero.ctaInstagram': 'Siga-nos no Instagram',
		'hero.scroll': 'Continue a descer',

		'historia.eyebrow': 'A nossa história',
		'historia.title': 'Um sonho tornado realidade desde 2010',
		'historia.p1':
			'Em 2010 abrimos a "Gisela" e já lá vai mais de um ano desde que nos mudámos para os portões do nosso castelo, para o convidar a entrar em nossa casa, tomar um bom pequeno-almoço e desfrutar, sem pressa, de algo delicioso, real e único.',
		'historia.p2':
			'Trabalhamos todos os dias com ingredientes honestos e, sempre que possível, de quilómetro zero: pão da Panadería Álex, café de especialidade da Bonarte e as infusões da La Tetera Azúl.',
		'historia.badge1': 'A felicidade come-se',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Alan, da equipa Gisela, a saborear uma das nossas kukis',

		'especialidades.eyebrow': 'Especialidades',
		'especialidades.title': 'O que não pode perder',
		'especialidades.badge': 'Sem conservantes',
		'especialidades.item1.title': 'Pequenos-almoços',
		'especialidades.item1.desc':
			'Comece o dia com um pequeno-almoço completo e acabado de fazer, com o nosso pão e doces da manhã.',
		'especialidades.item1.alt': 'Pequeno-almoço na Gisela Pastelería Natural com bolo e fruta fresca',
		'especialidades.item2.title': 'Catering para empresas',
		'especialidades.item2.desc':
			'Doces e salgados para reuniões, eventos e celebrações de empresa, feitos à sua medida.',
		'especialidades.item2.alt': 'Seleção de doces da Gisela Pastelería Natural para catering de empresas',
		'especialidades.item3.title': 'Bolos personalizados',
		'especialidades.item3.desc': 'Escolha o tamanho, o sabor e a decoração — cada bolo é feito ao seu gosto.',
		'especialidades.item3.alt': 'Bolo de maçã personalizado da Gisela Pastelería Natural',

		'especialidadesPage.intro':
			'Desde pequenos-almoços acabados de fazer até catering para empresas e bolos à sua medida: isto é o que não pode perder quando nos visitar.',
		'especialidadesPage.ctaTitle': 'Apetece-lhe ver a carta completa?',
		'especialidadesPage.ctaText':
			'Descubra todos os nossos doces, bolos e salgados na nossa carta completa.',

		'nav.encargaTuTarta': 'Encomende o seu bolo',
		'meta.encargaTuTarta.title': 'Encomende o seu bolo | Gisela Pastelería Natural',
		'meta.encargaTuTarta.description':
			'Veja como são os nossos bolos personalizados antes de nos dizer como o quer, na Gisela Pastelería Natural, em Ponferrada.',
		'encargaTuTartaPage.eyebrow': 'Na pastelaria',
		'encargaTuTartaPage.title': 'Encomende o seu bolo',
		'encargaTuTartaPage.subtitle':
			'Esta página é um guia para ver como são os nossos bolos antes de nos contar pessoalmente — não recebemos encomendas de bolos online, venha contar-nos o seu bolo ideal na pastelaria.',
		'encargaTuTartaPage.diagram.bizcocho': 'Pão de ló',
		'encargaTuTartaPage.diagram.mousse': 'Mousse',
		'encargaTuTartaPage.diagram.decoracion': 'Decoração',
		'encargaTuTartaPage.sizesTitle': 'Escolha o tamanho',
		'encargaTuTartaPage.sizesIntro': 'Todos os nossos bolos são feitos em número par de doses.',
		'encargaTuTartaPage.sizeUnit': 'pessoas',
		'encargaTuTartaPage.sizesMore': 'E tamanhos maiores também, sempre em número par — basta dizer-nos.',
		'encargaTuTartaPage.flavorsTitle': 'Escolha o seu sabor',
		'encargaTuTartaPage.flavorsNote':
			'Normalmente escolhem-se dois sabores, exceto nos bolos de sabor tradicional.',
		'encargaTuTartaPage.flavorsCategory.mousse': 'Mousse de frutas naturais',
		'encargaTuTartaPage.flavorsCategory.chocolate': 'Chocolate',
		'encargaTuTartaPage.flavorsCategory.galletas': 'Bolachas',
		'encargaTuTartaPage.flavorsCategory.frutosSecos': 'Frutos secos',
		'encargaTuTartaPage.flavorsCategory.clasicos': 'Clássicos',
		'encargaTuTartaPage.traditionalTitle': 'Sabores para bolos tradicionais',

		'encargaTuTartaPage.philosophyTitle': 'Os nossos bolos',
		'encargaTuTartaPage.philosophy1.title': 'Bolos altos',
		'encargaTuTartaPage.philosophy1.desc':
			'Várias camadas de pão de ló e mousse, para que cada fatia tenha presença real.',
		'encargaTuTartaPage.philosophy2.title': 'Mousses naturais',
		'encargaTuTartaPage.philosophy2.desc': 'Recheados com mousse a sério, com o sabor que escolher.',
		'encargaTuTartaPage.philosophy3.title': 'Cobertura de nata ou trufa',
		'encargaTuTartaPage.philosophy3.desc':
			'Cobertos com chantilly ou trufa de chocolate, nunca com pasta de açúcar.',
		'encargaTuTartaPage.philosophy4.title': 'Sem pasta de açúcar',
		'encargaTuTartaPage.philosophy4.desc':
			'A pasta de açúcar não deixa de ser, no fundo, açúcar com corante. Preferimos que aproveite o bolo todo, sem sobrar nada.',
		'encargaTuTartaPage.philosophy5.title': 'Sabor e decoração ao seu gosto',
		'encargaTuTartaPage.philosophy5.desc':
			'Escolhe o recheio e como o quer decorado — cada bolo é diferente porque cada cliente também é.',
		'encargaTuTartaPage.closingText':
			'Venha à pastelaria e conte-nos como o quer — entre os dois damos-lhe forma.',

		'servicesGrid.title': 'Tudo o que a Gisela pode fazer por si',
		'servicesGrid.subtitle':
			'Do pequeno-almoço da sua equipa ao bolo dos seus sonhos — descubra tudo o que preparamos para si.',
		'servicesGrid.empresas.title': 'Para empresas',
		'servicesGrid.empresas.tagline': 'Pequenos-almoços, catering e presentes corporativos',
		'servicesGrid.empresas.alt': 'Caixas de doces da Gisela Pastelería Natural preparadas para empresas',
		'servicesGrid.horno.title': 'Pequenos-almoços e cestas personalizadas',
		'servicesGrid.horno.tagline': 'Do forno até sua casa, quando quiser',
		'servicesGrid.horno.alt': 'Pequeno-almoço artesanal da Gisela Pastelería Natural pronto para levar para casa',
		'servicesGrid.tartas.title': 'Bolos personalizados',
		'servicesGrid.tartas.tagline': 'O tamanho, o sabor e a decoração, ao seu gosto',
		'servicesGrid.tartas.alt': 'Bolo personalizado da Gisela Pastelería Natural',
		'servicesGrid.mesasDulces.title': 'Mesas doces para os seus eventos',
		'servicesGrid.mesasDulces.tagline': 'Casamentos, comunhões e celebrações à sua medida',
		'servicesGrid.mesasDulces.alt': 'Mesa doce decorada da Gisela Pastelería Natural',

		'meta.paraEmpresas.title': 'Gisela para empresas | Gisela Pastelería Natural',
		'meta.paraEmpresas.description':
			'Pequenos-almoços de trabalho, catering para eventos e presentes corporativos com o sabor artesanal da Gisela Pastelería Natural, em Ponferrada.',
		'paraEmpresasPage.eyebrow': 'Para empresas',
		'paraEmpresasPage.title': 'Gisela para empresas',
		'paraEmpresasPage.subtitle':
			'Pequenos-almoços de trabalho, catering para eventos e presentes corporativos, com o sabor artesanal de sempre — para que a sua empresa também desfrute da Gisela.',
		'paraEmpresasPage.item1.title': 'Pequenos-almoços de trabalho',
		'paraEmpresasPage.item1.desc':
			'Tabuleiros de doces e salgados acabados de fazer para começar bem as reuniões da sua equipa.',
		'paraEmpresasPage.item2.title': 'Catering para eventos',
		'paraEmpresasPage.item2.desc':
			'Propostas doces e salgadas à medida para apresentações, formações ou celebrações de empresa.',
		'paraEmpresasPage.item3.title': 'Presentes corporativos',
		'paraEmpresasPage.item3.desc':
			'Caixas e cestas personalizáveis para oferecer a clientes, fornecedores ou à sua própria equipa.',
		'paraEmpresasPage.item4.title': 'Faturação para empresas',
		'paraEmpresasPage.item4.desc': 'Encomendas com fatura, para que a gestão com a sua empresa seja simples.',
		'paraEmpresasPage.ctaTitle': 'Vamos falar sobre o seu próximo evento?',
		'paraEmpresasPage.ctaText':
			'Diga-nos o que precisa e preparamos juntos — escreva-nos ou passe pela pastelaria.',
		'paraEmpresasPage.ctaEmail': 'Escreva-nos',
		'paraEmpresasPage.ctaCall': 'Ligue-nos',
		'paraEmpresasPage.cateringTitle': 'Catering salgado',
		'paraEmpresasPage.cateringText':
			'Para as suas reuniões, coffee breaks e eventos de empresa: uma seleção variada de petiscos salgados, prontos a partilhar.',
		'paraEmpresasPage.cateringAlt1': 'Tostas variadas de abacate, tomate e queijo para catering empresarial',
		'paraEmpresasPage.cateringAlt2': 'Seleção de empadas, croissants recheados e mini sandes para catering',

		'meta.delHorno.title': 'Do forno para sua casa | Gisela Pastelería Natural',
		'meta.delHorno.description':
			'Pequenos-almoços e cestas personalizadas da Gisela Pastelería Natural, acabados de fazer e prontos para sua casa.',
		'delHornoPage.eyebrow': 'Ao domicílio',
		'delHornoPage.title': 'Do forno para sua casa',
		'delHornoPage.subtitle':
			'Pequenos-almoços e cestas personalizadas, acabados de fazer e prontos para surpreender onde quer que esteja.',
		'delHornoPage.item1.title': 'Pequeno-almoço ao domicílio',
		'delHornoPage.item1.desc':
			'Escolha entre as nossas propostas de pequeno-almoço e levamo-lo quentinho logo de manhã.',
		'delHornoPage.item2.title': 'Cestas personalizadas',
		'delHornoPage.item2.desc':
			'Combine doces, salgados e bebidas para criar uma cesta ao seu gosto — perfeita para oferecer.',
		'delHornoPage.item3.title': 'Ocasiões especiais',
		'delHornoPage.item3.desc': 'Aniversários, datas especiais ou um dia qualquer que merece um doce mimo.',
		'delHornoPage.item4.title': 'Como encomendar',
		'delHornoPage.item4.desc': 'Escreva-nos a data e o que lhe apetece, e nós tratamos do resto.',
		'delHornoPage.ctaTitle': 'Preparamos a sua cesta?',
		'delHornoPage.ctaText': 'Diga-nos a ocasião e o que lhe apetece — escreva-nos ou passe pela pastelaria.',
		'delHornoPage.ctaEmail': 'Escreva-nos',
		'delHornoPage.ctaCall': 'Ligue-nos',

		'meta.mesasDulces.title': 'Mesas doces para eventos | Gisela Pastelería Natural',
		'meta.mesasDulces.description':
			'Mesas doces personalizadas e bolos de casamento para as suas celebrações: casamentos, comunhões, aniversários e eventos de empresa.',

		'mesasDulcesPage.eyebrow': 'Para os seus eventos',
		'mesasDulcesPage.title': 'Mesas doces de encantar',
		'mesasDulcesPage.subtitle':
			'Casamentos, comunhões, aniversários e celebrações de empresa — criamos mesas doces à medida, com o estilo e os sabores da Gisela.',
		'mesasDulcesPage.item1.title': 'Mesas doces personalizadas',
		'mesasDulcesPage.item1.desc':
			'Desenhamos a seleção de doces de acordo com o tema, as cores e o número de convidados do seu evento.',
		'mesasDulcesPage.item2.title': 'Bolos de casamento e celebração',
		'mesasDulcesPage.item2.desc':
			'Bolos à medida para o grande dia, com o sabor e o estilo que imagina.',
		'mesasDulcesPage.item3.title': 'Mimos para os convidados',
		'mesasDulcesPage.item3.desc':
			'Caixinhas e doces individuais para que os seus convidados levem uma lembrança deliciosa.',
		'mesasDulcesPage.item4.title': 'Aconselhamento e montagem',
		'mesasDulcesPage.item4.desc':
			'Acompanhamo-lo desde o primeiro esboço até à montagem no dia do evento.',
		'mesasDulcesPage.galleryTitle': 'Personalize ao seu gosto',
		'mesasDulcesPage.gallerySubtitle':
			'Venha à pastelaria e conversamos pessoalmente para acertar cada detalhe.',
		'mesasDulcesPage.gallery.alt1': 'Mesa doce decorada com macarons, cupcakes e flores',
		'mesasDulcesPage.gallery.alt2': 'Fatia de bolo individual decorada',
		'mesasDulcesPage.gallery.alt3': 'Tarte de maçã artesanal da Gisela',
		'mesasDulcesPage.gallery.alt4': 'Seleção de sobremesas da Gisela Pastelería Natural',
		'mesasDulcesPage.ctaTitle': 'Tem um evento em mente?',
		'mesasDulcesPage.ctaText':
			'Diga-nos a data, o estilo e o número de convidados, e desenhamos juntos a sua mesa doce perfeita.',
		'mesasDulcesPage.ctaEmail': 'Escreva-nos',
		'mesasDulcesPage.ctaCall': 'Ligar agora',

		'bcbTeaser.eyebrow': 'Para peregrinos do Caminho de Santiago',
		'bcbTeaser.title': 'BCB · Buen Camino Breakfast',
		'bcbTeaser.text':
			'Ofereça um pequeno-almoço a um peregrino: a um amigo, a um familiar ou a quem esteja a fazer o Caminho. A pessoa só precisa de passar pela Gisela Pastelería Natural e dizer-nos o seu nome para desfrutar.',
		'bcbTeaser.cta': 'Descubra o BCB',
		'bcbTeaser.badge': 'Cozemos para si',

		'bcbPage.title': 'BCB · Buen Camino Breakfast | Gisela Pastelería Natural',
		'bcbPage.description':
			'Ofereça um pequeno-almoço a um peregrino do Caminho de Santiago de passagem por Ponferrada. Um projeto da Gisela Pastelería Natural.',
		'bcbPage.poweredBy': 'Um projeto da Gisela Pastelería Natural',
		'bcbPage.intro':
			'Para quem faz o Caminho de Santiago e passa por Ponferrada: um pequeno-almoço a sério para recuperar forças. Ofereça-o a um amigo, a um familiar ou a quem esteja a caminhar — só precisa de passar pela Gisela e dizer-nos o seu nome.',
		'bcbPage.badge1': 'Bom Caminho',
		'bcbPage.badge2': 'Pequeno-almoço em Ponferrada',
		'bcbPage.regalar': 'Oferecer',
		'bcbPage.proximamente': 'Brevemente',
		'bcbPage.disclaimer':
			'Preços orientativos, sujeitos a ajuste. O pequeno-almoço é levantado na nossa loja em Ponferrada.',

		'tier.sencillo.name': 'Simples',
		'tier.sencillo.desc': 'Café de especialidade + torrada clássica.',
		'tier.completo.name': 'Completo',
		'tier.completo.desc': 'Bowl ou torrada especial + bebida + doce artesanal.',
		'tier.premium.name': 'Premium',
		'tier.premium.desc': 'Seleção premium + café de especialidade + doce artesanal.',

		'reviews.title': 'O que dizem os nossos clientes',
		'reviews.fallbackSubtitle': 'Avaliações verificadas do perfil de empresa do Google.',
		'reviews.countSuffix': 'avaliações no Google',
		'reviews.fallbackText':
			'Em breve poderá ver aqui as nossas avaliações reais do Google. Entretanto, pode consultá-las diretamente na nossa ficha de negócio.',
		'reviews.verMas': 'Ver mais',
		'reviews.verTodas': 'Ver todas as avaliações no Google',

		'map.visitanos': 'Visite-nos',
		'map.cta': 'Abrir no Google Maps →',
		'map.ariaLabel': 'Abrir a localização da Gisela Pastelería Natural no Google Maps',

		'footer.description':
			'Pastelaria natural e artesanal, feita todos os dias em Ponferrada com ingredientes de qualidade.',
		'footer.visitanos': 'Visite-nos',
		'footer.horario': 'Horário',
		'footer.dias': 'Segunda a domingo',
		'footer.rights': 'Todos os direitos reservados.',
		'footer.designedBy': 'Concebido por',

		'carta.title': 'O nosso menu',
		'carta.intro':
			'Tudo o que vê, cheira e saboreia aqui — doce e salgado — é elaborado no nosso próprio obrador, com ingredientes honestos e, sempre que possível, de quilómetro zero. Pergunte à nossa equipa sobre informação de alergénios.',

		'meta.home.title': 'Gisela Pastelería Natural | Pastelaria artesanal em Ponferrada',
		'meta.home.description':
			'Pastelaria natural e artesanal em Ponferrada, León. Bolos, doces e pastelaria caseira feitos todos os dias com ingredientes naturais.',
		'meta.carta.title': 'Menu | Gisela Pastelería Natural',
		'meta.carta.description':
			'Consulte o menu da Gisela Pastelería Natural: bolos, doces, pequenos-almoços e bebidas feitos diariamente no nosso obrador em Ponferrada.',
		'meta.especialidades.title': 'Especialidades | Gisela Pastelería Natural',
		'meta.especialidades.description':
			'Descubra os nossos doces artesanais, caixas para oferecer e café de especialidade na Gisela Pastelería Natural, Ponferrada.',
		'meta.historia.title': 'A nossa história | Gisela Pastelería Natural',
		'meta.historia.description':
			'Conheça a história da Gisela Pastelería Natural, um sonho tornado realidade desde 2010 em Ponferrada.',

		'historiaPage.location': 'Gisela Pastelería Natural · Ponferrada, León',
		'historiaPage.title': 'Uma tradutora que escolheu a <em>pastelaria</em>',
		'historiaPage.heroSubtitle':
			'A história de como três idiomas se tornaram o prólogo da melhor pastelaria do Bierzo.',
		'historiaPage.p1':
			'Gisela nasceu na Alemanha e construiu uma carreira brilhante como tradutora juramentada de inglês, alemão e chinês. Três idiomas. Três mundos. Mas havia algo que a atraía com mais força do que qualquer palavra: o seu amor pela pastelaria, nascido na cozinha da sua mãe.',
		'historiaPage.p2':
			'Decidiu deixar tudo para trás e abriu a Gisela Pastelería Natural com a sua mãe há mais de 16 anos. Desde então não parou de se formar em técnicas de pastelaria de todo o mundo, e construiu uma equipa unida que ela própria descreve como "uma massa mãe: misturados, unidos e a borbulhar de ideias".',
		'historiaPage.quote': 'Quer saber qual é o nosso ingrediente secreto? É não ter ingredientes secretos.',
		'historiaPage.p3':
			'Hoje, cada peça que sai do seu obrador leva ingredientes de quilómetro zero, sem conservantes nem aditivos. Porque a felicidade come-se, e aqui temos a receita.',
		'historiaPage.reviewsLabel': 'Avaliações do Google',
		'historiaPage.comingSoonBadge': 'Brevemente',
		'historiaPage.comingSoonTitle': 'Estamos a preparar algo especial para lhe contar tudo',
		'historiaPage.comingSoonText':
			'Aqui encontrará a história completa da Gisela: os seus anos como tradutora juramentada de inglês, alemão e chinês, o momento em que decidiu trocar as palavras pelo obrador, e como, junto com a sua mãe, construíram a pastelaria que Ponferrada merece. Uma história de coragem, massa mãe e muito amor pelo natural.',
		'historiaPage.backToSite': 'Voltar ao site',
		'historiaPage.imageAlt': 'Seleção de doces da Gisela Pastelería Natural'
	},
	it: {
		'nav.bcb': 'BCB',
		'nav.carta': 'Menu',
		'aria.openMenu': 'Apri il menu',

		'hero.badge1': 'Laboratorio familiare',
		'hero.badge2': 'Onestamente naturale',
		'hero.title': 'La felicità si mangia, e noi abbiamo la ricetta',
		'hero.imageAlt': 'Torta di mele artigianale di Gisela Pastelería Natural',
		'hero.subtitle':
			'Da Gisela Pastelería Natural realizziamo ogni torta e ogni dolce in modo artigianale, curando l\'origine dei nostri ingredienti affinché tu possa gustare un sapore autentico, ogni giorno.',
		'hero.ctaOrder': 'Ordina la tua torta',
		'hero.ctaInstagram': 'Seguici su Instagram',
		'hero.scroll': 'Continua a scorrere',

		'historia.eyebrow': 'La nostra storia',
		'historia.title': 'Un sogno diventato realtà dal 2010',
		'historia.p1':
			'Nel 2010 abbiamo aperto "Gisela" e ormai da più di un anno ci siamo trasferiti alle porte del nostro castello, per invitarti a casa nostra, gustare una buona colazione e goderti, senza fretta, qualcosa di buono, vero e unico.',
		'historia.p2':
			'Lavoriamo ogni giorno con ingredienti onesti e, quando possibile, a chilometro zero: pane di Panadería Álex, caffè speciality di Bonarte e le tisane di La Tetera Azúl.',
		'historia.badge1': 'La felicità si mangia',
		'historia.badge2': 'Km 0',
		'historia.imageAlt': 'Alan, del team Gisela, mentre gusta uno dei nostri kukis',

		'especialidades.eyebrow': 'Specialità',
		'especialidades.title': 'Quello che non puoi perderti',
		'especialidades.badge': 'Senza conservanti',
		'especialidades.item1.title': 'Colazioni',
		'especialidades.item1.desc':
			'Inizia la giornata con una colazione completa e appena fatta, con il nostro pane e i dolci del mattino.',
		'especialidades.item1.alt': 'Colazione da Gisela Pastelería Natural con torta e frutta fresca',
		'especialidades.item2.title': 'Catering per aziende',
		'especialidades.item2.desc': 'Dolci e salati per riunioni, eventi e feste aziendali, preparati su misura.',
		'especialidades.item2.alt': 'Selezione di dolci di Gisela Pastelería Natural per catering aziendale',
		'especialidades.item3.title': 'Torte personalizzate',
		'especialidades.item3.desc': 'Scegli la misura, il gusto e la decorazione — ogni torta è fatta come piace a te.',
		'especialidades.item3.alt': 'Torta di mele personalizzata di Gisela Pastelería Natural',

		'especialidadesPage.intro':
			'Dalle colazioni appena fatte al catering per aziende, fino alle torte su misura: ecco cosa non puoi perderti quando ci vieni a trovare.',
		'especialidadesPage.ctaTitle': 'Vuoi vedere tutta la carta?',
		'especialidadesPage.ctaText':
			'Scopri tutti i nostri dolci, torte e salati nella nostra carta completa.',

		'nav.encargaTuTarta': 'Ordina la tua torta',
		'meta.encargaTuTarta.title': 'Ordina la tua torta | Gisela Pastelería Natural',
		'meta.encargaTuTarta.description':
			'Scopri come sono le nostre torte personalizzate prima di dirci come la vuoi, da Gisela Pastelería Natural, a Ponferrada.',
		'encargaTuTartaPage.eyebrow': 'In pasticceria',
		'encargaTuTartaPage.title': 'Ordina la tua torta',
		'encargaTuTartaPage.subtitle':
			'Questa pagina è una guida per vedere come sono le nostre torte prima di dircelo di persona — non riceviamo ordini di torte online, vieni a raccontarci la tua torta ideale in pasticceria.',
		'encargaTuTartaPage.diagram.bizcocho': 'Pan di Spagna',
		'encargaTuTartaPage.diagram.mousse': 'Mousse',
		'encargaTuTartaPage.diagram.decoracion': 'Decorazione',
		'encargaTuTartaPage.sizesTitle': 'Scegli la misura',
		'encargaTuTartaPage.sizesIntro': 'Tutte le nostre torte sono fatte in porzioni pari.',
		'encargaTuTartaPage.sizeUnit': 'persone',
		'encargaTuTartaPage.sizesMore': 'E anche misure più grandi, sempre in numero pari — basta dircelo.',
		'encargaTuTartaPage.flavorsTitle': 'Scegli il tuo gusto',
		'encargaTuTartaPage.flavorsNote':
			'Di solito si scelgono due gusti, tranne per le torte dal gusto tradizionale.',
		'encargaTuTartaPage.flavorsCategory.mousse': 'Mousse di frutta naturale',
		'encargaTuTartaPage.flavorsCategory.chocolate': 'Cioccolato',
		'encargaTuTartaPage.flavorsCategory.galletas': 'Biscotti',
		'encargaTuTartaPage.flavorsCategory.frutosSecos': 'Frutta secca',
		'encargaTuTartaPage.flavorsCategory.clasicos': 'Classici',
		'encargaTuTartaPage.traditionalTitle': 'Gusti per torte tradizionali',

		'encargaTuTartaPage.philosophyTitle': 'Le nostre torte',
		'encargaTuTartaPage.philosophy1.title': 'Torte alte',
		'encargaTuTartaPage.philosophy1.desc':
			'Diversi strati di pan di Spagna e mousse, perché ogni fetta abbia una vera presenza.',
		'encargaTuTartaPage.philosophy2.title': 'Mousse naturali',
		'encargaTuTartaPage.philosophy2.desc': 'Farcite con mousse vera, con il gusto che preferisci.',
		'encargaTuTartaPage.philosophy3.title': 'Copertura di panna o tartufo',
		'encargaTuTartaPage.philosophy3.desc':
			'Ricoperte di panna montata o tartufo al cioccolato, mai pasta di zucchero.',
		'encargaTuTartaPage.philosophy4.title': 'Niente pasta di zucchero',
		'encargaTuTartaPage.philosophy4.desc':
			'La pasta di zucchero, in fondo, non è altro che zucchero colorato. Preferiamo che tu gusti tutta la torta, senza che avanzi nulla.',
		'encargaTuTartaPage.philosophy5.title': 'Gusto e decorazione a modo tuo',
		'encargaTuTartaPage.philosophy5.desc':
			'Scegli tu il ripieno e come vuoi che sia decorata — ogni torta è diversa perché ogni cliente lo è.',
		'encargaTuTartaPage.closingText': 'Vieni in pasticceria e raccontaci come la vuoi — la creiamo insieme.',

		'servicesGrid.title': 'Tutto ciò che Gisela può fare per te',
		'servicesGrid.subtitle':
			'Dalla colazione del tuo team alla torta dei tuoi sogni — scopri tutto ciò che prepariamo per te.',
		'servicesGrid.empresas.title': 'Per le aziende',
		'servicesGrid.empresas.tagline': 'Colazioni, catering e regali aziendali',
		'servicesGrid.empresas.alt': 'Scatole di dolci di Gisela Pastelería Natural preparate per le aziende',
		'servicesGrid.horno.title': 'Colazioni e ceste personalizzate',
		'servicesGrid.horno.tagline': 'Dal nostro forno a casa tua, quando vuoi',
		'servicesGrid.horno.alt': 'Colazione artigianale di Gisela Pastelería Natural pronta da portare a casa',
		'servicesGrid.tartas.title': 'Torte personalizzate',
		'servicesGrid.tartas.tagline': 'La misura, il gusto e la decorazione, come vuoi tu',
		'servicesGrid.tartas.alt': 'Torta personalizzata di Gisela Pastelería Natural',
		'servicesGrid.mesasDulces.title': 'Tavoli dolci per i tuoi eventi',
		'servicesGrid.mesasDulces.tagline': 'Matrimoni, comunioni e feste su misura',
		'servicesGrid.mesasDulces.alt': 'Tavolo dolce decorato di Gisela Pastelería Natural',

		'meta.paraEmpresas.title': 'Gisela per le aziende | Gisela Pastelería Natural',
		'meta.paraEmpresas.description':
			'Colazioni di lavoro, catering per eventi e regali aziendali con il gusto artigianale di Gisela Pastelería Natural, a Ponferrada.',
		'paraEmpresasPage.eyebrow': 'Per le aziende',
		'paraEmpresasPage.title': 'Gisela per le aziende',
		'paraEmpresasPage.subtitle':
			'Colazioni di lavoro, catering per eventi e regali aziendali, con lo stesso gusto artigianale — perché anche la tua azienda possa godersi Gisela.',
		'paraEmpresasPage.item1.title': 'Colazioni di lavoro',
		'paraEmpresasPage.item1.desc':
			'Vassoi di dolci e salati appena fatti per iniziare bene le riunioni del tuo team.',
		'paraEmpresasPage.item2.title': 'Catering per eventi',
		'paraEmpresasPage.item2.desc':
			'Proposte dolci e salate su misura per presentazioni, corsi di formazione o feste aziendali.',
		'paraEmpresasPage.item3.title': 'Regali aziendali',
		'paraEmpresasPage.item3.desc':
			'Scatole e ceste personalizzabili da regalare a clienti, fornitori o al tuo team.',
		'paraEmpresasPage.item4.title': 'Fatturazione per le aziende',
		'paraEmpresasPage.item4.desc': 'Ordini con fattura, per rendere semplice la gestione con la tua azienda.',
		'paraEmpresasPage.ctaTitle': 'Parliamo del tuo prossimo evento?',
		'paraEmpresasPage.ctaText':
			'Dicci di cosa hai bisogno e lo prepariamo insieme — scrivici o passa in pasticceria.',
		'paraEmpresasPage.ctaEmail': 'Scrivici',
		'paraEmpresasPage.ctaCall': 'Chiamaci',
		'paraEmpresasPage.cateringTitle': 'Catering salato',
		'paraEmpresasPage.cateringText':
			'Per le tue riunioni, coffee break ed eventi aziendali: una selezione variegata di stuzzichini salati, pronti da condividere.',
		'paraEmpresasPage.cateringAlt1': 'Tost misti con avocado, pomodoro e formaggio per catering aziendale',
		'paraEmpresasPage.cateringAlt2': 'Selezione di sfogliatine, croissant farciti e mini panini per catering',

		'meta.delHorno.title': 'Dal nostro forno a casa tua | Gisela Pastelería Natural',
		'meta.delHorno.description':
			'Colazioni e ceste personalizzate di Gisela Pastelería Natural, appena sfornate e pronte per casa tua.',
		'delHornoPage.eyebrow': 'A domicilio',
		'delHornoPage.title': 'Dal nostro forno a casa tua',
		'delHornoPage.subtitle':
			'Colazioni e ceste personalizzate, appena sfornate e pronte a sorprenderti ovunque tu sia.',
		'delHornoPage.item1.title': 'Colazione a domicilio',
		'delHornoPage.item1.desc': 'Scegli tra le nostre proposte di colazione e te la portiamo calda, di prima mattina.',
		'delHornoPage.item2.title': 'Ceste personalizzate',
		'delHornoPage.item2.desc':
			'Combina dolci, salati e bevande per creare una cesta come vuoi tu — perfetta da regalare.',
		'delHornoPage.item3.title': 'Occasioni speciali',
		'delHornoPage.item3.desc': 'Compleanni, anniversari o semplicemente un giorno qualunque che merita un dolce pensiero.',
		'delHornoPage.item4.title': 'Come ordinare',
		'delHornoPage.item4.desc': 'Scrivici la data e cosa desideri, e al resto pensiamo noi.',
		'delHornoPage.ctaTitle': 'Ti prepariamo la tua cesta?',
		'delHornoPage.ctaText': "Dicci l'occasione e cosa desideri — scrivici o passa in pasticceria.",
		'delHornoPage.ctaEmail': 'Scrivici',
		'delHornoPage.ctaCall': 'Chiamaci',

		'meta.mesasDulces.title': 'Tavoli dolci per eventi | Gisela Pastelería Natural',
		'meta.mesasDulces.description':
			'Tavoli dolci personalizzati e torte nuziali per le tue celebrazioni: matrimoni, comunioni, compleanni ed eventi aziendali.',

		'mesasDulcesPage.eyebrow': 'Per i tuoi eventi',
		'mesasDulcesPage.title': 'Tavoli dolci che innamorano',
		'mesasDulcesPage.subtitle':
			'Matrimoni, comunioni, compleanni e feste aziendali — creiamo tavoli dolci su misura, con lo stile e i sapori di Gisela.',
		'mesasDulcesPage.item1.title': 'Tavoli dolci personalizzati',
		'mesasDulcesPage.item1.desc':
			'Progettiamo la selezione di dolci in base al tema, ai colori e al numero di invitati del tuo evento.',
		'mesasDulcesPage.item2.title': 'Torte nuziali e per celebrazioni',
		'mesasDulcesPage.item2.desc':
			'Torte su misura per il grande giorno, con il gusto e lo stile che immagini.',
		'mesasDulcesPage.item3.title': 'Dettagli per gli invitati',
		'mesasDulcesPage.item3.desc':
			'Scatoline e dolci individuali perché i tuoi invitati portino a casa un delizioso ricordo.',
		'mesasDulcesPage.item4.title': 'Consulenza e allestimento',
		'mesasDulcesPage.item4.desc':
			'Ti accompagniamo dal primo bozzetto fino all\'allestimento il giorno dell\'evento.',
		'mesasDulcesPage.galleryTitle': 'Personalizzala a tuo piacere',
		'mesasDulcesPage.gallerySubtitle':
			'Vieni in pasticceria e parliamone di persona per definire ogni dettaglio.',
		'mesasDulcesPage.gallery.alt1': 'Tavolo dolce decorato con macaron, cupcake e fiori',
		'mesasDulcesPage.gallery.alt2': 'Porzione di torta individuale decorata',
		'mesasDulcesPage.gallery.alt3': 'Torta di mele artigianale di Gisela',
		'mesasDulcesPage.gallery.alt4': 'Selezione di dessert di Gisela Pastelería Natural',
		'mesasDulcesPage.ctaTitle': 'Hai un evento in programma?',
		'mesasDulcesPage.ctaText':
			'Raccontaci la data, lo stile e il numero di invitati, e progettiamo insieme il tuo tavolo dolce perfetto.',
		'mesasDulcesPage.ctaEmail': 'Scrivici',
		'mesasDulcesPage.ctaCall': 'Chiama ora',

		'bcbTeaser.eyebrow': 'Per i pellegrini del Cammino di Santiago',
		'bcbTeaser.title': 'BCB · Buen Camino Breakfast',
		'bcbTeaser.text':
			'Regala una colazione a un pellegrino: a un amico, a un familiare o a chi sta percorrendo il Cammino. Basta che passi da Gisela Pastelería Natural e ci dica il suo nome per gustarla.',
		'bcbTeaser.cta': 'Scopri BCB',
		'bcbTeaser.badge': 'Cuciniamo per te',

		'bcbPage.title': 'BCB · Buen Camino Breakfast | Gisela Pastelería Natural',
		'bcbPage.description':
			'Regala una colazione a un pellegrino del Cammino di Santiago di passaggio a Ponferrada. Un progetto di Gisela Pastelería Natural.',
		'bcbPage.poweredBy': 'Un progetto di Gisela Pastelería Natural',
		'bcbPage.intro':
			'Per chi percorre il Cammino di Santiago e passa da Ponferrada: una vera colazione per ritrovare le energie. Regalala a un amico, a un familiare o a chi sta camminando — basta che passi da Gisela e ci dica il suo nome.',
		'bcbPage.badge1': 'Buen Camino',
		'bcbPage.badge2': 'Colazione a Ponferrada',
		'bcbPage.regalar': 'Regala',
		'bcbPage.proximamente': 'Prossimamente',
		'bcbPage.disclaimer':
			'Prezzi indicativi, soggetti a modifica. La colazione si ritira nel nostro negozio a Ponferrada.',

		'tier.sencillo.name': 'Semplice',
		'tier.sencillo.desc': 'Caffè speciality + toast classico.',
		'tier.completo.name': 'Completo',
		'tier.completo.desc': 'Bowl o toast speciale + bevanda + dolce artigianale.',
		'tier.premium.name': 'Premium',
		'tier.premium.desc': 'Selezione premium + caffè speciality + dolce artigianale.',

		'reviews.title': 'Cosa dicono i nostri clienti',
		'reviews.fallbackSubtitle': 'Recensioni verificate del profilo Google Business.',
		'reviews.countSuffix': 'recensioni su Google',
		'reviews.fallbackText':
			'Presto potrai vedere qui le nostre vere recensioni Google. Nel frattempo, puoi consultarle direttamente sulla nostra scheda attività.',
		'reviews.verMas': 'Leggi di più',
		'reviews.verTodas': 'Vedi tutte le recensioni su Google',

		'map.visitanos': 'Vieni a trovarci',
		'map.cta': 'Apri in Google Maps →',
		'map.ariaLabel': 'Apri la posizione di Gisela Pastelería Natural in Google Maps',

		'footer.description':
			'Pasticceria naturale e artigianale, preparata ogni giorno a Ponferrada con ingredienti di qualità.',
		'footer.visitanos': 'Vieni a trovarci',
		'footer.horario': 'Orario',
		'footer.dias': 'Da lunedì a domenica',
		'footer.rights': 'Tutti i diritti riservati.',
		'footer.designedBy': 'Progettato da',

		'carta.title': 'Il nostro menu',
		'carta.intro':
			"Tutto ciò che vedi, senti e assapori qui — dolce e salato — lo prepariamo nel nostro laboratorio, con ingredienti onesti e, quando possibile, a chilometro zero. Chiedi al nostro staff informazioni sugli allergeni.",

		'meta.home.title': 'Gisela Pastelería Natural | Pasticceria artigianale a Ponferrada',
		'meta.home.description':
			'Pasticceria naturale e artigianale a Ponferrada, León. Torte, dolci e pasticceria fatta in casa, preparati ogni giorno con ingredienti naturali.',
		'meta.carta.title': 'Menu | Gisela Pastelería Natural',
		'meta.carta.description':
			'Scopri il menu di Gisela Pastelería Natural: torte, dolci, colazioni e bevande preparati ogni giorno nel nostro laboratorio a Ponferrada.',
		'meta.especialidades.title': 'Specialità | Gisela Pastelería Natural',
		'meta.especialidades.description':
			'Scopri i nostri dolci artigianali, le scatole da regalo e il caffè speciality da Gisela Pastelería Natural, a Ponferrada.',
		'meta.historia.title': 'La nostra storia | Gisela Pastelería Natural',
		'meta.historia.description':
			'Scopri la storia di Gisela Pastelería Natural, un sogno diventato realtà dal 2010 a Ponferrada.',

		'historiaPage.location': 'Gisela Pastelería Natural · Ponferrada, León',
		'historiaPage.title': 'Una traduttrice che ha scelto la <em>pasticceria</em>',
		'historiaPage.heroSubtitle':
			'La storia di come tre lingue sono diventate il prologo della migliore pasticceria del Bierzo.',
		'historiaPage.p1':
			'Gisela è nata in Germania e ha costruito una brillante carriera come traduttrice giurata di inglese, tedesco e cinese. Tre lingue. Tre mondi. Ma c\'era qualcosa che la attraeva più di ogni parola: il suo amore per la pasticceria, nato nella cucina di sua madre.',
		'historiaPage.p2':
			'Ha deciso di lasciare tutto e ha aperto Gisela Pastelería Natural insieme a sua madre più di 16 anni fa. Da allora non ha smesso di formarsi nelle tecniche di pasticceria di tutto il mondo, costruendo un team unito che lei stessa descrive come "una pasta madre: mescolati, uniti e ribollenti di idee".',
		'historiaPage.quote': 'Vuoi sapere qual è il nostro ingrediente segreto? Non avere ingredienti segreti.',
		'historiaPage.p3':
			'Oggi, ogni dolce che esce dal suo laboratorio è fatto con ingredienti a chilometro zero, senza conservanti né additivi. Perché la felicità si mangia, e qui abbiamo la ricetta.',
		'historiaPage.reviewsLabel': 'Recensioni Google',
		'historiaPage.comingSoonBadge': 'Prossimamente',
		'historiaPage.comingSoonTitle': 'Stiamo preparando qualcosa di speciale per raccontarti tutto',
		'historiaPage.comingSoonText':
			'Qui troverai la storia completa di Gisela: i suoi anni come traduttrice giurata di inglese, tedesco e cinese, il momento in cui ha deciso di scambiare le parole con il laboratorio, e come lei e sua madre hanno costruito la pasticceria che Ponferrada merita. Una storia di coraggio, pasta madre e tanto amore per il naturale.',
		'historiaPage.backToSite': 'Torna al sito',
		'historiaPage.imageAlt': 'Selezione di dolci di Gisela Pastelería Natural'
	}
};
