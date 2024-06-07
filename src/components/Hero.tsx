/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { url } from "inspector";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <section
      className="bg-cover py-16"
      style={{ backgroundImage: `url(${"/hero-bg-red.png"})` }}
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="block lg:flex p-3 items-center">
              <Image
                src={"/hero-2.png"}
                alt="hero-2 "
                width={600}
                height={250}
              />
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-4xl font-bold">
                  Envie d'été avec nos <br /> carte à glace
                </h2>
                <p className="text-white">
                  Présentez vos spécialités glacées sous leur meilleur jour et
                  commandez
                  <br /> vos propres cartes de glace sur du papier synthétique
                  de qualité.
                  <br />
                  Vous serez ainsi parfaitement équipé pour la saison chaude !
                </p>
                <Button variant={"outline"}>
                  Découvrez les carte à glaces maintenant
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="block lg:flex p-3 items-center">
              <Image
                src={"/hero-1.png"}
                alt="hero-1"
                width={600}
                height={250}
              />
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-4xl font-bold">
                  Envie d'été avec nos <br /> carte à glace
                </h2>
                <p className="text-white">
                  Présentez vos spécialités glacées sous leur meilleur jour et
                  commandez
                  <br /> vos propres cartes de glace sur du papier synthétique
                  de qualité.
                  <br />
                  Vous serez ainsi parfaitement équipé pour la saison chaude !
                </p>
                <Button variant={"outline"}>
                  Découvrez les carte à glaces maintenant
                </Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Hero;
