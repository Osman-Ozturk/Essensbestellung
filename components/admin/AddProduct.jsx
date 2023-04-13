import React, { useState } from "react";
import { Modal } from "antd";
import Title from "../ui/Title.jsx";
import axios from "axios";
const AddProduct = ({ isProductOpen, setIsProductOpen }) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
    console.log(imageSrc);
  };
  const handleCreate =async ()=>{
        const data = new FormData();
        data.append("file",file);
        data.append("upload_preset","essensbestellung")
        try {
                const uploadRes =await axios.post("https://api.cloudinary.com/v1_1/dxtjodvei/image/upload",data)
        } catch (error) {
                console.log(error);
        }
        setFile("")
        setImageSrc("")
        setIsProductOpen(false)
  }

  const handleOk = () => {
    setIsProductOpen(false);
  };
  const handleCancel = () => {
    setIsProductOpen(false);
  };
  return (
    <Modal
      open={isProductOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <Title className="font-dancing">
        Ein neues Produkt hinzufügen
      </Title>
      <div className="mt-4 flex flex-row justify-start items-center">
        <label className="flex gap-2 items-center">
          <input
            type="file"
            onChange={(e) => handleOnChange(e)}
            className="hidden"
          />
          <button className="btn-primary !rounded-none !bg-blue-600 pointer-events-none">
            Ein Bild auswählen
          </button>
          {imageSrc && (
            <div>
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img src={imageSrc} alt="" className="w-12 h-12 rounded-full" />
            </div>
          )}
        </label>
      </div>
      <div className="flex flex-col text-sm mt-4">
        <span className="font-semibold mb-[2px]">Titel</span>
        <input
          type="text"
          className="border-2 p-1 text-sm px-1 outline-none"
          placeholder="Schreibt Titel..."
        />
      </div>
      <div className="flex flex-col text-sm mt-4">
        <span className="font-semibold mb-[2px]">Beschreibung</span>
        <textarea
          className="border-2 p-1 text-sm px-1 outline-none"
          placeholder="Schreibt Beschreibung..."
        />
      </div>

      <div className="flex flex-col text-sm mt-4">
        <span className="font-semibold mb-[2px]">Kategorie wählen</span>
        <select
          className="border-2 p-1 text-sm px-1 outline-none"
          placeholder="Schriebt  title..."
        >
          <option value="1">Category 1</option>
          <option value="1">Category 1</option>
          <option value="1">Category 1</option>
          <option value="1">Category 1</option>
        </select>
      </div>

      <div className="flex flex-col text-sm mt-4 w-full">
        <span className="font-semibold mb-[2px]">Preise</span>
        <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
          <input
            type="number"
            className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
            placeholder="klein"
          />
          <input
            type="number"
            className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
            placeholder="mittel"
          />
          <input
            type="number"
            className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
            placeholder="gross"
          />
        </div>
      </div>
      <div className="flex flex-col text-sm mt-4 w-full">
        <span className="font-semibold mb-[2px]">Extra</span>
        <div className="flex  gap-6 w-full md:flex-nowrap flex-wrap">
          <input
            type="text"
            className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
            placeholder="artikel"
          />
          <input
            type="number"
            className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
            placeholder="preise"
          />
          <button className="btn-primary ml-auto">Hinzufügen</button>
        </div>
        <div className="mt-2">
          <span className="inline-block border border-orange-500 text-orange-500  p-1 rounded-xl text-xs">
            ketçap
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="btn-primary !bg-success" onClick={handleCreate}>Erstellen</button>
      </div>

      <div></div>
    </Modal>
  );
};

export default AddProduct;
