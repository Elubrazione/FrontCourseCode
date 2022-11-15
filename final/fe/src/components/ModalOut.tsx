import { Button, Modal } from "antd";
import React, { useState, FC } from "react";
import SubmitForm from "./SubmitForm";

interface IProps {
  clickButton: boolean;
  text: string;
  icon?: any;
  modalTitle: string
  submitValues?: any;
}

const ModalOut: FC<IProps> = ({clickButton, text, icon, modalTitle, submitValues}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {
        clickButton?
        <Button type="primary" onClick={showModal} icon={icon}>{text}</Button>:
        <a onClick={showModal}>{text}</a>
      }
      <Modal
        title={modalTitle} open={isModalOpen} onOk={handleOk}
        onCancel={handleCancel} okText="确认" cancelText="取消" footer={null}
      >
				<SubmitForm editVer={!clickButton} initialValue={submitValues}
          handleOK={handleOk} handleCancel={handleCancel}
        />
      </Modal>
    </>
  );
};

export default ModalOut;