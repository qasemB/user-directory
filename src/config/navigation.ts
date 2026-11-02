export const ROUTES = {
  users: "/",
  posts: "/posts",
  gallery: "/gallery",
} as const;

export interface NavigationItem {
  path: string;
  label: string;
  badge: string;
  title: string;
  description: string;
}

export const navigationItems: NavigationItem[] = [
  {
    path: ROUTES.users,
    label: "Users",
    badge: "TEAM DIRECTORY",
    title: "People make the difference.",
    description:
      "Discover your people, explore profiles, and find the right connections.",
  },
  {
    path: ROUTES.posts,
    label: "Posts",
    badge: "LATEST POSTS",
    title: "Ideas worth sharing.",
    description:
      "Catch up on what everyone is writing about and stay in the loop.",
  },
  {
    path: ROUTES.gallery,
    label: "Gallery",
    badge: "PHOTO GALLERY",
    title: "Moments that matter.",
    description: "Browse a collection of photos from across the network.",
  },
];
