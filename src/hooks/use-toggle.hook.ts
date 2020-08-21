/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react';

export type UseToggleType = ReturnType<typeof useToggle>;

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleToggle = (): void => {
    setOpen((x) => !x);
  };

  const handleEscKey: React.KeyboardEventHandler = (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return {
    models: { open },
    operations: {
      handleOpen,
      handleClose,
      handleToggle,
      handleEscKey,
    },
  };
};
