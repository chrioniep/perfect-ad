/* eslint-disable react/no-unescaped-entities */
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AtSign,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Menu,
  PhoneCall,
  ShoppingCart,
  User,
  User2,
} from "lucide-react";
import SearchInput from "./SearchInput";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  const products = [
    "Affiches & Posters",
    "Autocollants",
    "Bâches",
    "Beach flags",
    "Blocs-notes",
    "Brochures & Catalogues",
    "Cartes de visite",
    "Cartes de vœux",
    "Cartes postales",
    "Chaises longues",
    "Chemises à rabats",
    "Dépliants",
    "Emballages",
    "Feuille d'impression plano",
    "Flyers",
    "Papier à lettres",
    "Roll-ups",
  ];

  const themes = [
    "Cartes diverses",
    "Matériel de bureau",
    "Matériel de pub",
    "Restauration & Events",
    "Supports signalétiques",
  ];

  const clients = [
    "Aperçu des commandes",
    "Répertoire",
    "Créations enregistrées",
    "Compte client",
    "Newsletter",
  ];

  return (
    <nav className="sticky z-[50] h-16 top-0 px-4 p-2 w-full backdrop-blur-lg flex items-center justify-between border-b border-gray-200 bg-white/75 transition-all">
      <div className="flex items-center space-x-4">
        <Sheet>
          <SheetTrigger>
            <div className="rounded-full hover:bg-gray-100 cursor-pointer p-2">
              <Menu />
            </div>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle className="flex flex-col items-center justify-center space-y-3 mb-5">
                <Image
                  alt="logo"
                  width={150}
                  height={50}
                  src="/logo-inline.png"
                />
                <SearchInput className="w-full" />
              </SheetTitle>
              <hr className="h-[1px] border-t-0 bg-gray-600 dark:bg-white/10" />
              <SheetDescription className="max-h-[80vh] overflow-y-auto px-none">
                <div>
                  <h2 className="font-semibold mb-2 text-md md:text-lg text-zinc-900 text-start">
                    PRODUITS POPULAIRES
                  </h2>
                  <ul className="md:ml-2 mb-3 text-start md:text-nowrap space-y-1">
                    {products.map((product) => (
                      <li
                        key={product}
                        className="text-md text-zinc-700 cursor-pointer hover:text-primary capitalize hover:scale-105"
                      >
                        {product}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="hover:text-primary hover:underline md:text-nowrap md:ml-2"
                    href={"#"}
                  >
                    Afficher tout les produits
                  </Link>
                </div>
                <hr className="h-[1px] border-t-0 bg-gray-600 my-6 dark:bg-white/10" />
                <div>
                  <h2 className="font-semibold mb-2 text-md md:text-lg text-zinc-900 text-start">
                    THEMES
                  </h2>
                  <ul className="md:ml-2 mb-3 text-start md:text-nowrap space-y-1">
                    {themes.map((theme) => (
                      <li
                        key={theme}
                        className="text-md text-zinc-700 cursor-pointer hover:text-primary capitalize hover:scale-105"
                      >
                        {theme}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="h-[1px] border-t-0 bg-gray-600 my-6 dark:bg-white/10" />
                <div className="mb-5">
                  <Link
                    href={"#"}
                    className="flex justify-between hover:text-primary hover:font-semibold items-center cursor-pointer"
                  >
                    <h2 className="hover:font-semibold">Mon compte</h2>
                    <ChevronRight />
                  </Link>
                  <Link
                    href={"#"}
                    className="flex justify-between hover:text-primary hover:font-semibold items-center cursor-pointer"
                  >
                    <h2>Aide et contact</h2>
                    <ChevronRight />
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Image
          alt="logo"
          width={130}
          height={50}
          src="/logo.png"
        />
      </div>
      <SearchInput className="hidden md:inline-flex w-2/5" />
      <div className="flex items-center space-x-4">
        <Sheet>
          <SheetTrigger>
            <div className="hidden sm:flex leading-2 bg-gray-100 cursor-pointer hover:bg-gray-200 p-2 space-x-2 items-center rounded-xl">
              <User className="w-5 h-5 text-red-600" />

              <div>
                {" "}
                <p className="font-semibold text-sm">Mon compte</p>
              </div>
            </div>
            <User
              fill="#dc2626"
              className="w-5 h-5 flex sm:hidden text-red-600"
            />
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader>
              <SheetTitle className="flex flex-col items-center justify-center space-y-5 mb-3">
                <Image
                  alt="logo"
                  width={150}
                  height={50}
                  src="/logo-inline.png"
                />
                <div className="w-full space-y-2">
                  <Button
                    className="w-full"
                    asChild
                  >
                    <Link href="/login">Mon compte</Link>
                  </Button>
                  <p className="text-sm font-normal text-start">
                    <span>Nouveau client ?</span>{" "}
                    <Link
                      href={"#"}
                      className="hover:underline text-primary"
                    >
                      S'incrire
                    </Link>
                  </p>
                </div>
              </SheetTitle>
              <hr className="h-[1px] border-t-0 bg-gray-600 dark:bg-white/10" />
              <SheetDescription className="max-h-[80vh] overflow-y-auto px-none">
                <div>
                  <h2 className="font-semibold mb-2 text-lg md:text-md text-zinc-900 text-start">
                    ESPACE CLIENT
                  </h2>
                  <ul className="md:ml-2 mb-3 text-start md:text-nowrap space-y-1">
                    {clients.map((theme) => (
                      <li
                        key={theme}
                        className="text-md text-zinc-700 cursor-pointer hover:text-primary capitalize"
                      >
                        {theme}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="h-[1px] border-t-0 bg-gray-600 my-6 dark:bg-white/10" />
                <div className="flex flex-col items-center space-y-3 mb-3">
                  <Image
                    width={150}
                    height={150}
                    alt="user"
                    className="rounded-full"
                    src={"/user-9.jpeg"}
                  />
                  <p className="font-bold text-md text-zinc-900">
                    SERVICE COMPÉTENT ET PERSONNALISÉ
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-2">
                    <PhoneCall className="text-zinc-800" />
                    <div>
                      <h2 className="font-semibold text-primary text-md">
                        06 12 34 56 78
                      </h2>
                      <span>Lun - ven : 8 - 17h</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <AtSign className="text-zinc-800" />
                    <div>
                      <Link
                        href={"#"}
                        className="font-semibold text-primary text-md"
                      >
                        Contact
                      </Link>{" "}
                      ou
                      <br />
                      <span>service@perfect-ads.com</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CircleHelp className="text-zinc-800" />
                    <Link
                      href={"#"}
                      className="font-semibold text-primary text-md"
                    >
                      FAQ
                    </Link>{" "}
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="rounded-full flex items-center justify-between p-2 bg-red-600 cursor-pointer">
          <ShoppingCart
            fill="white"
            className="w-5 h-5 text-white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
