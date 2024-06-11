

const ImageCard = ({ url, dscr }) => {
     const capitalizeFirstLetter = (text) => {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <div>
          <img src={url} alt={dscr} />
          <p>{capitalizeFirstLetter(dscr)}</p>
</div>

  )
}

export default ImageCard