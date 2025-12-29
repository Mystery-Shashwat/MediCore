export const handleError = (error: unknown) => {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(`Error: ${error.message}`);
    } else if (typeof error === "string") {
      console.error(error);
      throw new Error(`Error: ${error}`);
    } else {
      console.error(error);
      throw new Error(`Unknown error: ${JSON.stringify(error)}`);
    }
  };
  
  export const resizeBase64Img = (
    imageSource: any,
    maxWidth = 100,
    maxHeight = 100,
  ) => {
    return new Promise((resolve, reject) => {
      // Handle null, undefined, or invalid image sources
      if (!imageSource || imageSource === '') {
        resolve("/default-avatar.svg");
        return;
      }

      // If it's a placeholder URL, return default avatar
      if (typeof imageSource === 'string' && imageSource.includes('placeholder.com')) {
        console.warn("Placeholder URL detected, using default avatar");
        resolve("/default-avatar.svg");
        return;
      }

      const img = new Image();
      
      // Handle CORS for external URLs
      img.crossOrigin = "anonymous";
      
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d") as any;
          ctx.drawImage(img, 0, 0, width, height);

          const newBase64Str = canvas.toDataURL("image/jpeg", 0.7);
          resolve(newBase64Str);
        } catch (error) {
          console.error("Error resizing image:", error);
          resolve("/default-avatar.svg");
        }
      };

      img.onerror = (error) => {
        console.error("Error loading image:", error);
        // Fallback to a default avatar if image fails to load
        resolve("/default-avatar.svg");
      };

      // Check if it's already a base64 string or a URL
      if (typeof imageSource === 'string') {
        if (imageSource.startsWith('data:')) {
          // It's already a base64 string
          img.src = imageSource;
        } else if (imageSource.startsWith('http') || imageSource.startsWith('/')) {
          // For external URLs, we can't resize due to CORS, so return as-is
          // For local paths, we can try to load them
          if (imageSource.startsWith('http')) {
            console.warn("Cannot resize external URL due to CORS restrictions:", imageSource);
            resolve(imageSource);
          } else {
            // Local path, try to load it
            img.src = imageSource;
          }
        } else {
          // Assume it's a base64 string without the data: prefix
          img.src = `data:image/jpeg;base64,${imageSource}`;
        }
      } else {
        reject(new Error("Invalid image source"));
      }
    });
  };