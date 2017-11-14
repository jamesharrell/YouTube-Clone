export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  playCount: string;

  constructor(obj?: any) {
    this.id              = obj && obj.id             || null;
    this.title           = obj && obj.title          || null;
    this.description     = obj && obj.description    || null;
    this.thumbnailUrl    = obj && obj.thumbnailUrl   || null;
    this.playCount       = obj && obj.playCount      || null;
    this.videoUrl        = obj && obj.videoUrl       ||
      `https://ytclone.jamesharrell.me/#/watch?v=${this.id}`;
  }
}
