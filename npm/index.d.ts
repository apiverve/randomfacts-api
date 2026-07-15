declare module '@apiverve/randomfacts' {
  export interface randomfactsOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface randomfactsResponse {
    status: string;
    error: string | null;
    data: RandomFactsData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface RandomFactsData {
      fact: null | string;
  }

  export default class randomfactsWrapper {
    constructor(options: randomfactsOptions);

    execute(callback: (error: any, data: randomfactsResponse | null) => void): Promise<randomfactsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randomfactsResponse | null) => void): Promise<randomfactsResponse>;
    execute(query?: Record<string, any>): Promise<randomfactsResponse>;
  }
}
