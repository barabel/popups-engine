import { lazy } from 'react';

export const popups = {
  message: lazy(
    () => import('@views/popup-templates/message'),
  ),
};
