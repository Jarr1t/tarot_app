"use client";
import { CarouselApi } from "@/components/ui/carousel";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function CardCarousel(cards) {
	const [api, setApi] = useState();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<Carousel setApi={setApi}>
			<div className="flex justify-center gap-4 mt-4">
				<CarouselContent>
					<CarouselItem>Daily Pull</CarouselItem>
					<CarouselItem>Yes/No</CarouselItem>
					<CarouselItem>Three Card Spread</CarouselItem>
					<CarouselItem>Four Card Spread</CarouselItem>
					<CarouselItem>Relationship Spread</CarouselItem>
					<CarouselItem>Moon Phase</CarouselItem>
				</CarouselContent>
			</div>
			<div className="flex justify-center gap-4 mt-4">
				<CarouselPrevious className="static transform-none" />
				<CarouselNext className="static transform-none" />
			</div>
		</Carousel>
	);
}
