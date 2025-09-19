export default class BookMark {
  id: string;
  name: string;
  description: string;
  source: string; 

  constructor(id: string, name: string, description: string, source: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.source = source;
  }
}


export const mockBookMarks: BookMark[] = [
  new BookMark("1", "Next.js Docs", "The official Next.js documentation", "https://nextjs.org/docs"),
  new BookMark("2", "TypeScript Handbook", "Guide to TypeScript basics", "https://www.typescriptlang.org/docs/"),
  new BookMark("3", "MDN Web Docs", "Mozilla Developer Network resources", "https://developer.mozilla.org"),
];
