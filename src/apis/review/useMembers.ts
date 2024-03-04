import { useQuery } from '@apis/common/useQuery';
import { API_PATH } from '@apis/constants';
import { Member } from './entities';

export default function useMembers() {
  const { data, isLoading } = useQuery<{ members: Member[] }>(API_PATH.MEMBERS);

  return { members: data?.members, isLoading };
}
