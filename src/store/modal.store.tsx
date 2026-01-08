import { create } from "zustand";
import { ModalType } from "../types/modals";


interface ModalState{
    isOpen: boolean;
    type: ModalType | null;
    data: any;

    openModal: <T>(type: ModalType, data: T) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    type: null,
    data: null,

    openModal: (type, data) => 
        set({ 
            isOpen : true, 
            type,
            data,
        }),

    closeModal: () => 
        set({
            isOpen: false,
            data: null,
            type: null
        }),
}));