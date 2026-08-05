export interface GoogleReview {
	authorName: string;
	authorPhotoUrl: string | null;
	rating: number;
	relativeTime: string;
	text: string;
	profileUrl: string | null;
}

export interface GoogleReviewsData {
	rating: number;
	totalReviews: number;
	reviews: GoogleReview[];
	placeUrl: string;
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
	const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
	const placeId = import.meta.env.GOOGLE_PLACE_ID;

	if (!apiKey || !placeId) return null;

	const placeUrl = `https://search.google.com/local/reviews?placeid=${placeId}`;

	try {
		const params = new URLSearchParams({
			place_id: placeId,
			fields: 'rating,user_ratings_total,reviews',
			language: 'es',
			reviews_no_translations: 'true',
			key: apiKey
		});

		// Legacy Places API (Place Details). Google caps this endpoint at 5 reviews per place.
		const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?${params}`);
		const data = await res.json();

		if (data.status !== 'OK' || !data.result) {
			console.warn('[googlePlaces] API respondió sin resultado:', data.status, data.error_message);
			return null;
		}

		const reviews: GoogleReview[] = (data.result.reviews ?? []).map((r: any) => ({
			authorName: r.author_name,
			authorPhotoUrl: r.profile_photo_url ?? null,
			rating: r.rating,
			relativeTime: r.relative_time_description,
			text: r.text,
			profileUrl: r.author_url ?? null
		}));

		return {
			rating: data.result.rating ?? 0,
			totalReviews: data.result.user_ratings_total ?? 0,
			reviews,
			placeUrl
		};
	} catch (err) {
		console.warn('[googlePlaces] Error al obtener reseñas:', err);
		return null;
	}
}
