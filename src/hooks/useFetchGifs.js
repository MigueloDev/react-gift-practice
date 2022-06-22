import { useEffect, useState } from "react";
import { getGifs } from '../helpers/api'


export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);

  const [isLoading, setIsloading] = useState(true);

  const loadImages = async () => {
    const newImages = await getGifs({category});
    setImages(newImages);
    setIsloading(false)
  }

  useEffect( () => {
    loadImages();
  }, [ ])

  return {
    images,
    isLoading,
  }
}
