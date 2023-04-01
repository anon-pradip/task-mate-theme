import React, { useEffect, useState } from 'react'

const useFetch = async (url) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json()
      setData(result)
    }
    fetchData();
  }, [url])
  return { data }
}

export default useFetch;