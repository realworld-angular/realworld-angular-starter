export const environment = {
  apiUrl: '',
  csp: `
    default-src 'self';
    script-src 'self';
    style-src 'self';
    font-src 'self';
    img-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    connect-src 'self';
  `
};
