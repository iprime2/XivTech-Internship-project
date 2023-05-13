const Collaborate = ({ title, content, link, img }) => {
  return (
    <>
      <div className='collaborate'>
        <div className='left'>
          <div className='left-top'>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>

          <div className='left-bottom'>
            <span>{link}</span>
            <img src='https://www.xivtech.io./Arrow-black.svg' alt='' />
          </div>
        </div>
        <img src={img} alt='' className='collaborate-img' />
      </div>

      <div className='collaborate-mobile'>
        <h1>{title}</h1>
        <img src={img} alt='' className='collaborate-img' />
        <p>{content}</p>

        <div className='left-bottom'>
          <span>{link}</span>
          <img src='https://www.xivtech.io./Arrow-black.svg' alt='' />
        </div>
      </div>
    </>
  )
}

export default Collaborate
