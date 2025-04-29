import React from 'react'
import styles from './Pagination.module.css'
const Pagination = ({ ChangePages, currentPage, totalPages }) => {
  const getPageRange = () => {
    const MaxPageNum = 10
    if (totalPages <= MaxPageNum) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    let startPage = Math.max(1, currentPage - Math.floor(MaxPageNum / 2))
    let endPage = Math.min(totalPages, startPage + MaxPageNum - 1)
    startPage = Math.max(1, endPage - MaxPageNum + 1)

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    return pages
  }
  const pages = getPageRange()

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages
  return (
    <div className={styles.btnArea}>
      <button
        disabled={isFirstPage}
        className={isFirstPage ? styles.disabled : ''}
        onClick={() => ChangePages(1)}
      >
        &laquo;
      </button>
      <button
        disabled={isFirstPage}
        className={isFirstPage ? styles.disabled : ''}
        onClick={() => ChangePages(currentPage - 1)}
      >
        &lt;
      </button>
      {pages.map(page => (
        <button
          className={`${styles.btn} ${currentPage === page ? styles.active : ''}`}
          onClick={() => ChangePages(page)}
          key={page}
        >
          {page}
        </button>
      ))}
      <button
        disabled={isLastPage}
        className={isLastPage ? styles.disabled : ''}
        onClick={() => ChangePages(currentPage + 1)}
      >
        &gt;
      </button>
      <button
        className={isLastPage ? styles.disabled : ''}
        disabled={isLastPage}
        onClick={() => ChangePages(totalPages)}
      >
        &raquo;
      </button>
    </div>
  )
}

export default Pagination
