"use client"; 

import { useEffect, useState } from "react";

type BookmarkType = {
  id: string;
  name: string;
  description: string;
  source?: string;
};

export default function Home() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/bookmarks")
      .then(res => res.json())
      .then(data => setBookmarks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All BookMarks:</h2>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            <strong>{bookmark.name}</strong>: {bookmark.description}{" "}
            {bookmark.source && (
              <a href={bookmark.source} target="_blank" rel="noreferrer">
                [Link]
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
