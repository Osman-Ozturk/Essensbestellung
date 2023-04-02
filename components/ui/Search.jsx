import React from "react";
import { Modal, Input } from "antd";
import Image from "next/image.js";
const Search = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <h2 className="text-[40px] flex justify-center items-center font-dancing">Suchen</h2>

      <Input
        placeholder="Suchen..."
        className="border-2 border-black rounded-md shadow-sm mt-10"
      />
      <div>
        <ul>
          <li>
            <div className="flex justify-between items-center mt-4 hover:bg-primary p-2 rounded-md transition-all">
              <Image
                src="/images/f1.png"
                alt="food"
                width={48}
                height={48}
              />
              <p>Gute Pizza</p>
              <p>10€</p>
            </div>
            <div className="flex justify-between items-center mt-4 hover:bg-primary p-2 rounded-md transition-all">
              <Image
                src="/images/f1.png"
                alt="food"
                width={48}
                height={48}
              />
              <p>Gute Pizza</p>
              <p>10€</p>
            </div>
            <div className="flex justify-between items-center mt-4 hover:bg-primary p-2 rounded-md transition-all">
              <Image
                src="/images/f1.png"
                alt="food"
                width={48}
                height={48}
              />
              <p>Gute Pizza</p>
              <p>10€</p>
            </div>
            <div className="flex justify-between items-center mt-4 hover:bg-primary p-2 rounded-md transition-all">
              <Image
                src="/images/f1.png"
                alt="food"
                width={48}
                height={48}
              />
              <p>Gute Pizza</p>
              <p>10€</p>
            </div>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default Search;
