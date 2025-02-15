import type { MetaFunction } from "@remix-run/node";
import logo from "../images/logo.png";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Sol e Pimenta" },
    { name: "description", content: "Bem vindos ao nosso bar!" },
  ];
};

type Song = {
  code: string;
  title: string;
  artist: string;
  genre: string;
  lyrics: string;
};

export const loader = async () => {
  // const response = await fetch("http://localhost:3000/api/songs");
  // const songs: Song[] = await response.json();
  const songs: Song[] = [
    {
      code: "1",
      title: "Aquarela",
      artist: "Toquinho",
      genre: "MPB",
      lyrics: "Eu quis cantar minha canção...",
    },
    {
      code: "2",
      title: "Eu sei que vou te amar",
      artist: "Tom Jobim",
      genre: "MPB",
      lyrics: "Eu sei que vou te amar...",
    },
    {
      code: "3",
      title: "Garota de Ipanema",
      artist: "Tom Jobim",
      genre: "MPB",
      lyrics: "Olha que coisa mais linda...",
    },
  ];

  return {
    songs,
  };
};

export default function Index() {
  const { songs } = useLoaderData<typeof loader>();

  return (
    <div className="">
      <img src={logo} alt="Sol e Pimenta Lounge Bar" />
      <h1>Catálogo de músicas</h1>
      <p>Seja bem-vindo ao catálogo de músicas do Sol e Pimenta Lounge Bar.</p>
      <ul>
        {songs.map((song) => (
          <li key={song.code}>
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
