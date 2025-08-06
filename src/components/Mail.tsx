import React from "react";

interface IMailProps {
  name: string;
  email: string;
  message: string;
}

const Mail = ({ name, email, message }: IMailProps) => {
  return (
    <div className="bg-white">
      <p className="text-mainBlack text-xl">{name}</p>
      <p className="text-mainBlack text-base">{email}</p>
      <p className="text-mainBlack text-sm">{message}</p>
    </div>
  );
};

export default Mail;
