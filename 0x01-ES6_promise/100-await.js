import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);
    return { photo: photoResponse, user: userResponse };
  } catch (error) {
    console.error(error);
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
