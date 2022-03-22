import { ArrowCircleDownIcon } from "@heroicons/react/outline";

const DownloadApp = () => {
  return (
    <a
      href="#"
      className="h-10 flex-shrink-0 text-sm font-semibold text-link hover:text-white flex items-center px-6 gap-x-4"
    >
      <ArrowCircleDownIcon className="w-5 h-5" />
      Uygulamayı Yükle
    </a>
  );
};

export default DownloadApp;
