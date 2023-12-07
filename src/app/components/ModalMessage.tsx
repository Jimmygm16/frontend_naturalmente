import { Dialog } from "@headlessui/react";

export default function ModalCrud(props: {
  isOpen: boolean;
  message: string;
  closeModal: () => void;
}) {
  let { isOpen, closeModal } = props;
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="relative z-50 flex flex-col"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <Dialog.Panel className="w-full max-w-sm rounded">
          <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-2 border-gray-400 rounded-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 uppercase"
                  id="modal-headline"
                >
                  {props.message}
                </h3>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
