export type Pathname =
  | 'MAIN_PAGE'
  | 'COURSE_PAGE'
  | 'USERS_PAGE'
  | 'PROFILE_PAGE'
  | 'SHOP_PAGE'
  | 'GOOGLE_AUTH_CALLBACK';

export const pathname: Record<Pathname, string> = {
  MAIN_PAGE: '/',
  COURSE_PAGE: '/course',
  USERS_PAGE: '/users',
  PROFILE_PAGE: '/profile/me',
  SHOP_PAGE: '/shop',
  GOOGLE_AUTH_CALLBACK: '/finish-google-sso',
};
