export interface RegisterBr {
  status_code: number;
  status: string;
  fqdn: string;
  hosts: string[];
  "publication-status": string;
  "expires-at": string;
  suggestions: string[];
}
