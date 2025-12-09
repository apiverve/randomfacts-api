declare module '@apiverve/randomfacts' {
  export interface randomfactsOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface randomfactsResponse {
    status: string;
    error: string | null;
    data: RandomFactsData;
    code?: number;
  }


  interface RandomFactsData {
      fact: string;
  }

  export default class randomfactsWrapper {
    constructor(options: randomfactsOptions);

    execute(callback: (error: any, data: randomfactsResponse | null) => void): Promise<randomfactsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randomfactsResponse | null) => void): Promise<randomfactsResponse>;
    execute(query?: Record<string, any>): Promise<randomfactsResponse>;
  }
}
