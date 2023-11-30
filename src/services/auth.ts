// import * as jwt_decode from 'jwt-decode';

// /**
//  * Verifies if the accessToken and Cookie are valid to save or delete the userAuth in localStorage
//  * @returns the Auth status
//  */
// export const validateAccessToken = (): void => {

//   // Validates the cookie existence for a possible previous return
//   if (!document.cookie.split(";")) {
//     console.log(1);
//     localStorage.removeItem('authUser');
//     return;
//   }

//   try {
//     // gets the jwt token and validates its expiration on the payload
//     const accessCookie = cookies().get('accessToken');
//     const decodedToken = jwt_decode.jwtDecode(accessCookie?.value as string);

//     if (decodedToken.exp as number * 1000 < Date.now() && localStorage.getItem('authUser')) {
//       localStorage.removeItem('authUser');
//     }

//   } catch (error) {
//     console.error('Error decoding token', error);
//   }
// }



