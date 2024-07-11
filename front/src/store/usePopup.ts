import { create } from "zustand";


type IPopup = {
  isPopupOpen:boolean;
  openPopup: () => void;
  closePopup:()=>void;
};

export const usePopup = create<IPopup>((set) => ({
  isPopupOpen: false,
  openPopup: () => set({ isPopupOpen: true }),
  closePopup: () => set({ isPopupOpen: false }),
}));
