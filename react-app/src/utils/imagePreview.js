export function previewSetter(imageArray) {
    let imagePreview1 = null;
    let imagePreview2 = null;
    let imagePreview3 = null;
    let imagePreview4 = null;
    let imagePreview5 = null;
    let imagePreview6 = null;
    let previewArray = [];

    for (let i = 0; i < imageArray.length; i++) {
      switch (i) {
        case 0:
          imagePreview1 = URL.createObjectURL(imageArray[i]);
          previewArray.push(imagePreview1);
          continue;
        case 1:
          imagePreview2 = URL.createObjectURL(imageArray[i]);
          previewArray.push(imagePreview2);
          continue;
        case 2:
          imagePreview3 = URL.createObjectURL(imageArray[i]);
          previewArray.push(imagePreview3);
          continue;
        case 3:
          imagePreview4 = URL.createObjectURL(imageArray[i]);
          previewArray.push(imagePreview4);
          continue;
        case 4:
          imagePreview5 = URL.createObjectURL(imageArray[i]);
          previewArray.push(imagePreview5);
          continue;
        case 5:
          imagePreview6 = URL.createObjectURL(imageArray[i]);
          previewArray.push(imagePreview6);
          continue;
      }
    }

    return previewArray;
  }
