export interface Repository {
      id: string;
      openDoarId: number;
      name: string;
      uri?: any;
      urlHomepage?: any;
      urlOaipmh?: any;
      uriJournals?: any;
      physicalName: string;
      source?: any;
      software?: any;
      metadataFormat?: any;
      description?: any;
      journal?: any;
      roarId: number;
      pdfStatus?: any;
      nrUpdates: number;
      disabled: boolean;
      lastUpdateTime?: any;
      repositoryLocation?: any;
      baseId?: number;
  }

  export interface RepositoryDocument {
      pdfStatus: number;
      textStatus: number;
      metadataAdded: any;
      metadataUpdated: any;
      timestamp: any;
      depositedDate: any;
      indexed: number;
      deletedStatus: string;
      pdfSize: number;
      tdmOnly: boolean;
      pdfOrigin: string;
  }

export interface Source {
      id: string;
      authors: string[];
      citations: any[];
      contributors: string[];
      datePublished: string;
      deleted: string;
      description: string;
      fullText?: any;
      fullTextIdentifier: string;
      identifiers: string[];
      journals?: any;
      language?: any;
      duplicateId?: any;
      publisher: string;
      rawRecordXml: string;
      relations: any[];
      repositories: Repository[];
      repositoryDocument: RepositoryDocument;
      similarities?: any;
      subjects: string[];
      title: string;
      topics: string[];
      types: any[];
      urls: string[];
      year: number;
      doi?: any;
      oai: string;
      downloadUrl: string;
      pdfHashValue?: any;
      documentType?: any;
      documentTypeConfidence?: any;
      citationCount?: any;
      estimatedCitationCount?: any;
      acceptedDate?: any;
      depositedDate: any;
      publishedDate?: number;
      issn?: any;
      crossrefDocument?: any;
      magDocument?: any;
      attachmentCount?: number;
      repositoryPublicReleaseDate?: any;
      extendedMetadataAttributes?: any;
      orcidAuthors?: any;
  }

export interface Datum {
      _index: string;
      _type: string;
      _id: string;
      _score: number;
      _source: Source;
  }

export interface CoreResponse {
      status: string;
      totalHits: number;
      data: Datum[];
  }



