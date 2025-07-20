import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function CardCarousel(cards){
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

