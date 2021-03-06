import React, { useState } from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { Modal } from ".";

afterEach(cleanup);

it("opens a modal", async () => {
  const { getByText } = render(<MockModal onClose={jest.fn()} />);

  fireEvent.click(getByText("Button"));

  await waitFor(() => {
    expect(getByText("This is a modal")).toBeInstanceOf(HTMLDivElement);
  });
});

it("calls the onClose handler", async () => {
  const changeHandler = jest.fn();
  const { getByText, getByLabelText } = render(
    <MockModal onClose={changeHandler} />
  );

  fireEvent.click(getByText("Button"));
  fireEvent.click(getByLabelText("Close modal"));

  expect(changeHandler).toHaveBeenCalledTimes(1);
});

it("calls the onClose handler by clicking the overlay", async () => {
  const changeHandler = jest.fn();
  const { getByTestId, getByText } = render(
    <MockModal onClose={changeHandler} />
  );

  fireEvent.click(getByText("Button"));
  fireEvent.click(getByTestId("modal-overlay"));

  expect(changeHandler).toHaveBeenCalledTimes(1);
});

interface MockModalProps {
  onClose(): void;
}

function MockModal({ onClose }: MockModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={openModal}>
        Button
      </button>
      <Modal open={open} onClose={onClose}>
        This is a modal
      </Modal>
    </>
  );

  function openModal() {
    setOpen(true);
  }
}
