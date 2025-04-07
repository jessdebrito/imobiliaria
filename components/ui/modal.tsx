"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "@/components/ui/icon-button";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)]" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">

            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl max-h-11/12 overflow-hidden rounded-lg text-left align-middle">
                <div className="relative flex w-full items-center overflow bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-4 sm:pt-6 md:p-4 lg:p-6">
                  <div className="absolute right-4 top-12 z-15">
                    <IconButton onClick={onClose} icon={<X size={10} />} />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
            
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
