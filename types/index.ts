export enum OpenAIModel {
  DAVINCI_TURBO = "gpt-3.5-turbo"
}

export type Essay = {
  title: string;
  url: string;
  date: string;
  content: string;
  length: number;
  tokens: number;
  chunks: EssayChunk[];
};

export type EssayChunk = {
  essay_title: string;
  essay_url: string;
  essay_date: string;
  content: string;
  content_length: number;
  content_tokens: number;
  embedding: number[];
};

export type AJSON = {
  current_date: string;
  author: string;
  url: string;
  length: number;
  tokens: number;
  essays: Essay[];
};
