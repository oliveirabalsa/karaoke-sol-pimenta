import Dexie, { Table } from "dexie";
import { Song } from "../models/Song";

export class KaraokeDB extends Dexie {
  songs!: Table<Song, number>;

  constructor() {
    super("KaraokeDB");
    this.version(1).stores({
      songs: "++id, title, artist",
    });
  }
}

export const db = new KaraokeDB();

export async function addSong(title: string, artist: string) {
  const id = await db.songs.add({
    title,
    artist,
  });

  console.log(`Música adicionada com ID: ${id}`);
}
