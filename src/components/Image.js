import React from 'react'

const Image =({file}) => {

  const styles = {
    width: 'inherit',
    height: 'inherit',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${localStorage.getItem(file)})`
  };

  return (
    <div style={styles}></div>
  )
}

export default Image
