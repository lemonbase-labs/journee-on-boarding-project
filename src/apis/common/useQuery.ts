import useSWR, { SWRConfiguration } from 'swr';
import { fetcher } from '../fetcher';

export function useQuery<Data>(endpoint: string | null, options?: SWRConfiguration) {
  return useSWR(
    endpoint,
    async url => {
      const response = await fetcher.get<Data>(url);
      return response.data;
    },
    options,
  );
}
