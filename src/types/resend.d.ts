declare module "resend" {
  export type ResendEmailParams = {
    from: string;
    to: string | string[];
    subject: string;
    html?: string;
    text?: string;
    reply_to?: string | string[];
  };

  export type ResendEmailResponse = {
    data?: { id?: string } | null;
    error?: { message?: string } | null;
  };

  export class Resend {
    constructor(apiKey?: string);
    emails: {
      send: (params: ResendEmailParams) => Promise<ResendEmailResponse>;
    };
  }
}
