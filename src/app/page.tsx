/* eslint-disable react/no-unescaped-entities */
"use client";

import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWrapperWidth";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { DollarSign, Leaf, MessageCircle, Save, Scroll } from "lucide-react";

const reviews = [
  {
    name: "Josue",
    username: "@josh",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/users/user-6.jpeg",
  },
  {
    name: "Alain",
    username: "@alainMk",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/users/user-7.jpeg",
  },
  {
    name: "Joel",
    username: "@joe",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/users/user-11.jpeg",
  },
  {
    name: "Jacob",
    username: "@jacobLm",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/users/user-8.jpeg",
  },
  {
    name: "Emporio",
    username: "@enoch",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/users/user-10.jpeg",
  },
  {
    name: "Michel",
    username: "@gams",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/users/user-9.jpeg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);

export default function Home() {
  const [cat, setCat] = useState(
    Array(8).fill({
      name: "cat",
    })
  );
  return (
    <main className="bg-slate-50">
      <Hero />
      <MaxWidthWrapper>
        <section>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 p-5">
            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Flyer</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-10.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Dépliant</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-6.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">
                  Brochures & Catalogues
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-4.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Cartes de visite</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-5.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">
                  Feuille d'impression plano
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-2.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Papier à lettres</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-1.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Roll-ups</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-3.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Affichers & posters</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-9.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant={"outline"}>Afficher tout le produits</Button>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 p-5">
            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Matériel de publicité</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-7.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Matériel de bureau</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-8.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Emballages</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-11.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition hover:text-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Supports signalétique</CardTitle>
              </CardHeader>
              <CardContent className="text-center cursor-pointer transition hover:scale-110">
                <Image
                  src="/cards/cat-12.png"
                  width={410}
                  height={497}
                  alt="cat-img"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </MaxWidthWrapper>{" "}
      <section className="bg-white py-12">
        <div className="flex justify-center">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            Ce que disent nos{" "}
            <span className="relative px-2 bg-red-600 text-white">
              clients{" "}
            </span>
          </h2>
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20">
          <Marquee
            pauseOnHover
            className="[--duration:20s]"
          >
            {firstRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
              />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s]"
          >
            {secondRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
              />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            className="[--duration:20s]"
          >
            {thirdRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </section>
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Tous vos avantages avec{" "}
                <span className="relative px-2 bg-red-600 text-white">
                  Perfect advertising{" "}
                </span>
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-12 w-12 text-red-600" />
                  <h2 className="text-3xl">Interlocuteur personnel</h2>
                </div>
                <p>
                  Conseiller et accompagner nos clients, c'est notre raison
                  d'être ! Notre équipe se tient à votre disposition pour
                  répondre de manière compétente et rapide à vos questions et
                  vous proposer des solutions personnalisées afin de satisfaire
                  vos exigences, tous les jours ouvrables.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Scroll className="h-12 w-12 text-red-600" />
                  <h2 className="text-3xl">Paiement sur facture</h2>
                </div>
                <p>
                  En tant qu'entreprise cliente ou administration publique, vous
                  avez la possibilité de payer par virement vos commandes sur
                  facture. Indiquez votre n° de TVA intracommunautaire et
                  bénéficiez du mode de paiement sur facture.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-12 w-12 text-red-600" />
                  <h2 className="text-3xl">Impression écologique</h2>
                </div>
                <p>
                  Avec notre technologie de pointe, nous produisons vos imprimés
                  avec une réduction de CO2 jusqu'à 70 % au regard des
                  technologies d'impression traditionnelles. Grâce à notre
                  partenariat avec ClimatePartner, apportez vous-même une
                  contribution à la protection de l'environnement en commandant
                  vos produits avec l'option compensation de CO2.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-12 w-12 text-red-600" />
                  <h2 className="text-3xl">Avantages clients</h2>
                </div>
                <p>
                  En tant qu'entreprise passant régulièrement commande, vous
                  bénéficiez de conditions attractives en terme de tarif et de
                  rapidité. Gagnez du temps en optant pour notre service envoi
                  pour revendeurs. Ainsi vos produits imprimés seront envoyés
                  directement à vos clients.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
