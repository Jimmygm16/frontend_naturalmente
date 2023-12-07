import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import ClearIcon from "@mui/icons-material/Clear";

export default function ModalCancelBuy(): JSX.Element {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDeleteBuy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log("delete");
  };

  return (
    <>
      <Button
        onPress={(e) => {
          onOpen();
        }}
        className="p-1 hover:bg-gray-300 rounded-lg min-h-fit"
      >
        <ClearIcon sx={{ fontSize: 30 }} />
      </Button>
      <Modal
        size="sm"
        isOpen={isOpen}
        isDismissable={false}
        placement="center"
        onOpenChange={onOpenChange}
        className="bg-gray-100"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="text-center py-4">
                <p className="my-3 text-lg">
                  Seguro que deseas cancelar tu pedido?
                </p>
                <Button color="primary" onPress={onClose}>
                  Estoy seguro!
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
