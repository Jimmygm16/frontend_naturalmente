import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import FormCrudProduct from './FormCrudProduct';

export default function ModalCrud(props: { id:number, isOpen: boolean, closeModal: () => void,
  reloadProducts?: () => void}) {
  let {isOpen, closeModal} = props;
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50 flex flex-col border-white">
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white border">
              <FormCrudProduct id={props.id} reloadProducts={props.reloadProducts}/>
              <button onClick={closeModal}>Salir</button>
          </Dialog.Panel>
        </div>
    </Dialog>
  )
}
