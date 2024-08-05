import React, { useEffect, useState } from 'react';

interface ImageFetcherProps {
  imageName: string;
}

const ImageFetcher: React.FC<ImageFetcherProps> = ({ imageName }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/api/image/${imageName}`, {
          headers: {
            'Authorization': 'YOUR_USER_AUTH_TOKEN' // Replace with actual token
          }
        });

        if (response.ok) {
          const url = await response.text();
          setImageUrl(url);
        } else {
          setError('Error fetching image');
        }
      } catch (err) {
        setError('Fetch error');
      }
    };

    fetchImage();
  }, [imageName]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <img src={imageUrl || ''} alt="Fetched Image" />
      )}
    </div>
  );
};

export default ImageFetcher;
