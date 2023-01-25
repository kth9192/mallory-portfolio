import { ILinkItem } from '@/interface /linkItem';
import { atom } from 'recoil';

export const currentPageAtom = atom({
  key: '',
  default: {} as ILinkItem,
});
