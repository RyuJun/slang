import { HydrationBoundary, QueryClient, dehydrate, QueryState, QueryKey } from '@tanstack/react-query';
import { cache } from 'react';

export const getQueryClient = cache(() => new QueryClient());

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export interface QueryProps<ResponseType = unknown> {
  queryKey: QueryKey;
  queryFn: () => Promise<ResponseType>;
}

interface DehydratedQueryExtended<TData = unknown, TError = unknown> {
  state: QueryState<TData, TError>;
}

export async function getDehydratedQuery<Q extends QueryProps>({ queryKey, queryFn }: Q) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({ queryKey, queryFn });

  const queries = dehydrate(queryClient);
  return queries;

  // 이부분은 필터를 하게 되면 queries obj 형식이 바뀌어서 react-query의 pre-fetcing이 제대로 동작하지 않음
  // const [dehydratedQuery] = queries.filter((query) => isEqual(query.queryKey, queryKey));
  // return dehydratedQuery as DehydratedQueryExtended<UnwrapPromise<ReturnType<Q['queryFn']>>>;
}

export async function getDehydratedQueries<Q extends QueryProps[]>(queriesArr: Q) {
  const queryClient = getQueryClient();
  await Promise.all(queriesArr.map(({ queryKey, queryFn }) => queryClient.prefetchQuery({ queryKey, queryFn })));

  const queries = dehydrate(queryClient);
  return queries;
  // return dehydrate(queryClient).queries as DehydratedQueryExtended<UnwrapPromise<ReturnType<Q[number]['queryFn']>>>[];
}

export const Hydrate = HydrationBoundary;

export default {};
