export type Pathname = 'MAIN_PAGE' | 'COURSE_PAGE' | 'USERS_PAGE' | 'PROFILE_PAGE';

export const pathname: Record<Pathname, string> = {
  MAIN_PAGE: '/',
  COURSE_PAGE: '/course',
  USERS_PAGE: '/users',
  PROFILE_PAGE: '/profile/me',
};
