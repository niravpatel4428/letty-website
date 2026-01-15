import Image from "next/image";

type CommonSubTitleProps = {
  text: string;
  iconSrc?: string;
};

const CommonSubTitle = ({ text, iconSrc }: CommonSubTitleProps) => {
  return (
    <div className="block">
      <span className="common-sub-title inline-flex items-center gap-2 capitalize font-inter font-normal text-champ-blue text-[14px] sm:text-base md:tracking-[-0.5px] bg-white border border-titan-white rounded-4xl py-2 px-5">
        {iconSrc && (
          <Image src={iconSrc} alt="icon" width={22} height={22} priority className="max-w-5.5 max-h-5.5" />
        )}
        {text}
      </span>
    </div>
  );
};

export default CommonSubTitle;
