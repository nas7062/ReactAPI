import { useState } from 'react'
import { useTrip } from './useTrip'
import styles from './TripPage.module.css'
const TripPage = () => {
  const [search, setSearch] = useState('제주')
  const { data, isError, isLoading } = useTrip(1, 10, search)
  const itemList = data?.response.body.items?.item || []
  console.log(itemList)

  isLoading && <div>loading...</div>
  isError && <div>isError...</div>
  return (
    <div>
      <h2>TripPage</h2>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <div className={styles.container}>
        {itemList.map(item => (
          <div className={styles.box} key={item.contentid}>
            <div className={styles.imgWrap}>
              <img src={item.firstimage} alt={item.title} />
            </div>
            <div className={styles.textWrap}>
              <p>{item.title}</p>
              <p>{item.addr1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TripPage
