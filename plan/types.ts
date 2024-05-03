type TArticle = {
  title: string;
  sections: TArticleSection[];
  author: string;
  date: Date;
};

type TArticleSection = {
  title: string;
  content: string;
  order: number;
};

type TMain = {
  articles: TArticle[];
  title: string;
  description: string;
  owner: string;
  password: string;
  contacts: TContact[];
};

type TContact = {
  type: string;
  url: string;
  icon: string;
};
