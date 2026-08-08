export interface MenuItem {
	name: string;
	price: number;
	note?: string;
}

export interface MenuCategory {
	name: string;
	note?: string;
	/** Nombre del archivo dentro de src/assets/, para categorías con foto. */
	image?: string;
	imageAlt?: string;
	items: MenuItem[];
}

export interface MenuGroup {
	name: string;
	categories: MenuCategory[];
}

export const menu: MenuGroup[] = [
	{
		name: 'Dulces',
		categories: [
			{
				name: 'Tartas de horno',
				items: [
					{ name: 'Queso tradicional', price: 4.0 },
					{ name: 'Manzana crumble', price: 4.0 },
					{ name: 'Queso con galleta lotus', price: 4.5 },
					{ name: 'Queso con pistacho', price: 4.7 },
					{ name: 'Queso con fruta de temporada', price: 4.5 }
				]
			},
			{
				name: 'Brownie',
				items: [
					{ name: 'Espelta (clásico)', price: 4.5 },
					{ name: 'Centeno', price: 4.5 },
					{ name: 'Oreo', price: 4.5 },
					{ name: 'Pistacho', price: 4.7 },
					{ name: 'Cerveza Yunque', price: 4.5 },
					{ name: 'Vino tinto', price: 4.5 }
				]
			},
			{
				name: 'Kukis',
				items: [
					{ name: 'Pepitas de choco', price: 4.5 },
					{ name: 'Rellena de crema de avellana', price: 4.5 },
					{ name: 'Pistacho con frambuesa y choco-blanco', price: 4.5 },
					{ name: 'Lotus', price: 4.7 },
					{ name: 'Oreo', price: 4.5 },
					{ name: 'Triki-Kuki', price: 4.5 },
					{ name: 'Choco-sal', price: 3.9 }
				]
			}
		]
	},
	{
		name: 'Desayunos',
		categories: [
			{
				name: 'Bowl',
				items: [
					{
						name: 'Manzana asada del Bierzo con yogur griego, granola casera de Gisela y miel',
						price: 5.9
					},
					{ name: 'Pera conferencia asada con granola casera de Gisela y miel', price: 5.9 },
					{
						name: 'Yogur griego de frutos rojos con fruta fresca y granola casera de Gisela',
						price: 6.2
					},
					{
						name: 'Salmón ahumado con cherrys especiados asados, huevo poché, crema de aguacate, maíz dulce y pepino, acompañado con salsa de yogur y panecillos',
						price: 7.3
					},
					{
						name: 'Pechuga de pavo al horno con cherrys asados, huevo poché, crema de aguacate, maíz dulce y pepino, acompañado con salsa de yogur y panecillos',
						price: 6.9
					}
				]
			},
			{
				name: 'Tostas',
				items: [
					{ name: 'Aceite de oliva virgen extra (AOVE)', price: 2.4 },
					{ name: 'Tomate triturado y AOVE*', price: 3.0 },
					{ name: 'Mantequilla y mermelada (maracuyá o frambuesa)', price: 3.6 },
					{ name: 'Crema de cacahuete, plátano y semillas', price: 4.8 },
					{ name: 'Crema de avellana y toppings', price: 5.0 },
					{ name: 'Crema de pistacho', price: 5.0 },
					{ name: 'Crema kinder y toppings', price: 5.0 },
					{
						name: 'Crema de aguacate con queso crema, ajo, especias y cherrys al horno',
						price: 6.5
					},
					{ name: 'Jamón serrano con tomate triturado', price: 4.9 },
					{
						name: 'Crema de atún con salsa mayonesa, mostaza, pepinillos y cebolla crunchy',
						price: 6.2
					},
					{ name: 'Bacon a la plancha, mozzarella y huevo revuelto', price: 6.9 },
					{ name: 'Cecina con mermelada de higos, AOVE* y lascas de parmesano', price: 7.5 },
					{ name: 'Salmón ahumado con queso de cabra y crema de aguacate', price: 8.4 },
					{
						name: 'Queso de cabra con nueces, miel y polen del Bierzo "castanea"',
						price: 7.2
					}
				]
			},
			{
				name: 'Croissant',
				items: [
					{ name: 'Pera conferencia, queso brie y miel', price: 4.9 },
					{ name: 'Mozzarella y jamón serrano', price: 5.5 },
					{ name: 'Mozzarella y bacon', price: 5.0 },
					{ name: 'Crema kinder y toppings', price: 6.1 },
					{ name: 'Pistacho', price: 6.5 },
					{ name: 'Crema de avellana', price: 6.3 }
				]
			},
			{
				name: 'Tortitas',
				items: [
					{ name: 'Crema de cecina y mermelada de pimientos', price: 7.9 },
					{ name: 'Crema de queso de cabra y bacon caramelizado', price: 7.9 },
					{ name: 'Mermelada de mango, pepitas de choco y choco miel', price: 6.9 },
					{ name: 'Crema de avellana y frutas', price: 6.9 }
				]
			},
			{
				name: 'Sandwich',
				note: '3 panes',
				items: [
					{ name: 'Jamón cocido, mantequilla y mozzarella', price: 4.5 },
					{
						name: 'Bacon a la plancha, pollo al horno, pesto, tomate en rodajas, lechuga y pepinillos',
						price: 7.7
					},
					{
						name: 'Jamón cocido, salsa de trufa, tomate en rodajas, lechuga, burrata, mozzarella y cebolla',
						price: 7.9
					}
				]
			},
			{
				name: 'Bocadillos',
				items: [
					{ name: 'Bacon a la plancha, queso de cabra y cebolla crunchy', price: 7.5 },
					{
						name: 'Pavo al horno, huevo cocido, tomate en rodajas, lechuga y salsa de trufa',
						price: 7.9
					},
					{
						name: 'Pechuga de pollo al horno con bacon a la plancha, mozzarella, miel y mostaza',
						price: 7.9
					}
				]
			},
			{
				name: 'Extras',
				items: [
					{ name: 'Cualquier modificación', price: 1.0 },
					{ name: 'Jamón, cecina o salmón', price: 1.9 }
				]
			}
		]
	},
	{
		name: 'Bebidas',
		categories: [
			{
				name: 'Café',
				items: [
					{ name: 'Ristretto', price: 1.7 },
					{ name: 'Espresso', price: 1.7 },
					{ name: 'Espresso doble', price: 2.2 },
					{ name: 'Americano', price: 1.8 },
					{ name: 'Café con leche', price: 1.8 },
					{ name: 'Café desayuno', price: 2.2 },
					{ name: 'Cappuccino', price: 2.5 },
					{ name: 'Machiato', price: 1.8 },
					{ name: 'Bombón', price: 2.5 },
					{ name: 'Flat white', price: 2.8 },
					{ name: 'Iced coffee', price: 2.3 },
					{ name: 'Iced coffee con leche', price: 2.8 },
					{ name: 'Iced espresso tónica', price: 3.6 },
					{ name: 'Latte chocolate', price: 2.8 },
					{ name: 'Latte caramelo', price: 2.8 },
					{ name: 'Latte pistacho', price: 2.8 },
					{ name: 'Latte simple', price: 2.5 },
					{ name: 'Pink latte', price: 3.7 },
					{ name: 'Golden latte', price: 3.9 },
					{ name: 'Matcha clásico', price: 4.0 },
					{ name: 'Vainilla matcha', price: 4.5 },
					{ name: 'Mango matcha', price: 4.5 },
					{ name: 'Fresa matcha', price: 4.5 }
				]
			},
			{
				name: 'Infusiones calientes',
				items: [
					{ name: 'Rooibos naranja y limón', price: 1.8 },
					{ name: 'Rooibos relax', price: 1.8 },
					{ name: 'Jengibre y limón', price: 1.8 },
					{ name: 'Menta poleo', price: 1.8 },
					{ name: 'Manzanilla', price: 1.8 },
					{ name: 'Té verde', price: 1.8 },
					{ name: 'Té verde piña colada', price: 1.8 },
					{ name: 'Té verde limón y matcha', price: 1.8 },
					{ name: 'Té rojo', price: 1.8 },
					{ name: 'English breakfast', price: 1.8 },
					{ name: 'Té pakistaní', price: 1.8 },
					{ name: 'Frutos rojos', price: 1.8 }
				]
			},
			{
				name: 'Infusiones frías',
				note: 'Tea-tac',
				items: [
					{ name: 'Tea-tac mango', price: 2.5 },
					{ name: 'Tea-tac frutos del bosque', price: 2.5 },
					{ name: 'Tea-tac manzana', price: 2.5 },
					{ name: 'Tea-tac limón', price: 2.5 }
				]
			},
			{
				name: 'Otras bebidas',
				items: [
					{ name: 'Agua mineral', price: 1.6 },
					{ name: 'Agua de plástico', price: 1.3 },
					{ name: 'Agua con gas', price: 1.8 },
					{ name: 'Aquarius de naranja', price: 2.8 },
					{ name: 'Aquarius de limón', price: 2.8 },
					{ name: 'Coca-cola', price: 2.6 },
					{ name: 'Coca-cola zero', price: 2.6 },
					{ name: 'Fuze tea de maracuyá', price: 2.8 },
					{ name: 'Fuze tea de limón', price: 2.8 },
					{ name: 'Mosto blanco', price: 1.6 },
					{ name: 'Mosto rojo', price: 1.6 },
					{ name: 'Zumo de melocotón', price: 2.2 },
					{ name: 'Zumo de piña', price: 2.2 },
					{ name: 'Zumo de naranja', price: 2.2 },
					{ name: 'Zumo de naranja (natural)', price: 2.8 },
					{ name: 'Batido de choco', price: 2.2 }
				]
			},
			{
				name: 'Gise-lata',
				note: 'Exclusivo en Gisela',
				items: [
					{ name: 'Mango', price: 4.9 },
					{ name: 'Manzana', price: 4.9 },
					{ name: 'Frutos rojos', price: 4.9 },
					{ name: 'Limón', price: 4.9 },
					{ name: 'Café con leche', price: 4.9 }
				]
			},
			{
				name: 'Extras',
				items: [
					{ name: 'Leche sin lactosa', price: 0.1 },
					{ name: 'Leche de avena', price: 0.3 },
					{ name: 'Para llevar', price: 0.2 },
					{ name: 'Con hielo', price: 0.2 }
				]
			}
		]
	},
	{
		name: 'Edición limitada',
		categories: [
			{
				name: 'Bocadillo eclipse',
				image: 'Bocadillo eclipse.png',
				imageAlt: 'Bocadillo eclipse con pan de pimiento berciano y cecina',
				items: [
					{
						name: 'Bocadillo eclipse',
						price: 9.5,
						note: '🔥 Pan de pimiento berciano.\n🥩 Cecina seleccionada en lonchas.\n🥣 Tapenade, crema de queso, mermelada balsámica y cebolla crunchy.'
					}
				]
			},
			{
				name: 'Sandwich lunar',
				image: 'Sandwich lunar.png',
				imageAlt: 'Sandwich lunar de pan brioche con pollo y bacon',
				items: [
					{
						name: 'Sandwich lunar',
						price: 8.2,
						note: '🍞 Nuestro pan brioche artesano, súper tierno y dorado.\n🍗 Pollo jugoso acompañado del toque ahumado e inconfundible del bacon crujiente.\n🧀 Una salsa de locura: queso de cabra, chocolate blanco y maíz. (Sí, has leído bien. Pruébala y nos cuentas).\n🥭 El contraste dulce y tropical perfecto con nuestra mermelada de mango.'
					}
				]
			}
		]
	}
];
