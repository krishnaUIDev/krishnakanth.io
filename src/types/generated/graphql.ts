export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type Blog = _Document &
  _Linkable & {
    __typename?: "Blog";
    _linkType?: Maybe<Scalars["String"]>;
    _meta: Meta;
    body?: Maybe<Array<BlogBody>>;
    title?: Maybe<Scalars["Json"]>;
  };

export type BlogBody = BlogBodyHello;

export type BlogBodyHello = {
  __typename?: "BlogBodyHello";
  label?: Maybe<Scalars["String"]>;
  primary?: Maybe<BlogBodyHelloPrimary>;
  type?: Maybe<Scalars["String"]>;
};

export type BlogBodyHelloPrimary = {
  __typename?: "BlogBodyHelloPrimary";
  test?: Maybe<Scalars["Json"]>;
};

/** A connection to a list of items. */
export type BlogConnectionConnection = {
  __typename?: "BlogConnectionConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlogConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type BlogConnectionEdge = {
  __typename?: "BlogConnectionEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Blog;
};

export type Meta = {
  __typename?: "Meta";
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars["DateTime"]>;
  /** The id of the document. */
  id: Scalars["String"];
  /** The language of the document. */
  lang: Scalars["String"];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars["DateTime"]>;
  /** The tags of the document. */
  tags: Array<Scalars["String"]>;
  /** The type of the document. */
  type: Scalars["String"];
  /** The uid of the document. */
  uid?: Maybe<Scalars["String"]>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  _allDocuments: _DocumentConnection;
  allBlogs: BlogConnectionConnection;
  blog?: Maybe<Blog>;
};

export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  firstPublicationDate?: InputMaybe<Scalars["DateTime"]>;
  firstPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
  firstPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
  fulltext?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  lang?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
  lastPublicationDate?: InputMaybe<Scalars["DateTime"]>;
  lastPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
  lastPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDocumentsBy>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
  tags_in?: InputMaybe<Array<Scalars["String"]>>;
  type?: InputMaybe<Scalars["String"]>;
  type_in?: InputMaybe<Array<Scalars["String"]>>;
};

export type QueryAllBlogsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  firstPublicationDate?: InputMaybe<Scalars["DateTime"]>;
  firstPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
  firstPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
  fulltext?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  lang?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
  lastPublicationDate?: InputMaybe<Scalars["DateTime"]>;
  lastPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
  lastPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortBlogy>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
  tags_in?: InputMaybe<Array<Scalars["String"]>>;
  uid?: InputMaybe<Scalars["String"]>;
  uid_in?: InputMaybe<Array<Scalars["String"]>>;
  where?: InputMaybe<WhereBlog>;
};

export type QueryBlogArgs = {
  lang: Scalars["String"];
  uid: Scalars["String"];
};

export type RelatedDocument = {
  __typename?: "RelatedDocument";
  /** The id of the document. */
  id: Scalars["String"];
  /** The language of the document. */
  lang: Scalars["String"];
  /** The type of the document. */
  type: Scalars["String"];
  /** The uid of the document. */
  uid?: Maybe<Scalars["String"]>;
};

export enum SortBlogy {
  MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
  MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
  MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
  MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
  MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
  MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
  MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
}

export type WhereBlog = {
  /** title */
  title_fulltext?: InputMaybe<Scalars["String"]>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: "_DocumentConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: "_DocumentEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: "_ExternalLink";
  _linkType?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: "_FileLink";
  _linkType?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  size: Scalars["Long"];
  url: Scalars["String"];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: "_ImageLink";
  _linkType?: Maybe<Scalars["String"]>;
  height: Scalars["Int"];
  name: Scalars["String"];
  size: Scalars["Long"];
  url: Scalars["String"];
  width: Scalars["Int"];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars["String"]>;
};

export type Similar = {
  documentId: Scalars["String"];
  max: Scalars["Int"];
};
