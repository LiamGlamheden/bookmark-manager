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
