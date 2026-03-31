export interface Project {
  id: string;
  name: string;
  desc: string;
  period: string;
  url: string;
  tags: string[];
  chromeId?: string;
  whaleGistId?: string;
  gistTitle?: string;
  live?: string;
  image?: string;
  imageType?: "landscape" | "portrait" | "square";
  problem?: string;
  solution?: string;
  result?: string;
}
