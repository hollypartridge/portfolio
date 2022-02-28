function WebsiteDisplay({ title, video }) {
  return (
    <div className='featured-project'>
      <div className='web-display-bar'>
        <div className='web-display-controls'>
          <div className='dots-display'></div>
          <div className='dots-display'></div>
          <div className='dots-display'></div>
        </div>
        <div className='website-bar'>
          <p id='display-url'>{title}</p>
        </div>
        <div className='web-display-controls'>
          <div className='dots-display-hidden'></div>
          <div className='dots-display-hidden'></div>
          <div className='dots-display-hidden'></div>
        </div>
      </div>
      <div className='video-primary-homepage'>
        <video src={video} autoPlay muted loop />
      </div>
    </div>
  )
}

export default WebsiteDisplay