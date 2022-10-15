import Image from "next/image";
import imagNotFound from "../public/not.gif";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <Image src={imagNotFound} alt="Not Found" />
      </div>
    </div>
  );
};

export default ErrorPage;
