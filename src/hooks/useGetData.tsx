import { useSuspenseQuery } from '@tanstack/react-query'

export const useFetchRewardCards = () => {
  const data = useSuspenseQuery({
    queryKey: ['fetchRewardCards'],
    queryFn: () => {
      try {
        const data  = fetch('https://62d7f7f09c8b5185c7800bb3.mockapi.io/pho').then(response => response.json())
        return data
      } catch (error) {
        console.log(error)
        return null
      }
    },
    
  })
  return data
}