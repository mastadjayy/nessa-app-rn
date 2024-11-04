export const getUserImageSrc = imagePath => {
  if(imagePath) {
    return {uri: imagePath}
  }else{
    return require('../assets/images/defaultUser.png')
  }
}

export const getCourseImageSrc = imagePath => {
  if(imagePath) {
    return {uri: imagePath}
  }else{
    return require('../assets/images/speech.png')
  }
}

export const getCourseThumbnail = (imageSrc) => {
  switch (imageSrc) {
    case '@/assets/images/trk.png':
      return require('@/assets/images/trk.png');
    case '@/assets/images/jmc.png':
      return require('@/assets/images/jmc.png');
    case '@/assets/images/lib.png':
      return require('@/assets/images/lib.png');
    default:
      return require('@/assets/images/speech.png'); // Fallback image
  }
};