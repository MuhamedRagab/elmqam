import { Button } from '@nextui-org/button'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/modal'
import { Select, SelectItem } from '@nextui-org/select'
import { useState } from 'react'
import { Product } from './types'

type ProductModalProps = {
  product: Product
}

export default function ProductModal({ product }: ProductModalProps): JSX.Element {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [, setSelectedType] = useState<string | null>(null)

  return (
    <article className="mt-4">
      <Button onPress={onOpen}>عرض</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{product.name}</ModalHeader>
              <ModalBody>
                <Select
                  label="حدد النوع"
                  className="max-w-xs"
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {product.types.map((type) => (
                    <SelectItem key={type.id} value={type.name}>
                      {type.name}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </article>
  )
}
