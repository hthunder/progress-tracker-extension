import { NotionRequest } from 'notion-api-types';

interface PageDTOCreate {
  parent: NotionRequest.Parent;
  properties: {
    [key: string]: NotionRequest.PageProperty | undefined;
  };
}

class PageDTO {
  properties?: {
    [key: string]: NotionRequest.PageProperty | undefined;
  };
}

export { PageDTO, PageDTOCreate };
