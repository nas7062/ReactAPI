import axios from 'axios'

const TRIP_API = import.meta.env.VITE_TRIP_API_KEY
const TRIP_BASE_URL = 'https://apis.data.go.kr/B551011/KorService1/searchKeyword1'

export const getTripData = async (page = 1, perPage = 10, keyword) => {
  try {
    const encodedKeyword = encodeURIComponent(keyword)
    const res = await axios.get(
      `${TRIP_BASE_URL}?numOfRows=${perPage}&pageNo=${page}&MobileOS=ETC&MobileApp=test&_type=json&listYN=Y&arrange=C&keyword=${encodedKeyword}&contentTypeId=39&serviceKey=${TRIP_API}`
    )

    return res.data
  } catch (err) {
    console.error('getTripData error:', err)
    throw err
  }
}
