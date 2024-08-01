export const environment = {
  apiUrl: '',
  csp: `
    default-src 'self';
    script-src 'self' 'nonce-randomNonceGoesHere';
    style-src 'self' 'nonce-randomNonceGoesHere';
    font-src 'self';
    img-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    connect-src 'self';
  `
};
