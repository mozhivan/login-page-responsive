import { useEffect, useState, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  id: string
}

export const Portal = ({ children, id }: PropsWithChildren<Props>) => {
  const [containerElement, setcontainerElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setcontainerElement(document.getElementById(id));
  }, []);

  if (!containerElement) {
    return null;
  }

  return createPortal(children, containerElement);
};
