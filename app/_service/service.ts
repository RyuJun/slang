interface HTTPInstance {
  get<T>(url: string, config?: RequestInit): Promise<T>;
  delete<T>(url: string, config?: RequestInit): Promise<T>;
  head<T>(url: string, config?: RequestInit): Promise<T>;
  options<T>(url: string, config?: RequestInit): Promise<T>;
  post<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  patch<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
}

export enum E_ApiType {
  RIOT = 'riot',
  LOL = 'lol',
  LOLKR = 'lol-kr',
  CDN = 'cdn',
}

const getApiBaseUrl = (apiType: E_ApiType, isClient = false): string => {
  if (isClient) {
    switch (apiType) {
      case E_ApiType.RIOT:
        return `/${E_ApiType.RIOT}`;
      case E_ApiType.LOL:
        return `/${E_ApiType.LOL}`;
      case E_ApiType.LOLKR:
        return `/${E_ApiType.LOLKR}`;
      case E_ApiType.CDN:
        return `/${E_ApiType.CDN}`;
    }
  }
  switch (apiType) {
    case E_ApiType.RIOT:
      return `${process.env.NEXT_PUBLIC_RIOT_BASE_URL}`;
    case E_ApiType.LOL:
      return `${process.env.NEXT_PUBLIC_LOL_BASE_URL}`;
    case E_ApiType.LOLKR:
      return `${process.env.NEXT_PUBLIC_LOL_KR_BASE_URL}`;
    case E_ApiType.CDN:
      return `${process.env.NEXT_PUBLIC_CDN_BASE_URL}`;
    default:
  }
  return '';
};

class Service {
  public http: HTTPInstance;

  private baseURL: string;

  private headers: Record<string, string>;

  constructor(apiType: E_ApiType) {
    this.baseURL = getApiBaseUrl(apiType, Boolean(typeof window !== 'undefined'));
    this.headers = {
      Referer: this.baseURL,
      'X-Riot-Token': `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
    };
    this.http = {
      get: this.get.bind(this),
      delete: this.delete.bind(this),
      head: this.head.bind(this),
      options: this.options.bind(this),
      post: this.post.bind(this),
      put: this.put.bind(this),
      patch: this.patch.bind(this),
    };
  }

  private async request<T = unknown>(method: string, url: string, data?: unknown, config?: RequestInit): Promise<T> {
    try {
      const response = await fetch(this.baseURL + url, {
        method,
        headers: {
          ...this.headers,
          'Content-Type': 'application/json',
          ...config?.headers,
        },
        credentials: 'include',
        body: data ? JSON.stringify(data) : undefined,
        ...config,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData: T = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  private get<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('GET', url, undefined, config);
  }

  private delete<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('DELETE', url, undefined, config);
  }

  private head<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('HEAD', url, undefined, config);
  }

  private options<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('OPTIONS', url, undefined, config);
  }

  private post<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
    return this.request<T>('POST', url, data, config);
  }

  private put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
    return this.request<T>('PUT', url, data, config);
  }

  private patch<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
    return this.request<T>('PATCH', url, data, config);
  }
}

export default Service;
