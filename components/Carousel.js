import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export default function CardCarousel(cards) {
	return (
		<Carousel>
			<CarouselContent>
				<CarouselItem>Daily Pull</CarouselItem>
				<CarouselItem>Yes/No</CarouselItem>
				<CarouselItem>Three Card Spread</CarouselItem>
                <CarouselItem>Four Card Spread</CarouselItem>
                <CarouselItem>Relationship Spread</CarouselItem>
                <CarouselItem>Moon Phase</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
