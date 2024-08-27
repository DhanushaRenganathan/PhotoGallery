import React from 'react'
import { Link } from 'react-router-dom';

const PhotoGallery = () => {

    const photos = [
        "https://media-public.canva.com/MADGvzmAwIo/7/screen.jpg",
        'https://media-public.canva.com/Y0RoQ/MAES_-Y0RoQ/1/s.jpg',
        'https://media-public.canva.com/MADGv110eb0/6/screen.jpg',
        'https://media-public.canva.com/fAs2Q/MADyRsfAs2Q/1/s.jpg',
        'https://media-public.canva.com/MADGyeep8uw/4/screen.jpg',
        "https://media-public.canva.com/HFQ1g/MAEf1JHFQ1g/1/s.jpg",
        "https://media-public.canva.com/e4Sok/MAFlJee4Sok/1/s.jpg",
        "https://media-public.canva.com/bjpWo/MAEhI9bjpWo/1/s.jpg",
        "https://media-public.canva.com/zNrWQ/MAFtqtzNrWQ/1/s.jpg",
        "https://media-public.canva.com/gyie0/MAFE9Agyie0/1/s.jpg",
        "https://media-public.canva.com/bjYvE/MAFNlFbjYvE/1/s.jpg",
        "https://media-public.canva.com/anh9k/MAEP54anh9k/1/s.jpg",
        "https://media-public.canva.com/MADQ5LON7LA/1/screen.jpg",
        "https://i.pinimg.com/564x/2a/10/0b/2a100bbb76b462a6e448dfbf3877d1a3.jpg",
        "https://i.pinimg.com/564x/8b/8d/68/8b8d68a2fbfd23930de9dbc9da6fb0c2.jpg"];

  return (
    <div className='gallery'>

        {
            photos.map( (photo, index) => (
                <Link to="/gallery">
                    <img src={photo} alt=''/>
                </Link>
            ))
        }
    
    </div>
    
  )
}

export default PhotoGallery;