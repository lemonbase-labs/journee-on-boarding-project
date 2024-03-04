import { AxiosError } from 'axios';
import useSWRMutation from 'swr/mutation';
import { fetcher } from '../fetcher';

export type MutationCallback<Response> = Pick<MutationArgs<Response>, 'onSuccess' | 'onError'>;

interface MutationArgs<Response> {
  endpoint: string;
  onSuccess?: (res: Response) => void;
  onError?: (err: AxiosError) => void;
}

function useMutation<ExtraArg = void, Response = void>(
  method: 'post' | 'put' | 'patch' | 'delete',
  endpoint: string,
  onSuccess?: (res: Response) => void,
  onError?: (err: AxiosError) => void,
) {
  return useSWRMutation<Response, AxiosError, string | null, ExtraArg>(
    endpoint,
    async (url, fetcherOptions) => {
      const res = await fetcher.request({
        method,
        url,
        data: fetcherOptions.arg,
      });

      return res.data;
    },
    {
      onError: err => onError?.(err),
      onSuccess: data => onSuccess?.(data),
      revalidate: false,
      throwOnError: false,
    },
  );
}

export function usePost<ExtraArg, Response>({ endpoint, onSuccess, onError }: MutationArgs<Response>) {
  return useMutation<ExtraArg, Response>('post', endpoint, onSuccess, onError);
}

export function usePut<ExtraArg, Response>({ endpoint, onSuccess, onError }: MutationArgs<Response>) {
  return useMutation<ExtraArg, Response>('put', endpoint, onSuccess, onError);
}

export function usePatch<ExtraArg, Response>({ endpoint, onSuccess, onError }: MutationArgs<Response>) {
  return useMutation<ExtraArg, Response>('patch', endpoint, onSuccess, onError);
}

export function useDelete<ExtraArg, Response>({ endpoint, onSuccess, onError }: MutationArgs<Response>) {
  return useMutation<ExtraArg, Response>('delete', endpoint, onSuccess, onError);
}
