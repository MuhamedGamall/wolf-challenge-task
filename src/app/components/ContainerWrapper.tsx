import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
className?: string
}

const ContainerWrapper: React.FC<ContainerProps> = ({ children ,className}) => {
  return (
    <div className={cn(" max-w-[2520px]  px-11",className)}>
      {children}
    </div>
  );
};

export default ContainerWrapper;
