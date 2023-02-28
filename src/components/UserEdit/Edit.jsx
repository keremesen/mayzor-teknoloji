import React from "react";

const Edit = () => {
  return (
    <div className="flex h-3/4 bg-white rounded-[10px] w-auto mx-4 mt-4 mb-16 flex-row">
        <img
          class="w-36 h-36 rounded-full m-8 "
          src="https://i.pravatar.cc/300"
          alt="Default avatar"
        />
      <div className="flex flex-col m-8">
      <label className="text-[#4C5F82] mb-2">Adı-Soyadı</label>
            <input
              className="bg-[#FCFCFC] rounded-full  w-full text-[#A7A7A7] p-3 border border-[#E1EDFF] "
              placeholder="Lale Soylu"
            />
      <label className="text-[#4C5F82] mb-2 mt-8">Telefon</label>
            <input
              className="bg-[#FCFCFC] rounded-full  w-full text-[#A7A7A7] p-3 border border-[#E1EDFF] "
              placeholder="0555 555 55 55"
            />
      <label className="text-[#4C5F82] mb-2 mt-8">E-mail</label>
            <input
              className="bg-[#FCFCFC] rounded-full  w-full text-[#A7A7A7] p-3 border border-[#E1EDFF] "
              placeholder="lalesoylu@gmail.com"
            />
      <label className="text-[#4C5F82] mb-2 mt-8">Doğum Tarihi</label>
            <input
              className="bg-[#FCFCFC] rounded-full  w-full text-[#A7A7A7] p-3 border border-[#E1EDFF] "
              placeholder="gg.aa.yy"
            />
      </div>
    </div>
  );
};

export default Edit;
