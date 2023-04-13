import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import Title from "../ui/Title.jsx";
import axios from "axios";
const AddProduct = ({ isProductOpen, setIsProductOpen }) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState("");
  const [extraOptions, setExtraOptions] = useState([]);
  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };
  const handleExtra = (e) => {
    if (extra) {
      if (extra.text && extra.price) {
        setExtraOptions([...extraOptions, extra]);
      }
    }
  };
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, [categories]);

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
    console.log(imageSrc);
  };
  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "essensbestellung");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dxtjodvei/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        img: url,
        title,
        desc,
        category: category.toLowerCase(),
        prices,
        extraOptions,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        newProduct
      );

      if (res.status === 200) {
        setIsProductOpen(false);
        toast.success("Product created successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <Title className="font-dancing">Ein neues Produkt hinzufügen</Title>
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
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col text-sm mt-4">
        <span className="font-semibold mb-[2px]">Beschreibung</span>
        <textarea
          className="border-2 p-1 text-sm px-1 outline-none"
          placeholder="Schreibt Beschreibung..."
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <div className="flex flex-col text-sm mt-4">
        <span className="font-semibold mb-[2px]">Kategorie wählen</span>
        <select
          className="border-2 p-1 text-sm px-1 outline-none"
          placeholder="Schriebt  title..."
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.length > 0 &&
            categories.map((cat) => (
              <option key={cat._id} value={cat.title.toLowerCase()}>
                {cat.title}
              </option>
            ))}
        </select>
      </div>
      {category === "pizza" ? (
        <div className="flex flex-col text-sm mt-4 w-full">
          <span className="font-semibold mb-[2px]">Preise</span>
          <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
            <input
              type="number"
              className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
              placeholder="klein"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              type="number"
              className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
              placeholder="mittel"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              type="number"
              className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
              placeholder="gross"
              onChange={(e) => changePrice(e, 3)}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-sm mt-4 w-full">
          <span className="font-semibold mb-[2px]">Preise</span>
          <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
            <input
              type="number"
              className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
              placeholder="klein"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col text-sm mt-4 w-full">
        <span className="font-semibold mb-[2px]">Extra</span>
        <div className="flex  gap-6 w-full md:flex-nowrap flex-wrap">
          <input
            type="text"
            className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
            placeholder="artikel"
            name="text"
            onChange={(e) =>
              setExtra({ ...extra, [e.target.name]: e.target.value })
            }
          />
          <input
            type="number"
            className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
            placeholder="preise"
            name="price"
            onChange={(e) =>
              setExtra({ ...extra, [e.target.name]: e.target.value })
            }
          />
          <button className="btn-primary ml-auto" onClick={handleExtra}>Hinzufügen</button>
        </div>
        <div className="mt-2 flex gap-2">
          {extraOptions.map((item, index) => (
            <span
              className="inline-block border border-orange-500 text-orange-500  p-1 rounded-xl text-xs cursor-pointer"
              key={index}
              onClick={() => {
                setExtraOptions(extraOptions.filter((_, i) => i !== index));
              }}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button className="btn-primary !bg-success" onClick={handleCreate}>
          Erstellen
        </button>
      </div>

      <div></div>
    </Modal>
  );
};

export default AddProduct;
