const API_URL = 'https://playful-rugelach-3258d8.netlify.app';

export const environment = {
  apiUrl: API_URL,
  csp: `
    default-src 'self';
    script-src 'self' 'nonce-randomNonceGoesHere';
    style-src 'self' 'nonce-randomNonceGoesHere';
    font-src 'self';
    img-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    connect-src 'self' ${API_URL};
  `,
};
