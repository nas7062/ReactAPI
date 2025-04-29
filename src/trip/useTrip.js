import { useQuery } from '@tanstack/react-query'
import { getTripData } from './getTripApi'

export const useTrip = (page, perPage, keyword) => {
  return useQuery({
    queryKey: ['trip', keyword],
    queryFn: () => getTripData(page, perPage, keyword),
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60,
    enabled: !!keyword?.trim(),
  })
}
