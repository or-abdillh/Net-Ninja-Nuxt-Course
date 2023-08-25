export function useFetchApi(url: string, options: any = {}) {

  // initial payload
  const BASE_URL = 'http://localhost:8000'
  const xsrfToken = useCookie('XSRF-TOKEN')

  // generate headers
  let headers = {
    accept: 'appliaction/json',
    ...options?.headers
  }

  // Fill X SRF TOKEN
  if (xsrfToken.value) headers['X-XSRF-TOKEN'] = xsrfToken.value

  // Server side
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(['cookie']),
      referer: BASE_URL
    }
  }

  return useFetch(url, {
    credentials: 'include',
    baseURL: BASE_URL,
    headers,
    ...options
  })
}
